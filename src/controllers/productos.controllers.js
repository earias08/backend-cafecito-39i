import Producto from "../models/producto";

// Controlador para obtener productos
export const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los productos",
    });
  }
};

// Controlador para crear un producto
export const crearProducto = async (req, res) => {
  try {
    const productoNuevo = new Producto(req.body);
    await productoNuevo.save();
    res.status(201).json({
      mensaje: "El producto fue creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al crear al producto",
    });
  }
};

export const borrarProducto = async (req, res) => {
  try {
    //obtener el id y luego solicitar a moongoose el borrar
    console.log(req.params.id);
    await Producto.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El producto fue eliminado",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "El producto no pudo ser eliminado",
    });
  }
};

export const editarProducto = async (req, res) => {
  try {
    //extraer el id del request y el body
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "El producto fue actualizado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "El producto no pudo ser editado",
    });
  }
};

export const obtenerProducto = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    res.status(200).json(producto);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se pudo obtener el producto buscado",
    });
  }
};