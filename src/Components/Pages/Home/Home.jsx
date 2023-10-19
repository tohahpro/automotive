// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Banner from "./Banner";
import { useEffect, useState } from "react";
// import img from '../../../assets/image/Home-page-bottom-image.jpg'



const Home = () => {



    const [data, setData] = useState([])



    useEffect(() => {
        fetch('brandLogo.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])





    return (
        <div className="bg-[#c9c8c5ce]">
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-20 lg:px-56">
                {
                    data.map(item =>
                        <div

                            key={item.id}>

                            <Link to={`/products/${item.brand_name}`}>
                                <div className="card card-compact w-full bg-base-100 shadow-xl h-60">
                                    <figure><img className="w-36 lg:w-40" src={item.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title flex justify-center">{item.brand_name.toUpperCase()}</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>


            <div className="h-[30vh] lg:h-[70vh] w-full bg-center bg-cover bottom-img">
                <div className="h-[70vh] bg-black/50 space-y-6">
                    <h2 className="text-2xl lg:text-5xl text-center font-semibold px-1 pt-20 lg:pt-60 text-white lg:w-[40rem] mx-auto">{`Let's Make Your Event Memorable!`}</h2>
                    <p className="lg:w-[50rem] mx-auto text-center lg:pt-4 text-xs px-2 lg:px-0 lg:text-sm font-normal text-white">

                        {`Let your imagination run wild as we bring your visions to life. It's not just an event; it's an experience, a memory, a story waiting to be told. Join us in creating magic, one event at a time!`}</p>
                </div>
            </div>

        </div>
    );
};



export default Home;