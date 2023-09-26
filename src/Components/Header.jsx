// src\Components\Header.jsx
import React, { useState } from "react";
import productsData from "../Data/products.json";

const Header = ({
  selectedProducts,
  handleProductSelect,
  cart,
  handleAddToCart,
  clearCart,
}) => {
  const [selectedProductId, setSelectedProductId] = useState("");
  const [selectedProductQuantity, setSelectedProductQuantity] = useState(1);
  const selectedProduct = productsData.find(
    (product) => product.id === selectedProductId
  );

  const handleProductChange = (event) => {
    const productId = parseInt(event.target.value);
    setSelectedProductId(productId);
    setSelectedProductQuantity(1);
  };

  const handleQuantityChange = (event) => {
    setSelectedProductQuantity(parseInt(event.target.value));
  };

  return (
    <div className="card text-bg-info m-3 rounded-pill">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col">
            <select
              className="form-select"
              onChange={handleProductChange}
              value={selectedProductId}
            >
              <option value="">Select a product</option>
              {productsData.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              name="productTitle"
              disabled
              placeholder="Product Title"
              value={selectedProduct ? selectedProduct.name : ""}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="number"
              name="quantity"
              min="1"
              placeholder="Quantity"
              value={selectedProductQuantity}
              onChange={handleQuantityChange}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="number"
              name="unitPrice"
              disabled
              placeholder="Unit Price"
              value={selectedProduct ? selectedProduct.price : ""}
            />
          </div>
          <div className="col">
            <button
              className="btn btn-primary px-5"
              onClick={() => {
                if (selectedProduct && selectedProductQuantity > 0) {
                  handleAddToCart(selectedProduct, selectedProductQuantity);
                  setSelectedProductId("");
                  setSelectedProductQuantity(1);
                }
              }}
            >
              Add
            </button>
          </div>
          <div className="col">
            <button className="btn btn-warning px-5" onClick={clearCart}>
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
