import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Slider from "../Slider/Slider";

import "./home.scss"

export default function Home(){

    return(
        <div className="home">
            <Slider />
            <FeaturedProducts />
        </div>
    );
}