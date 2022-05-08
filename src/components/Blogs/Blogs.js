import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='my-[5vw]'>
            <h1 className='text-white text-5xl mb-8 font-bold shadow-lg shadow-white hover:shadow-xl hover:shadow-white mx-[1vw] py-[1vw] rounded-lg'>Blog <span className='text-[#96be25]'>Articles</span></h1>
            <div className='md:flex md:justify-around'>
                <div className="flex justify-center my-[5vw]">
                    <div className="bg-indigo-50 max-w-sm p-5 rounded-3xl shadow-2xl shadow-white h-[500px] w-[350px] hover:bg-[#96be25] mx-2">
                        <h6 className='text-[20px] font-bold mt-[20px]'>Difference between javascript and nodejs</h6>
                        <p className='text-[14px] mt-[40px] font-medium'>JavaScript is a simple programming language that runs in any browser JavaScript Engine.</p>
                        <br/>
                        <p className='text-[14px] mt-[40px] font-medium'>Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>
                    </div>
                </div>
                <div className="flex justify-center my-[5vw]">
                    <div className="rounded-3xl shadow-2xl shadow-white bg-indigo-50 max-w-sm p-5 h-[500px] w-[350px] hover:bg-[#96be25] mx-2">
                        <h6 className='text-[20px] font-bold mt-[20px]'>When should you use nodejs and when should you use mongodb</h6>
                        <p className='text-[14px] mt-[40px] font-medium'>Nodejs is a Javascript engine that can be written on any application with (by programming in the Javascript language). It runs Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.</p>
                        <br/>
                        <p className='text-[14px] mt-[40px] font-medium'>MongoDB is a nosql database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</p>
                    </div>
                </div>
                <div className="flex justify-center my-[5vw]">
                    <div className="rounded-3xl shadow-2xl shadow-white bg-indigo-50 max-w-sm p-5 h-[500px] w-[350px] hover:bg-[#96be25] mx-2">
                        <h6 className='text-[20px] font-bold mt-[20px]'>Differences between sql and nosql databases</h6>
                        <p className='text-[14px] mt-[40px] font-medium'>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                        <br/>
                        <p className='text-[14px] mt-[40px] font-medium'>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                    </div>
                </div>
                <div className="flex justify-center my-[5vw]">
                    <div className="rounded-3xl shadow-2xl shadow-white bg-indigo-50 max-w-sm p-5 h-[500px] w-[350px] hover:bg-[#96be25] mx-2">
                        <h6 className='text-[20px] font-bold mt-[20px]'>What is the purpose of jwt and how does it work</h6>
                        <p className='text-[14px] mt-[40px] font-medium'>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.</p>
                        <br/>
                        <p className='text-[14px] mt-[40px] font-medium'>Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;