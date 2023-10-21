

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="h-[30vh] lg:h-[70vh] w-full bg-center bg-cover Slider-img-1">
                        <div className="h-[30vh] lg:h-[70vh] bg-black/60 space-y-6">
                            <h2 className="text-2xl lg:text-5xl text-center font-semibold px-1 pt-20 lg:pt-60 text-white lg:w-[50rem] mx-auto">Save Big on Top-Brand Auto Parts   <span className="text-red-500">Shop Now</span></h2>
                            <p className="lg:w-[50rem] mx-auto text-center lg:pt-4 text-xs px-2 lg:px-0 lg:text-base font-normal text-white hidden lg:flex ">

                                {`Let your imagination run wild as we bring your visions to life. It's not just an event; it's an experience, a memory, a story waiting to be told. Join us in creating magic, one event at a time!`}</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="text-white text-xl md:text-3xl">❮</a>
                        <a href="#slide2" className="text-white text-xl md:text-3xl">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="h-[30vh] lg:h-[70vh] w-full bg-center bg-cover Slider-img-2">
                        <div className="h-[30vh] lg:h-[70vh] bg-black/70 space-y-6">
                            <h2 className="text-xl lg:text-5xl text-center font-semibold px-1 pt-20 lg:pt-60 text-white lg:w-[50rem] mx-auto">Get More Bang for Your Buck  Shop Our <span className="lg:text-6xl text-red-500">Specials Today</span></h2>
                            <p className="lg:w-[50rem] mx-auto text-center lg:pt-4 text-xs px-2 lg:px-0 lg:text-base font-normal text-white hidden lg:flex ">

                                {`Let your imagination run wild as we bring your visions to life. It's not just an event; it's an experience, a memory, a story waiting to be told. Join us in creating magic, one event at a time!`}</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="text-white text-xl md:text-3xl">❮</a>
                        <a href="#slide3" className="text-white text-xl md:text-3xl">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="h-[30vh] lg:h-[70vh] w-full bg-center bg-cover Slider-img-3 ">
                        <div className="h-[30vh] lg:h-[70vh] bg-black/70 space-y-6">
                            <h2 className="text-xl lg:text-5xl text-center font-semibold px-1 pt-20 lg:pt-60 text-white lg:w-[60rem] mx-auto">Customize Your Car with Discounts Galore <span className="text-red-500">Act Fast</span></h2>
                            <p className="lg:w-[50rem] mx-auto text-center lg:pt-4 text-xs px-2 lg:px-0 lg:text-base font-normal text-white hidden lg:flex ">

                                {`Let your imagination run wild as we bring your visions to life. It's not just an event; it's an experience, a memory, a story waiting to be told. Join us in creating magic, one event at a time!`}</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="text-white text-xl md:text-3xl">❮</a>
                        <a href="#slide1" className="text-white text-xl md:text-3xl">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;