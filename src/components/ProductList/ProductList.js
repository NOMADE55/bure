import React from 'react';
import Product from '@components/Product';
import './Product.scss';

function ProductList({items}) {
    return (
        <div className="product-list">
            { items.map(item => <Product { ...item }/>) }
        </div>
    );
}

export default ProductList;
