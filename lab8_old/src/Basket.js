import {useContext} from "react";
import LanguageContext from "./LanguageContext";
import {useSelector} from "react-redux";
import BasketItem from "./BasketItem";

const Basket = (props) => {
    const basketText = {
        "en-US": "Your basket is empty.",
        "de-DE": "Ihr Warenkorb ist leer.",
        "pl-PL": "Twój koszyk jest pusty.",
        "fr-FR": "Votre panier est vide."
    };

    const {language} = useContext(LanguageContext);

    const productsInBasket = useSelector((state) => {
        const products = state.products[language];
        return products.filter((product) => state.productsInBasket.includes(product.id));
    });

    return (
        <div className="box">
            <h2 className="title">Basket</h2>
            {productsInBasket.length === 0 ? (
                <p>{basketText[language]}</p>
            ) : (
                <ul>
                    {productsInBasket.map((product) => (
                       <BasketItem key={product.id} {...product} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Basket;
