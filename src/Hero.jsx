import logo from "./assets/hero.jpeg";

function App() {
    return (
        <div className="w-screen  text-white">
            <div className="container mx-auto flex px-5 py-6 items-center justify-center flex-col">
                <img
                    className="lg:w-4/6 md:w-3/6 w-5/6 mb-10 object-cover object-center"
                    alt="hero"
                    src={logo}
                />
                <div className="text-center lg:w-5/12 w-full">
                    <h1 className="my-4 text-5xl font-bold leading-tight text-gray-600">
                        Powerful Copy
                    </h1>
                    <h1 className="my-4 text-5xl font-bold leading-tight text-gray-600">
                        for
                    </h1>
                    <h1 className="my-4 text-5xl font-bold leading-tight text-gray-600">
                        Powerful Results
                    </h1>
                    <p className="text-2xl mb-8 text-gray-600">
                        Crafting and Supplying Top-Notch Copy to Boost Local
                        Businesses
                    </p>
                    <div className="flex justify-center mx-auto">
                        <a href="https://wa.me/+919801601444">
                            <button className="hover:underline bg-black text-white font-bold rounded-full  py-4 px-8">
                                Contact us Today
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
