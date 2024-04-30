import express from "express";
import { storeTodo } from "../controllers/todoController.js";

const router = express.Router();


router.post("/", storeTodo);


export default router;
