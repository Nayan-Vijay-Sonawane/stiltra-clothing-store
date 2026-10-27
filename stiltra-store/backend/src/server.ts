import { env } from "./config/env";
import { connectionDatabase } from "./config/databse";
import app from './app';

async function startServer(): Promise<void> {
    try{
        await connectionDatabase();

        app.listen(env.port, () => {
            console.log(`Stiltra API running at http://localhost:${env.port}`);
        });
    } 
    catch(error){
        console.log("Failed to start the server:", error);
        process.exit(1);
    }
}

void startServer();