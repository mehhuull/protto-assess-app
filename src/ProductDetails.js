import React from 'react';
import "./ProductDetails.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function ProductDetails() {
    return (
        <div className="productDetails">
            <h2>Product Details</h2>
            <h1 style={{fontSize: 20}}>Unit Sold</h1>
            <hr />
            <h2>Description</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. </p>
            <hr />
            <div className="ProductDetails__buttons">
                <button style={{backgroundColor: "LawnGreen"}}>Approve Order</button>
                <button style={{backgroundColor: "red"}}>Disapprove Order</button>
            </div>

            <div className="productDetails__lastButton">
                <button className="checkInventory">Check Inventory</button>

            </div>
            
        </div>
    )
}

export default ProductDetails
