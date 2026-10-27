import dotenv from "dotenv";

dotenv.config();

const port = Number(process.env.PORT ?? 5000);
const mongoUri = process.env.MONGODB_URI;

if(!Number.isInteger(port) || port < 1 || port > 65535){
    throw new Error("PORT must be a valid port number");
}

if(!mongoUri){
    throw new Error("MONGODB_URI is missing from backend/.env");
}

export const env = {
    port,
    mongoUri,
    frontendUrl: process.env.FRONTEND_URL ?? "https://localhost:3000",
    nodeEnv: process.env.NODE_ENV ?? "development",
};