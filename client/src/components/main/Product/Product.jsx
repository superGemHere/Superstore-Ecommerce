
import "./product.scss"

export default function Product(){

    const arrowDown = String.fromCodePoint(8595);
    const arrowUp = String.fromCodePoint(8593);

    return(
        <div className="product">
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
                        <input type="range" min={0} max={1000} />
                        <span>1000</span>
                    </div>
                </div>
                <div className="filter-item">
                    <h2>Sort by</h2>
                    <div className="input-item">
                        <input type="radio" id="desc" value="desc" name="price"/>
                        <label htmlFor="desc">Price {arrowUp}(9-0)</label>
                    </div>
                    <div className="input-item">
                        <input type="radio" id="asc" value="asc" name="price"/>
                        <label htmlFor="asc">Price {arrowDown}(0-9)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                
            </div>
        </div>
    );
}