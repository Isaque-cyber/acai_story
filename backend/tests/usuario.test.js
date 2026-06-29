import request from "supertest";
import app from "../app.js";

describe("Usuários", () => {

  test("Deve listar usuários", async () => {
    const response = await request(app)
      .get("/usuarios");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("Deve criar usuário", async () => {

    const email =
      `teste${Date.now()}@gmail.com`;

    const response = await request(app)
      .post("/usuarios")
      .send({
        nome: "Teste Jest",
        email,
        senha: "123456"
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.nome)
      .toBe("Teste Jest");
  });

});