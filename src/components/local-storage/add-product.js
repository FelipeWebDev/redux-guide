export default function addProductLocalStorage(product) {
  let itemsInCart = localStorage.getItem("cart");
  if (itemsInCart) {
    let newItemsInCart = JSON.parse(itemsInCart);
    let productExists = false;

    for (var i = 0; i < newItemsInCart.length; i++) {
      let item = newItemsInCart[i];
      if (item.id === product.id) {
        item.quantity += 1;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
      product.quantity = 1;
      newItemsInCart.push(product);
    }

    const finalItemsInCart = JSON.stringify(newItemsInCart);
    localStorage.setItem("cart", finalItemsInCart);
  } else {
    product.quantity = 1;
    localStorage.setItem("cart", JSON.stringify([product]));
  }
}
