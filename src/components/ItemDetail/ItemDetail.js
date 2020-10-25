import React, { useState } from 'react';
import { Icon } from '@mdi/react';
import { mdiPlusCircle, mdiMinusCircle, mdiClose, mdiCartPlus } from '@mdi/js';
import './ItemDetail.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '@store/actions';

function ItemDetail({
    id = 0,
    image = {},
    name = "",
    price = {},
    skeleton = true,
    description = "",
    isOpen = false
}) {
    const [itemQuantity, setItemQuantity] = useState(1);
    return (
        <article className={`item-product ${isOpen ? 'is-active' : ''}`} tabIndex="-1">
            <Link to="/" className="item-close">
                <Icon path={mdiClose} size="2rem" />
            </Link>
            <header>
                <Image {...image} />
            </header>
            <div className="item-details">
                <h2 className="item-title title is-2">{name}</h2>
                <div className="item-description">{description}</div>
            </div>
            <footer className="item-footer">
                <Price {...price} />
                <div className="item-data">
                    <QuantitySelector initialQuantity={itemQuantity} quantityChangeFunction={setItemQuantity} />
                    <AddToCart quantity={itemQuantity} item={{ id: id, image: image, price: price, name: name }}>
                        <Icon path={mdiCartPlus} size="2rem" />
                    </AddToCart>
                </div>
            </footer>
        </article>
    );
}

function Image({
    src = "",
    alt = ""
}) {
    if(src === "") return null;
    return (
        <div className="item-image">
            <img src={src} alt={alt} />
        </div>
    );
}

function Price({
    amount = 0,
    symbol = "$"
}) {
    return (
        <div className="price">
            {symbol}{amount.toFixed(2)}
        </div>
    );
}

function QuantitySelector({
    maxQuantity = -1,
    initialQuantity = 1,
    quantityChangeFunction = () => {}
}) {
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleChange = newQuantity => {
        if(newQuantity <= 0) return setQuantity(1);
        if(maxQuantity !== -1 && newQuantity >= maxQuantity) return setQuantity(maxQuantity);
        setQuantity(newQuantity);
        quantityChangeFunction(newQuantity);
    }
    return (
        <div className="quantity">
            <button onClick={ () => handleChange(quantity - 1) } className="button is-minus">
                <Icon path={ mdiMinusCircle } size="1rem" />
            </button>
            <input type="text" pattern="[0-9]" value={quantity} onChange={ (e) => handleChange(e.target.value)} />
            <button onClick={ () => handleChange(quantity + 1) } className="button is-plus">
                <Icon path={ mdiPlusCircle } size="1rem" />
            </button>
        </div>
    );
}

function AddToCart({
    item = {},
    quantity = 1,
    children = []
}) {
    const dispatch = useDispatch();

    return (
        <button className="button is-primary add-to-cart" onClick={ () => dispatch(addProduct(item, quantity))}>
            {children}
        </button>
    );
}

export default ItemDetail;