import express from "express";
import inicio from "./routes/inicio_router.js";

//crear aplicación
const app = express();

//acceso a los datos del formulario 
app.use(express.urlencoded({extended:true}))


//carpeta publica
app.use(express.static("public"));

//routing
app.use("/", inicio);

//definiendo el puerto
// puede ocupar del 1024 en adelante
const port = 2800;
app.listen(port, () => {
    console.log(`Esperando peticiones en el puerto ${port}`);
})