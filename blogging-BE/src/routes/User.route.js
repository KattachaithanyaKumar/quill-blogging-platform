import express from "express";
import {
  CreateUser,
  DeleteUser,
  GetUserById,
  GetUsers,
  UpdateUser,
} from "../controllers/User.controller.js";

const router = express.Router();

router.get("/", GetUsers);
router.get("/:id", GetUserById);
router.put("/:id", UpdateUser);
router.delete("/:id", DeleteUser);
router.post("/", CreateUser);

export default router;
