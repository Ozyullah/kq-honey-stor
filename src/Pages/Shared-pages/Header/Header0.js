import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';



// secound Header

const Header0 = () => {
    return (
        <div className='lg:px-36 flex bg-sky-100'>
            <div className="lg:hidden dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost flex justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52">
                    <li><a>Category</a></li>
                    <li>
                        <a>Blog</a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><Link to={"/contact"}>Contact Us</Link></li>
                </ul>
            </div>

            {/* <div className="hidden lg:align-start lg:flex">
                <ul className="menu menu-horizontal">
                    <li><Link to={"/category"} className=''></Link></li>
                    <li>
                        <details>
                            <summary className=''>Blog</summary>
                            <ul className="p-2">
                                <li><a></a></li>
                                <li><a></a></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to={"/contact"} className=''></Link></li>
                </ul>
            </div> */}
            <div className="hidden lg:navbar lg:navbar-start lg:flex">
                <ul className="menu menu-horizontal">
                    <li><Link to={"/category"} className=''>Category</Link></li>
                    <li>
                        <details>
                            <summary className=''>Blog</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to={"/contact"} className=''>Contact us</Link></li>
                </ul>
            </div>

            <div className=' navbar navbar-end'>
                <div className=''><FaRegHeart /></div>
            </div>
        </div>
    );
};

export default Header0;