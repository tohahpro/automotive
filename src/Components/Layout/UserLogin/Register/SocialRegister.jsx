import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../Provider/AuthProvider';

const SocialRegister = () => {

    const { googleLogin } = useContext(AuthContext)

    const handleSocialRegister = (media) => {
        media()
            .then(res => {
                console.log(res)
            })
            .catch(error => console.error(error))

    }


    return (
        <div>
            <div className="divider text-lg font-semibold">Continue With</div>
            <div className="flex gap-12">
                <div
                    onClick={() => handleSocialRegister(googleLogin)}
                    className="py-2 px-4 flex items-center gap-1 border rounded-md hover:cursor-pointer hover:shadow-2xl shadow-inner shadow-gray-300">
                    <FcGoogle className="text-2xl"></FcGoogle> <span className="text-base font-semibold">Google</span>
                </div>
            </div>
        </div>
    );
};

export default SocialRegister;