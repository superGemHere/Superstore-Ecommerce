
import { useDispatch, useSelector } from "react-redux";
import "./cart.scss";


import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { removeItem, resetCart } from "../../../redux/cartReducer";

import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from "../../../lib/makeRequest";

import CurrencyContext from '../../../context/CurrencyProvider.jsx';

import { useContext } from 'react';

export default function Cart() {

    const products = useSelector(state => state.cart.products);

    const dispatch = useDispatch();

    const {currency, currencyHandler} = useContext(CurrencyContext);

    const isUsd = currency == "USD" ? true : false;
    

    const totalPrice = () => {
        let total = 0;

        isUsd ?  products.forEach((item) => (total += item.quantity * item.price)) : products.forEach((item) => (total += item.quantity * (item.price * 1.79)));
       

        return total.toFixed(2);
    }

    const stripePromise = loadStripe('pk_test_51OquvSHVlf1zZe1L8pC287UiRq545cpYSOTTCjh1w8ZlmqB55i7CSaCLSkw6KoO14uCkK2cTzp9cYtVdfq6DP8po00cMt85lK5');


    const handlePayment = async() => {
        
        try{
            const stripe = await stripePromise;

            const res = await makeRequest.post("/orders", {
                products,
            })

            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            })
        }catch(err){
            console.log(err);
        }

    }

    
   
    return(
        <div className="cart">
            <h1>Products in your cart</h1>
            {products?.map(item => (
                <div className="item" key = {item.id}>
                    <img src={import.meta.env.VITE_APP_UPLOAD_URL + item?.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">
                            {item.quantity} x {isUsd ? `$ ${item?.price}` : `BGN ${(item?.price * 1.79).toFixed(2)}`}
                        </div>
                    </div>
                    <ClearOutlinedIcon className="delete" onClick={() => dispatch(removeItem(item.id))}/>
                </div>
            ))}
            <div className="totalPrice">
                <span>SUBTOTAL</span>
                <span>{isUsd ? "$ " : "BGN " }{totalPrice()}</span>
            </div>
            <button onClick={handlePayment}>CHECKOUT</button>
            <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
        </div>
    );
}