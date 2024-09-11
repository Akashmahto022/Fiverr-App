import express from "express";
import {deleteUser} from './../controllers/user.controller.js'
import { tokenVerify } from "../middlewares/jwt.js";

const userRouter = express.Router();

userRouter.delete("/:id",tokenVerify, deleteUser)
userRouter.get("/:id",tokenVerify, getUser)

export default userRouter;
