import React from 'react'
import DataTable from 'react-data-table-component'
import { useState, useEffect } from 'react'
import axios from 'axios'
const CountriesTable = () => {
    
    const [search, setSearch ] = useState("")
  const [countries, setCountries ] = useState([])
  const [filteredCountries, setFilteredCountries ] = useState([])

  const getCountries = async()=>{
    try {
      const response = await axios.get('https://restcountries.com/v2/all')
      setCountries(response.data)
      setFilteredCountries(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const columns = [
    {
      name:"Country Name",
      selector:row=>row.name,
      sortable:true,
    },
    {
      name:"Country Native Name",
      selector:(row)=>row.nativeName,
    },
    {
      name:"Country Capital",
      selector:(row)=>row.capital,
    },
    {
      name:"Country Flag",
      selector:(row)=> <img width={50} height={50} src={row.flag} />
    },
    {
      name:"Contient",
      selector:(row)=> row.region
    },
   
  ]

  useEffect(()=>{
    getCountries()
  },[])

  useEffect(()=>{

    const result = countries.filter((country)=>{
        return country.name.toLowerCase().match(search.toLowerCase())
    })

    setFilteredCountries(result)

  }, [search])
  return (
    <div>
      <DataTable
       title="Country List" 
       columns={columns}
        data={filteredCountries}
         pagination fixedHeader
          fixedHeaderScrollHeight='450px' 
          selectableRows
          selectableRowsHighlight
          highlightOnHover
          subHeader
          subHeaderComponent={<input type='text' placeholder='Search here' value={search} onChange={(e)=>setSearch(e.target.value)}/>}/>
    </div>
  )
}

export default CountriesTable
