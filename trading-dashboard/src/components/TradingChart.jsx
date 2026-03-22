import React, { useEffect, useRef } from 'react';
import { createChart, CrosshairMode, CandlestickSeries, LineSeries } from 'lightweight-charts';
import './TradingChart.css';

const generateCandleData = () => {
  const data = [];
  let time = Math.floor(Date.now() / 1000) - (100 * 24 * 60 * 60); // 100 days ago
  let open = 65000;
  for (let i = 0; i < 200; i++) {
    const close = open + (Math.random() - 0.5) * 2000;
    const high = Math.max(open, close) + Math.random() * 500;
    const low = Math.min(open, close) - Math.random() * 500;
    data.push({
      time: time + i * 24 * 60 * 60,
      open,
      high,
      low,
      close,
    });
    open = close;
  }
  return data;
};

const TradingChart = () => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth || 600,
      height: chartContainerRef.current.clientHeight || 300,
      layout: {
        background: { type: 'solid', color: '#161A1E' },
        textColor: '#848E9C',
      },
      grid: {
        vertLines: { color: '#2B3139', style: 1 },
        horzLines: { color: '#2B3139', style: 1 },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      rightPriceScale: {
        borderColor: '#2B3139',
      },
      timeScale: {
        borderColor: '#2B3139',
        timeVisible: true,
      },
    });

    const candleSeries = chart.addSeries(CandlestickSeries, {
      upColor: '#0ECB81',
      downColor: '#F6465D',
      borderDownColor: '#F6465D',
      borderUpColor: '#0ECB81',
      wickDownColor: '#F6465D',
      wickUpColor: '#0ECB81',
    });

    const data = generateCandleData();
    candleSeries.setData(data);

    // Add a moving average loop over the data
    const maData = data.map((d, i) => {
      let sum = 0;
      const period = 20;
      if (i < period) return null;
      for (let j = 0; j < period; j++) {
        sum += data[i - j].close;
      }
      return { time: d.time, value: sum / period };
    }).filter(d => d !== null);

    const maSeries = chart.addSeries(LineSeries, {
      color: '#FCD535',
      lineWidth: 1,
      crosshairMarkerVisible: false,
    });
    maSeries.setData(maData);

    chartRef.current = chart;

    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth || 600,
        height: chartContainerRef.current.clientHeight || 300,
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Initial resize to fit container
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, []);

  return (
    <div className="chart-wrapper">
      <div className="chart-header">
        <div className="chart-pair">BTCUSDT <span className="chart-badge">5x</span></div>
        <div className="chart-price text-sell">67,847.42</div>
        <div className="chart-stat">
          <div className="stat-label">24h Chg</div>
          <div className="stat-val text-sell">-2,515.23 -3.57%</div>
        </div>
        <div className="chart-stat">
          <div className="stat-label">24h High</div>
          <div className="stat-val">70,384.95</div>
        </div>
        <div className="chart-stat">
          <div className="stat-label">24h Low</div>
          <div className="stat-val">67,360.66</div>
        </div>
        <div className="chart-stat">
          <div className="stat-label">24h Vol(BTC)</div>
          <div className="stat-val">16,705.51</div>
        </div>
      </div>
      <div className="chart-toolbar">
         <span className="toolbar-item">Time</span>
         <span className="toolbar-item">1s</span>
         <span className="toolbar-item active">15m</span>
         <span className="toolbar-item">1H</span>
         <span className="toolbar-item">4H</span>
         <span className="toolbar-item">1D</span>
         <span className="toolbar-item">1W</span>
         <div className="toolbar-divider"></div>
         <span className="toolbar-item">Original</span>
         <span className="toolbar-item active">Trading View</span>
         <span className="toolbar-item">Depth</span>
      </div>
      <div ref={chartContainerRef} className="chart-container" />
    </div>
  );
};

export default TradingChart;
