import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import close from '../asset/icons/icon_close.png';
import styles from '../styles/OrderItem.module.scss';


const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	}

	return (
		<div className={styles.OrderItem}>
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close} alt="close"  className='closeimage' onClick={() => handleRemove(product)} />
		</div>
	);
}

export default OrderItem;