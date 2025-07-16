import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">Welcome to HumanizePro</div>
      <div className="header-right">
        <span className="notification">🔔</span>
        <span className="user-avatar">👤</span>
      </div>
    </header>
  );
};

export default Header;