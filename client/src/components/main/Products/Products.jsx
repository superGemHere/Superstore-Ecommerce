
import { useParams } from "react-router-dom";
import List from "../List/List";

import "./products.scss"
import { useState } from "react";

export default function Products(){

    const arrowDown = String.fromCodePoint(8595);
    const arrowUp = String.fromCodePoint(8593);

    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null)


    return(
        <div className="products">
            <div className="left">
                <div className="filter-item">
                    <h2>Product Categories</h2>
                    <div className="input-item">
                        <input type="checkbox" id="1" value={1} />
                        <label htmlFor="1">Shoes</label>
                    </div>
                    <div className="input-item">
                        <input type="checkbox" id="2" value={2} />
                        <label htmlFor="2">Skirts</label>
                    </div>
                    <div className="input-item">
                        <input type="checkbox" id="3" value={3} />
                        <label htmlFor="3">Coats</label>
                    </div>
                </div>
                <div className="filter-item">
                    <h2>Filter by price</h2>
                    <div className="input-item">
                        <span>0</span>
                        <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filter-item">
                    <h2>Sort by</h2>
                    <div className="input-item">
                        <input type="radio" id="desc" value="desc" name="price" onChange={e => setSort("desc")}/>
                        <label htmlFor="desc">Price {arrowUp}(9-0)</label>
                    </div>
                    <div className="input-item">
                        <input type="radio" id="asc" value="asc" name="price" onChange={e => setSort("asc")}/>
                        <label htmlFor="asc">Price {arrowDown}(0-9)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img className="catImg" src="https://images.pexels.com/photos/396947/pexels-photo-396947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <List catId={catId} maxPrice={maxPrice} sort={sort}/>
            </div>
        </div>
    );
}