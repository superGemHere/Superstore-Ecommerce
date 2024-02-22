import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import "./slider.scss"
import { useState } from 'react';

export default function Slider(){

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = ["/img/man-and-woman-outfit.webp", "/img/pexels-julia-avamotive-1034859.jpg", "/img/pexels-noelle-otto-906002.jpg"  ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
    };

    return(
        <div className="slider">
            <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <ArrowBackIosNewOutlinedIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <ArrowForwardIosOutlinedIcon />
                </div>
            </div>
        </div>
    );
}