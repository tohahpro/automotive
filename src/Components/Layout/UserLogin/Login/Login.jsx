import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from "./SocialLogin";
import toast from "react-hot-toast";


const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const { Login } = useContext(AuthContext)


    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);

        if (!/^(?=.*[a-z]).{6,}$/.test(password)) {
            return toast.error("Password length must have 6 characters")
        }

        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            return toast.error("Password must have a special character")
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            return toast.error("Password must have a capital letter")
        }
        else if (!/(?=.*\d)/.test(password)) {
            return toast.error("Password must have a number")
        }

        Login(email, password)
            .then(res => {
                if (res.user) {
                    toast.success('Login successful')
                }

                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                return toast.error(error.message)
            })
    }

    return (
        <div className='bg-[#252B48]'>
            <h2 className="text-center text-4xl  text-white font-semibold pt-40 mb-16">LogIn Form</h2>

            <form onSubmit={handleLogin} className='pb-32'>
                <div className='max-w-2xl mx-auto border shadow-lg p-8 rounded-xl bg-slate-100'>

                    {/* email field  */}
                    <div>
                        <label htmlFor="">Email</label><br />
                        <input className='border w-full rounded-md p-2 my-2' type="text" name="email" placeholder='email' required />
                    </div>
                    {/* password field  */}
                    <div>
                        <label htmlFor="">Password</label><br />
                        <div className='flex relative'>
                            <input className='border w-full rounded-md p-2 my-2 ' type={showPassword ? 'text' : 'password'} name="password" placeholder='password' required />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-4 right-2 text-lg" required>{showPassword ? <AiOutlineEye></AiOutlineEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</span>
                        </div>
                    </div>
                    <input type="submit" value="Login" className="btn w-full p-2 rounded-lg bg-black text-white" />

                    <p className='mt-2'>New Here ? Please  <Link to='/register'>
                        <span className='text-blue-600'>
                            <span className='underline'>Register</span>
                        </span>
                    </Link>

                    </p>
                    <SocialLogin></SocialLogin>
                </div>

            </form>

        </div>
    );
};

export default Login;