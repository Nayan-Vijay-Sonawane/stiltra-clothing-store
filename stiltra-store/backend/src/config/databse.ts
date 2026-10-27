import mongoose from "mongoose";
import { env } from "./env";

export async function connectionDatabase(): Promise<void> {
    await mongoose.connect(env.mongoUri);

    console.log("MongoDB connected Successfully ");
}