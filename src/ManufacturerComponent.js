import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './ManufacturerComponent.css'; // Import the CSS file

const ManufacturerComponent = ({ addBlockToBlockchain }) => {
  const [productDetails, setProductDetails] = useState({
    productId: '',
    productName: '',
    manufacturingDate: '',
    manufacturerId: '',
  });

  const [qrCodeGenerated, setQRCodeGenerated] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateQRCode = () => {
    if (!productDetails.productId || !productDetails.productName || !productDetails.manufacturingDate) {
      setError('Please fill all required fields');
      return;
    }

    addBlockToBlockchain(productDetails);
    setProductDetails({
      productId: '',
      productName: '',
      manufacturingDate: '',
      manufacturerId: '',
    });
    setQRCodeGenerated(true);
    setError('');
  };

  return (
    <div className="manufacturer-container">
      <h2 className="manufacturer-heading">Manufacturer</h2>
      <div className="form-group">
        <label htmlFor="productId" className="input-label">Product ID</label>
        <input
          type="text"
          id="productId"
          value={productDetails.productId}
          onChange={(e) => setProductDetails({ ...productDetails, productId: e.target.value })}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="productName" className="input-label">Product Name</label>
        <input
          type="text"
          id="productName"
          value={productDetails.productName}
          onChange={(e) => setProductDetails({ ...productDetails, productName: e.target.value })}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label htmlFor="manufacturingDate" className="input-label">Manufacturing Date</label>
        <input
          type="date"
          id="manufacturingDate"
          value={productDetails.manufacturingDate}
          onChange={(e) => setProductDetails({ ...productDetails, manufacturingDate: e.target.value })}
          className="input-field"
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="button-container">
        <button className="generate-button" onClick={handleGenerateQRCode}>Generate QR Code</button>
      </div>
      {qrCodeGenerated && (
        <div className="qr-code-container">
          <p className="qr-code-text">QR Code Generated:</p>
          <div className="qr-code">
            <QRCode value={JSON.stringify(productDetails)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ManufacturerComponent;
