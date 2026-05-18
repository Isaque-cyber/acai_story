import { Router } from "express";

import {
    createUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} from "../services/userServices.js";

const router = Router();

// Cadastro de usuário
router.post("/cadastro", async (req, res) => {
    try {

        const user = await createUser(req.body);

        return res.status(201).json(user);

    } catch (error) {

        return res.status(500).json({
            error: error.message
        });

    }
});

// Login
router.post("/login", async (req, res) => {
    try {

        const usuario = await loginUser(req.body);

        if (!usuario) {
            return res.status(401).json({
                message: "Email ou senha inválidos"
            });
        }

        return res.status(200).json(usuario);

    } catch (error) {

        return res.status(500).json({
            error: error.message
        });

    }
});

// Buscar todos os usuários
router.get("/", async (req, res) => {
    try {

        const usuarios = await getAllUsers();

        return res.status(200).json(usuarios);

    } catch (error) {

        return res.status(500).json({
            error: error.message
        });

    }
});

// Buscar usuário por ID
router.get("/:id", async (req, res) => {
    try {

        const usuario = await getUserById(req.params.id);

        if (!usuario) {
            return res.status(404).json({
                message: "Usuário não encontrado"
            });
        }

        return res.status(200).json(usuario);

    } catch (error) {

        return res.status(500).json({
            error: error.message
        });

    }
});

// Atualizar usuário
router.put("/:id", async (req, res) => {
    try {

        const usuarioAtualizado = await updateUser(
            req.params.id,
            req.body
        );

        return res.status(200).json(usuarioAtualizado);

    } catch (error) {

        return res.status(500).json({
            error: error.message
        });

    }
});

// Deletar usuário
router.delete("/:id", async (req, res) => {
    try {

        const resultado = await deleteUser(req.params.id);

        return res.status(200).json(resultado);

    } catch (error) {

        return res.status(500).json({
            error: error.message
        });

    }
});

export default router;