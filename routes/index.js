// src/route/index.js
import express from "express";
import UserRoute from "./user.js";

const router = express.Router();

router.use("/users", UserRoute);

export default router;
