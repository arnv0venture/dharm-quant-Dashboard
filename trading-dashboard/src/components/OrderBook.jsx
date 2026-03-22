import React from 'react';
import './OrderBook.css';
import { ChevronDown, MoreHorizontal } from 'lucide-react';

const generateDummyRows = (startPrice, isAsk) => {
  return Array.from({ length: 15 }).map((_, i) => {
    const price = (isAsk ? startPrice + (i * 0.1) : startPrice - (i * 0.1)).toFixed(2);
    const amount = (Math.random() * 2).toFixed(5);
    const total = (Math.random() * 50 + 10).toFixed(5);
    const depthPct = Math.floor(Math.random() * 40 + 5);
    return { price, amount, total, depthPct };
  });
};

const OrderBook = () => {
  const asks = generateDummyRows(67850.10, true).reverse(); // Reverse so highest price is at top
  const bids = generateDummyRows(67847.41, false);

  const renderRow = (row, isAsk) => (
    <div className="ob-row" key={row.price}>
      <div className={`depth-bg ${isAsk ? 'depth-ask' : 'depth-bid'}`} style={{ width: `${row.depthPct}%` }}></div>
      <span className={isAsk ? 'text-sell tabular-nums' : 'text-buy tabular-nums'}>{row.price}</span>
      <span className="text-primary tabular-nums text-right">{row.amount}</span>
      <span className="text-secondary tabular-nums text-right">{row.total}</span>
    </div>
  );

  return (
    <div className="orderbook-container">
      <div className="ob-header">
        <div className="ob-header-left">
          <button className="icon-btn active"><i className="icon-all"></i></button>
          <button className="icon-btn"><i className="icon-buy"></i></button>
          <button className="icon-btn"><i className="icon-sell"></i></button>
        </div>
        <div className="ob-header-right">
          <span className="text-secondary" style={{ fontSize: '12px' }}>0.01 <ChevronDown size={14} style={{ verticalAlign: 'middle' }}/></span>
          <MoreHorizontal size={16} className="text-secondary" />
        </div>
      </div>

      <div className="ob-table-header">
        <span className="text-secondary" style={{ flex: 1, textAlign: 'left' }}>Price (USDT)</span>
        <span className="text-secondary" style={{ flex: 1, textAlign: 'right' }}>Amount (BTC)</span>
        <span className="text-secondary" style={{ flex: 1, textAlign: 'right' }}>Total</span>
      </div>

      <div className="ob-list asks-list">
        {asks.map(row => renderRow(row, true))}
      </div>

      <div className="ob-mid-ticker">
        <div className="ob-mid-price text-sell tabular-nums">
          67,847.42 <span className="arrow-down">↓</span>
        </div>
        <div className="ob-mid-mark text-secondary" style={{ fontSize: '12px' }}>
          $67,847.42
        </div>
      </div>

      <div className="ob-list bids-list">
        {bids.map(row => renderRow(row, false))}
      </div>
    </div>
  );
};

export default OrderBook;
