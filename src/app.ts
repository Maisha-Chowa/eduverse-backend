import express, { Application } from "express";
import cors from "cors";
const port = 3000;

const app: Application = express();
// parser
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Hello World!");
});


export default app;
