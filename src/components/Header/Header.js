import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
// import { signOut } from 'firebase/auth';
// import auth from '../../firebase.init';
// import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
    const [open, setOpen] = useState(false);

    // const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        // signOut(auth);
    }
    const user = true;

    return (
        <nav className='bg-black py-4  shadow-2xl shadow-white sticky-top '>
            <div className='flex items-center'>
                <div onClick={()=>setOpen(!open)} className='w-8 h-8 md:hidden mr-16 ml-4'>
                    {open ? <XIcon className='text-white'></XIcon> : <MenuIcon className='text-white'></MenuIcon>}
                </div>
                <div className='flex items-center md:justify-start justify-center md:pl-8'>
                    <h4 className='text-[26px] font-semibold text-white'><span className='bg-[#96be25] px-1 rounded'>GYM</span>NIAC</h4>
                    <FontAwesomeIcon className='text-[#96be25] text-[26px] ml-[10px]' icon={faDumbbell}></FontAwesomeIcon>
                </div>
                <div className={`md:flex bg-black md:ml-52 justify-center md:static w-full absolute duration-500 ease-in ${open ? 'top-16' : 'top-[-220px]'}`}>
                    <CustomLink className='mr-[2vw] md:py-[5px] px-[20px] text-white hover:text-black md:font-bold border-b-2 border-white hover:shadow-xl hover:shadow-white' to="/">HOME</CustomLink>
                    {/* <CustomLink className='mr-[2vw] md:py-[5px] px-[20px] text-white hover:text-black md:font-bold' to="Home#services">SERVICES</CustomLink> */}
                    
                    {
                        user ?
                            <div className='md:flex justify-center'>
                                <CustomLink className='mr-[2vw] md:py-[5px] px-[20px] text-white hover:text-black md:font-bold border-b-2 border-white hover:shadow-xl hover:shadow-white' to="/Manage">MANAGE_ITEMS</CustomLink>
                                <CustomLink className='mr-[2vw] md:py-[5px] px-[20px] text-white hover:text-black md:font-bold border-b-2 border-white hover:shadow-xl hover:shadow-white' to="/Add">ADD_ITEMS</CustomLink>
                                <CustomLink className='mr-[2vw] md:py-[5px] px-[20px] text-white hover:text-black md:font-bold border-b-2 border-white hover:shadow-xl hover:shadow-white' to="/MyItems">MY_ITEMS</CustomLink>
                                <CustomLink className='mr-[2vw] md:py-[5px] px-[20px] text-white hover:text-black md:font-bold border-b-2 border-white hover:shadow-xl hover:shadow-white' to="/Blogs">BLOGS</CustomLink>
                                <CustomLink className='mr-[2vw] md:py-[5px] px-[20px] text-white hover:text-black md:font-bold border-b-2 border-white hover:shadow-xl hover:shadow-white' to="/About">ABOUT</CustomLink>
                                <CustomLink onClick={handleSignOut} className='mr-[6vw] md:mr-0 md:py-[5px] px-[20px] text-white hover:text-black md:font-bold border-b-2 border-white hover:shadow-xl hover:shadow-white' to='/Login'>LOG OUT</CustomLink>
                            </div>
                        :
                        <div className='md:flex justify-center'>
                            <CustomLink className='mr-[2vw] md:py-[5px] px-[20px] text-white hover:text-black md:font-bold border-b-2 border-white hover:shadow-xl hover:shadow-white' to="/Blogs">BLOGS</CustomLink>
                            <CustomLink className='mr-[2vw] md:py-[5px] px-[20px] text-white hover:text-black md:font-bold border-b-2 border-white hover:shadow-xl hover:shadow-white' to="/About">ABOUT</CustomLink>
                            <CustomLink className='mr-[2vw] md:py-[5px] px-[20px] text-white hover:text-black md:font-bold border-b-2 border-white hover:shadow-xl hover:shadow-white' to="/Login">LOG IN</CustomLink>
                            <CustomLink className='mr-[2vw] md:mr-0 md:py-[5px] px-[20px] text-white hover:text-black md:font-bold border-b-2 border-white hover:shadow-xl hover:shadow-white' to="/Register">REGISTER</CustomLink> 
                        </div>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;