import modelopalabras from '../models/palabras.model.js';// corchetes y ruta

modelopalabras.create({ //create 
    name: "jessy",//comillas
    edad: 24
})

export const test = () =>{ //export 
    console.log("llamando al controlador")
}