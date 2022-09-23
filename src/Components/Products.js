import React from "react";
import ProductDetails from "./ProductDetails";

// let imageUrl=require('../images/fresh-milk.png');
// l et isAvailable = 'Unavailable';

// let badgeClass = 'badge-margin-left-240 badge ';
// badgeClass += isAvailable === 'Available' ? 'bg-success' : 'bg-danger';

function Products(props) {
    console.log('product Component executed');
    return  (
                <li className="list-group-item">
                <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
                    <div className="media-body order-2 order-lg-1">
                    <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
                    <p className="font-italic text-muted mb-0 small">{props.description}</p>
                    <ProductDetails price={props.price} isAvailable={props.isAvailable}>
                    </ProductDetails>  
                    </div><img src={(props.imageUrl)} alt="Generic placeholder" width="200" className="ml-lg-5 order-1 order-lg-2" />
                    </div>
                </li>
            );
}

export default Products;