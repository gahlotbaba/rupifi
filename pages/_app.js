import { wrapper } from '../store';
import { useStore } from 'react-redux';
import { Provider } from 'react-redux';
import '../assets/global.css';

function App({ Component, pageProps }) {
	const store = useStore((state) => state);
	return (
		<Provider store={store}>
			<div className='wrapper'>
				<Component {...pageProps} />
			</div>
		</Provider>
	);
}

export default wrapper.withRedux(App);
