
import { useState } from "react";
import "./product.scss"

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

export default function Product(){

    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const images = [
        "https://images.pexels.com/photos/1925482/pexels-photo-1925482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1868670/pexels-photo-1868670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]

    return(
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)}/>
                    <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)}/>
                </div>
                <div className="main">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Title</h1>
                <span className="price">$199</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex explicabo fugiat consequuntur fuga similique natus quae vero est delectus?
                </p>
                <div className="quantity">
                    <button onClick={() => setQuantity(prev => (prev === 1 ? 1 : prev - 1))}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>
                <button className="add">
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
        </div>
    );
}