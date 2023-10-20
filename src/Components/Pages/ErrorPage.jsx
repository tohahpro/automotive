import { Link } from 'react-router-dom';
import errorImg from '../../assets/image/logo-icons/error-404-d20e7581.jpg';

const ErrorPage = () => {
    return (
        <div className='flex justify-center py-20 bg-white'>
            <div>
                <img src={errorImg} alt="" /> <br />

                <div className='flex justify-center'>

                    <Link to='/'><button className='bg-red-500 text-white font-semibold text-xl rounded p-2'>Back Home</button></Link>
                </div>

            </div>


        </div>
    );
};

export default ErrorPage;