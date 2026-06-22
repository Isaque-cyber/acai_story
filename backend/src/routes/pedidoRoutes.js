import { Router } from "express";

import {
  listar,
  criar
} from "../controller/pedidoController.js";

const router = Router();

router.get("/", listar);
router.post("/", criar);

export default router;