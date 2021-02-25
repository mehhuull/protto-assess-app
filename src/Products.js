import React from 'react';
import "./Products.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TopProducts from "./TopProducts";
import ProductDetails from './ProductDetails';

function Products() {
    return (
        <div className="products">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <TopProducts />
                    </div>
                    <div className="col">
                       <ProductDetails />
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Products
