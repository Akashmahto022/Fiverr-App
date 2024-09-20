import express, { Router } from "express";
import {createReview} from '../controllers/review.controller.js'

const reviewRouter = express.Router();

reviewRouter.post("/createreview", createReview)

export default reviewRouter;
