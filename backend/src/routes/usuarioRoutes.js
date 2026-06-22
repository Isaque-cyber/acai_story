import { Router } from "express";

import {
  listar,
  criar,
  login
} from "../controller/usuarioController.js";

const router = Router();

router.get("/", listar);

router.post("/", criar);

router.post("/login", login);

export default router;