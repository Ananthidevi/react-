import React from 'react'

function App() {

 let products = [
  {id: 1, title: "watch", price:5000},
   {id: 2, title: "Laptop", price:15000},
    {id: 3, title: "Monitor", price:25000},
 ]

 //basic fun
 const payment = () => {
  alert("payment succecss");
 }

 const addtocart = (productTitle) => {
  alert(`${productTitle} added to cart`);
 }
 return (
  
  <div>

    <h1>Products page</h1>

    {
      //list obj spilited using map function and h1 h2 tag
      products.map(data => (
        <div key = {data.id}>
          {/* key-it is the html attribute  */}
          <h1>{data.title}</h1>
          <h2>{data.price}</h2>
          <button onClick={() => addtocart(data.title)}>Add to cart</button>
   {/* ()for helping the callback function  */}
   </div>

    ))
    }
    <button onClick={payment}>Pay</button>
  </div>
 )
}

export default App