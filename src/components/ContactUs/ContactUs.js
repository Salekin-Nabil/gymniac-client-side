import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ContactUs = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = () => toast('Thanks for contacting with us.');
    return (
            <div className='mb-10'>
                <h2 className='text-white text-5xl mb-8 font-bold shadow-lg shadow-white hover:shadow-xl hover:shadow-white mx-[1vw] py-[1vw] rounded-lg'>Query / Support</h2>
                <div className='flex justify-center'>
                    <div className="block p-6 rounded-xl shadow-lg shadow-white hover:shadow-xl hover:shadow-white bg-white w-full mx-4 md:mx-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p className='text-2xl font-semibold mb-4 text-black'>Contact Us</p>
                            <div className='flex justify-center'>
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
                                        focus:text-gray-700 focus:bg-white focus:border-[#96be25] focus:outline-none"
                                        placeholder="Name" required/>
                                    </div>
                                    <div className="form-group mb-6 w-full">
                                    <input type="email" className="form-control block
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
                                        focus:text-gray-700 focus:bg-white focus:border-[#96be25] focus:outline-none"
                                        placeholder="Email address" required/>
                                    </div>
                                </div>
                                <div className="form-group mb-6 w-full">
                                    <input type="date" className="form-control block
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
                                        focus:text-gray-700 focus:bg-white focus:border-[#96be25] focus:outline-none"
                                        placeholder="Date" required/>
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
                                rows="3"
                                placeholder="Write Message"
                                required
                                ></textarea>
                                </div>
                                <div className="form-group form-check text-center mb-6">
                                <input type="checkbox"
                                    className="form-check-input appearance-none h-4 w-4 border border-black rounded-sm bg-white checked:bg-[#96be25] checked:border-[#96be25] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                />
                                <label className="form-check-label inline-block text-black" for="exampleCheck87">Send me a copy of this message</label>
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
                                focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg
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

export default ContactUs;