const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const config = require("./config");
const port = config.port || 3000;
const app = module.exports = express();
const products_controller = require('./products_controller');

app.use(cors());
app.use(json());


app.post( '/api/product', products_controller.create );
app.get( '/api/products', products_controller.getAll );
app.get( '/api/product/:id', products_controller.getOne );
app.put( '/api/product/:id', products_controller.update );
app.delete( '/api/product/:id', products_controller.delete );


massive(config.massiveConnectionString).then(dbInstance => {
  app.set("db", dbInstance);
})

app.listen(port, ()=> console.log(`Listening on Port ${3000}`));
