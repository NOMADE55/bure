import React from 'react';
import { connect } from 'react-redux';
import CartItemInner from '../Inner';
import { removeProduct } from '@store/actions';

function CartItemContainer(props) {
    return <CartItemInner {...props} />;
}

const mapDispatchToProps = (dispatch, { id }) => ({
    removeFromCart: () => dispatch(removeProduct(id))
});

export default connect(null, mapDispatchToProps)(CartItemContainer);
