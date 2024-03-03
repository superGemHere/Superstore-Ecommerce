
import "./featuredProducts.scss";

import Card from "../Card/Card";

import { useEffect, useState } from "react";
import axios from "axios";

import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

export default function FeaturedProducts(
    {type,}
){


    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get(import.meta.env.VITE_APP_URL+`/products?populate=*&[filters][type][$eq]=${type}`, {
                    headers: {
                        Authorization: "bearer " + import.meta.env.VITE_APP_TOKEN
                    },
                })

                setData(res.data.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    }, [])

    // console.log(data);

    const isData = data.length > 0 ? true : false;
    console.log(data)

    console.log("isData", isData);

    return(
        <div className="featuredProducts">
            {isData 
            ?  
            <>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ipsa modi quam accusamus impedit qui alias. Quam cumque eveniet culpa animi voluptas perspiciatis architecto accusamus, praesentium ratione a repudiandae dolorem nulla veritatis maiores quae iusto quos suscipit sapiente modi molestias vero. Laborum praesentium provident nisi at dolorem, consequatur sed quam.
                </p>
            </div>
            <div className="bottom">
                {data.map(item => (
                    <Card item={item} key={item.id}/>
                ))}
            </div> 
            </>
            : 
            <>
            <h2 id="noTypeProduct">There are no {type} products.</h2>
             <ProductionQuantityLimitsIcon id="noTypeIcon"/>
            </>
            }
            
        </div>
    );
}