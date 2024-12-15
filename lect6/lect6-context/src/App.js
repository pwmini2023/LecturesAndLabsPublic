import React, { useState } from "react";
import Basket from "./Basket";
import ProductsList from "./ProductsList";
import LanguagePicker from "./LanguagePicker";
import LanguageProvider from "./LanguageProvider";

const App = () => {
	const [view, setView] = useState("products");

	return (
		<LanguageProvider>
			<div className="container">
				<LanguagePicker />
				<div className="buttons is-centered">
					<button
						className={`button is-info ${
							view === "products" ? "is-selected" : ""
						}`}
						onClick={() => setView("products")}
					>
						Products
					</button>
					<button
						className={`button is-info ${
							view === "basket" ? "is-selected" : ""
						}`}
						onClick={() => setView("basket")}
					>
						Basket
					</button>
				</div>

				{view === "products" ? <ProductsList /> : <Basket />}
			</div>
		</LanguageProvider>
	);
};

export default App;
