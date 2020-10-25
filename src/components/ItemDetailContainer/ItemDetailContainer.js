import React, { useEffect } from 'react';
import Backdrop from '@components/Backdrop';
import { useParams } from 'react-router-dom';
import { products } from 'src/mock.js';
import ItemDetail from '@components/ItemDetail';
import { connect, useDispatch } from 'react-redux';
import { fromDetail } from '@store/selectors';
import { openItemDetail, closeItemDetail } from '@store/actions';
import { useHistory } from 'react-router-dom';

function ItemDetailContainer(props) {
    const { id } = useParams();
    const product = { ...products[id] }
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("test");
        if(id) {
            dispatch(openItemDetail());
            document.querySelector('body').style.overflow = "hidden";
        } else {
            dispatch(closeItemDetail());
            document.querySelector('body').style.overflow = "";
        }
    }, [id]);

    return (
        <React.Fragment>
            <ItemDetail {...product} {...props} />
            <Backdrop {...props} closeFunction={ () => history.push("/") } />
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    "isOpen": fromDetail.isOpen(state)
});

export default connect(mapStateToProps)(ItemDetailContainer);

