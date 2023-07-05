const express = require("express");
const cors = require("cors");

const app = express();

const products = require("./products");
const blogs = require("./blogs");


app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});


app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const oneProduct = products.find((item) => {
    return item.id == req.params.id;
  });
  res.send(oneProduct);
});


app.get("/blogs", (req, res) => {
  res.send(blogs);
});

app.get("/blogs/:id", (req, res) => {
  const oneblogs = blogs.find((item) => {
    return item.id == req.params.id;
  });
  res.send(oneblogs);
});







const port = process.env.PORT || 5000;
app.listen(port, console.log(`http://localhost:${port}`));
