import React, { useState } from 'react';
import ManufacturerComponent from './ManufacturerComponent';
import SupplierComponent from './SupplierComponent';
import CustomerComponent from './CustomerComponent';
import './App.css'; // Import CSS file for styling

const App = () => {
  const [supplyChainHistory, setSupplyChainHistory] = useState({});
  const [activeTab, setActiveTab] = useState('manufacturer');

  const addBlockToBlockchain = (productDetails) => {
    // Placeholder for adding block to blockchain
    // You would typically integrate with Ethereum or another blockchain platform here
    // For demonstration purposes, we'll just log the product details
    console.log('Adding product to blockchain:', productDetails);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'manufacturer':
        return <ManufacturerComponent addBlockToBlockchain={addBlockToBlockchain} />;
      case 'supplier':
        return <SupplierComponent productDetails={{}} />;
      case 'customer':
        return <CustomerComponent supplyChainHistory={supplyChainHistory} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>ProScale</h1>
      </header>
      <div className="title-bar">
        <nav className="tabs">
          <button onClick={() => setActiveTab('manufacturer')} className={activeTab === 'manufacturer' ? 'active' : ''}>Manufacturer</button>
          <button onClick={() => setActiveTab('supplier')} className={activeTab === 'supplier' ? 'active' : ''}>Supplier</button>
          <button onClick={() => setActiveTab('customer')} className={activeTab === 'customer' ? 'active' : ''}>Customer</button>
        </nav>
      </div>
      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default App;
