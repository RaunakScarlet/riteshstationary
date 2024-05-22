import logo from "./assets/logo.png";
import rk from "./assets/rk.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex w-[95%] justify-between items-center  mx-auto py-8 px-1 ">
            <div className="flex justify-between items-center gap-2 sm:gap-4 md:gap-8">
                <div className="h-10 w-36 md:h-12 md:w-60 overflow-hidden">
                    <Link to="/">
                        <img
                            alt="nature"
                            className="object-cover object-center h-full w-full"
                            src={logo}
                        />
                    </Link>
                </div>
            </div>

            <div className="flex items-center justify-between gap-4 md:gap-8">
                <a href="tel:+919801601444">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 md:w-14 md:h-14 mt-1"
                    >
                        <path
                            fillRule="evenodd"
                            d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>

                <img
                    src={rk}
                    className="w-12  h-12  md:w-24 md:h-24  border-black border-[1px] rounded-full"
                />
            </div>
        </div>
    );
};

export default Navbar;
