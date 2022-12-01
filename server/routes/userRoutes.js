import express from "express";
const router = express.Router();
import {
  register,
  login,
  getALLUsers,
  logout,
} from "../controllers/userControllers.js";

import { isAuthenticated, isAuthorized } from "../middleware/auth.js";

router.post("/register", register);

router.post("/login", login);
router.get("/users", isAuthenticated, isAuthorized("owner"), getALLUsers);
router.get("/logout", logout);

export default router;
