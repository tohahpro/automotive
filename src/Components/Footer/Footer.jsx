
import { Link } from 'react-router-dom';
import Logo from '../../assets/image/logo-icons/logo.png'

const Footer = () => {
    return (
        <div className="">
            <footer className="lg:flex px-32 lg:justify-between py-20 lg:px-56 bg-black text-white">
                <Link to='/'>
                    <div className="flex items-center gap-2">
                        <img className="w-24" src={Logo} alt="" />
                        <p className="text-xl font-semibold text-red-500">GearHeads</p>
                    </div>
                </Link>
                <div className='flex flex-col'>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className='flex flex-col'>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className='flex flex-col'>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

