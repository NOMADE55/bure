import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from 'src/mock.js';
import ItemDetail from '@components/ItemDetail';

function ItemDetailContainer(props) {
    const { id } = useParams();
    const product = products[id];
    return <ItemDetail {...product} />;
}

export default ItemDetailContainer;

