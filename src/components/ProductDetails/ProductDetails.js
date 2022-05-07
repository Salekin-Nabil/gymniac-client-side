import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProducts from '../../Hooks/useProducts';

const ProductDetails = () => {
    let params = useParams();
    const navigate = useNavigate();
    const restockedRef = useRef('');
    const [products, setProducts] = useProducts(`http://localhost:5000/products/${params.productId}`);
    let {_id, name, price, image, quantity, supplier, description} = products;
    let sold = "";
    if(quantity == 0){
        sold = "Sold Out";
    }
    else{
        sold = "Available in Stock";
    }

    const handleOnDelivery = event => {
        // const name = event.target.name.value;
        // const email = event.target.email.value;

        const number = parseInt(quantity);
        quantity = number-1;

        const updatedProduct = {quantity};

        // send data to the server
        const url = `http://localhost:5000/products/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            toast('The product has been delivered successfully!!!');
        })
    }
    const handleOnRestock = event => {
        const restocked = restockedRef.current.value;
        const restock = parseInt(restocked);
        const number = parseInt(quantity);
        quantity = number+restock;

        const updatedProduct = {quantity};

        // send data to the server
        const url = `http://localhost:5000/products/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            toast('The product has been restocked successfully!!!');
        });
    }

    return (
        <div className='mb-20'>
            <h1 className='text-white text-5xl mb-8 font-bold shadow-lg shadow-white hover:shadow-xl hover:shadow-white mx-[1vw] py-[1vw] rounded-lg my-6'>Product Details</h1>
            <div className="flex justify-center mt-20 mx-2">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-indigo-50 shadow-lg">
                    <img className=" w-full h-96 md:h-auto object-cover md:w-64 rounded-t-lg md:rounded-none md:rounded-l-lg" src={image} alt="" />
                    <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-3xl font-medium mb-4">{name}</h5>
                    <div className='md:flex justify-evenly'>
                        <h5 className="text-gray-900 text-xl font-bold mb-4">Price: ${price}.00</h5>
                        <h5 className="text-gray-900 text-xl font-bold mb-4">Stocked: {quantity}</h5>
                    </div>
                    <h5 className="text-gray-900 text-xl font-medium mb-4">Supplier: {supplier}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        {description}
                    </p>
                    <h5 className="text-yellow-600 text-xl font-medium mb-4">{sold}</h5>
                    <p className="text-gray-600 text-xs">Product ID: {_id}</p>
                    <button onClick={handleOnDelivery} className='text-white bg-red-700 hover:bg-red-500 rounded-3xl my-8 px-10 py-1 text-xl'>Delivery</button>
                    <input name='restocked' ref={restockedRef} className='border-2 border-[#96be25] focus:border-[goldenrod] rounded-lg' type="number"></input>
                    <button onClick={handleOnRestock} className='text-white bg-[#486106] hover:bg-[#96be25] active:bg-[#698c0a] rounded-3xl my-8 px-10 py-1 text-xl'>Restock</button>
                    </div>
                </div>
            </div>
            <button onClick={()=>navigate('/Manage')} className='rounded-3xl text-white text-2xl font-semibold bg-[#607c14] active:bg-[#506a09] focus:bg-[#4a6402] hover:bg-[#344506] shadow-lg shadow-white hover:shadow-xl hover:shadow-white mt-10 py-2 px-20 md:px-60'>Manage Inventories</button>
        </div>
    );
};

export default ProductDetails;