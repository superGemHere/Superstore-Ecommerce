
import "./featuredProducts.scss";

import Card from "../Card/Card";

import { useEffect, useState } from "react";
import axios from "axios";

export default function FeaturedProducts(
    {type,}
){


    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await axios.get(import.meta.env.VITE_APP_URL+"/products", {
                    headers: {
                        Authorization: "bearer " + import.meta.env.VITE_APP_TOKEN
                    },
                })

                console.log(data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    }, [])

    return(
        <div className="featuredProducts">
            
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ipsa modi quam accusamus impedit qui alias. Quam cumque eveniet culpa animi voluptas perspiciatis architecto accusamus, praesentium ratione a repudiandae dolorem nulla veritatis maiores quae iusto quos suscipit sapiente modi molestias vero. Laborum praesentium provident nisi at dolorem, consequatur sed quam.
                </p>
            </div>
            <div className="bottom">
                {data.map(item => (
                    <Card item={item} key={item._id}/>
                ))}
            </div>
        </div>
    );
}