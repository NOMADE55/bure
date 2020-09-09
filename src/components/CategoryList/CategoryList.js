import React, { useState } from 'react';
import "./CategoryList.scss";
import { categories as mockedCategories } from 'src/mock.js'
import ProductList from '@components/ProductList';

function CategoryList() {
    const placeholderArray = Array(4).fill([]);
    const [categories, setCategories ] = useState(placeholderArray);
    const [loading, setLoading ] = useState(true);
    const fetchCategories = new Promise((res, rej) => {
        setTimeout(() => res(mockedCategories), 10000);
    })
    .then(data => setCategories(data))
    .catch(error => console.error(error))
    .finally(data => setLoading(false));

    return (
        <section className={`category-list`}>
            {
                categories.map((category, i) => (
                    <div key={category.id || i} className={`category ${loading ? 'is-skeleton' : ''}`}>
                        <h2 id={category.id}>{category.name}</h2>
                        <ProductList items={category.items} skeleton={loading} />
                    </div>
                ))
            }
        </section>
    );
}

export default CategoryList;
