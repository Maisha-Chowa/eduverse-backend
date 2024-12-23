import dotenv from "dotenv";
import path from "path";

//console.log(dotenv.config(process.cwd());
//console.log(dotenv.config({path: path.join(process.cwd(),'.env')}));
dotenv.config({ path: path.join(process.cwd(), ".env") });
export default {
    NODE_ENV: process.env.NODE_ENV,
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,}
