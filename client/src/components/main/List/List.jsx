
import "./list.scss";
import Card from "../Card/Card"

export default function List(){

    const data = [
        {
            _id: "d82e157c-ef25-469b-a3be-368cf0f091c1",
            img1: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Gentle-King Suit & reeze",
            isNew: true,
            oldPrice: 19,
            price: 12,

        },
        {
            _id: "2fabaf20-65cb-48da-9294-65583298cb28",
            img1: "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/4831659/pexels-photo-4831659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Gentle-Qeen Pink Qeen",
            isNew: true,
            oldPrice: 27,
            price: 21,
        },
        {
            _id: "b541a45b-88f9-4085-9286-b46a7bf22676",
            img1: "https://images.pexels.com/photos/9554843/pexels-photo-9554843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/9554839/pexels-photo-9554839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Gentle-Prince Born to Ride",
            isNew: false,
            oldPrice: 16,
            price: 14,
        },
        {
            _id: "c0b19f0a-18c2-452a-8996-84227e97deb3",
            img1: "https://images.pexels.com/photos/2020922/pexels-photo-2020922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/1140692/pexels-photo-1140692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Gentle-Princess Apple Garden",
            isNew: false,
            oldPrice: 21,
            price: 14,
        },
    ];


    return(
        <div className="list">
            {data.map(item=>(
                <Card item={item} key={item._id}/>
            ))}
        </div>
    );

}