import {
  getAllProducts,
  addProduct,
} from "../services/productService.js";

describe("Product Service", () => {
  test("deve listar produtos", () => {
    const products = getAllProducts();

    expect(products.length).toBeGreaterThan(0);
  });

  test("deve adicionar um produto", () => {
    const newProduct = {
      id: 10,
      name: "Açaí Premium",
      price: 30,
    };

    const result = addProduct(newProduct);

    expect(result).toEqual(newProduct);
  });

  test("deve retornar erro ao adicionar produto inválido", () => {
    const invalidProduct = {
      id: 11,
    };

    expect(() => addProduct(invalidProduct)).toThrow(
      "Dados inválidos"
    );
  });
});