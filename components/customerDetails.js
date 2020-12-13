import { useSelector } from 'react-redux';
import Link from 'next/link';
const CustomerDetails = () => {
	const selctedCustomer = useSelector((state) => state.selctedCustomer);
	const address = selctedCustomer?.address
		? Object.entries(selctedCustomer.address)
		: null;

	return (
		<div>
			<h1>Customer Details : {selctedCustomer?.name}</h1>
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
			<p>
				<Link href='/'>
					<button>Back to Home</button>
				</Link>
			</p>
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
				button {
					background-color: green;
					color: #fff;
					padding: 10px;
					border: none;
					border-radius: 4px;
					cursor: pointer;
				}
			`}</style>
		</div>
	);
};
export default CustomerDetails;
