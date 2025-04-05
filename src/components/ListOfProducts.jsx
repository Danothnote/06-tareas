import { useState } from "react";

export const ListOfProducts = () => {
  const [products, setProducts] = useState(["manzanas", "bananas", "naranjas"]);
  const [selectedProduct, setSelectedProduct] = useState({
    name: products[0],
    quantity: 10,
  });

  const handleSelectChange = () => {
    if (products[event.target.value] === "manzanas") {
      setSelectedProduct({
        name: products[event.target.value],
        quantity: 10,
      });
    }
    if (products[event.target.value] === "bananas") {
      setSelectedProduct({
        name: products[event.target.value],
        quantity: "Fuera de stock",
      });
    }
    if (products[event.target.value] === "naranjas") {
      setSelectedProduct({
        name: products[event.target.value],
        quantity: "Stock completo",
      });
    }
  };

  return (
    <div className="card">
      <h1 className="title">
        Ejercicio 7:
        <br />
        Listado de Productos
      </h1>
      <div className="form-container">
        <h3>Productos:</h3>
        <select
          name="products"
          className="txt-input"
          onChange={handleSelectChange}
        >
          {products.map((product, index) => (
            <option key={index} value={index}>
              {product}
            </option>
          ))}
        </select>
      </div>
      <hr />
      <div>
        <div className="data-container">
          <span className="label">Producto: </span>
          <span>{selectedProduct.name}</span>
        </div>
        <div className="data-container">
          <span className="label">Cantidad: </span>
          <span>{selectedProduct.quantity}</span>
        </div>
      </div>
    </div>
  );
};
