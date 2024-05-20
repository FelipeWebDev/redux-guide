import { useSelector } from "react-redux";

import CartItem from "../cart-item/index";

import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";

// Styles
import * as Styles from "./styles";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const productsTotalPrice = useSelector(selectProductsTotalPrice)

  const {products} = useSelector((rootReducer) => rootReducer.cartReducer);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {products.map((products) => <CartItem key={products.id} product={products} />)}
        <Styles.CartTotal>
          {productsTotalPrice !== 0 ? `Subtotal: R$ ${productsTotalPrice}` : ""}
        </Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
