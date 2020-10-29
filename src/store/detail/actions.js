import { FIRESTORE as db } from 'src/firebase';

export const ITEM_DETAIL_OPEN = 'ITEM_DETAIL_OPEN';
export const ITEM_DETAIL_CLOSE = 'ITEM_DETAIL_CLOSE';
export const ITEM_DETAIL_GET = 'ITEM_DETAIL_GET';
export const ITEM_DETAIL_SUCCESS = 'ITEM_DETAIL_SUCCESS';
export const ITEM_DETAIL_FAILURE = 'ITEM_DETAIL_FAILURE';

export const openItemDetail = () => ({
	type: ITEM_DETAIL_OPEN,
	payload: {}
});

export const closeItemDetail = () => ({
	type: ITEM_DETAIL_CLOSE,
	payload: {}
});

export const getItemDetail = (id) => ({
	type: ITEM_DETAIL_GET,
	payload: {
		id: id
	}
});

export const foundItemDetail = (data) => ({
	type: ITEM_DETAIL_SUCCESS,
	payload: data
});

export const notFoundItemDetail = (data) => ({
	type: ITEM_DETAIL_FAILURE,
	payload: {}
});

// Action Creators
export const fetchItemDetail = (id = null) => async (dispatch, getState) => {
	const previousProduct = getState().detail.product ;
    dispatch(getItemDetail(id));
	if(previousProduct && previousProduct.id === id) {
		return dispatch(foundItemDetail(previousProduct));
	}
    await db.collection('products')
        .doc(id)
        .get()
        .then(async doc => {
			if(!doc.exists) throw doc;
			const data = { id: doc.id, ...doc.data() };
			await data.category
				.get()
				.then(cat => {
					if(cat.exists) {
						data.category = { ...cat.data() }
					}
				})

            dispatch(foundItemDetail(data));
        })
        .catch(error => {
            console.log(error);
            dispatch(notFoundItemDetail())
        });
}