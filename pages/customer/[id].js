import { END } from 'redux-saga';
import { wrapper } from '../../store';
import { selectCustomer } from '../../actions';
import CustomerDetails from '../../components/customerDetails';

const CustomerDetailsPage = () => {
	return <CustomerDetails />;
};
export const getServerSideProps = wrapper.getServerSideProps(
	async ({ store, params }) => {
		const { id } = params;
		if (!store.getState().selctedCustomer) {
			store.dispatch(selectCustomer(id, null));
			store.dispatch(END);
		}
		await store.sagaTask.toPromise();
	},
);

export default CustomerDetailsPage;
