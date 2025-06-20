import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // 'corse' estaba mal escrito
import { test } from "./backend/contollers/controller.js"; //  'controllers' 

dotenv.config(); // Faltaban los paréntesis para ejecutar dotenv.config()


mongoose.connect(process.env.urlbd) // 'conect' → 'connect'
  .then(() => {
    console.log("Funciona la conexión de la base de datos");
  })
  .catch(() => {
    console.log("No funciona la conexión a la base de datos");
  });

const app = express();


app.use(cors()); //  'usa' → 'use' 

app.listen(4000, () => { // 'liste' → 'listen'
  console.log("Escuchando al servidor"); // 'console.long' → 'console.log'
});

test(); // 'test' estaba sin ejecutar
