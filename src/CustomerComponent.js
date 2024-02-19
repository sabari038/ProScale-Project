import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';
import './CustomerComponent.css'; // Import CSS file for styling

const CustomerComponent = ({ supplyChainHistory }) => {
  const [scannedProductDetails, setScannedProductDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleScan = (data) => {
    if (data) {
      try {
        const productDetails = JSON.parse(data);
        setScannedProductDetails(productDetails);
        setErrorMessage('');
      } catch (error) {
        setErrorMessage('Invalid QR code');
        setScannedProductDetails(null); // Reset scanned product details when invalid QR code is scanned
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
    setErrorMessage('Error scanning QR code');

    // Reset scanned product details when error occurs
    setScannedProductDetails(null);
  };

  const clearScan = () => {
    setScannedProductDetails(null);
    setErrorMessage('');
  };

  const verifyProduct = () => {
    if (!scannedProductDetails) {
      setErrorMessage('No QR code scanned');
      return;
    }

    // Verification logic based on supply chain history and scanned product details
    const lastLocation = supplyChainHistory[scannedProductDetails.productId]?.[0]?.shopDestination;
    if (lastLocation === 'Customer') {
      alert('Product is genuine.');
    } else {
      alert('Product is not genuine.');
    }
  };

  return (
    <div className="customer-container">
      <h2>Customer</h2>
      <div className="qr-scanner-container">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '20%' }}
        />
      </div>
      <div className="product-details">
        <h3>Scanned Product Details</h3>
        <p>{scannedProductDetails ? JSON.stringify(scannedProductDetails) : errorMessage}</p>
        {errorMessage && errorMessage !== 'Invalid QR code' && <p className="error">{errorMessage}</p>}
      </div>
      <div className="button-container">
        <button className="verify-button" onClick={verifyProduct}>Verify Product</button>
        <button className="clear-button" onClick={clearScan}>Clear</button>
      </div>
    </div>
  );
};

export default CustomerComponent;
