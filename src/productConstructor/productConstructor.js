class Contenedor {
  constructor() {
    this.arrayProductos = [];
  }
  getAll() {
    return this.arrayProductos;
  }
  getById(id) {
    const productFound = this.getAll().find((element) => element.id == id);
    if (isNaN(id) || id == 0 || id > this.arrayProductos.length) {
      return { error: `producto no encontrado` };
    } else {
      return productFound;
    }
  }
  saveProduct(product) {
    product.id = this.arrayProductos.length + 1;
    this.arrayProductos.push(product);
    return product;
  }
  modifyProduct(id, product) {
    product.id = id;
    this.getAll().splice(id - 1, 1, product);
    return this.getById(id);
  }
  deleteProduct(id) {
    this.arrayProductos = this.getAll().filter((element) => element.id !== id);
    return { msg: `${id} ID eliminado` };
  }
}

module.exports = Contenedor;
