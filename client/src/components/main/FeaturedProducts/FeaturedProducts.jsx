
import "./featuredProducts.scss";

import Card from "../Card/Card";

import {TailSpin} from "react-loader-spinner";


import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import useFetch from "../../../hooks/useFetch";

export default function FeaturedProducts(
    {type,}
){

    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

    

    console.log(data)
    const isData = data?.length > 0 ? true : false;


    return(
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ipsa modi quam accusamus impedit qui alias. Quam cumque eveniet culpa animi voluptas perspiciatis architecto accusamus, praesentium ratione a repudiandae dolorem nulla veritatis maiores quae iusto quos suscipit sapiente modi molestias vero. Laborum praesentium provident nisi at dolorem, consequatur sed quam.
                </p>
            </div> 
            <>
            <div className="bottom">
                { loading ? 
                <TailSpin
                visible={true}
                height="80"
                width="80"
                color="#2879fe"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                />
                : isData 
                ?  data.map(item => (<Card item={item} key={item.id}/>))
                : <div className="noTypeProducts"><h2 id="noTypeProduct">There are no {type} products.</h2> <ProductionQuantityLimitsIcon id="noTypeIcon"/></div>
            }
            </div> 
            </>
            
            
        </div>
    );
}