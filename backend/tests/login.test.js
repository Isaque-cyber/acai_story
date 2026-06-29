import request from "supertest";
import app from "../src/app.js";
describe("Login", () => {

  const email = `login${Date.now()}@gmail.com`;

  beforeAll(async () => {
    await request(app)
      .post("/usuarios")
      .send({
        nome: "Usuario Login",
        email,
        senha: "123456"
      });
  });

  test("Deve realizar login", async () => {

    const response = await request(app)
      .post("/usuarios/login")
      .send({
        email,
        senha: "123456"
      });

    expect(response.statusCode).toBe(200);

    expect(response.body.sucesso)
      .toBe(true);
  });

});