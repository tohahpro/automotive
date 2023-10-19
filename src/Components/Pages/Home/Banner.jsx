

const Banner = () => {
    return (
        <div className="h-[30vh] lg:h-[100vh] w-full bg-center bg-cover bottom-img">
            <div className="md:h-[100vh] bg-black/30 space-y-6">
                <h2 className="text-2xl lg:text-5xl text-center font-semibold px-1 pt-20 lg:pt-80 text-white lg:w-[40rem] mx-auto">{`Let's Make Your Event Memorable!`}</h2>
                <p className="lg:w-[50rem] mx-auto text-center lg:pt-4 pb-10 lg:pb-0 text-xs px-2 lg:px-0 lg:text-sm font-normal text-white">

                    {`Let your imagination run wild as we bring your visions to life. It's not just an event; it's an experience, a memory, a story waiting to be told. Join us in creating magic, one event at a time!`}</p>
            </div>
        </div>
    );
};

export default Banner;