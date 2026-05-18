import request from "supertest";
import app from "../src/app.js";

describe("Rotas de Açaí", () => {

    // Buscar todos os açaís
    test("Deve retornar todos os açaís", async () => {

        const response = await request(app)
            .get("/acais");

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);

    });

    // Criar novo açaí
    test("Deve criar um novo açaí", async () => {

        const novoAcai = {
            nome: "Açaí Supremo",
            tamanho: "500ml",
            preco: 24.90,
            complementos: "Granola, Banana",
            descricao: "Açaí com banana e granola"
        };

        const response = await request(app)
            .post("/acais")
            .send(novoAcai);

        expect(response.statusCode).toBe(201);

        expect(response.body).toHaveProperty(
            "message",
            "Açaí cadastrado com sucesso!"
        );

    });

    // Buscar açaí por ID
    test("Deve buscar um açaí por ID", async () => {

        const response = await request(app)
            .get("/acais/1");

        expect([200, 404]).toContain(response.statusCode);

    });

    // Atualizar açaí
    test("Deve atualizar um açaí", async () => {

        const acaiAtualizado = {
            nome: "Açaí Premium",
            tamanho: "700ml",
            preco: 32.90,
            complementos: "Nutella, Morango",
            descricao: "Açaí premium com nutella"
        };

        const response = await request(app)
            .put("/acais/1")
            .send(acaiAtualizado);

        expect([200, 404]).toContain(response.statusCode);

    });

    // Deletar açaí
    test("Deve deletar um açaí", async () => {

        const response = await request(app)
            .delete("/acais/1");

        expect([200, 404]).toContain(response.statusCode);

    });

});