import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import {  } from '../../Context/AuthContext';
// import useAdmin from '../../hooks/adminHooks/useAdmin';
// import useSeller from '../../hooks/sellerHook/useSeller';
import { WebContext } from '../../../Context/AuthContext/AuthContext';

const DashHeader = () => {
    const { user } = useContext(WebContext);

    // const [isAdmin] = useAdmin(user?.email)

    // const [isSeller] = useSeller(user?.email)
    // console.log(isAdmin)
    return (
        <div className="navbar bg-blue-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {/* <li><Link to={'/dashboard/mywishlist'}>My WishList</Link></li> */}
                        <li><Link to={'/dashboard/myorders'}>My Orders</Link></li>
                        {
                            // isAdmin &&
                             <>
                                <li><Link to={'/dashboard/reportedItems'}>Reported items</Link></li>
                                <li>
                                    <Link to={'/dashboard/alluser'} className="justify-between">
                                        All Users
                                    </Link>

                                </li>
                                <li><Link to={'/dashboard/allsellers'}>All Sellers</Link></li>
                            </>
                        }
                        {
                            // isSeller && 
                            <>
                                <li><Link to={'/dashboard/addproduct'}>Add Product</Link></li>
                                <li><Link to={'/dashboard/myproducts'}>My Products</Link></li>
                                {/* <li><Link to={''}>My Buyers</Link></li> */}
                            </>
                        }
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Unity</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* <li><Link to={'/dashboard/mywishlist'}>My WishList</Link></li> */}
                    <li><Link to={'/dashboard/myorders'}>My Orders</Link></li>
                    {
                        // isAdmin &&
                         <>
                            <li><Link to={'/dashboard/reportedItems'}>Reported items</Link></li>
                            <li>
                                <Link to={'/dashboard/alluser'}>
                                    All Users
                                </Link>
                            </li>
                            <li><Link to={'/dashboard/alluser'}>All Sellers</Link></li>
                        </>
                    }
                    {
                        // isSeller && 
                        <>

                            <li><Link to={'/dashboard/addproduct'}>Add Product</Link></li>
                            <li><Link to={'/dashboard/myproducts'}>My Products</Link></li>
                            {/* <li><Link to={''}>My Buyers</Link></li> */}
                            </>
                    }
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Get started</a>
            </div> */}
        </div>
    );
};

export default DashHeader;