import { Link } from 'react-router-dom';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import './Navbar.scss'

export default function Navbar(){

    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item" >
                        <img src="../../../public/img/pngwing.com.png" alt="" style={{width: "40px", height:"auto"}}/> 
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/1">Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/2">Men</Link>
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
                        <div className="cartIcon">
                            <ShoppingCartOutlinedIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}