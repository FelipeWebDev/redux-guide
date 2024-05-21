export default function decreaseProductLocalStorage(product) {
    let itemsInCart = JSON.parse(localStorage.getItem("cart"));
  
    for (let i = 0; i < itemsInCart.length; i++) {      
      let item = itemsInCart[i];
      
      if (item.id === product.id) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          break;
        } else {
          itemsInCart.splice(i, 1);
          break;
        }
      }
    }
  
    if (itemsInCart.length > 0) {
      const finalItemsInCart = JSON.stringify(itemsInCart);
      localStorage.setItem("cart", finalItemsInCart);
    } else {
      localStorage.removeItem("cart");
    }
  }