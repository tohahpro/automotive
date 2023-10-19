// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Banner from "./Banner";
import { useEffect, useState } from "react";




const Home = () => {



    const [data, setData] = useState([])



    useEffect(() => {
        fetch('brandLogo.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])





    return (
        <div className="h-[100rem]">
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-20 px-56">
                {
                    data.map(item =>
                        <div

                            key={item.id}>

                            <Link to={`/products/${item.brand_name}`}>
                                <div className="card card-compact w-full bg-base-100 shadow-xl">
                                    <figure><img className="w-40" src={item.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title flex justify-center">{item.brand_name.toUpperCase()}</h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

// Home.propTypes = {
//     handleSearch: PropTypes.node
// };

export default Home;