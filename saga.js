import { all, put, takeLatest } from 'redux-saga/effects';
import {
	actionTypes,
	loadCustomersDataSuccess,
	selectCustomerSuccess,
	failure,
} from './actions';

function* loadCustomersData() {
	try {
		const res = yield fetch('https://jsonplaceholder.typicode.com/users');
		const data = yield res.json();
		yield put(loadCustomersDataSuccess(data));
	} catch (err) {
		yield put(failure(err));
	}
}
function* selectCustomerSaga({ id, data }) {
	if (data) {
		yield put(selectCustomerSuccess(data));
	} else {
		try {
			const res = yield fetch(
				`https://jsonplaceholder.typicode.com/users/${id}`,
			);
			const data = yield res.json();
			yield put(selectCustomerSuccess(data));
		} catch (err) {
			yield put(failure(err));
		}
	}
}

function* rootSaga() {
	yield all([
		takeLatest(actionTypes.LOAD_CUSTOMERS_DATA, loadCustomersData),
		takeLatest(actionTypes.SELECT_CUSTOMER, selectCustomerSaga),
	]);
}

export default rootSaga;
