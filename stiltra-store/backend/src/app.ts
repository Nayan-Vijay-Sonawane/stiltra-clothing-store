import express from "express";
import cors from "cors";
import { env } from "./config/env";
import apiRouter from "./routes";

const app = express();

app.use(
    cors({
        origin: env.frontendUrl,
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use("/api", apiRouter);

export default app;
