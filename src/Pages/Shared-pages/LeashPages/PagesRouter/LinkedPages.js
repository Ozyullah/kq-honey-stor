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
                path:"/contact",
                element:<Contact></Contact>
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
    }
])