import { Router } from "express";

import {
  listar,
  criar,
  adicionarItem,
  buscarPorId
} from "../controller/pedidoController.js";

const router = Router();

router.get("/", listar);

router.get("/:id", buscarPorId);

router.post("/", criar);

router.post("/item", adicionarItem);

export default router;