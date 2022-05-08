import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Address = () => {
    return (
        <div className='my-36'>
            <h2 className='text-white text-5xl mb-8 font-bold shadow-lg shadow-white hover:shadow-xl hover:shadow-white mx-[1vw] py-[1vw] rounded-lg'>Our <span className='text-[#96be25]'>Location</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='border-2 bg-indigo-50 hover:bg-[#96be25] rounded-lg md:mx-2 shadow-lg shadow-white hover:shadow-xl hover:shadow-white'>
                    <h3 className='text-3xl text-black mb-10 font-semibold'>Main Brunch</h3>
                    <div className='md:flex justify-center items-center'>
                        <MapContainer className='rounded-lg border-black h-[200px] md:w-1/2 w-7/8 md:mx-10 mx-2 shadow-lg shadow-white hover:shadow-xl hover:shadow-white mb-4' center={[23.7616, 90.3544]} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </MapContainer>
                        <h4 className='text-black md:w-1/4'>#175, Road-4, Mohammadia Housing Ltd. Mohammadpur, Dhaka</h4>
                    </div>
                </div>
                <div className='border-2 bg-indigo-50 hover:bg-[#96be25] rounded-lg md:mx-2 shadow-lg shadow-white hover:shadow-xl hover:shadow-white'>
                    <h3 className='text-3xl text-black mb-10 font-semibold'>City Brunch</h3>
                    <div className='md:flex justify-center items-center'>
                        <MapContainer className='rounded-lg h-[200px] md:w-1/2 w-7/8 md:mx-10 mx-2 shadow-lg shadow-white hover:shadow-xl hover:shadow-white mb-4' center={[23.7535, 90.3792]} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </MapContainer>
                        <h4 className='text-black md:w-1/4'>#75/1, Shukrabad, Dhanmondi-32, Dhaka</h4>
                    </div>
                </div>
                <div className='border-2 bg-indigo-50 hover:bg-[#96be25] rounded-lg md:mx-2 shadow-lg shadow-white hover:shadow-xl hover:shadow-white'>
                    <h3 className='text-3xl text-black mb-10 font-semibold'>Showroom</h3>
                    <div className='md:flex justify-center items-center'>
                        <MapContainer className='rounded-lg h-[200px] md:w-1/2 w-7/8 md:mx-10 mx-2 shadow-lg shadow-white hover:shadow-xl hover:shadow-white mb-4' center={[23.7507, 90.3906]} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </MapContainer>
                        <h4 className='text-black md:w-1/4'>L-5B-27, Bashundhara City Shopping Complex, Kawran Bazar, Dhaka</h4>
                    </div>
                </div>
                <div className='border-2 bg-indigo-50 hover:bg-[#96be25] rounded-lg md:mx-2 shadow-lg shadow-white hover:shadow-xl hover:shadow-white'>
                    <h3 className='text-3xl text-black mb-10 font-semibold'>Warehouse</h3>
                    <div className='md:flex justify-center items-center'>
                        <MapContainer className='rounded-lg h-[200px] md:w-1/2 w-7/8 md:mx-10 mx-2 shadow-lg shadow-white hover:shadow-xl hover:shadow-white mb-4' center={[23.7286, 90.3854]} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </MapContainer>
                        <h4 className='text-black md:w-1/4'>#24/3, Pilkhana, Azimpur, Dhaka</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;