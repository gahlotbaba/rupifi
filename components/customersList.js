import { useSelector, useDispatch } from 'react-redux';
import style from './list.module.css';
import { selectCustomer } from '../actions';
import Link from 'next/link';
const CustomersList = () => {
	const list = useSelector((state) => state.customers);
	const dispatch = useDispatch();
	return (
		<div className={style.list}>
			<h1>Our Customers </h1>
			{list && (
				<ul>
					{list.map((customer) => (
						<Link
							href={`/customer/${customer.id}`}
							key={customer.id}
						>
							<li
								onClick={() =>
									dispatch(
										selectCustomer(customer.id, customer),
									)
								}
							>
								<h2>{customer.name}</h2>
								<p>Email: {customer.email}</p>
								<p>Phone: {customer.phone}</p>
								<p>Website: {customer.website}</p>
							</li>
						</Link>
					))}
				</ul>
			)}
		</div>
	);
};
export default CustomersList;
