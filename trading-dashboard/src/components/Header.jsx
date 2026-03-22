import React from 'react';
import { Search, Globe, ChevronDown, Bell, LogIn } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="panel header-area main-header">
      <div className="header-left">
        <div className="logo-container">
          {/* Logo icon representation */}
          <div className="logo-icon">
             <div className="diamond"></div>
          </div>
          <span className="logo-text">DharmQuant</span>
        </div>
        <nav className="header-nav">
          <a href="#" className="nav-item">Buy Crypto</a>
          <a href="#" className="nav-item">Markets</a>
          <a href="#" className="nav-item">Trade <ChevronDown size={14} /></a>
          <a href="#" className="nav-item">Futures <ChevronDown size={14} /></a>
          <a href="#" className="nav-item">Earn <ChevronDown size={14} /></a>
          <a href="#" className="nav-item">Square <ChevronDown size={14} /></a>
          <a href="#" className="nav-item">More <ChevronDown size={14} /></a>
        </nav>
      </div>

      <div className="header-right">
        <div className="header-tools">
          <div className="tool-icon"><Search size={18} /></div>
          <button className="btn-deposit">Deposit</button>
          <div className="tool-icon"><LogIn size={18} /></div>
          <div className="tool-icon"><Globe size={18} /></div>
          <div className="tool-icon"><Bell size={18} /></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
