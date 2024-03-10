
import {Link} from 'react-router-dom'
import CurrencyContext from '../../../context/CurrencyProvider.jsx';

import { useContext } from 'react';




import "./card.scss";

export default function Card({item}){

    const {currency, currencyHandler} = useContext(CurrencyContext);

    const isUsd = currency == "USD" ? true : false

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
               <h3>{isUsd ? `$ ${item.oldPrice || item?.attributes.price * 1.7}` : `BGN ${((item.oldPrice || item?.attributes.price * 1.7) * 1.79).toFixed(2)}`} </h3> 
               <h3>{isUsd ? `$ ${item?.attributes.price}` : `BGN ${(item?.attributes.price * 1.79).toFixed(2)}`} </h3> 
            </div>
        </div>
        </Link>
    );

}