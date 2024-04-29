import { Carousel } from 'flowbite-react';
import React from 'react';
import img1 from '../../../assets/poster.jpg';
import img2 from '../../../Images/istockphoto-598241944-612x612.jpg'
import img3 from '../../../assets/poster2.jpg';
import img4 from '../../../assets/postr1.jpg';
import img5 from '../../../assets/postr.jpg';


const Banner = () => {
    return (
        <div>
            <div className="h-56 lg:px-36 mx-auto sm:h-64 xl:h-80 2xl:h-96">
                <Carousel slideInterval={4000} slide="loop">
                    
                    <img src={img1} alt="..." className=' h-full' />
                    
                    <img src={img2} alt="..." className=' h-full'/>
                    <img src={img3} alt="..." className=' h-full'/>
                    <img src={img5} alt="..." className=' h-full'/>
                    <img src={img4} alt="..." className=' h-full'/>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;