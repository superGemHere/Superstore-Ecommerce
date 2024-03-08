import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import Cart from "../../main/Cart/Cart";

import './navbar.scss'
import { useState } from 'react';

export default function Navbar(){

    let timeoutId;

    const [open, setOpen] = useState(false);
    const [isVisible, setVisible] = useState(false);

    const products = useSelector(state => state.cart.products);

    const handleArrowEnter = () => {
        setVisible(!isVisible);
    }


    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item" >
                        <img src="/img/pngwing.com.png" alt="" style={{width: "40px", height:"auto"}} /> 
                        <div className="currency-changer">
                        <p>Currency</p>     
                       <KeyboardArrowDownIcon className='' onClick={handleArrowEnter}/>
                       {isVisible &&
                            <div className='dropDown' onClick={handleArrowEnter}>
                                <p>USD</p>
                                <p>BGN</p>
                            </div>
                       }
                        </div>
                    </div>
                    <div className="item">
                        <span>USD</span>
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