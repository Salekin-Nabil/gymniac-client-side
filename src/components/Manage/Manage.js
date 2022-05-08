import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';

const Manage = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const navigate = useNavigate();

    useEffect( () =>{
        fetch(`https://safe-falls-53497.herokuapp.com/product?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [page, size]);

    useEffect( () =>{
        fetch('https://safe-falls-53497.herokuapp.com/productCount')
        .then(res => res.json())
        .then(data =>{
            const count = data.count;
            const pages = Math.ceil(count/10);
            setPageCount(pages);
        })
    }, [page])

    const [products, setProducts] = useProducts("https://safe-falls-53497.herokuapp.com/products");

    
    const handleOnDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://safe-falls-53497.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })
        }
    };
    return (
        <div>
        <Helmet>
            <title>Gymniac-Manage Inventory</title>
        </Helmet>
            <h1 className='text-white text-5xl mb-8 font-bold shadow-lg shadow-white hover:shadow-xl hover:shadow-white mx-[1vw] py-[1vw] rounded-lg'>Manage <span className='text-[#96be25]'>Inventories</span></h1>
            <div class="flex flex-col mx-6 ">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
                    <div class="overflow-hidden rounded-lg shadow-lg shadow-white hover:shadow-xl hover:shadow-white">
                        <table class="min-w-full ">
                            <thead class="bg-white border-b">
                                <tr>
                                    <th scope="col" class="text-lg font-bold text-gray-900 px-6 py-4 ">
                                        Product Image
                                    </th>
                                    <th scope="col" class="text-lg font-bold text-gray-900 px-6 py-4 ">
                                        Product Name
                                    </th>
                                    <th scope="col" class="text-lg font-bold text-gray-900 px-6 py-4 ">
                                        Product Price
                                    </th>
                                    <th scope="col" class="text-lg font-bold text-gray-900 px-6 py-4 ">
                                        Product Stocked
                                    </th>
                                    <th scope="col" class="text-lg font-bold text-gray-900 px-6 py-4 ">
                                        Product Supplier
                                    </th>
                                    <th scope="col" class="text-lg font-bold text-gray-900 px-6 py-4 ">
                                        Product Deletion
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                products.map(product =>
                                
                                    <tr key={product._id} class="bg-[#13151a] border-b transition duration-300 ease-in-out hover:bg-gray-400">
                                        <td class="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap flex justify-center">
                                            <img className="rounded-lg border-[10px] border-white w-1/6" src={product.image} alt=""/>
                                        </td>
                                        <td class="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            {product.name}
                                        </td>
                                        <td class="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            ${product.price}.00
                                        </td>
                                        <td class="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            {product.quantity}
                                        </td>
                                        <td class="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            {product.supplier}
                                        </td>
                                        <td class="text-lg text-white font-semibold px-6 py-4 whitespace-nowrap">
                                            <button onClick={()=>handleOnDelete(product._id)} className='rounded-full bg-red-700 text-white py-3 px-4'><FontAwesomeIcon className='text-white' icon={faTrashCan}></FontAwesomeIcon></button>
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mt-20 '>
                    {
                        [...Array(pageCount).keys()]
                        .map(number => <button
                            className={page === number ? ' text-white bg-green-600 py-1 px-3 rounded-lg mr-4': 'text-black bg-white py-1 px-3 rounded-lg mr-4'}
                            onClick={() => setPage(number)}
                        >{number + 1}</button>)
                    }
                    
                    <select className='py-1 px-3 rounded-lg' onChange={e => setSize(e.target.value)}>
                        <option value="10" defaultValue={10}>10</option>
                        <option value="15">15</option>
                        <option value="20" >20</option>
                    </select>
                </div>
                <button onClick={()=>navigate('/Add')} className='rounded-3xl text-white text-2xl font-semibold bg-[#607c14] active:bg-[#506a09] focus:bg-[#4a6402] hover:bg-[#344506] shadow-lg shadow-white hover:shadow-xl hover:shadow-white mt-20 py-2 px-20 md:px-60'>Add New Item</button>
        </div>
    );
};

export default Manage;