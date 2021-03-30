import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { DISHES } from '../shared/dishes';


export const initialState = {

            dishes:DISHES,
            selectedDish: null,
            comments : COMMENTS,
            leaders : LEADERS,
            promotions: PROMOTIONS
};

export const Reducer = (state = initialState, action) => {
    return state
}