
import { useDispatch, useSelector } from "react-redux";
import "./cart.scss";

// import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { removeItem, resetCart } from "../../../redux/cartReducer";

export default function Cart() {

    const products = useSelector(state => state.cart.products);

    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;

        products.forEach((item) => (total += item.quantity * item.price));

        return total.toFixed(2);
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
                            {item.quantity} x ${item.price}
                        </div>
                    </div>
                    <ClearOutlinedIcon className="delete" onClick={() => dispatch(removeItem(item.id))}/>
                </div>
            ))}
            <div className="totalPrice">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button>CHECKOUT</button>
            <span className="reset" onClick={() => dispatch(resetCart())}>Reset Cart</span>
        </div>
    );
}