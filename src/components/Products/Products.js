import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useProducts("http://localhost:5000/products_6");
    const navigate = useNavigate();
    
    return (
        <div id='products'>
            <h1 className='text-white text-5xl mb-8 font-bold shadow-lg shadow-white hover:shadow-xl hover:shadow-white mx-[1vw] py-[1vw] rounded-lg'>Trending <span className='text-[#96be25]'>Products</span> Inventory</h1>
            <div className='md:grid md:grid-cols-3 md:gap-5'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <button onClick={()=>navigate('/Manage')} className='rounded-3xl text-white text-2xl font-semibold bg-[#607c14] active:bg-[#506a09] focus:bg-[#4a6402] hover:bg-[#344506] shadow-lg shadow-white hover:shadow-xl hover:shadow-white mt-10 py-2 px-20 md:px-60'>Manage Inventories</button>
        </div>
    );
};

export default Products;