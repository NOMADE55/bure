import React, { useEffect, useState } from 'react';
import Product from '@components/Product';
import './Product.scss';

function ProductList({
    items = [],
    skeleton = false
}) {
    const [products, setProducts] = useState(items);
    useEffect(() => {
        if(skeleton) {
            setProducts(Array(3).fill([]));
        } else {
            setProducts(items);
        }
    }, [skeleton]);

    return (
        <div className="product-list">
            { products.map((item, i) =>  <Product key={i} { ...item } skeleton={skeleton}/>) }
        </div>
    );
}

export default ProductList;
