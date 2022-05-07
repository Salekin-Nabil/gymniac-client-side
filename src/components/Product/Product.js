import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {_id, name, price, image, quantity, supplier, description} = product;

    const navigate = useNavigate();
    return (
        <div className=''>
            <div className="flex justify-center my-[5vw] relative ">
                <div className="rounded-3xl shadow-2xl shadow-white hover:bg-[#96be25] max-w-sm p-5 h-[680px] bg-indigo-50 mx-2">
                    <a className='flex justify-center' href="#!">
                    <img className="rounded-3xl border-[10px] border-white" src={image} alt=""/>
                    </a>
                    <h4 className='text-[20px] font-bold mt-[20px]'>{name}</h4>
                    <p className='text-[16px] mt-[20px] font-medium'>{description}</p>
                    <h3 className='text-[24px] font-bold mt-[20px]'>Price: ${price}.00</h3>
                    <h4 className='text-[18px] font-bold mt-[10px]'>Available Stock: {quantity}</h4>
                    <h4 className='text-[20px] font-bold mt-[10px]'>Supplier: {supplier}</h4>
                    
                    <div className="flex justify-center absolute w-full bottom-4 ml-[-28px] md:ml-[-70px]">
                        <button onClick={()=>navigate(`/Inventory/${_id}`)} type="button" className="block px-6 py-2.5 w-80 md:w-80 bg-[#4d6805] text-white font-medium text-lg leading-tight uppercase rounded-3xl shadow-md hover:bg-[#769818] hover:shadow-lg focus:bg-[#3b5002] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#364804] active:shadow-lg transition duration-150 ease-in-out">Stock Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;