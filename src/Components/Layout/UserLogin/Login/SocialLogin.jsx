import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';



const SocialLogin = () => {

    const { googleLogin } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()


    const handleSocialLogin = (media) => {
        media()
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
        <div>
            <div className="divider text-lg font-semibold">Continue With</div>
            <div className="flex gap-12">
                <div
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="py-2 px-4 flex items-center gap-1 border rounded-md hover:cursor-pointer hover:shadow-2xl shadow-gray-300">
                    <FcGoogle className="text-2xl"></FcGoogle> <span className="text-base font-semibold">Google</span>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;