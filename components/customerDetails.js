import { useSelector } from 'react-redux';

const CustomerDetails = () => {
	const selctedCustomer = useSelector((state) => state.selctedCustomer);
	const address = selctedCustomer.address
		? Object.entries(selctedCustomer.address)
		: null;

	return (
		<div>
			<h1>Customer Details : {selctedCustomer.name}</h1>
			<h3>Address</h3>
			<ul className='address'>
				{address &&
					address.map(([key, value]) => (
						<li key={key}>
							<span>{key} :</span>
							<span>
								{typeof value === 'object' ? '' : value}
							</span>
						</li>
					))}
			</ul>
			<style jsx>{`
				.address {
					max-width: 300px;
				}
				.address li {
					padding: 5px 0px;
					text-transform: uppercase;
					font-size: 14px;
					display: flex;
					border: 1px solid #eee;
					border-top: none;
					padding: 5px;
				}
				.address li:first-child {
					border-top: 1px solid #eee;
				}
				.address li span {
					flex-basis: 50%;
				}
			`}</style>
		</div>
	);
};
export default CustomerDetails;
