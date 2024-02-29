
import "./cart.scss";

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export default function Cart() {

    
    const data = [
        {
            _id: "d82a157c-ef25-469b-a3be-368cf0f091c1",
            img1: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Gentle-King Suit & reeze",
            desc: "Gentle-Kinaaaaaaaaaaaaaaaaaag Suit & reeze",
            isNew: true,
            oldPrice: 19,
            price: 12,

        },
        {
            _id: "d82e157c-ef25-469b-a3be-368cf0f091c1",
            img1: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Gentle-King Suit & reeze",
            desc: "Gentle-Kinaaaaaaaaaaaaaaaaaag Suit & reeze",
            isNew: true,
            oldPrice: 19,
            price: 12,

        },
    ]

    return(
        <div className="cart">
            <h1>Products in your cart</h1>
            {data?.map(item => (
                <div className="item" key = {item._id}>
                    <img src={item.img1} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">
                            1 x ${item.price}
                        </div>
                    </div>
                    <DeleteOutlinedIcon className="delete"/>
                </div>
            ))}
            <div className="totalPrice">
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>CHECKOUT</button>
            <span className="reset">Reset Cart</span>
        </div>
    );
}