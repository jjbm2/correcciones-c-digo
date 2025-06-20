import { Schema, model } from "mongoose"//eliminar punto y coma al final de la linea

const EsquemaPalabtras = new Schema({
    name: String,//usar mayusculas en las variables
    edad: Number//mayusculas en las variables 
})


export const modelopalabras = new modelo("Palabras", EsquemaPalabtras)//Mayusculas en las variables y eliminar punto y coma al final de la linea