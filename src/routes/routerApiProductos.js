const { Router } = require(`express`);
const routerApiProductos = Router();
const productConstructor = require(`../productConstructor/productConstructor`);

const contenedor = new productConstructor();

///get de todos los productos OK
routerApiProductos.get("/", (req, res) => {
  contenedor.length <= 0 || contenedor.length === []
    ? res.json({ msg: `La lista esta vacia` })
    : res.json(contenedor.getAll());
});

/// get de productos por ruta ID OK
routerApiProductos.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(contenedor.getById(id));
});

////agregar productos por con ID nuevo OK
routerApiProductos.post("/", (req, res) => {
  const newProduct = req.body;
  res.json(contenedor.saveProduct(newProduct));
});

///modificar producto OK
routerApiProductos.put("/:id", (req, res) => {
  const idToModify = parseInt(req.params.id);
  const productModified = req.body;
  res.json(contenedor.modifyProduct(idToModify, productModified));
});

///borrar producto OK
routerApiProductos.delete("/:id", (req, res) => {
  const deletedId = parseInt(req.params.id);
  res.json(contenedor.deleteProduct(deletedId));
});

module.exports = routerApiProductos;
