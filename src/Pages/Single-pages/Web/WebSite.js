import React, { useState } from 'react';
import i1 from '../../../assets/Blog-scaled.jpg';
import i2 from '../../../assets/ecommart.jpg';
import i3 from '../../../assets/educational.jpg';
import i4 from '../../../assets/resturent.png';
import i5 from '../../../assets/parttimejob.png';
import i6 from '../../../assets/marketing.jpg';
import BookNow from '../../Shared-pages/BokingSystem/BookNow';

const WebSite = () => {
const [booking, setBooking]=useState('')

    return (
        <div className='lg:px-36 mb-5'>

            <h2 className='mb-5 mt-5 font-semibold text-2xl flex justify-start'>Web Sites</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>


                <div className="card card-compact bg-base-100  h-72 shadow-xl">
                    <figure><img src={i1} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>


                        <div className='flex justify-between'>
                            <h3 className='flex justify-start text-sky-400'>৳400</h3>
                            <button className='btn btn-link text-sky-400'>Show more</button>
                        </div>

                        <label htmlFor="booking-modal"
                            onClick={()=>setBooking("")}
                            className="btn btn-sm btn-outline text-sky-500">Book Now</label>
                    </div>
                </div>


                <div className="card card-compact bg-base-100 h-72 shadow-xl">
                    <figure><img  src={i2} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>


                        
                        <div className='flex justify-between'>
                            <h3 className='flex justify-start text-sky-400'>৳400</h3>
                            <button className='btn btn-link text-sky-400'>Show more</button>
                        </div>
                        <label htmlFor="booking-modal"
                            onClick={()=>setBooking("")}
                            className="btn btn-sm btn-outline text-sky-500">Book Now</label>
                    </div>
                    
                </div>


                <div className="card card-compact bg-base-100  h-72 shadow-xl">
                    <figure><img src={i3} alt="Shoes" className=' h-72' /></figure>
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        

                        <div className='flex justify-between'>
                            <h3 className='flex justify-start text-sky-400'>৳700</h3>
                            <button className='btn btn-link text-sky-400'>Show more</button>
                        </div>

                        <label htmlFor="booking-modal"
                            onClick={()=>setBooking("")}
                            className="btn btn-sm btn-outline text-sky-500">Book Now</label>
                    </div>
                </div>



                <div className="card card-compact bg-base-100  h-72 shadow-xl">
                    <figure><img src={i4} alt="Shoes" className='h-72' /></figure>
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        

                        
                        <div className='flex justify-between'>
                            <h3 className='flex justify-start text-sky-400'>৳500</h3>
                            <button className='btn btn-link text-sky-400'>Show more</button>
                        </div>

                        <label htmlFor="booking-modal"
                            onClick={()=>setBooking("")}
                            className="btn btn-sm btn-outline text-sky-500">Book Now</label>
                    </div>
                </div>



                <div className="card card-compact bg-base-100  h-72 shadow-xl">
                    <figure><img src={i5} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        

                        
                        <div className='flex justify-between'>
                            <h3 className='flex justify-start text-sky-400'>৳800</h3>
                            <button className='btn btn-link text-sky-400'>Show more</button>
                        </div>

                        <label htmlFor="booking-modal"
                            onClick={()=>setBooking("")}
                            className="btn btn-sm btn-outline text-sky-500">Book Now</label>
                    </div>
                </div>



                <div className="card card-compact bg-base-100 h-72 shadow-xl">
                    <figure><img src={i6} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <h3 className='flex justify-start text-sky-400'>৳400</h3>
                    </div>
                </div>

            </div>


            <BookNow>
                setBooking={setBooking}
            </BookNow>
        </div>
    );
};

export default WebSite;