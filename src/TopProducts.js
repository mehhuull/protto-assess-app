import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from '@material-ui/icons/Search';
import "./TopProducts.css";

function TopProducts() {
    return (
        <div className="topProducts">
            <div className="topProducts__header">
                <h3 className="topProducts__heading">Top Products</h3>                    
                <input className="topProducts__input" type="text" placeholder="Search Product Name"/>
                <SearchIcon className="topProducts__searchIcon" />   

            </div>
            <div className="topProducts__products">


            </div>
            <div className="topProducts__footer">
               

            </div>
            
        </div>
    )
}

export default TopProducts;
