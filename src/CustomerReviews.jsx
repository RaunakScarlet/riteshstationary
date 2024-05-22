import logo from "./assets/logo.png";

const Review = () => {
    return (
        <div className="w-full h-auto bg-[#F8F6F2] flex flex-col relative">
            <img
                src={logo}
                alt="leaf"
                className=" w-[32rem] absolute opacity-10"
            />
            <div className="pt-20 flex flex-col items-center ">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Customers Reviews
                </h2>
                <img className="w-[5rem] pt-8 " src={logo} alt="twig" />
                <div className="flex flex-col lg:flex-row gap-6 items-end justify-center mt-20">
                    <div className="w-[22rem] border-2 h-[24rem] flex flex-col justify-center items-center p-12 gap-4 text-center">
                        <p className="text-2xl">⭐️⭐️⭐️⭐️⭐️</p>
                        <p className="text-lg">
                            Click edit button to change this text. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Ut elit
                            tellus, luctus nec ullamcorper mattis, pulvinar
                            dapibus leo.
                        </p>
                        <div className="flex items-center gap-4">
                            <img src={logo} alt="lady" />
                            <p className="text-xl">Mila Kunis</p>
                        </div>
                    </div>
                    <div className="w-[22rem]  h-[28rem] flex flex-col relative hover:opacity-70 opacity-95 bg-black">
                        <img
                            src={logo}
                            alt="bgImage"
                            className="w-full h-full object-cover   "
                        />
                        <div className="absolute w-full h-full  flex flex-col  p-8 justify-center items-center">
                            <div className=" text-white flex flex-col items-center  text-center  justify-center  gap-12">
                                <div className="flex flex-col gap-4 ">
                                    <h3 className="text-4xl">
                                        Deal Of The Day 15% Off On All
                                        Vegetables!
                                    </h3>
                                    <p>
                                        I am text block. Click edit button to
                                        change this tex em ips.
                                    </p>
                                </div>
                                <button className="bg-[#60a610] w-40 h-12 mt-6 text-white rounded">
                                    <span className="">SHOP NOW</span>
                                    <i className="fa-solid fa-arrow-right ml-4"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[22rem] border-2 h-[24rem] flex flex-col justify-center items-center p-12 gap-4 text-center">
                        <p className="text-2xl">⭐️⭐️⭐️⭐️⭐️</p>
                        <p className="text-lg">
                            Click edit button to change this text. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Ut elit
                            tellus, luctus nec ullamcorper mattis, pulvinar
                            dapibus leo.
                        </p>
                        <div className="flex items-center gap-4">
                            <img src={logo} alt="man" />
                            <p className="text-xl">Mike Sendler</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" bg-[#F8F6F2] flex flex-col  h-auto  items-center justify-between my-8">
                <h2 className="text-xl md:text-3xl lg:text-5xl font-bold ">
                    Featured Brands:
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {" "}
                    <img className=" " src={logo} alt="logo1" />
                    <img className=" " src={logo} alt="logo2" />
                    <img className=" " src={logo} alt="logo3" />
                    <img className=" " src={logo} alt="logo4" />
                </div>
            </div>
        </div>
    );
};

export default Review;
