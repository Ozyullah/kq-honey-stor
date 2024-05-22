import React, { useState } from 'react';
// import ReactCardFlip from 'react-card-flip';
import wa1 from "../../../assets/watch3.jpeg";
import fa1 from "../../../assets/fan5.jpg";
import ts from "../../../assets/t-shirt8.png";
// import bord from "../../../assets/asus mathe.jpeg";
import ts2 from "../../../assets/t-shirt3.jpeg"
import ReactImageMagnify from 'react-image-magnify';



const ForYou = () => {
    // const [isFlipped, setIsFlipped] = useState(false);

    // const handleMouseEnter = () => {
    //     setIsFlipped(true);
    // };

    // const handleMouseLeave = () => {
    //     setIsFlipped(false);
    // };



    return (
        <div className='lg:px-36 mb-5'>
            <h2 className='mb-5 mt-5 font-semibold text-2xl flex justify-start'>For You</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>

                <div className="card card-compact bg-base-100 shadow-xl">
                    {/* <figure><img src={wa1} alt="Shoes" className='h-72' /></figure> */}

                    <ReactImageMagnify {...{
                        smallImage: {
                            // alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: wa1
                        },
                        largeImage: {
                            src: wa1,
                            width: 300,
                            height: 700,
                            // zIndex: 50
                        },
                        enlargedImagePosition: "over"
                    }} />
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <h3 className='flex justify-start text-sky-400'>৳400</h3>
                    </div>
                </div>



                <div className="card card-compact bg-base-100 shadow-xl">
                    {/* <figure><img src={fa1} alt="Shoes" /></figure> */}

                    <ReactImageMagnify {...{
                        smallImage: {
                            // alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: fa1
                        },
                        largeImage: {
                            src: fa1,
                            width: 300,
                            height: 700,
                            zIndex: 50
                        },
                        enlargedImagePosition: "over"
                    }} />
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <h3 className='flex justify-start text-sky-400'>৳400</h3>
                    </div>
                </div>




                <div className="card card-compact bg-base-100 shadow-xl">
                    {/* <figure><img src={ts} alt="Shoes" /></figure> */}

                    <ReactImageMagnify {...{
                        smallImage: {
                            // alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: ts
                        },
                        largeImage: {
                            src: ts,
                            width: 300,
                            height: 700,
                            zIndex: 50
                        },
                        enlargedImagePosition: "over"
                    }} />
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <h3 className='flex justify-start text-sky-400'>৳400</h3>
                    </div>
                </div>


                <div className="card card-compact bg-base-100 shadow-xl">
                    {/* <figure><img src={ts2} alt="Shoes" /></figure> */}


                    <ReactImageMagnify {...{
                        smallImage: {
                            // alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: ts2
                        },
                        largeImage: {
                            src: ts2,
                            width: 300,
                            height: 700,
                            lensStyle: { zIndex: -50 }
                        },
                        isHintEnabled: true,
                        enlargedImagePosition:"over"

                    }} />
                    <div className="card-body">

                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <h3 className='flex justify-start text-sky-400'>৳400</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForYou;



{/* <div className="flip-card-container">
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                        <div
                            className="front"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    

                                    <div className=' flex justify-start'>
                                    <h2 className=' font-semibold text-sky-400'>4000</h2>
                                </div>
                                </div>

                                
                            </div>
                        </div>
                        <div
                            className="back"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <h1> This is the back card </h1>

                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    
                                </div>
                            </div>
                        </div>
                    </ReactCardFlip>
                </div> */}
