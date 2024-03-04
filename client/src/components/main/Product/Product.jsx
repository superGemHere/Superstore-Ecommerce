
import { useState } from "react";
import "./product.scss"

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";

import {TailSpin} from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartReducer";


// import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

export default function Product(){

    const id = useParams().id;

    const [selectedImg, setSelectedImg] = useState("img");
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    const {data, loading, error} = 
    useFetch(`/products/${id}?populate=*`);

    return(
        <div className="product">
            {error ? "Something went wrong!"  : ( loading 
            ? <TailSpin visible={true} height="125" width="125" color="#2879fe" ariaLabel="tail-spin-loading" radius="1" wrapperStyle={{}} wrapperClass=""/>
            :<>
            <div className="left">
                <div className="images">
                    <img src={import.meta.env.VITE_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img")}/>
                    <img src={import.meta.env.VITE_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img2")}/>
                </div>
                <div className="main">
                    <img src={import.meta.env.VITE_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>{data?.attributes?.title}</h1>
                <span className="price">${data?.attributes?.price}</span>
                <p>{data?.attributes?.desc}</p>
                <div className="quantity">
                    <button onClick={() => setQuantity(prev => (prev === 1 ? 1 : prev - 1))}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>
                <button className="add" onClick={() => dispatch(addToCart({
                   id: data.id,
                   title:data.attributes.title, 
                   desc:data.attributes.desc, 
                   price:data.attributes.price, 
                   img:data.attributes.img.data.attributes.url,
                   quantity,
                }))}>
                    <AddShoppingCartIcon /> Add to cart
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon /> Add to wish list
                    </div>
                    <div className="item">
                        <BalanceIcon /> Add to compare
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-shirt, Women, Top</span>
                </div>
                <hr />
                <div className="info">
                    <span>Description</span>
                    <hr />
                    <span>Additional infromation</span>
                    <hr />
                    <span>Faq</span>
                </div>
            </div>
            </>)}
        </div>
    );
}