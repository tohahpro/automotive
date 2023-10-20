

const Banner = () => {
    return (
        <div className="h-[30vh] lg:h-[100vh] w-full bg-center bg-cover header-img">
            <div className="md:h-[100vh] bg-black/60 space-y-6">
                <h2 className="text-2xl lg:text-5xl text-center font-semibold px-1 pt-20 lg:pt-80 text-white lg:w-[40rem] mx-auto">

                    <span className="text-red-500">Explore Quality</span> Automotive Products from Leading Brands

                </h2>
                <p className="lg:w-[50rem] mx-auto text-center lg:pt-4 pb-10 lg:pb-0 text-xs px-2 lg:px-0 lg:text-lg font-medium text-white">

                    {`The variety of brands and the focus on automotive products. It's both informative and engaging, making it clear to visitors what they can find on your website. You can also complement it with an appealing tagline or subheading to further describe your website's unique selling points or mission`}</p>
            </div>
        </div>
    );
};

export default Banner;