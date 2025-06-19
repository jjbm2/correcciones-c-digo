import { Schema, modelo } from "mongoose";

const Esquemapalabtra = new Schema({
    name:string,
    edad:number
})


export const modelopalabras = new modelo("palabras", Esquemapalabtras)