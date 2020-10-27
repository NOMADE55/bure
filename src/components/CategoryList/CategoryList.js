import React, { useState, useEffect } from 'react';
import "./CategoryList.scss";
import { FIRESTORE as db } from 'src/firebase.js';
import Category from '@components/Category';

function CategoryList() {
    const [ categories, setCategories ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        setLoading(true);
        db.collection('categories')
            .get()
            .then(querySnapshot => {
                if(querySnapshot.size === 0) return setCategories([]);
                const fetchedCategories = [];
                querySnapshot.docs.map(doc => {
                    fetchedCategories.push({ id: doc.id, ...doc.data(), doc: doc });
                });
                setLoading(false);
                return setCategories(fetchedCategories);
            });
    }, [])

    return (
        <section className="category-list">
            { categories.map((category, i) => <Category key={category.id || i } {...category} />) }
        </section>
    );
}

export default CategoryList;
