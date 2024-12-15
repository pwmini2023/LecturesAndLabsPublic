const Basket = ({ language }) => {
	const basketText = {
		"en-US": "Your basket is empty.",
		"de-DE": "Ihr Warenkorb ist leer.",
		"pl-PL": "Twój koszyk jest pusty.",
	};

	return (
		<div className="box">
			<h2 className="title">Basket</h2>
			<p>{basketText[language]}</p>
		</div>
	);
};

export default Basket;
