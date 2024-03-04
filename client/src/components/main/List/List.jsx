
import "./list.scss";

import Card from "../Card/Card";

import {TailSpin} from "react-loader-spinner";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

import useFetch from "../../../hooks/useFetch";

export default function List({ subCats, maxPrice, sort, catId }){

    const {data, loading, error} = 
    useFetch(`/products?populate=*&[filters][categories][id]=${catId}
    ${subCats.map(item => `&[filters][sub_categories][id][$eq]=${item}`)}
    &[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
    );

    const isData = data?.length > 0 ? true : false;

    return(
        <div className="list">
            { error 
                ? "Something went wrong!" 
                : (loading ? 
                <TailSpin
                visible={true}
                height="125"
                width="125"
                color="#2879fe"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                />
                : isData 
                ?  data.map(item => (<Card item={item} key={item.id}/>))
                : <div className="noTypeProducts"><h2 id="noTypeProduct">Sorry, currently there are no relevant products.</h2> <ProductionQuantityLimitsIcon id="noTypeIcon"/></div>)
            }
        </div>
    );

}