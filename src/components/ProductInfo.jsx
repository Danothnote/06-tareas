import { useEffect, useState } from "react";

export const ProductInfo = () => {
  const [products, setProducts] = useState([
    { name: "Teclados", quantity: 10, price: 10 },
    { name: "Monitores", quantity: 5, price: 200 },
    { name: "Mouse", quantity: 0, price: 5 },
  ]);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const handleSelectChange = () => {
    if (products[event.target.value].quantity === 0) {
      setSelectedProduct({
        name: products[event.target.value].name,
        quantity: "Fuera de Stock",
        price: products[event.target.value].price,
      });
    } else {
      setSelectedProduct(products[event.target.value]);
    }
  };

  return (
    <div className="card">
      <h1 className="title">
        Ejercicio 6:
        <br />
        Información del producto
      </h1>
      <div className="form-container">
        <select
          name="products"
          className="txt-input"
          onChange={handleSelectChange}
        >
          {products.map((product, index) => (
            <option key={index} value={index}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
      <hr />
      <div>
        <h2 className="title">{selectedProduct.name}</h2>
        <div className="data-container">
            <span className="label">Cantidad: </span>
            <span>{selectedProduct.quantity}</span>
        </div>
        <div className="data-container">
            <span className="label">Precio: </span>
            <span>{selectedProduct.price}</span>
        </div>
      </div>
    </div>
  );
};
