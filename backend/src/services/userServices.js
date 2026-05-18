import { pool } from "../config/db.js";

// Criar usuário
export const createUser = async ({
    nome,
    email,
    senha
}) => {

    try {
        await pool.query(
            `INSERT INTO usuarios (nome, email, senha)
             VALUES ($1, $2, $3)`,
            [nome, email, senha]
        );

        return {
            message: "Usuário cadastrado com sucesso"
        };

    } catch (error) {
        console.log("Erro ao cadastrar usuário", error);
    }

};

// Login do usuário
export const loginUser = async ({ email, senha }) => {

    try {
        const result = await pool.query(
            "SELECT * FROM usuarios WHERE email = $1",
            [email]
        );

        const usuario = result.rows[0];

        // Usuário não encontrado
        if (!usuario) {
            return null;
        }

        // Senha incorreta
        if (usuario.senha !== senha) {
            return null;
        }

        return {
            message: "Login realizado com sucesso",
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email
            }
        };

    } catch (error) {
        console.log("Erro ao fazer login", error);
    }
};

// Buscar todos os usuários
export const getAllUsers = async () => {
    try {
        const result = await pool.query(
            "SELECT id, nome, email FROM usuarios"
        );

        return result.rows;

    } catch (error) {
        console.log("Erro ao buscar usuários", error);
    }
};

// Buscar usuário por ID
export const getUserById = async (id) => {
    try {
        const result = await pool.query(
            "SELECT id, nome, email FROM usuarios WHERE id = $1",
            [id]
        );

        return result.rows[0] || null;

    } catch (error) {
        console.log("Erro ao buscar usuário", error);
    }
};

// Atualizar usuário
export const updateUser = async (
    id,
    {
        nome,
        email,
        senha
    }
) => {
    try {
        await pool.query(
            `UPDATE usuarios
             SET nome = $1,
                 email = $2,
                 senha = $3
             WHERE id = $4`,
            [nome, email, senha, id]
        );

        return {
            message: "Usuário atualizado com sucesso"
        };

    } catch (error) {
        console.log("Erro ao atualizar usuário", error);
    }
};

// Deletar usuário
export const deleteUser = async (id) => {
    try {
        await pool.query(
            "DELETE FROM usuarios WHERE id = $1",
            [id]
        );

        return {
            message: "Usuário deletado com sucesso"
        };

    } catch (error) {
        console.log("Erro ao deletar usuário", error);
    }
};