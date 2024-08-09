import express, { Router } from "express";
import { deleteUser } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/test", deleteUser);

export default userRouter;
