import express from "express";
import { errorMiddleware } from "../middleware/error.middleware.js";
import { apiRouter } from "../route/api.js";

export const web = express();

web.use(express.static("public"));

web.use(express.json());
web.use(apiRouter);

web.use(errorMiddleware);