import {Link} from "react-router-dom"

import "./categories.scss";

export default function Categories(){


    return(
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/1148960/pexels-photo-1148960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="wardrobe pic" />
                    <button>
                        <Link className="link" to="/products/1">Sale</Link> 
                    </button>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/8272074/pexels-photo-8272074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="woman suit pic" />
                    <button>
                        <Link className="link" to="/products/1">Women</Link> 
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/4940756/pexels-photo-4940756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="clothes pic" />
                    <button>
                        <Link className="link" to="/products/1">New Season</Link> 
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/2002502/pexels-photo-2002502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="man pic" />
                            <button>
                                <Link className="link" to="/products/1">Men</Link> 
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/2442893/pexels-photo-2442893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="accessories" />
                            <button>
                                <Link className="link" to="/products/1">Accessories</Link> 
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="shoes" />
                    <button>
                        <Link className="link" to="/products/1">Shoes</Link> 
                    </button>
                </div>
            </div>
        </div>
    );
}