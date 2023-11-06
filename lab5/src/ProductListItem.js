import { useSelector, useDispatch } from "react-redux";
import { toggleLiked } from "./redux/actions";
import { useState } from "react";

const ProductListItem = ({ product }) => {
	const likedProducts = useSelector((state) => state.likedProducts);
	const dispatch = useDispatch();
	const isLiked = likedProducts.includes(product.id);
	const [isInCart, setIsInCart] = useState(false);

	const handleAddToBasket = (productId) => {
		if (isInCart) {
			console.log("Removed from Basket");
		} else {
			console.log("Added to Basket");
		}

		setIsInCart((prevState) => !prevState); // Toggle the state
	};

	return (
		<li>
			<span style={{ marginRight: 5 }}>{product.title}</span>
			<span
				onClick={() => dispatch(toggleLiked(product.id))}
				style={{ cursor: "pointer", marginRight: 5 }}
			>
				<i
					className={`fa-heart ${isLiked ? "fas" : "far"}`}
					style={{ color: isLiked ? "green" : "grey" }}
				></i>
			</span>

			<span
				style={{ color: isInCart ? "blue" : "grey" }}
				onClick={() => handleAddToBasket(product.id)}
			>
				<i
					className={`fas ${
						isInCart ? "fa-shopping-cart" : "fa-cart-plus"
					}`}
					style={{ color: isInCart ? "blue" : "grey" }}
				></i>
			</span>
		</li>
	);
};

export default ProductListItem;
