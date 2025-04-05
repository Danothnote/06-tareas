import { useState } from "react";

export const CalculateDiscount = () => {
  const [price, setPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);

  const calculateDiscount = (price, discountPercentage) => {
    if (price <= 0 || discountPercentage < 0) {
      alert("Precio y descuento deben ser mayores a 0");
      return;
    }
    const discountAmount = (price * discountPercentage) / 100;
    const discounted = price - discountAmount;
    setDiscountedPrice(discounted);
  };

  const handlePriceChange = () => {
    setPrice(Number(event.target.value));
  };

  const handleDiscountChange = () => {
    setDiscountPercentage(Number(event.target.value));
  };

  return (
    <>
      <h1 className="title">Calculate Discount</h1>
      <h3 className="label">Precio:</h3>
      <input
        className="txt-input"
        type="number"
        name="price"
        id="price"
        onInput={handlePriceChange}
        min="0"
      />
      <h3 className="label">Descuento (%):</h3>
      <input
        className="txt-input"
        type="number"
        name="discountPercentage"
        id="discountPercentage"
        onInput={handleDiscountChange}
        min="0"
      />
      <div>
        <button
          className="primary-button"
          onClick={() => calculateDiscount(price, discountPercentage)}
        >
          Calcular descuento
        </button>
      </div>

      <p className="label">Precio original: {price}</p>
      <p className="label">Porcentaje de descuento: {discountPercentage}%</p>
      <p className="label">Precio final: {discountedPrice}</p>
    </>
  );
};
