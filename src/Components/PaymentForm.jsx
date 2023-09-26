import React, { useState } from 'react';

const PaymentForm = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('cash');

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <div className="my-3">
      <div className="mt-2 ms-3">
        <div>
          <span className="me-3">Payment Method:</span>
          <span>
            <input
              type="radio"
              name="paymentMethod"
              id="cash"
              checked={selectedPaymentMethod === 'cash'}
              onChange={() => handlePaymentMethodChange('cash')}
            />
            <label htmlFor="cash">Cash</label>
          </span>
          <span className="ms-3">
            <input
              type="radio"
              name="paymentMethod"
              id="card"
              checked={selectedPaymentMethod === 'card'}
              onChange={() => handlePaymentMethodChange('card')}
            />
            <label htmlFor="card">Card</label>
          </span>
          <span className="ms-3">
            <input
              type="radio"
              name="paymentMethod"
              id="credit"
              checked={selectedPaymentMethod === 'credit'}
              onChange={() => handlePaymentMethodChange('credit')}
            />
            <label htmlFor="credit">Credit</label>
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-center mx-5 my-3">
        <button className="btn btn-primary p-2">Collect Cash</button>
        <button className="btn btn-primary p-2 ms-3">Print Invoice</button>
        <button className="btn btn-primary p-2 ms-3">Cancel Order</button>
        <button className="btn btn-primary p-2 ms-3">Hold Order</button>
      </div>
    </div>
  );
};

export default PaymentForm;
