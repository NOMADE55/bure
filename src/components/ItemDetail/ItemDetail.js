import React, { useEffect, useState } from 'react';
import { Icon } from '@mdi/react';
import { mdiPlusCircle, mdiMinusCircle, mdiClose, mdiCartPlus, mdiLoading } from '@mdi/js';
import './ItemDetail.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '@store/actions';

function ItemDetail({
    id = 0,
    image = {},
    name = "",
    price = {},
    loading = true,
    description = "",
    isOpen = false
}) {
    const [itemQuantity, setItemQuantity] = useState(1);

    useEffect(() => {
        setItemQuantity(1);
    }, [id])

    return (
        <article className={`item-product ${isOpen ? 'is-active' : ''} ${ loading ? 'is-loading' : '' }`} tabIndex="-1">
            <Link to="/" className="item-close">
                <Icon path={mdiClose} size="2rem" />
            </Link>
            <header>
                <Image {...image} loading={loading} />
            </header>
            <div className="item-details">
                { loading
                    ? <Icon className="icon-loading" path={loading ? mdiLoading : mdiCartPlus } spin={loading} size="4rem" />
                    : <React.Fragment>
                        <h2 className="item-title title is-2">{name}</h2>
                        <div className="item-description">{description}</div>
                    </React.Fragment> }
            </div>
            <footer className="item-footer">
                { loading
                    ? <Icon path={loading ? mdiLoading : mdiCartPlus } spin={loading} size="2rem" />
                    : <Price {...price} /> }
                <div className="item-data">
                    <QuantitySelector initialQuantity={itemQuantity} quantityChangeFunction={setItemQuantity} disabled={loading} />
                    <AddToCart quantity={itemQuantity} item={{ id: id, image: image, price: price, name: name }} disabled={loading}>
                        <Icon path={loading ? mdiLoading : mdiCartPlus } spin={loading} size="2rem" />
                    </AddToCart>
                </div>
            </footer>
        </article>
    );
}

function Image({
    src = "",
    alt = "",
    loading = true
}) {
    if(loading) return <div className="item-image"><Icon className="icon-loading" path={ mdiLoading } spin={true} size="5rem" /></div>;
    if(src === "" && !loading) return null;
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
    disabled = true,
    quantityChangeFunction = () => {}
}) {
    const [quantity, setQuantity] = useState(initialQuantity);

    useEffect(() => {
        setQuantity(initialQuantity);
    }, [initialQuantity]);

    const handleChange = newQuantity => {
        if(newQuantity <= 0) return setQuantity(1);
        if(maxQuantity !== -1 && newQuantity >= maxQuantity) return setQuantity(maxQuantity);
        setQuantity(newQuantity);
        quantityChangeFunction(newQuantity);
    }
    return (
        <div className="quantity">
            <button onClick={ () => handleChange(quantity - 1) } className="button is-minus" disabled={disabled}>
                <Icon path={ mdiMinusCircle } size="1rem" />
            </button>
            <input type="text" pattern="[0-9]" value={quantity} onChange={ (e) => handleChange(e.target.value)} disabled={disabled}/>
            <button onClick={ () => handleChange(quantity + 1) } className="button is-plus" disabled={disabled}>
                <Icon path={ mdiPlusCircle } size="1rem" />
            </button>
        </div>
    );
}

function AddToCart({
    item = {},
    quantity = 1,
    children = [],
    disabled = true,
}) {
    const dispatch = useDispatch();

    return (
        <button className="button is-primary add-to-cart" onClick={ () => dispatch(addProduct(item, quantity))} disabled={disabled}>
            {children}
        </button>
    );
}

export default ItemDetail;