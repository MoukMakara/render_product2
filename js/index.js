import { CardComponent } from "../components/CardComponents.js";
let renderArea = document.querySelector("#render-product");
const url = "http://127.0.0.1:8080//data/products.json";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let products = data;
    products.map((product) => (renderArea.innerHTML += CardComponent(product)))
  });
