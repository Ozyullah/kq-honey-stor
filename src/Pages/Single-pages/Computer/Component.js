import React from 'react';
import mbo from "../../../assets/matherboard.jpeg"
import mbo1 from "../../../assets/asus mathe.jpeg"
import mbo2 from "../../../assets/asus mathe1.jpeg"
import mbo3 from "../../../assets/asus rog.jpeg"
import cpu from "../../../assets/cpu.jpeg"
import cpu1 from "../../../assets/cpu1.jpeg"
import cpu2 from "../../../assets/cpu2.png"



const Component = () => {
    return (
        <div className='lg:px-36 mb-5'>

            <h2 className='mb-5 mt-5 font-semibold text-2xl flex justify-start'>components</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={mbo} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <h3 className='flex justify-start text-sky-400'>৳10400</h3>
                    </div>
                </div>



                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={mbo3} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <h3 className='flex justify-start text-sky-400'>৳8400</h3>
                    </div>
                </div>



                <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={cpu} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <h3 className='flex justify-start text-sky-400'>৳5400</h3>
                    </div>
                </div>



                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={mbo2} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <h3 className='flex justify-start text-sky-400'>৳11400</h3>
                    </div>
                </div>


                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={cpu2} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <h3 className='flex justify-start text-sky-400'>৳20400</h3>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Component;