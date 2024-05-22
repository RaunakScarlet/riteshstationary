import cls2 from "./assets/cls2.png";
import doms from "./assets/doms.png";
import mynotes from "./assets/mynotes.png";

import neelkamak from "./assets/neelkamak.jpg";
import schoolmate from "./assets/schoolmate.png";
import sansar from "./assets/sansar.jpg";

const Catalog = () => {
    return (
        <div className=" w-full h-auto pt-16 flex flex-col items-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
                Catalog
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-24 gap-6 my-10">
                <div className="flex flex-col items-center">
                    <img className="mb-4 w-48 h-64" src={cls2} alt="coffee" />
                    <p className="font-bold text-md text-xl">Classmate</p>
                    <h4 className="font-bold text-md">220 pages</h4>
                    <p className="text-2xl ">⭐️⭐️⭐️⭐️⭐️</p>
                    <p className="font-bold text-md">Rs. 55.00</p>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        className="mb-4 w-48 h-64"
                        src={schoolmate}
                        alt="sanetizer"
                    />
                    <p className="font-bold text-md text-xl">SchoolMate</p>
                    <h4 className="font-bold text-md"> 210 pages</h4>
                    <p className="text-2xl ">⭐️⭐️⭐️⭐️⭐️</p>
                    <p className="font-bold text-md">Rs. 45.00</p>
                </div>

                <div className="flex flex-col items-center">
                    <img className="mb-4 w-48 h-64" src={neelkamak} alt="oil" />
                    <p className="font-bold text-md text-xl">NeelKamal</p>
                    <h4 className="font-bold text-md">400 pages</h4>
                    <p className="text-2xl ">⭐️⭐️⭐️⭐️</p>
                    <div>
                        <span className="line-through text-md">Rs. 60.00</span>{" "}
                        <span className="font-bold text-md">Rs. 58.00</span>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        className="mb-4 w-48 h-64"
                        src={mynotes}
                        alt="coffee"
                    />
                    <p className="font-bold text-md text-xl">MyNotes</p>
                    <h4 className="font-bold text-md">220 pages</h4>
                    <p className="text-2xl ">⭐️⭐️⭐️⭐️</p>
                    <p className="font-bold text-md">Rs. 55.00</p>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        className="mb-4 w-48 h-64"
                        src={doms}
                        alt="sanetizer"
                    />
                    <p className="font-bold text-md text-xl">DOMS</p>
                    <h4 className="font-bold text-md"> 210 pages</h4>
                    <p className="text-2xl ">⭐️⭐️⭐️⭐️⭐️</p>
                    <p className="font-bold text-md">Rs. 45.00</p>
                </div>

                <div className="flex flex-col items-center">
                    <img className="mb-4 w-48 h-64" src={sansar} alt="oil" />
                    <p className="font-bold text-md text-xl">Sansar</p>
                    <h4 className="font-bold text-md">400 pages</h4>
                    <p className="text-2xl ">⭐️⭐️⭐️</p>
                    <div>
                        <span className="line-through text-md">Rs. 60.00</span>{" "}
                        <span className="font-bold text-md">Rs. 58.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
