import React , {useEffect,useState} from 'react'

function Product() {
    const[Products, setProducts] = useState([]);

    //api functtion
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    
  return (
    <div className='p-4 md:p-8 bg-gray-100'>
        <h3 className='text-3xl md:text-3xl font-semibold text-center mb-6'>Our products</h3>
    <div className='grid grid'>
        {
            Products.map(data => (
                <div>
                    <img className='h-40 w-auto mb-4 object-contain' src = {data.image} alt =""/>
                    <h4>${data.price}</h4>
                    </div>
            ))
        }
       
    </div>
    </div>
  )
}

export default Product