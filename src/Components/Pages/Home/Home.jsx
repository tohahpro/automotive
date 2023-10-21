// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import Banner from "./Banner";
import BrandMarquee from "./BrandMarquee";
import clientRating from '../../../assets/image/logo-icons/3-layers-1.png'
import Service from "./Service";




const Home = () => {



    const [data, setData] = useState([])


    useEffect(() => {
        fetch('brandLogo.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])





    return (
        <div>
            <Banner></Banner>

            <div className="pt-40 pb-20 lg:py-20">
                <BrandMarquee></BrandMarquee>
            </div>

            <div className="lg:px-56">
                <h1 className="z-50 text-center text-5xl font-extrabold">Our Clients <span className="text-red-500">Love Us!</span></h1>

                <div className="md:flex py-12 md:py-20">
                    <div className="flex-1 px-8">
                        <img src={clientRating} alt="" />
                    </div>
                    <div className="flex-1 md:px-8">
                        <p className="z-50 md:text-xl md:font-medium flex justify-stretch pt-10 px-8 md:p-0">
                            {`
                            aven
                            Flexibility, Customizability, Design Quality, Features - this theme ticks every single box. In 10 years of using ThemeForest i've never felt compelled to leave a review until now. TangibleDesign have made this so easy, and stress free, and just when I think they haven't thought of that feature - they have. e.g. i've just set up "Sold" banner across listing thumbnails with a custom colour. LOVE IT!
                           `}
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-20 lg:px-56">

                {
                    data.map(item =>
                        <div

                            key={item.id}>

                            <Link to={`/products/${item.brand_name} `}>
                                <div className="card card-compact w-full bg-[#F2F2F2] shadow-xl border-2 border-[#F2F2F2]  hover:border-red-400 hover:border-2 hover:shadow-red-300 pt-8 pb-6 ">
                                    <figure><img className="w-56" src={item.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title flex justify-center">{item.brand_name.toUpperCase()}</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>

            <div className="flex justify-center py-16">
                <Service></Service>
            </div>


            <div className="h-[30vh] lg:h-[50vh] w-full bg-center bg-cover header-img1">
                <div className="h-[50vh] bg-black/50 space-y-6">

                    <h2 className="text-2xl z-40 lg:text-5xl text-center font-semibold px-1 pt-12 lg:pt-36 text-white lg:w-[40rem] mx-auto">Discover Our Featured Brands</h2>
                    <p className="z-30 lg:w-[50rem] mx-auto text-center lg:pt-4 text-xs px-2 lg:px-0 lg:text-lg font-normal text-white">

                        {`Explore our extensive catalog, get expert insights, and find the best products to elevate your driving experience. Whether you're a seasoned enthusiast or just starting your journey, we've got something special for you. Start your automotive adventure today`}</p>
                </div>
            </div>

        </div>
    );
};



export default Home;