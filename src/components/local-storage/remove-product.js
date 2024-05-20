export default function removeProductLocalStorage(product) {
    let itemsInCart = JSON.parse(localStorage.getItem("cart"));
  
    for (let i = 0; i < itemsInCart.length; i++) {
      let item = itemsInCart[i];
      if (item.id === product.id) {
        itemsInCart.splice(i, 1);
      }
    }
  
    if (itemsInCart.length > 0) {
      const finalItemsInCart = JSON.stringify(itemsInCart);
      localStorage.setItem("cart", finalItemsInCart);
    } else {
      localStorage.removeItem("cart");
    }
  }