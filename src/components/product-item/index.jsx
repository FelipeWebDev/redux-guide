import { BsCartPlus } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/actions";

// Components
import CustomButton from "../custom-button/index";
import addProductLocalStorage from "../local-storage/add-product";

// Styles
import * as Styles from "./styles";

// Utilities

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCartClick = () => {
    dispatch(addProductToCart(product));
    addProductLocalStorage(product);
  }

  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton onClick={handleAddToCartClick} startIcon={<BsCartPlus />}>
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
