import { END } from 'redux-saga';
import { wrapper } from '../store';
import { loadCustomersData } from '../actions';
import CustomersList from '../components/customersList';

const Index = () => {
	return <CustomersList />;
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
	if (!store.getState().customers) {
		store.dispatch(loadCustomersData());
		store.dispatch(END);
	}

	await store.sagaTask.toPromise();
});

export default Index;
