import { Router } from "express";
import { obtenerProductos } from "../controllers/productos.controllers";

const router = Router()

// app.get('/prueba', (req, res)=>{
//   res.send('esto es un prueba de la peticion GET a mi backend');
// })

router.route('/productos').get(obtenerProductos)

  export default router