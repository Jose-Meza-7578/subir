import express from "express";
import cors from "cors";
import { FRONTEND_PATH, PORT } from "./config.js";


const app = express({
    origin: FRONTEND_PATH
});

app.use(cors());

app.get("/hola", (req, res) => {
  res.send("Hello World");
});


app.listen(PORT, () => {
  console.log("Server running on port 3000");
});