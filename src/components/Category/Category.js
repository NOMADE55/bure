import React, { useEffect, useState } from 'react';
import Product from '@components/Product';
import { FIRESTORE as db } from "src/firebase";


function Category({
    loading = false,
    slug = "",
    name = "",
    id = ""
}) {
    // console.log(doc);
    const [ products, setProducts ] = useState([]);
    useEffect(() => {
        const category = db.collection('categories').doc(id);
        db.collection('products')
            .where('category', '==', category)
            .get()
            .then(querySnapshot => {
                if(querySnapshot.size === 0) return setProducts([]);
                const fetchedProducts = [];
                querySnapshot.docs.map(product => fetchedProducts.push({id: product.id, ...product.data() }));
                setProducts(fetchedProducts);
            });
    }, [id]);

    return (
        <div className={`category ${loading ? 'is-skeleton' : ''}`}>
            <h2>{name}</h2>
            <div className="product-list">
                { products.map(product => <Product { ...product } key={ product.id } skeleton={ loading }/> ) }
            </div>
        </div>
    );
}

export default Category;