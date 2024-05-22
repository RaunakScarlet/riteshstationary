import About from "./About";
import Catalog from "./Catalog";
import Hero from "./Hero";
import Review from "./Review";
const Body = () => {
    return (
        <div>
            <Hero />
            <Catalog />
            <Review />
            <About/>
        </div>
    );
};

export default Body;
