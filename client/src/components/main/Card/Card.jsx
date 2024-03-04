
import {Link} from 'react-router-dom'

import "./card.scss";

export default function Card({item}){

    return(
        <Link className='link' to={`/product/${item.id}`} > 
        <div className="card" key={item._id}>
            <div className="image">
                {item?.attributes.isNew &&<span>New Collection</span>}
                <img src={import.meta.env.VITE_APP_UPLOAD_URL+item.attributes?.img?.data?.attributes?.url} alt={`${item?.attributes.title} image`} className="mainImg" />
                <img src={import.meta.env.VITE_APP_UPLOAD_URL+item.attributes?.img2?.data?.attributes?.url} alt={`${item?.attributes.title} image`} className="secondaryImg" />
            </div>
            <h2>{item?.attributes.title}</h2>
            <div className="prices">
               <h3>${item.oldPrice || item?.attributes.price * 1.7}</h3> 
               <h3>${item?.attributes.price}</h3> 
            </div>
        </div>
        </Link>
    );

}