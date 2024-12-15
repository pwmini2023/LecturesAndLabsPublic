import { useContext } from "react";
import ProductListItem from "./ProductListItem";
import productsData from "./data";
import LanguageContext from "./LanguageContext";

const ProductsList = (props) => {
	const { language, setLanguage } = useContext(LanguageContext);
	const products = productsData[language];

	return (
		<div className="box">
			<h2 className="title">Products</h2>
			<ul>
				{products.map((product) => (
					<ProductListItem key={product.id} product={product} />
				))}
			</ul>
		</div>
	);
};

export default ProductsList;
