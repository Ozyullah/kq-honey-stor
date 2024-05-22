import React, { useContext, useState } from 'react';
import { WebContext } from '../../../../Context/AuthContext/AuthContext';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const SignUp = () => {
    // const gitProvider = new GithubAuthProvider()

    const provider = new GoogleAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();

    const { user, createUser, addedUpdateUser, loginWithGoogle, loginWithGithub } = useContext(WebContext)

    const [userEmail, setUserEmail] = useState('')
    console.log(userEmail)
    // const [token]=useToken(userEmail);
    // console.log(token)


    // if(token){
    //     console.log(token)
    //     // navigate('/')
    // }

    const from = location.state?.from?.pathname || "/";

    const imageHostKey = process.env.REACT_APP_imgbb_Key;


    const { register, handleSubmit, formState: { errors } } = useForm();


    


    const handleCreateUser = data => {

        // const email = data.email;
        


        const image = data.image[0];

        const formData = new FormData();
        formData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(fact => {
                const image = fact.data.url;
                const email = data.email;
                const password = data.password;

                createUser(email, password)
                
                    .then((result) => {
                        const user = result.user;
                        {
                            user && toast.success("Succesfully added you")
                            
                        }
                        const displayName = data.name;
                        const photoURL = image;

                        addedUpdateUser(displayName, photoURL)
                            .then(() => {
                                const role = data.type;
                                puteUser(email, displayName, photoURL, role);
                            })
                            .catch((error) => {
                                console.log(error)
                            })
                    })
                    .catch((error) => {
                        {
                            error && toast.error("firebase Error")
                        }
                    })



            })

    }



    const handlegoogleLogin = () => {
        loginWithGoogle(provider)
            .then((result) => {
                const email = result.user.email;
                const displayName = result.user.displayName;
                const photoURL = result.user.photoURL;
                const role="User";

                puteUser(email, displayName, photoURL, role)
                const user = result.user;
                {
                    user && toast.success("Succesfully added your account")
                    navigate(from, { replace: true })
                }

            })
            .catch((error) => {
                {
                    error && toast.error("firebaseError", error.message)
                }
            })
    }



    const puteUser = (email, displayName, photoURL, role) => {

        const addingUser = {
            email,
            name: displayName,
            img: photoURL,
            role
        }
        fetch(`http://localhost:5000/addusers`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addingUser)
        })
        .then(res =>res.json())
        .then(data => {
            setUserEmail(email)
            navigate('/')
        })

        
    }

    // const handleGithubSignIn =()=>{
    //     loginWithGithub(gitProvider)
    //     .then((result)=>{
    //         const user =result.user;
    //         toast.success('Login with github succesfull')
    //     })
    //     .catch((err)=>{
    //         toast.error('firebase error', err)
    //     })
    //     }


    // const {user}=useContext(WebContext)
    // console.log(user)
    return (
        <div className="backImage" style={{ backgroundImage: `url("https://images.mansionglobal.com/im-628924?width=1299&height=866")` }}>
            <div className="hero min-h-screen hero-overlay bg-opacity-60">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white mb-5">Sign Up</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleCreateUser)} className="card-body">

                            {/* Name section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", {
                                    required: "Name is required",
                                    minLength: { value: 4, message: "name mustbe meningfull" }
                                })} placeholder="Please Enter Your Name" className="input input-bordered" />
                                {
                                    errors.name && <p className='text-red-500'>{errors.name?.message}</p>
                                }
                            </div>

                            {/* Photo Section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input {...register("image")} type='file' placeholder="Please Enter Image" className="input input-bordered" />
                            </div>

                            {/* Email section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email")} type="email" placeholder="Please Enter Your Email Address" className="input input-bordered" />
                            </div>

                            {/* Password section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password")} type="password" placeholder="******" className="input input-bordered" />

                                {/* Select Type of Users */}
                                <div className="form-control">
                                    <div className="input-group grid">
                                        <label className="label">
                                            <span className="">Chosse Type</span>
                                        </label>
                                        <select {...register("type")} className="select select-bordered">
                                            <option>Pick category</option>
                                            <option>Seller</option>
                                            <option>User</option>
                                        </select>

                                    </div>
                                </div>
                                {/* Select Type of Users */}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Signup</button>
                            </div>
                        </form>

                        <div className='text-center'>
                            <button onClick={handlegoogleLogin}><FcGoogle /></button>
                            <button onClick={""} className='ml-3 text-sky-500'><AiFillGithub /></button>
                        </div>

                        <p className='text-center mb-5'>Alredy you have an account <Link to={'/login'} className='text-blue-500'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;