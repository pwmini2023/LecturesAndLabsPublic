import React, { useState } from "react";
import Basket from "./Basket";
import ProductsList from "./ProductsList";
import LanguagePicker from "./LanguagePicker";

const productsData = {
	"en-US": [
		{ id: 1, title: "Book" },
		{ id: 2, title: "Pen" },
		{ id: 3, title: "Laptop" },
		{ id: 4, title: "Headphones" },
		{ id: 5, title: "Mouse" },
		{ id: 6, title: "Keyboard" },
		{ id: 7, title: "Smartphone" },
		{ id: 8, title: "Tablet" },
		{ id: 9, title: "Monitor" },
		{ id: 10, title: "Chair" },
		// Add more products as needed
	],
	"de-DE": [
		{ id: 1, title: "Buch" },
		{ id: 2, title: "Stift" },
		{ id: 3, title: "Laptop" },
		{ id: 4, title: "Kopfhörer" },
		{ id: 5, title: "Maus" },
		{ id: 6, title: "Tastatur" },
		{ id: 7, title: "Smartphone" },
		{ id: 8, title: "Tablet" },
		{ id: 9, title: "Monitor" },
		{ id: 10, title: "Stuhl" },
		// Add more products as needed
	],
	"pl-PL": [
		{ id: 1, title: "Książka" },
		{ id: 2, title: "Długopis" },
		{ id: 3, title: "Laptop" },
		{ id: 4, title: "Słuchawki" },
		{ id: 5, title: "Mysz" },
		{ id: 6, title: "Klawiatura" },
		{ id: 7, title: "Smartfon" },
		{ id: 8, title: "Tablet" },
		{ id: 9, title: "Monitor" },
		{ id: 10, title: "Krzesło" },
		// Add more products as needed
	],
};

const App = () => {
	const [language, setLanguage] = useState("en-US");
	const [view, setView] = useState("products");

	const products = productsData[language];

	return (
		<div className="container">
			<LanguagePicker onSelectedLanguageChanged={setLanguage} />
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

			{view === "products" ? (
				<ProductsList products={products} />
			) : (
				<Basket language={language} />
			)}
		</div>
	);
};

export default App;
