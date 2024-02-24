
import {Link} from 'react-router-dom'

import "./Card.scss"

export default function Card({item}){

    return(
        <Link to={`/product/${item._id}`}>
        <div className="card">
            <div className="image">
                <img src={item.img1} alt={`${item.title} image`} className="mainImg" />
                <img src={item.img2} alt={`${item.title} image`} className="secondaryImg" />
            </div>
            <h2>{item.title}</h2>
            <div className="prices">
               <h3>${item.oldPrice}</h3> 
               <h3>${item.price}</h3> 
            </div>
        </div>
        </Link>
    );

}