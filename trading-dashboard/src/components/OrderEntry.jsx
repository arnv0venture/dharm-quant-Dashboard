import React, { useState } from 'react';
import './OrderEntry.css';

const OrderEntry = () => {
  const [orderType, setOrderType] = useState('limit'); // limit, market, stop-limit
  const [marginMode, setMarginMode] = useState('cross'); // cross, isolated

  return (
    <div className="order-entry-container">
      {/* Top Margin/Backtest Steps Banner */}
      <div className="oe-banner">
        <span>Backtesting strategy steps: <a href="#">Define Logic</a> &gt; <a href="#">Select Date Range</a> &gt; <a href="#">Execute</a></span>
        <a href="#" className="oe-tutorial">Strategy Tutorial</a>
      </div>

      <div className="oe-tabs-container">
        <div className="oe-tabs-left">
          <span className="oe-tab active">Spot</span>
          <span className="oe-tab">Cross 5x</span>
          <span className="oe-tab">Isolated 5x</span>
          <span className="oe-tab">Grid</span>
        </div>
        <div className="oe-tabs-right">
          <span className="text-secondary">0% Fee Level</span>
        </div>
      </div>

      <div className="oe-order-types">
        <span className={`oe-type ${orderType === 'limit' ? 'active' : ''}`} onClick={() => setOrderType('limit')}>Limit</span>
        <span className={`oe-type ${orderType === 'market' ? 'active' : ''}`} onClick={() => setOrderType('market')}>Market</span>
        <span className={`oe-type ${orderType === 'stop-limit' ? 'active' : ''}`} onClick={() => setOrderType('stop-limit')}>Stop Limit</span>
      </div>

      <div className="oe-forms">
        {/* Buy Form */}
        <div className="oe-form">
          <div className="oe-balance text-secondary">Avail <span>0.00000000 USDT</span></div>
          <div className="oe-input-group">
            <span className="oe-input-label">Price</span>
            <input type="text" className="oe-input" defaultValue="67847.42" disabled={orderType === 'market'} />
            <span className="oe-input-suffix">USDT</span>
          </div>
          <div className="oe-input-group">
            <span className="oe-input-label">Size</span>
            <input type="text" className="oe-input" placeholder="0.00" />
            <span className="oe-input-suffix">BTC</span>
          </div>
          
          <div className="oe-slider-container">
            <div className="oe-slider-track"></div>
            <div className="oe-slider-points">
              <div className="oe-slider-point"></div>
              <div className="oe-slider-point"></div>
              <div className="oe-slider-point"></div>
              <div className="oe-slider-point"></div>
              <div className="oe-slider-point"></div>
            </div>
          </div>

          <div className="oe-input-group">
            <span className="oe-input-label">Total</span>
            <input type="text" className="oe-input" placeholder="0.00" />
            <span className="oe-input-suffix">USDT</span>
          </div>
          
          <button className="oe-submit-btn bg-buy">Log Buy/Long Status</button>
        </div>

        {/* Sell Form */}
        <div className="oe-form">
          <div className="oe-balance text-secondary">Avail <span>0.00000000 BTC</span></div>
          <div className="oe-input-group">
            <span className="oe-input-label">Price</span>
            <input type="text" className="oe-input" defaultValue="67847.42" disabled={orderType === 'market'} />
            <span className="oe-input-suffix">USDT</span>
          </div>
          <div className="oe-input-group">
            <span className="oe-input-label">Size</span>
            <input type="text" className="oe-input" placeholder="0.00" />
            <span className="oe-input-suffix">BTC</span>
          </div>
          
          <div className="oe-slider-container">
            <div className="oe-slider-track"></div>
            <div className="oe-slider-points">
              <div className="oe-slider-point"></div>
              <div className="oe-slider-point"></div>
              <div className="oe-slider-point"></div>
              <div className="oe-slider-point"></div>
              <div className="oe-slider-point"></div>
            </div>
          </div>

          <div className="oe-input-group">
            <span className="oe-input-label">Total</span>
            <input type="text" className="oe-input" placeholder="0.00" />
            <span className="oe-input-suffix">USDT</span>
          </div>
          
          <button className="oe-submit-btn bg-sell">Log Sell/Short Status</button>
        </div>
      </div>
    </div>
  );
};

export default OrderEntry;
