export default function decreaseProductLocalStorage(product) {
    let itemsInCart = JSON.parse(localStorage.getItem("cart"));
  
    for (let i = 0; i < itemsInCart.length; i++) {      
      let item = itemsInCart[i];
      
      if (item.id === product.id) {
        if (item.quantity) {
          item.quantity = item.quantity > 1 ? item.quantity - 1 : itemsInCart.splice(i, 1)
        } else if (item.quantity === 0 || !item.quantity) {
          itemsInCart.splice(i, 1)
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