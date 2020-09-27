import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

function Product({
    id = 0,
    name = "",
    price = 0,
    featured = false,
    className = "",
    skeleton = false
}) {
    return (
        <Link to={`/product/${id}`}  className={`product ${className}${featured ? ' featured' : ''}${skeleton ? ' is-skeleton' : ''}`}>
            <div className="data">
                <h3 className="name">{name}</h3>
                <div className="price">${price.toFixed(2)}</div>
            </div>
            <div className="img-wrapper">
                <img src={`https://placehold.it/280x320?text=${name}`} alt={name}/>
            </div>
        </Link>
    );
}

export default Product;
