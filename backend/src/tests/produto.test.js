import request from "supertest";
import app from "../app.js";

describe("Produtos", () => {

  test("Deve listar produtos", async () => {
    const response = await request(app)
      .get("/produtos");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("Deve criar produto", async () => {

    const response = await request(app)
      .post("/produtos")
      .send({
        nome: `Produto Teste ${Date.now()}`,
        descricao: "Produto criado pelo Jest",
        preco: 19.9,
        estoque: 10
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.nome)
      .toContain("Produto Teste");
  });

});