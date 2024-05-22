import { createBrowserRouter } from "react-router-dom";
import Home from "../../../Single-pages/Home/Home";
import Main from "../../../../LayOut/Main";
import Component from "../../../Single-pages/Computer/Component";
import WebSite from "../../../Single-pages/Web/WebSite";
import Electronics from "../../../Single-pages/Electronics/Electronics";
import Fashion from "../../../Single-pages/Fashion/Fashion";
import Contact from "../../../Single-pages/Contact/Contact";
import Login from "../../../Single-pages/WebSecurity/LoginPage/Login";
import Honey from "../../../Single-pages/HoneyItems/Honey";
import Category from "../../Category/Category";
import Shops from "../../../Single-pages/OnlineShops/Shops/Shops";
import SignUp from "../../../Single-pages/WebSecurity/CreateAC/SignUp";
import Dashboard from "../../../Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../../../Single-pages/WebSecurity/PrivateRoute/PrivateRoute";
import LayOutDashBoard from "../../../Dashboard/DashboardLayout/LayOutDashBoard";
import AddProducts from "../../../Dashboard/AddProductsPages/AddProducts";
import AllUsers from "../../../Dashboard/AllUsers/AllUsers";





export const router =createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:([
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/category",
                element:<Category></Category>
            },
            {
                path:"/component",
                element:<Component></Component>
            },
            {
                path:"/website",
                element:<WebSite></WebSite>
            },
            {
                path:"/electronics",
                element:<Electronics></Electronics>
            },
            {
                path:"/fashion",
                element:<Fashion></Fashion>
            },
            {
                path:"/contact/:id",
                element:<Contact></Contact>,
                loader:({params})=>fetch(`https://used-products-server-gold.vercel.app/catagory/${params.id}`)
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/honey",
                element:<Honey></Honey>
            },
            {
                path:"/shops",
                element:<Shops></Shops>
            },
            {
                path:"/signUp",
                element:<SignUp></SignUp>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ])

        
    },
    {
        path:"/dashboard",
        element:<PrivateRoute><LayOutDashBoard></LayOutDashBoard></PrivateRoute>,
        children:([
            {
                path:"/dashboard/addproduct",
                element:<AddProducts></AddProducts>
            },
            {
                path:"/dashboard/alluser",
                element:<AllUsers></AllUsers>
            }
        ])
    }
])