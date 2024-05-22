import React from 'react';
import { Link } from 'react-router-dom';

const Header1 = () => {
    return (
        <div className=' bg-sky-50 lg:px-36'>
            {/* <div className="">
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden flex justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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

                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className=' py-0'>Category</a></li>
                        <li>
                            <details>
                                <summary className='py-0'>Blog</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to={"/contact"} className='py-0'>Contact us</Link></li>
                    </ul>
                </div>
                <div className="navbar navbar-end"> */}
                    {/* <div>
                    <p>Customer Support</p>
                    <p>Call us  01609111813</p>
                   </div> */}
                {/* </div> */}
            {/* // </div> */}
        </div>
    );
};

export default Header1;