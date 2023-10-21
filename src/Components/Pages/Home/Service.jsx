import image from '../../../assets/image/logo-icons/toyota-car.png';
// import icon1 from '../../../assets/image/logo-icons/buid-and-price.png'
import icon2 from '../../../assets/image/logo-icons/cool.jpg'
import icon3 from '../../../assets/image/logo-icons/ele.png'
import icon4 from '../../../assets/image/logo-icons/engine.jpg'
import icon5 from '../../../assets/image/logo-icons/trans.jpg'

const Service = () => {
    return (
        <div>

            <div className='flex justify-center'>
                <img src={image} alt="" />
            </div>

            {/* icon image  */}
            <div className='md:flex gap-12  md:w-full  space-y-3 md:space-y-0 justify-center p-20 md:p-0'>


                <div className='bg-slate-100 p-2 rounded-lg flex items-center gap-3 shadow-slate-400 hover:shadow-2xl md:w-40'>
                    <img className='w-10 bg-white p-2 rounded-lg shadow-xl' src={icon2} alt="" />
                    <p>Colling</p>
                </div>
                <div className='bg-slate-100 p-2 rounded-lg flex items-center gap-3 shadow-slate-400 hover:shadow-2xl md:w-40'>
                    <img className='w-10 bg-white p-2 rounded-lg shadow-xl' src={icon3} alt="" />
                    <p>Electrical</p>
                </div>
                <div className='bg-slate-100 p-2 rounded-lg flex items-center gap-3 shadow-slate-400 hover:shadow-2xl md:w-40'>
                    <img className='w-10 bg-white p-2 rounded-lg shadow-xl' src={icon4} alt="" />
                    <p>Engine</p>
                </div>
                <div className='bg-slate-100 p-2 rounded-lg flex items-center gap-3 shadow-slate-400 hover:shadow-2xl md:w-40'>
                    <img className='w-10 bg-white p-2 rounded-lg shadow-xl' src={icon5} alt="" />
                    <p>Transmission</p>
                </div>



            </div>
        </div>


    );
};

export default Service;