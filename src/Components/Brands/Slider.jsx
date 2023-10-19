

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="h-[30vh] lg:h-[70vh] w-full bg-center bg-cover Slider-img-1">
                        <div className="h-[70vh] bg-black/50 space-y-6">
                            <h2 className="text-2xl lg:text-5xl text-center font-semibold px-1 pt-20 lg:pt-60 text-white lg:w-[40rem] mx-auto">{`Let's Make Your Event Memorable!`}</h2>
                            <p className="lg:w-[50rem] mx-auto text-center lg:pt-4 text-xs px-2 lg:px-0 lg:text-sm font-normal text-white">

                                {`Let your imagination run wild as we bring your visions to life. It's not just an event; it's an experience, a memory, a story waiting to be told. Join us in creating magic, one event at a time!`}</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="h-[30vh] lg:h-[70vh] w-full bg-center bg-cover Slider-img-2">
                        <div className="h-[70vh] bg-black/50 space-y-6">
                            <h2 className="text-2xl lg:text-5xl text-center font-semibold px-1 pt-20 lg:pt-60 text-white lg:w-[40rem] mx-auto">{`Let's Make Your Event Memorable!`}</h2>
                            <p className="lg:w-[50rem] mx-auto text-center lg:pt-4 text-xs px-2 lg:px-0 lg:text-sm font-normal text-white">

                                {`Let your imagination run wild as we bring your visions to life. It's not just an event; it's an experience, a memory, a story waiting to be told. Join us in creating magic, one event at a time!`}</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="h-[30vh] lg:h-[70vh] w-full bg-center bg-cover Slider-img-1 ">
                        <div className="h-[70vh] bg-black/50 space-y-6">
                            <h2 className="text-2xl lg:text-5xl text-center font-semibold px-1 pt-20 lg:pt-60 text-white lg:w-[40rem] mx-auto">{`Let's Make Your Event Memorable!`}</h2>
                            <p className="lg:w-[50rem] mx-auto text-center lg:pt-4 text-xs px-2 lg:px-0 lg:text-sm font-normal text-white">

                                {`Let your imagination run wild as we bring your visions to life. It's not just an event; it's an experience, a memory, a story waiting to be told. Join us in creating magic, one event at a time!`}</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;