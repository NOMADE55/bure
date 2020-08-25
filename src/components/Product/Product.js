import React from 'react';

function Product({
    name = "",
    price = 0,
    featured = false,
    className = ""
}) {
    return (
        <article className={`product ${className}${featured ? ' featured' : ''}`}>
            <div className="data">
                <h3 className="name">{name}</h3>
                <div className="price">${price.toFixed(2)}</div>
            </div>
            <div className="img-wrapper">
                <img src={`https://placehold.it/280x320?text=${name}`} alt={name}/>
            </div>
        </article>
    );
}

export default Product;
