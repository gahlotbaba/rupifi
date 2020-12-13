export const actionTypes = {
	LOAD_CUSTOMERS_DATA: 'LOAD_CUSTOMERS_DATA',
	CUSTOMERS_DATA_SUCCESS: 'CUSTOMERS_DATA_SUCCESS',
	SELECT_CUSTOMER: 'SELECT_CUSTOMER',
	SELECT_CUSTOMER_SUCCESS: 'SELECT_CUSTOMER_SUCCESS',
	HYDRATE: 'HYDRATE',
	FAILURE: 'FAILURE',
};

export function loadCustomersData() {
	return { type: actionTypes.LOAD_CUSTOMERS_DATA };
}

export function loadCustomersDataSuccess(data) {
	return {
		type: actionTypes.CUSTOMERS_DATA_SUCCESS,
		data,
	};
}
export function selectCustomer(id) {
	return {
		type: actionTypes.SELECT_CUSTOMER,
		id,
	};
}
export function selectCustomerSuccess(data) {
	return {
		type: actionTypes.SELECT_CUSTOMER_SUCCESS,
		data,
	};
}
export function failure(error) {
	return {
		type: actionTypes.FAILURE,
		error,
	};
}
