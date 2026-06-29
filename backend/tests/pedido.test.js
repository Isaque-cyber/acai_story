import request from "supertest";
import app from "../src/app.js";
describe("Pedidos", () => {

  let usuarioId;

  beforeAll(async () => {

    const usuario = await request(app)
      .post("/usuarios")
      .send({
        nome: "Usuario Pedido",
        email: `pedido${Date.now()}@gmail.com`,
        senha: "123456"
      });

    usuarioId = usuario.body.id;
  });

  test("Deve criar pedido", async () => {

    const response = await request(app)
      .post("/pedidos")
      .send({
        usuario_id: usuarioId
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.usuario_id)
      .toBe(usuarioId);
  });

  test("Deve listar pedidos", async () => {

    const response = await request(app)
      .get("/pedidos");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body))
      .toBe(true);
  });

});