import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import MyProducts from '../MyProducts/MyProducts';
import Product from '../Product/Product';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect( () => {
        
        const getProducts = async() =>{
            const email = user.email;
            const url = `https://safe-falls-53497.herokuapp.com/myProducts?supplier=${email}`;
            try{
                const {data} = await axiosPrivate.get(url);
                setProducts(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getProducts();

    }, [user]);
    const handleOnDelete = id => {
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
            <title>Gymniac-My Items</title>
        </Helmet>
            <h1 className='text-white text-5xl mb-8 font-bold shadow-lg shadow-white hover:shadow-xl hover:shadow-white mx-[1vw] py-[1vw] rounded-lg'>My <span className='text-[#96be25]'>Items :</span> {products.length}</h1>
            <div className='md:grid md:grid-cols-3 md:gap-5'>
                {
                    products.map(product => <MyProducts key={product._id} product={product} handleOnDelete={handleOnDelete}></MyProducts>)
                }
            </div>
        </div>
    );
};

export default MyItems;