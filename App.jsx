import axios from 'axios'
import React, { useEffect, useState } from 'react'

import CountriesTable from './components/CountriesTable'


const App = () => {
  //   const [dataTable, setDataTable] = useState([])
  //   console.log(dataTable)
  //  useEffect(()=>{
  //   axios('https://jsonplaceholder.typicode.com/users')
  //   .then((res)=>{
  //       setDataTable(res.data)

  //   })
  //   .catch(()=>{
  //       console.log("Error")
  //   })

  //  },[])

  //  const column = [
  //   {heading:'Full Name', value:'name'},
  //   {heading:'Email', value:'email'},
  //   {heading:'id', value:'id'},
  //  ]



  return (
    <div>
      {/* <h1>Hello world </h1>
      <Table data={dataTable} column={column}/> */}
      {/* ------------------------------------------------------------------------- */}


      <CountriesTable/>


    </div>
  )
}

export default App
