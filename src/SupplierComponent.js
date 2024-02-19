import React, { useState } from 'react';
import './SupplierComponent.css';

const SupplierComponent = ({ sendProductDetailsToCustomer }) => {
  const [productDetails, setProductDetails] = useState({
    productId: '',
    productName: '',
    manufacturingDate: '',
    manufacturerId: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const handleSendToCustomer = () => {
    // Check if all fields are filled
    const { productId, productName, manufacturingDate, manufacturerId } = productDetails;
    if (!productId || !productName || !manufacturingDate || !manufacturerId) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // Reset error message if present
    setErrorMessage('');

    // Send product details to the customer
    sendProductDetailsToCustomer(productDetails);

    // Show success message
    setSuccessMessage('Product details sent successfully to the customer.');

    // Clear the form
    setProductDetails({
      productId: '',
      productName: '',
      manufacturingDate: '',
      manufacturerId: '',
    });
  };

  const clearMessages = () => {
    setErrorMessage('');
    setSuccessMessage('');
  };

  return (
    <div className="supplier-container">
      <h2 className="supplier-heading">Supplier Page</h2>
      <div className="input-container">
        <label htmlFor="productId" className="input-label">
          Product ID:
          <input type="text" id="productId" name="productId" value={productDetails.productId} onChange={handleChange} className="input-field" />
        </label>
      </div>
      <div className="input-container">
        <label htmlFor="productName" className="input-label">
          Product Name:
          <input type="text" id="productName" name="productName" value={productDetails.productName} onChange={handleChange} className="input-field" />
        </label>
      </div>
      <div className="input-container">
        <label htmlFor="manufacturingDate" className="input-label">
          Manufacturing Date:
          <input type="date" id="manufacturingDate" name="manufacturingDate" value={productDetails.manufacturingDate} onChange={handleChange} className="input-field" />
        </label>
      </div>
      <div className="input-container">
        <label htmlFor="manufacturerId" className="input-label">
          Manufacturer ID:
          <input type="text" id="manufacturerId" name="manufacturerId" value={productDetails.manufacturerId} onChange={handleChange} className="input-field" />
        </label>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <button onClick={handleSendToCustomer} className="send-button" onMouseDown={clearMessages}>Send Product Details to Customer</button>
    </div>
  );
};

export default SupplierComponent;
