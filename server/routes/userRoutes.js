import express from "express";
const router = express.Router();
import {
  register,
  login,
  getALLUsers,
  logout,
  loggedIn,
} from "../controllers/userControllers.js";

import { isAuthenticated, isAuthorized } from "../middleware/auth.js";

router.post("/register", register);
router.post("/login", login);
router.get("/users", isAuthenticated, isAuthorized("owner"), getALLUsers);
router.get("/loggedin", loggedIn);
router.get("/logout", logout);

export default router;
