export default function addProductLocalStorage(product) {
  let itemsInCart = localStorage.getItem("cart");
  if (itemsInCart) {
    let newItemsInCart = JSON.parse(itemsInCart);

    newItemsInCart.forEach(function (item) {
      if (item.id === product.id) {
        item.quantity =  item.quantity + 1;
      } else {
        product.quantity = 1;
        newItemsInCart.push(product);
      }
    });

    const finalItemsInCart = JSON.stringify(newItemsInCart);
    localStorage.setItem("cart", finalItemsInCart);
  } else {
    product.quantity = 1;
    localStorage.setItem("cart", JSON.stringify([product]));
  }
}
