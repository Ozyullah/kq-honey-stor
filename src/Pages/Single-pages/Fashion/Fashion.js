import React, { useState } from 'react';
import t from "../../../assets/T-Shirt7.png"
import t2 from "../../../assets/t-shirt.jpg"
import t3 from "../../../assets/t-shirt.png"
import t4 from "../../../assets/t-shirt2.jpg"
import t5 from "../../../assets/t-shirt3.jpeg"
import t6 from "../../../assets/t-shirt4.jpg"
import BookNow from '../../Shared-pages/BokingSystem/BookNow';
import { useActionData } from 'react-router-dom';


const Fashion = () => {

    const [booking, setBooking]=useState();
    return (
        <div className='lg:px-36 mb-5'>

            <h2 className='mb-5 mt-5 font-semibold text-2xl flex justify-start'>Fashions</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>


                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={t} alt="Shoes" /></figure>
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


                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={t2} alt="Shoes" /></figure>
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


                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={t3} alt="Shoes" className=' h-72' /></figure>
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



                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={t4} alt="Shoes" className='h-72' /></figure>
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



                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={t5} alt="Shoes" /></figure>
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



                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={t6} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <h3 className='flex justify-start text-sky-400'>৳400</h3>
                        
                    </div>

                    <label htmlFor="booking-modal"
                            onClick={()=>setBooking("")}
                            className="btn btn-sm btn-outline text-sky-500">Book Now</label>
                </div>

            </div>

            
            <BookNow>
                setBooking={setBooking}
            </BookNow>
        </div>
    );
};

export default Fashion;