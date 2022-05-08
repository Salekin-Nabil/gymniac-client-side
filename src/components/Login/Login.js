import React, { useRef } from 'react';
import './Login.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [token, setToken] = useToken(user);

    if (loading) {
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-white bg-red-700 my-4 text-lg'>Error: {error?.message}</p>
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);

        await signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate("/register");
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }

    return (
        <div className='container w-50 mx-auto mt-[4vw] mb-[300px]  md:mb-0'>
        <Helmet>
            <title>Gymniac-Login</title>
        </Helmet>
            <h1 className='md:text-[4vw] text-3xl md:py-6 text-white font-bold shadow-2xl shadow-white mx-16'>Login <span className='text-[#96be25]'>Form</span></h1>
            <section className="h-screen mb-32">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="w-full"
                        alt="Phone"
                        />
                    </div>
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border-4 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#96be25] focus:outline-none shadow-lg shadow-white hover:shadow-xl hover:shadow-white"
                            name="email"
                            placeholder="Email address"
                            ref={emailRef}
                            required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                            type="password"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border-4 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#96be25] focus:outline-none shadow-lg shadow-white hover:shadow-xl hover:shadow-white"
                            name="password"
                            placeholder="Password"
                            ref={passwordRef}
                            required
                            />
                        </div>

                        <div className="flex justify-between items-center mb-6">
                            <div className="form-group form-check">
                            <input
                                type="checkbox"
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#96be25] checked:border-[#96be25] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                id="exampleCheck3"
                            />
                            <label className="form-check-label inline-block text-white" for="exampleCheck2">Remember me</label>
                            </div>
                            <p
                            onClick={resetPassword}
                            className="text-[#96be25] hover:text-yellow-400 focus:text-yellow-500 active:text-[#96be25] duration-200 transition ease-in-out cursor-pointer"
                            >Forgot password?</p
                            >
                        </div>
                        <button
                            type="submit"
                            className="inline-block px-7 py-3 bg-[#96be25] text-white font-medium text-sm leading-snug uppercase rounded shadow-lg hover:bg-yellow-700 hover:shadow-xl hover:shadow-white focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-2xl active:shadow-white transition duration-150 ease-in-out w-full shadow-white"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            Sign in
                        </button>

                        {errorElement}

                        <div
                            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                            <p className="text-center font-semibold mx-4 mb-0 text-white">OR</p>
                        </div>
                        <SocialLogin></SocialLogin>
                        <div className='flex items-center mt-6'>
                            <p className='text-white text-left'> Don't have an account?</p>
                            <Link to="/Register" onClick={navigateRegister} className="text-[#96be25] ml-2 hover:text-yellow-400 focus:text-yellow-500 active:text-[#96be25] duration-200 transition ease-in-out">Register</Link>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
                </section>
            <ToastContainer />
        </div>
    );
};

export default Login;