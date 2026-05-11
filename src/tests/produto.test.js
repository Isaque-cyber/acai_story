const request = require("supertest");

const app = require("../app");

describe("Testes da API Acai Story", () => {

  test("Deve acessar rota principal", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
  });

  test("Deve listar produtos", async () => {
    const response = await request(app).get("/produtos");

    expect(response.statusCode).toBe(200);
  });

  test("Deve criar produto", async () => {
    const response = await request(app)
      .post("/produtos")
      .send({
        nome: "Açaí Teste",
        preco: 15.5,
        estoque: 10
      });

    expect(response.statusCode).toBe(201);
  });

});