import { useSelector, useDispatch } from "react-redux";
import {addProductToBasket, toggleLiked} from "./redux/actions";

const ProductListItem = ({ product }) => {
	const likedProducts = useSelector((state) => state.likedProducts);
	const dispatch = useDispatch();
	const isLiked = likedProducts.includes(product.id);

	const handleToggleLiked = (productId) => {
		dispatch(toggleLiked(productId));
		console.log(`Product with id ${productId} toggled`);
	}

	const handleAddToBasket = (productId) => {
		dispatch(addProductToBasket(productId));
		console.log(`Product with id ${productId} added to Basket`);
	};

	const countInBasket = useSelector(state => state.productsInBasket.filter((id) => id === product.id).length);

	return (
		<li>
			<span style={{ marginRight: 5 }}>{product.title}</span>
			<span
				onClick={() => handleToggleLiked(product.id)}
				style={{ cursor: "pointer", marginRight: 5 }}
			>
				<i
					className={`fa-heart ${isLiked ? "fas" : "far"}`}
					style={{ color: isLiked ? "green" : "grey" }}
				></i>
			</span>

			<span
				onClick={() => handleAddToBasket(product.id)}
				style={{ cursor: "pointer" }}
			>
				<i className={`fas fa-cart-plus`} style={{ color: "blue" }}></i> ({countInBasket})
			</span>
		</li>
	);
};

export default ProductListItem;
