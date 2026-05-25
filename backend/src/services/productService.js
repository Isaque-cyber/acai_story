const products = [
  {
    id: 1,
    name: "Açaí Tradicional",
    price: 15,
  },
  {
    id: 2,
    name: "Açaí com Banana",
    price: 18,
  },
  {
    id: 3,
    name: "Açaí com Morango",
    price: 22,
  },
];

export function getAllProducts() {
  return products;
}

export function addProduct(product) {
  if (!product.name || !product.price) {
    throw new Error("Dados inválidos");
  }

  products.push(product);

  return product;
}