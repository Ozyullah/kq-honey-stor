import React from 'react';
import fan from "../../../assets/fan1.jpg"
import fan2 from "../../../assets/fan3.png"
import fan3 from "../../../assets/fan4.jpg"
import fan4 from "../../../assets/fan5.jpg"
import bulb from "../../../assets/bulb.png"
import bulb2 from "../../../assets/bulb1.jpeg"
import bulb3 from "../../../assets/bulb2.jpg"
import soc from "../../../assets/soket.png"
import soc1 from "../../../assets/soket3.png"
import soc2 from "../../../assets/soket2.jpeg"



const Electronics = () => {
    return (
        <div className='lg:px-36 mb-5'>


            <h2 className='mb-5 mt-5 font-semibold text-2xl flex justify-start'>Electronics</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>

                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={fan} alt="Shoes" className=' h-72' /></figure>
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <h3 className='flex justify-start text-sky-400'>৳3000</h3>
                    </div>
                </div>




                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={bulb} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <h3 className='flex justify-start text-sky-400'>৳60</h3>
                    </div>
                </div>



                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={soc} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <h3 className='flex justify-start text-sky-400'>৳300</h3>
                    </div>
                </div>



                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={soc1} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <h3 className='flex justify-start text-sky-400'>৳400</h3>
                    </div>
                </div>




                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={fan2} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <h3 className='flex justify-start text-sky-400'>৳4000</h3>
                    </div>
                </div>



                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={soc2} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <h3 className='flex justify-start text-sky-400'>৳400</h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Electronics;