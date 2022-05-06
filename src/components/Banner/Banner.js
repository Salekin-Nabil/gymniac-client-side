import React from 'react';
import banner from '../../images/banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='mb-[3vw]'>
            <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full">
                    <img
                        src={banner}
                        className="block w-full md:h-[650px]"
                        alt="..."
                    />
                    <div className="carousel-caption md:block absolute text-center">
                        <h5 className="text-xl">Welcome to Gymniac</h5>
                        <p>The most complete gym store.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;