import { useRef, useState } from "react";

export const CalculateDiscount = () => {
  const [price, setPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [data, setData] = useState({
    price: 0,
    discountPercentage: 0,
    discountedPrice: 0,
  });

  const refPrice = useRef();
  const refDiscount = useRef();

  const calculateDiscount = (price, discountPercentage) => {
    if (price <= 0 || discountPercentage < 0) {
      alert("Precio y descuento deben ser mayores a 0");
      return;
    }
    const discountAmount = (price * discountPercentage) / 100;
    const discounted = price - discountAmount;
    setData({
      price: price,
      discountPercentage: discountPercentage,
      discountedPrice: discounted,
    });
  };

  const handlePriceChange = () => {
    setPrice(Number(event.target.value));
  };

  const handleDiscountChange = () => {
    setDiscountPercentage(Number(event.target.value));
  };

  const resetForm = () => {
    refPrice.current.value = "";
    setPrice(0);
    refDiscount.current.value = "";
    setDiscountPercentage(0);
    setData({ price: 0, discountPercentage: 0, discountedPrice: 0 });
  };

  return (
    <div className="card">
      <h1 className="title">
        Ejercicio 1:
        <br />
        Calculate Discount
      </h1>
      <div className="form-container">
        <h3>Precio:</h3>
        <input
          ref={refPrice}
          className="txt-input"
          type="number"
          name="price"
          id="price"
          placeholder="Precio"
          onInput={handlePriceChange}
          min="0"
        />
        <h3>Descuento (%):</h3>
        <input
          ref={refDiscount}
          className="txt-input"
          type="number"
          name="discountPercentage"
          id="discountPercentage"
          placeholder="Descuento (%)"
          onInput={handleDiscountChange}
          min="0"
        />
      </div>
      <div className="buttons-container">
        <button
          className="primary-button"
          onClick={() => calculateDiscount(price, discountPercentage)}
        >
          Calcular descuento
        </button>
        <button className="secondary-button" onClick={resetForm}>
          Resetear
        </button>
      </div>
      <hr />
      <div className="data-container">
        <span className="label">Precio original: </span>
        <span>{data.price}</span>
      </div>
      <div className="data-container">
        <span className="label">Porcentaje de descuento: </span>{" "}
        <span>{data.discountPercentage}%</span>
      </div>
      <div className="data-container">
        <span className="label">Precio con descuento: </span>
        <span>{data.discountedPrice}</span>
      </div>
    </div>
  );
};
