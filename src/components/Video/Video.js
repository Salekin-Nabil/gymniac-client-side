import React from 'react';

const Video = () => {
    return (
    <div>
        <h2 className='text-white text-5xl mb-8 font-bold shadow-lg shadow-white hover:shadow-xl hover:shadow-white mx-[1vw] py-[1vw] rounded-lg'>Gymniac <span className='text-[#96be25]'>Promo</span></h2>
        <div className='flex justify-center mx-8 md:mx-10'>
            <iframe className='w-full md:h-[550px] h-[300px] rounded-lg' src="https://www.youtube.com/embed/wkTFd3QZSP0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    </div>
    );
};

export default Video;