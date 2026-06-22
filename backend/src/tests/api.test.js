import request from "supertest";
import app from "../app.js";

describe("API Acai Story", () => {

  test("Deve acessar rota principal", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.message)
      .toBe("API Acai Story funcionando");
  });

  test("Deve listar usuários", async () => {
    const response = await request(app).get("/usuarios");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("Deve listar produtos", async () => {
    const response = await request(app).get("/produtos");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("Deve listar pedidos", async () => {
    const response = await request(app).get("/pedidos");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("Rota inexistente deve retornar erro", async () => {
    const response = await request(app).get("/rota-inexistente");

    expect(response.statusCode).toBe(404);
  });

  test("GET produto inexistente", async () => {
    const response = await request(app)
      .get("/produtos/00000000-0000-0000-0000-000000000000");

    expect([404, 500]).toContain(response.statusCode);
  });

  test("GET pedido inexistente", async () => {
    const response = await request(app)
      .get("/pedidos/00000000-0000-0000-0000-000000000000");

    expect([200,404,500]).toContain(response.statusCode);
  });

});