import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItems = () => {
    const imageRef = useRef('');
    const nameRef = useRef('');
    const priceRef = useRef('');
    const quantityRef = useRef('');
    const descriptionRef = useRef('');

    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = () => {
        const data = {
            "image": imageRef.current.value,
            "name": nameRef.current.value,
            "price": priceRef.current.value,
            "quantity": quantityRef.current.value,
            "supplier": user.email,
            "description": descriptionRef.current.value
        };
        console.log(data);
        const url = `https://safe-falls-53497.herokuapp.com/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } );
        const url1 = `https://safe-falls-53497.herokuapp.com/stock`;
        fetch(url1, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } );
        toast('The new product is successfully added.');
    };
    return (
        <div className=''>
        <Helmet>
            <title>Gymniac-Add Item</title>
        </Helmet>
            <h1 className='text-white text-5xl mb-8 font-bold shadow-lg shadow-white hover:shadow-xl hover:shadow-white mx-[1vw] py-[1vw] rounded-lg my-6'>Product <span className='text-[#96be25]'>Insertion</span></h1>
            <div className='flex justify-center my-20'>
                <div className="block p-6 rounded-xl shadow-lg shadow-white hover:shadow-xl hover:shadow-white bg-white w-full mx-4 md:mx-20">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className='text-2xl font-semibold mb-4 text-[#96be25]'>Add New Item</p>
                        <div className='md:flex justify-center'>
                            <div className="form-group mb-6 w-full mr-2">
                                <input type="text" className="form-control block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border-4 border-solid border-[#96be25]
                                    shadow-lg shadow-white hover:shadow-xl hover:shadow-white
                                    rounded-xl
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-[#96be25] focus:outline-none" id="exampleInput7"
                                    placeholder="Product's Image URL" {...register("image")} ref={imageRef} required/>
                                </div>
                                <div className="form-group mb-6 w-full">
                                    <input type="text" className="form-control block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border-4 border-solid border-[#96be25]
                                        shadow-lg shadow-white hover:shadow-xl hover:shadow-white
                                        rounded-xl
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-[#96be25] focus:outline-none" id="exampleInput7"
                                        placeholder="Product's Name" {...register("name")} ref={nameRef} required/>
                                </div>
                            </div>
                            <div className='md:flex justify-center'>
                                <div className="form-group mb-6 w-full mr-2">
                                    <input type="number" className="form-control block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border-4 border-solid border-[#96be25]
                                        shadow-lg shadow-white hover:shadow-xl hover:shadow-white
                                        rounded-xl
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-[#96be25] focus:outline-none" id="exampleInput8"
                                        placeholder="Price per Unit" {...register("price")} ref={priceRef} required/>
                                </div>
                                <div className="form-group mb-6 w-full">
                                    <input type="number" className="form-control block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border-4 border-solid border-[#96be25]
                                        shadow-lg shadow-white hover:shadow-xl hover:shadow-white
                                        rounded-xl
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-[#96be25] focus:outline-none" id="exampleInput9"
                                        placeholder="Stocking Quantity" {...register("quantity")} ref={quantityRef} required/>
                                </div>
                            </div>
                            <label className='text-[#96be25] text-base font-semibold block mb-2'>Supplier_Email: </label>
                            <div className="form-group mb-6 w-full flex justify-center">
                                    <input type="text" className="form-control block
                                        md:w-1/2
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border-4 border-solid border-[#96be25]
                                        shadow-lg shadow-white hover:shadow-xl hover:shadow-white
                                        rounded-xl
                                        transition
                                        ease-in-out
                                        text-center
                                        text-semibold
                                        text-gray-500
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-[#96be25] focus:outline-none" id="exampleInput9"
                                        value={user.email}
                                        readOnly disabled
                                        placeholder="Product Supplier" {...register("supplier")} required/>
                            </div>
                            <div className="form-group mb-6">
                            <textarea
                            className="
                                form-control
                                block
                                w-full
                                h-[200px]
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border-4 border-solid border-[#96be25]
                                shadow-lg shadow-white hover:shadow-xl hover:shadow-white
                                rounded-xl
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-[#96be25] focus:outline-none
                            "
                            id="exampleFormControlTextarea13"
                            rows="3"
                            ref={descriptionRef}
                            placeholder="Product Description"
                            {...register("description")}
                            required
                            ></textarea>
                            </div>
                            <div className="form-group form-check text-center mb-6">
                            <input type="checkbox"
                                className="form-check-input appearance-none h-4 w-4 border border-black rounded-sm bg-white checked:bg-[#96be25] checked:border-[#96be25] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                id="exampleCheck87"/>
                            <label className="form-check-label inline-block text-[#96be25]" for="exampleCheck87">Send me a copy of this message</label>
                            </div>
                            <button type="submit" className="
                            w-full
                            px-6
                            py-2.5
                            bg-[#96be25]
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded-xl
                            hover:bg-[#607c10]
                            focus:bg-[#57720c] focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-[#354704] active:shadow-lg
                            shadow-lg shadow-white hover:shadow-xl hover:shadow-white
                            transition
                            duration-150
                            ease-in-out">Send</button>
                        </form>
                    </div>                
                </div>
            </div>
    );
};

export default AddItems;