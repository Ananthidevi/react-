import React, { useEffect, useState } from 'react'

function Users() {
     const[users, setUsers] = useState([]);

     // api function
    useEffect(() => {
        fetch("https://fakestoreapi.com/users")
        .then(res => res.json())
        .then(data => setUsers(data));
    }, []);   //unmount

      const addtocart = (userTitle) => {
        alert(`${userTitle} Calling`);
    }

  return (
    <div className='p-4 md:p-8 bg-gray-100'>
        <h3 className='text-2xl md:text-3xl font-semibold text-center mb-6'>My contacts</h3>
 <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
  {
                users.map(data => (
                    <div key={data.id} className='bg-white shadow rounded-md p-4 flex flex-col items-center'>
                        <h5 className='text-red-600 font-semibold text-lg'>${data.id}</h5>
                       
                        <h4 className='text-md md:text-lg font-semibold mb-2 text-center'>{data.username}</h4>
                         <h4 className='text-md md:text-lg font-semibold mb-2 text-center'>{data.email}</h4>
                        <h5 className='text-red-600 font-semibold text-lg'>${data.phone}</h5>
                      
                        <button onClick={() => addtocart(data.phone)} className='bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700'>Call</button>
                    </div>
         
          )) 

            }
        </div>
        </div>
    
 )
}


export default Users