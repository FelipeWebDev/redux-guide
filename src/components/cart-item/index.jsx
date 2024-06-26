import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  removeProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
} from "../../redux/cart/slice";

import addProductLocalStorage from "../local-storage/add-product";
import removeProductLocalStorage from "../local-storage/remove-product";
import decreaseProductLocalStorage from "../local-storage/decrease-product";

// Styles
import * as Styles from "./styles";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeProduct(product.id));
    removeProductLocalStorage(product);
  };

  const handleIncreaseClick = () => {
    dispatch(increaseProductQuantity(product.id));
    addProductLocalStorage(product);
  };

  const handleDecreaseClick = () => {
    dispatch(decreaseProductQuantity(product.id));
    decreaseProductLocalStorage(product);
  };

  return (
    <Styles.CartItemContainer>
      <Styles.CartItemImage imageUrl={product.imageUrl} />

      <Styles.CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <Styles.CartItemQuantity>
          <AiOutlineMinus
            size={20}
            onClick={handleDecreaseClick}
            aria-label={`Decrease quantity of ${product.name}`}
          />
          <p>{product.quantity}</p>
          <AiOutlinePlus
            size={20}
            onClick={handleIncreaseClick}
            aria-label={`Increase quantity of ${product.name}`}
          />
        </Styles.CartItemQuantity>
      </Styles.CartItemInfo>

      <Styles.RemoveButton
        onClick={handleRemoveClick}
        aria-label={`Remove ${product.name}`}
      >
        <AiOutlineClose size={25} />
      </Styles.RemoveButton>
    </Styles.CartItemContainer>
  );
};

export default CartItem;
