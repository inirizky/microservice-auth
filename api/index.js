import express from "express";
import cors from "cors";
import "dotenv/config";

import router from "../routes/index.js";
const app = express(); // init express

app.use(
  cors({
    origin: process.env.BASE_URL, // frontend kamu
    credentials: true, // harus true karena pakai cookies
  })
);
app.get("/", (req, res) => {
  res.send("Hello World");
}); //

app.use(express.json()); //
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
