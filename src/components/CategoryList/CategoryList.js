import React from 'react';
import "./CategoryList.scss";
import { categories } from 'src/mock.js'
import ProductList from '@components/ProductList';

function CategoryList() {
    return (
        <React.Fragment>
        {
            categories.map(category => (
                <section key={category.id} className="category">
                    <h2 id={category.id}>{category.name}</h2>
                    <ProductList items={category.items} />
                </section>
            ))
        }
        </React.Fragment>
    );
}

export default CategoryList;
