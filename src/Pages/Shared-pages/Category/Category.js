import React from 'react';
import img1 from '../../../Images/pc-computer-hardware-components.jpg';
import img2 from '../../../Images/Websites-Design.jpg';
import img3 from '../../../Images/electric.jpg';
import img4 from '../../../Images/fashion.png';
import img5 from '../../../assets/honey-.jpg';

import { Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className=' flex justify-between gap-5 lg:px-36 px-5 py-5'>


            <Link to={"/honey"} className=' focus:bg-sky-200 active:border active:rounded-2xl'>
                <img className=' rounded-[50%] w-24' src={img5}></img>
                <h3 className=' hover:text-sky-500'>Honey</h3>
            </Link>

            <Link to={"/component"}>
                <img className=' rounded-[50%] w-24' src={img1}></img>
                <h3 className=' hover:text-sky-500'>Component</h3>
            </Link>
            <Link to={"/website"}>
                <img className=' rounded-[50%] w-24' src={img2}></img>
                <h3 className=' hover:text-sky-500'>Web Site</h3>
            </Link>
            <Link to={"/electronics"} className='w-24'>
                <img className=' rounded-[50%]' src={img3}></img>
                <h3 className=' hover:text-sky-500'>Electronices</h3>
            </Link>
            <Link to={"/fashion"} className='w-24'>
                <img className=' rounded-[50%] ' src={img4}></img>
                <h3 className=' hover:text-sky-500'>Fashion</h3>
            </Link>

            <Link to={"/shops"}>
            <h3>Shops</h3>
            </Link>

        </div>
    );
};

export default Category;