import express, { Router } from "express";
import { tokenVerify } from "../middlewares/jwt.js";
import {
  createGig,
  deleteGig,
  getGig,
  getGigs,
} from "../controllers/gig.controller.js";

const gigRouter = express.Router();

gigRouter.post("/create", tokenVerify, createGig);
gigRouter.delete("/:id", tokenVerify, deleteGig);
gigRouter.get("/single/:id", tokenVerify, getGig);
gigRouter.post("/", tokenVerify, getGigs);

export default gigRouter;
