import React, { useEffect, useState } from 'react'

   // https://jsonplaceholder.typicode.com/users
function App() {
  //state intilization for storing api data
  const[users,setUsers] = useState([]);

  //using useEffect hook to make my api all,and store the data into the state
 useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json()) //using then method to convert my api datas into a json format  res-parameter
  .then(data => setUsers(data))//second then method used to store api dataas into my state
  .catch(err=>console.error(err)) //global catch block to catch any errors while making api request   global for two then
 },[]) //[]to stop unwanted api calls unmount
  return ( //
    <div>
      {
        users.map(data => (//take individual obj and give particualr key
          <div key={data.id}>
          <h1>{data.username} - {data.email}</h1>
          <h3>{data.address.city}</h3>
          <h4>{data.phone}</h4>
          </div>
         
        ))

    }
      </div>
  )
}

export default App