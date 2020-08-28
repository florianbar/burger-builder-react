import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialPrice = 4;

const initialState = {
    ingredients: null,
    totalPrice: initialPrice,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
            const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
            const updatedTotalPrice = state.totalPrice + INGREDIENT_PRICES[action.ingredientName];
            return updateObject(state, { ingredients: updatedIngredients, totalPrice: updatedTotalPrice });

        case actionTypes.REMOVE_INGREDIENT:
            const updatedIngredient2 = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
            const updatedIngredients2 = updateObject(state.ingredients, updatedIngredient2);
            const updatedTotalPrice2 = state.totalPrice - INGREDIENT_PRICES[action.ingredientName];
            return updateObject(state, { ingredients: updatedIngredients2, totalPrice: updatedTotalPrice2 });

        case actionTypes.SET_INGREDIENTS:
            return updateObject(state, { ingredients: action.ingredients, error: false, totalPrice: initialPrice });

        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, { error: true });

        default:
            return state;
    }
};

export default reducer;