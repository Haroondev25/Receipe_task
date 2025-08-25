import express from "express";
import cors from "cors";
import morgan from "morgan";
import recipeRoutes from "./routes/recipeRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_req, res) => res.json({ status: "ok", service: "recipes-api" }));
app.use("/api/recipes", recipeRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
