import {ADD_TO_BASKET, REMOVE_FROM_BASKET, TOGGLE_LIKED} from "./actions";
import productsData from "../data";

const initialState = {
	products: productsData,
	likedProducts: [],
	productsInBasket: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_LIKED:
			return toggleLiked(state, action.payload);
		case ADD_TO_BASKET:
			return addProductToBasket(state, action.payload);
		case REMOVE_FROM_BASKET:
			return removeOneFromBasket(state, action.payload);
		default:
			return state;
	}
};

const toggleLiked = (state, productId) => {
	const isLiked = state.likedProducts.includes(productId);
	const likedProducts = isLiked
		? state.likedProducts.filter((id) => id !== productId)
		: [...state.likedProducts, productId];
	return {
		...state,
		likedProducts,
	};
}

const addProductToBasket = (state, productId) => {
	return {
		...state,
		productsInBasket: [...state.productsInBasket, productId]
	}
}

const removeOneFromBasket = (state, productId) => {
	const index = state.productsInBasket.indexOf(productId);
	if (index > -1) {
		state.productsInBasket.splice(index, 1);
	}
	return {
		...state,
		productsInBasket: [...state.productsInBasket]
	}
}

export default rootReducer;
