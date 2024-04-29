import React, { useState } from 'react';
// import ReactCardFlip from 'react-card-flip';

import watch from"../../../../assets/watch.jpeg";
import wa1 from "../../../../assets/watch2.jpeg";
import wa2 from "../../../../assets/T-Shirt7.png"
import a2 from "../../../../assets/asus mathe.jpeg";
import bulb from "../../../../assets/bulb.png";
import './HotDeals.css';


const HotDeals = () => {

    // const [isFlipped, setIsFlipped] = useState(false);

    // const handleMouseEnter = () => {
    //     setIsFlipped(true);
    // };

    // const handleMouseLeave = () => {
    //     setIsFlipped(false);
    // };

    return (
        <div className='lg:px-36'>
            <h2 className='mb-5 font-semibold text-2xl flex justify-start'>HoT DeAls</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>

                <div className="card card-compact hover:shadow-xl">
                    <figure><img src={watch} alt="Shoes" className='h-72' /></figure>
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className='flex justify-between'>
                            <h3 className='flex justify-start text-sky-400'>৳500</h3>
                            <button className='btn btn-link text-sky-400'>Show more</button>
                        </div>
                    </div>
                </div>



                <div className="card card-compact hover:shadow-xl">
                    <figure><img src={wa2} alt="Shoes" className='carde-sty' /></figure>
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>

                        <div className='flex justify-between'>
                            <h3 className='flex justify-start text-sky-400'>৳300</h3>
                            <button className='btn btn-link text-sky-400'>Show more</button>
                        </div>
                    </div>
                </div>



                <div className="card card-compact hover:shadow-xl">
                    <figure><img src={a2} alt="Shoes" className=' h-72' /></figure>
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>

                        <div className='flex justify-between'>
                            <h3 className='flex justify-start text-sky-400'>৳500</h3>
                            <button className='btn btn-link text-sky-400'>Show more</button>
                        </div>
                    </div>
                </div>




                <div className="card card-compact hover:shadow-xl">
                    <figure><img src={bulb} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>

                        <div className='flex justify-between'>
                            <h3 className='flex justify-start text-sky-400'>৳200</h3>
                            <button className='btn btn-link text-sky-400'>Show more</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );


};

export default HotDeals;