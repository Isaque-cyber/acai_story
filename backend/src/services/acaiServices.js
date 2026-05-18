import { pool } from "../config/db.js";

// Buscar todos os açaís
export const getAllAcais = async () => {
    try {
        const result = await pool.query("SELECT * FROM acais");
        return result.rows;
    } catch (error) {
        console.log("Erro ao buscar açaís", error);
    }
};

// Buscar açaí por ID
export const getAcaiById = async (id) => {
    try {
        const result = await pool.query(
            "SELECT * FROM acais WHERE id = $1",
            [id]
        );

        return result.rows[0] || null;

    } catch (error) {
        console.log("Erro ao buscar açaí por id", error);
    }
};

// Criar novo açaí
export const createAcai = async ({
    nome,
    tamanho,
    preco,
    complementos,
    descricao
}) => {
    try {
        await pool.query(
            `INSERT INTO acais 
            (nome, tamanho, preco, complementos, descricao) 
            VALUES ($1, $2, $3, $4, $5)`,
            [nome, tamanho, preco, complementos, descricao]
        );

        return { message: "Açaí cadastrado com sucesso!" };

    } catch (error) {
        console.log("Erro ao cadastrar açaí", error);
    }
};

// Atualizar açaí
export const updateAcai = async (
    id,
    {
        nome,
        tamanho,
        preco,
        complementos,
        descricao
    }
) => {
    try {
        await pool.query(
            `UPDATE acais 
            SET nome = $1,
                tamanho = $2,
                preco = $3,
                complementos = $4,
                descricao = $5
            WHERE id = $6`,
            [nome, tamanho, preco, complementos, descricao, id]
        );

        return { message: "Açaí atualizado com sucesso!" };

    } catch (error) {
        console.log("Erro ao atualizar açaí", error);
    }
};

// Deletar açaí
export const deleteAcai = async (id) => {
    try {
        await pool.query(
            `DELETE FROM acais WHERE id = $1`,
            [id]
        );

        return { message: "Açaí deletado com sucesso!" };

    } catch (error) {
        console.log("Erro ao deletar açaí", error);
    }
};