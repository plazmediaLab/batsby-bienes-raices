import React, { useRef } from 'react';
// Modular CSS
import { navBarActionToggle } from 'modular-css';
// Gatsby 
import { Link } from 'gatsby';
// Styled components 
import { css } from '@emotion/core';

const Header = () => {

  // useRef
  const navBarItem = useRef(null);
  const btnActions = useRef(null);
  const iconToggle = 'a-menu';

  return (
    <header>
      <nav className="navbar-component dark bg-primary" id="navbar_1" ref={navBarItem}>
        <Link 
          className="navbar-logo center"
          title="MyFriky PLAZ Home page"
          css={css`
            font-weight: 600;
          `}
          to="/"
        >
          Bienes<span css={css`font-weight: 300`}>RAICES</span>
        </Link>
        <div className="navbar-toggle">
          <button 
            type="button" 
            className="btn-toggle" 
            onClick={ () => navBarActionToggle(navBarItem, btnActions, iconToggle) }
          >
            <i className={iconToggle}></i>
          </button>
        </div>
        <div className="navbar-actions split" ref={btnActions}>
          <ul className="navbar-actions_item jc-end">
            <li><Link to="/" className="nav-link" activeClassName="select dial">Home</Link></li>
            <li><Link to="/properties" className="nav-link" activeClassName="select dial">Properties</Link></li>
            <li><Link to="/about" className="nav-link" activeClassName="select dial">About</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;