import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("phong dep trai vl!");
})

app.listen(PORT, () => {
    console.log("OK");
})