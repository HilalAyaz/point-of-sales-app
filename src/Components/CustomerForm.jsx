import React from 'react';

const CustomerForm = ({ selectedCustomer, selectCustomer }) => {
  const handleSelectChange = (e) => {
    selectCustomer(e.target.value);
  };

  return (
    <div className="card m-3">
      <div className="row g-3 align-items-left m-2">
        <div className="col-2">
          <div>
            Customer Id:
            <select className="ms-3 py-1" value={selectedCustomer} onChange={handleSelectChange}>
              {Array.from({ length: 10 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-auto">
          <label htmlFor="customername" className="form-label ms-2">Customer Name:</label>
        </div>
        <div className="col-auto">
          <input type="text" id="customername" className="form-control" />
        </div>
        <div className="col-auto">
          <label htmlFor="mobileno" className="col-form-label ms-4">Mobile:</label>
        </div>
        <div className="col-auto">
          <input type="number" id="mobileno" className="form-control" />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary">New Customer</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;
