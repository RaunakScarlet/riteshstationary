import rk from "./assets/rk.png";

const About = () => {
    return (
        <div className="bg-[#F8F6F1] flex items-center justify-center ">
            <div className="w-full bg-[#F8F6F1] px-5   text-gray-800">
                <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center">
                    <div className="text-center max-w-xl mx-auto mb-5">
                        <h1 className="text-6xl md:text-7xl font-bold text-gray-600">
                            About Us
                        </h1>
                    </div>
                    <img
                        src={rk}
                        alt="rk"
                        className="w-32 h-32 rounded-full  border-black border-[2px] "
                    />
                    <div className="text-center max-w-xl mx-auto pt-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-600 mb-5">
                            Welcome to Ritesh Stationary
                        </h1>
                        <h1 className="font-bold mb-5">
                            your one-stop shop for all your stationery needs! At
                            Ritesh Stationary, we pride ourselves on offering a
                            diverse range of high-quality products to cater to
                            students, professionals, artists, and anyone who
                            values the art of writing and creativity. We
                            carefully select our inventory to ensure that every
                            item meets the highest standards of quality and
                            functionality.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
