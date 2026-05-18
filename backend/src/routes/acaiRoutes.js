import { Router } from "express";

import {
  createAcai,
  getAllAcais,
  getAcaiById,
  updateAcai,
  deleteAcai
} from "../services/acaiServices.js";

const router = Router();

// Buscar todos os açaís
router.get("/", async (req, res) => {

  try {

    const acais = await getAllAcais();

    return res.status(200).json(acais);

  } catch (error) {

    return res.status(500).json({
      error: error.message
    });

  }
});

// Buscar açaí por ID
router.get("/:id", async (req, res) => {

  const idAcai = Number(req.params.id);

  try {

    const acai = await getAcaiById(idAcai);

    if (!acai) {
      return res.status(404).json({
        message: "Açaí não encontrado"
      });
    }

    return res.status(200).json(acai);

  } catch (error) {

    return res.status(500).json({
      error: error.message
    });

  }
});

// Criar açaí
router.post("/", async (req, res) => {

  try {

    const acai = await createAcai(req.body);

    return res.status(201).json(acai);

  } catch (error) {

    return res.status(500).json({
      error: error.message
    });

  }
});

// Atualizar açaí
router.put("/:id", async (req, res) => {

  const idAcai = Number(req.params.id);

  try {

    const acaiExistente = await getAcaiById(idAcai);

    if (!acaiExistente) {
      return res.status(404).json({
        message: "Açaí não encontrado"
      });
    }

    await updateAcai(idAcai, req.body);

    return res.status(200).json({
      message: "Açaí atualizado com sucesso"
    });

  } catch (error) {

    return res.status(500).json({
      error: error.message
    });

  }
});

// Deletar açaí
router.delete("/:id", async (req, res) => {

  const idAcai = Number(req.params.id);

  try {

    const acaiExistente = await getAcaiById(idAcai);

    if (!acaiExistente) {
      return res.status(404).json({
        message: "Açaí não encontrado"
      });
    }

    await deleteAcai(idAcai);

    return res.status(200).json({
      message: "Açaí deletado com sucesso"
    });

  } catch (error) {

    return res.status(500).json({
      error: error.message
    });

  }
});

export default router;