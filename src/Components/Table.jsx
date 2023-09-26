// src\Components\Table.jsx
import React from 'react';

const Table = ({ selectedProducts, handleDelete, handleQuantityChange }) => {
  // Calculate the total price of all items in the cart
  const calculateTotal = () => {
    let total = 0;
    for (const cartItem of selectedProducts) {
      total += cartItem.price * cartItem.quantity;
    }
    return total;
  };

  return (
    <div className="card m-3">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Quantity</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                <input
                  className="form-control"
                  type="number"
                  name="quantity"
                  min="1"
                  value={product.quantity}
                  onChange={(event) => handleQuantityChange(product.id, event.target.value)}
                />
              </td>
              <td>{product.price}</td>
              <td>{product.price * product.quantity}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {/* Grand Total row */}
          <tr>
            <td colSpan="5" className="text-end text-success">
              <h2>Grand Total</h2>
            </td>
            <td colSpan="2" className="bg-success text-white rounded-pill text-center">
              <h2>Rs. {calculateTotal()}</h2>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
