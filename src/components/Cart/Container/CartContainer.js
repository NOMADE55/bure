import CartInner from '../Inner';
import React from 'react';
import { fromCart } from '@store/selectors';
import { connect } from 'react-redux';


function CartContainer(props) {
    return <CartInner {...props} />;
}

const mapStateToProps = state => {
    const items = fromCart.getItems(state);
    return {
        "items": items,
        "count": items.reduce((count, item) => count + item.quantity, 0)
    }
};

export default connect(mapStateToProps)(CartContainer);
