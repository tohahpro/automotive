import Marquee from "react-fast-marquee";

import logo1 from '../../../assets/image/logo-icons/car-1.png'
import logo2 from '../../../assets/image/logo-icons/car-2.png'
import logo3 from '../../../assets/image/logo-icons/car-3.png'
import logo4 from '../../../assets/image/logo-icons/car-4.png'
import logo5 from '../../../assets/image/logo-icons/car-5.png'
import logo6 from '../../../assets/image/logo-icons/car-6.png'
import logo7 from '../../../assets/image/logo-icons/car-7.png'
import logo8 from '../../../assets/image/logo-icons/car-8.png'
import logo9 from '../../../assets/image/logo-icons/car-9.png'


const BrandMarquee = () => {
    return (
        <div className="flex lg:mx-56 rounded-sm bg-slate-50">

            <Marquee pauseOnHover={true} speed={150}>
                <img className="w-32 md:w-48" src={logo1} alt="" />
                <img className="w-32 md:w-48" src={logo2} alt="" />
                <img className="w-32 md:w-48" src={logo3} alt="" />
                <img className="w-32 md:w-48" src={logo4} alt="" />
                <img className="w-32 md:w-48" src={logo5} alt="" />
                <img className="w-32 md:w-48" src={logo6} alt="" />
                <img className="w-32 md:w-48" src={logo7} alt="" />
                <img className="w-32 md:w-48" src={logo8} alt="" />
                <img className="w-32 md:w-48" src={logo9} alt="" />

            </Marquee>
        </div>
    );
};

export default BrandMarquee;