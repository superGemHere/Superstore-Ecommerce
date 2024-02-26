import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Slider from "../Slider/Slider";
import Categories from "../Categories/Categories";
import Contact from "../Contact/Contact";

import "./home.scss"

export default function Home(){

    return(
        <div className="home">
            <Slider />
            <FeaturedProducts type="featured" />
            <Categories />
            <FeaturedProducts type="trending" />
            <Contact />
        </div>
    );
}