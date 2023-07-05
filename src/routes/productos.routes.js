import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  obtenerProducto,
  obtenerProductos,
} from "../controllers/productos.controllers";
import validarProducto from "../helpers/validarProducto";

const router = Router();

// app.get('/prueba', (req, res)=>{
//   res.send('esto es un prueba de la peticion GET a mi backend');
// })

router
  .route("/productos")
  .get(obtenerProductos)
  .post( validarProducto, crearProducto
  );
router
  .route("/productos/:id")
  .delete(borrarProducto)
  .put(validarProducto, editarProducto)
  .get(obtenerProducto);

export default router;
