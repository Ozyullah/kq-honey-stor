
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { WebContext } from '../../../../Context/AuthContext/AuthContext';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const provider = new GoogleAuthProvider();

    // const gitProvider = new GithubAuthProvider();

    // const [userEmailToken, setUserEmailToken] = useState('')

    // const [token] = useToken(userEmailToken)

    // console.log(token)

    const navigate = useNavigate();
    const location = useLocation();

    const { user, logInWithEmailandPassword, loginWithGoogle, loginWithGithub } = useContext(WebContext);

    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, formState: { errors } } = useForm();

    const loginHandle = (data) => {
        logInWithEmailandPassword(data.email, data.password)
            .then((result) => {
                const user = result.user;
                {
                    user && toast.success('Succesfully Login')
                }
                // setUserEmailToken(data.email)
                navigate(from, { replace: true })
            })
            .catch((error) => {
                {
                    error && toast.error("User Not found, Please try again")
                }
            })

    }


    const handlegoogleLogin = () => {
        loginWithGoogle(provider)
            .then((result) => {
                const user = result.user;
                const email = result.user.email;
                {
                    user && toast.success("Succesfully Login with Google")
                }
                // setUserEmailToken(email)
                navigate(from, { replace: true })
            })
            .catch((error) => {
                {
                    error && toast.error("firebaseError", error.message)
                }
            })
    }

    // const handleGithubLogIn =()=>{
    //     loginWithGithub(gitProvider)
    //     .then((result)=>{
    //         const user =result.user;
    //         toast.success('Login with github succesfull')
    //     })
    //     .catch((err)=>{
    //         toast.error('firebase error', err)
    //     })
    //     }

    // console.log(user)

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://t3.ftcdn.net/jpg/03/99/24/82/360_F_399248286_Ogm0T8CFeauN4Hdn42FqWfsCE02dJBbX.jpg")` }}>
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white mb-5">Login now</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(loginHandle)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", {
                                    required: "Required",
                                    massage: "Email is not properly used"
                                })} placeholder="email" className="input input-bordered" />
                                {errors.email && errors.email.message}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: "Required",
                                    massage: "Password mustbe minimum length six charecter",
                                    minLength: { value: 6 }
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <div className='text-center'>
                            <button onClick={handlegoogleLogin}><FcGoogle /></button>
                            <button onClick={""} className='ml-3 text-sky-500'><AiFillGithub /></button>
                        </div>

                        <p className='text-center mb-5'>If you do not have an account  <Link to={'/signup'} className='text-blue-500'>Signup</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;