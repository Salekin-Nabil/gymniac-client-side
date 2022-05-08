import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useProducts from '../../Hooks/useProducts';

const Manage = () => {
    const [products, setProducts] = useProducts("http://localhost:5000/products");
    
    const handleOnDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/products/${id}`;
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
        </div>
    );
};

export default Manage;