export const ITEM_DETAIL_OPEN = 'ITEM_DETAIL_OPEN';
export const ITEM_DETAIL_CLOSE = 'ITEM_DETAIL_CLOSE';

export const openItemDetail = () => ({
	type: ITEM_DETAIL_OPEN,
	payload: {}
});

export const closeItemDetail = () => ({
	type: ITEM_DETAIL_CLOSE,
	payload: {}
});
