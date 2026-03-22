import React from 'react';
import Header from './components/Header';
import OrderBook from './components/OrderBook';
import TradingChart from './components/TradingChart';
import OrderEntry from './components/OrderEntry';
import MarketTrades from './components/MarketTrades';

function App() {
  return (
    <div className="dashboard-layout">
      {/* Top Header */}
      <Header />

      {/* Left Panel: Order Book */}
      <div className="panel orderbook-area">
        <OrderBook />
      </div>

      {/* Center Panel: Chart Area & Order Entry */}
      <div className="centerpanel-area">
        <div className="panel" style={{ display: 'flex', flexDirection: 'column' }}>
           <TradingChart />
        </div>
        <div className="panel">
           <OrderEntry />
        </div>
      </div>

      {/* Right Panel: Market Trades / Match list */}
      <div className="panel rightpanel-area">
        <MarketTrades />
      </div>
    </div>
  );
}

export default App;
