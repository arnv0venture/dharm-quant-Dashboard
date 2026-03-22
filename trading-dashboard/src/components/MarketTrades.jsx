import React, { useState } from 'react';
import { Search, Star } from 'lucide-react';
import './MarketTrades.css';

const generateDummyPairs = () => {
  const coins = ['BTC', 'ETH', 'SOL', 'BNB', 'XRP', 'ADA', 'DOGE', 'AVAX', 'LINK', 'MATIC'];
  return coins.map(c => ({
    pair: `${c}/USDT`,
    price: (Math.random() * 50000 + 0.1).toFixed(2),
    change: (Math.random() * 10 - 5).toFixed(2),
  }));
};

const generateDummyTrades = () => {
  return Array.from({ length: 20 }).map((_, i) => {
    const isBuy = Math.random() > 0.5;
    return {
      price: (67840 + Math.random() * 10).toFixed(2),
      amount: (Math.random() * 0.5).toFixed(5),
      time: `03:${19 + Math.floor(i / 10)}:${(10 + i * 2) % 60}`,
      isBuy
    };
  });
};

const MarketTrades = () => {
  const pairs = generateDummyPairs();
  const trades = generateDummyTrades();

  return (
    <div className="mt-container">
      {/* Pairs Section */}
      <div className="mt-pairs-section">
        <div className="mt-search-box">
          <Search size={14} className="text-secondary" />
          <input type="text" placeholder="Search" className="mt-search-input" />
        </div>
        
        <div className="mt-tabs">
          <Star size={14} className="text-secondary" style={{ marginRight: '8px', cursor: 'pointer' }} />
          <span className="mt-tab">New</span>
          <span className="mt-tab">USDC</span>
          <span className="mt-tab active">USDT</span>
          <span className="mt-tab">U</span>
          <span className="mt-tab">USD</span>
        </div>

        <div className="mt-table-header">
          <span className="text-secondary flex-2">Pair</span>
          <span className="text-secondary flex-1 text-right">Last Price</span>
          <span className="text-secondary flex-1 text-right">24h Chg%</span>
        </div>

        <div className="mt-list pairs-list">
          {pairs.map((p, i) => (
            <div className="mt-row" key={i}>
              <span className="flex-2 mt-pair-name"><Star size={12} className="text-secondary" /> {p.pair}</span>
              <span className="flex-1 tabular-nums text-right text-primary">{p.price}</span>
              <span className={`flex-1 tabular-nums text-right ${parseFloat(p.change) >= 0 ? 'text-buy' : 'text-sell'}`}>
                {parseFloat(p.change) > 0 ? '+' : ''}{p.change}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Trades Section */}
      <div className="mt-trades-section">
        <div className="mt-tabs" style={{ padding: '8px 16px', borderTop: '4px solid var(--bg-dark)' }}>
          <span className="mt-tab active">Market Trades</span>
          <span className="mt-tab">My Trades</span>
        </div>

        <div className="mt-table-header">
          <span className="text-secondary flex-1 text-left">Price (USDT)</span>
          <span className="text-secondary flex-1 text-right">Amount (BTC)</span>
          <span className="text-secondary flex-1 text-right">Time</span>
        </div>

        <div className="mt-list trades-list">
          {trades.map((t, i) => (
            <div className="mt-row" key={i}>
              <span className={`flex-1 tabular-nums text-left ${t.isBuy ? 'text-buy' : 'text-sell'}`}>{t.price}</span>
              <span className="flex-1 tabular-nums text-right text-primary">{t.amount}</span>
              <span className="flex-1 tabular-nums text-right text-secondary">{t.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketTrades;
