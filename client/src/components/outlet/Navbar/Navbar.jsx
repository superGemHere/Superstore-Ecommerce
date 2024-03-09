import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import Cart from "../../main/Cart/Cart";

import './navbar.scss'
import { useState } from 'react';

export default function Navbar(){

    const [currency, setCurrency] = useState("USD")
    const [open, setOpen] = useState(false);
    const [isVisible, setVisible] = useState(false);

    const products = useSelector(state => state.cart.products);

    const handleArrowEnter = () => {
        setVisible(!isVisible);
    }

    const currencyHandler = async (e) => {
        setCurrency(e.target.innerHTML)
        // console.log(currency);
    }

    const isUsd = currency == "USD" ? true : false 

    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item" >
                        {   isUsd 
                        ? <img src="/img/pngwing.com.png" alt="" style={{width: "40px", height:"auto"}} />
                        : <img src="/img/flagBul.png" alt="" style={{width: "40px", height:"auto"}} />
                        }
                        <div className="currency-changer">
                        <p className='color p' onClick={handleArrowEnter}>Currency {!isVisible ? <KeyboardArrowDownIcon className='color' /> : <KeyboardArrowUpIcon className='color' onClick={handleArrowEnter} /> }</p>     
                       
                       {isVisible &&
                            <div className='dropDown' onClick={handleArrowEnter}>
                                <p onClick={(e) => currencyHandler(e) }>USD</p>
                                <p onClick={(e) => currencyHandler(e) }>BGN</p>
                            </div>
                       }
                        </div>
                    </div>
                    <div className="item">
                        {isUsd ? <span>USD</span> : <span>BGN</span>}
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/1">Men</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/2">Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/3">Children</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className='link logo'  to="/">Superstore</Link>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className='link' to="/">Home</Link>
                    </div>
                    <div className="item">
                    <Link className='link' to="/">About</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/">Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />
                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlinedIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div>
    );
}