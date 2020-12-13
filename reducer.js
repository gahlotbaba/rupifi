import { actionTypes } from './actions';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
	customers: null,
	selctedCustomer: null,
	error: false,
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case HYDRATE: {
			return Object.assign({}, state, action.payload);
		}
		case actionTypes.CUSTOMERS_DATA_SUCCESS:
			return {
				...state,
				...{ customers: action.data },
			};
		case actionTypes.SELECT_CUSTOMER_SUCCESS:
			return {
				...state,
				...{ selctedCustomer: action.data },
			};
		case actionTypes.FAILURE:
			return {
				...state,
				...{ error: action.error },
			};
		default:
			return state;
	}
}

export default reducer;
