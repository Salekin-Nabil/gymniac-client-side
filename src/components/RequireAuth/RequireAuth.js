import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>;
    }

    if (!user) {
        return <Navigate to="/Login" state={{ from: location }} replace />;
    }

    // console.log(user);

    // if (!user.emailVerified) {
    //     return <div className='text-center mt-5'>
    //         <h3 className='text-orange-500 text-3xl my-5'>Your Email is not verified!!</h3>
    //         <h5 className='text-purple-500 text-3xl my-5'> Please Verify your email address</h5>
    //         <button
    //         className='bg-[#beafa7] my-5 rounded-lg py-3 px-7'
    //             onClick={async () => {
    //                 await sendEmailVerification();
    //                 toast('Sent email');
    //             }}
    //         >
    //             Send Verification Email Again
    //         </button>
    //         <ToastContainer></ToastContainer>
    //     </div>
    // }

    return children;
};

export default RequireAuth;