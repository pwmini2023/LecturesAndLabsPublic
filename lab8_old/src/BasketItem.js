import {useDispatch, useSelector} from "react-redux";
import {addProductToBasket, removeProductFromBasket} from "./redux/actions";

const BasketItem = (props) => {
    const dispatch = useDispatch();

    const countInBasket = useSelector(state => state.productsInBasket.filter((id) => id === props.id).length);

    const handleAddOne = () => {
        dispatch(addProductToBasket(props.id));
        console.log(`Product count with id ${props.id} increased in basket`);
    }

    const handleRemoveOne = () => {
        dispatch(removeProductFromBasket(props.id));
        console.log(`Product count with id ${props.id} decreased in basket`);
    }

    return (
        <li>
            {props.title}
            <span style={{marginLeft: 20}}>
                <button onClick={handleRemoveOne}>-</button>
                ({countInBasket})
                <button onClick={handleAddOne}>+</button>
            </span>
        </li>
    );
};

export default BasketItem;
