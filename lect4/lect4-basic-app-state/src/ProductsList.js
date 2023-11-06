import ProductListItem from "./ProductListItem";

const ProductsList = ({ products }) => {
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
