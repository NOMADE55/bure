import React, { useState } from 'react';
import { mdiCart } from '@mdi/js';
import Icon from '@mdi/react';
import './Cart.scss';
import { CartItem } from '../';

function CartInner({
    items = [],
    count = 0
}) {
    const [active, setActive] = useState(false);
    const toggleActive = () => setActive(!active);
    return (
        <React.Fragment>
            <div className={`cart-content ${active ? "is-active" : ""}`}>
                <div className="cart-header">
                    <h2>Tu carrito</h2>
                </div>
                <div className="cart-body">
                    <div className="cart-list">
                        { items.map(item => <CartItem key={item.id} {...item} />) }
                    </div>
                </div>
                <div className="cart-footer">
                    <button disabled={ count === 0 } className="button is-primary">Comprar</button>
                </div>
            </div>
            <CartButton count={count} toggleActive={toggleActive}/>
        </React.Fragment>
    );
}

function CartButton({
    count = 0,
    toggleActive = () => {}
}) {
    return (
        <div className="cart-button button is-primary" onClick={toggleActive}>
            <div className="cart-icon">
                <Icon path={ mdiCart } size="2rem" />
                <div className="cart-counter">{Math.min(count, 99)}</div>
            </div>
        </div>
    );
}

export default CartInner;
