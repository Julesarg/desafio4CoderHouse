const express = require(`express`);
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiProductos = [{ title: "title1", price: "price1", thumbnail:"thumbnail1",id:"1" },{ title: "title1", price: "price1",thumbnail2:"thumbnail2",id:"2" }];

// app.get("/api/productos", (req, res) => {
//   if (apiProductos == ``) {
//     res.send(`<h1> La lista esta vacia</h1>`);
//   } else {
//     res.send(`<h1> Lista: </br> ${JSON.stringify(apiProductos)}<h1>`);
//   }
// });

// app.get("/api/productos/:id", (req, res) => {
//     const id = parseInt(req.params.id)

//     let productoElegidoPorId = () => {
//         const resultadoProducto = apiProductos.filter(element => element.id == id)
//         return resultadoProducto
//     }

//     if(isNaN(id) || id <= 0 || id > apiProductos.length){
//         return res.send({error: `producto no encontrado`});
//     }
//     else {    
//         return res.send(productoElegidoPorId());
//     }
// });


app.post("/api/productos", (req, res) => {
  res.send();
});

app.put("/api/productos:id", (req, res) => {
  res.send();
});

app.delete("/api/productos:id", (req, res) => {
  res.send();
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
