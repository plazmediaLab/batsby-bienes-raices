import React from 'react';
import { Helmet } from 'react-helmet';
import Favicon from '../../images/isologo.png'
// Modular-CSS
import "modular-css/css/modular.css";
import "modular-css/css/modular-css.font.css";
import { ModularCSSfonstRequired } from 'modular-css';


const Layout = (props) => {
  return (
    <>

      <Helmet>
        <title>Bienes Raices</title>
        <meta name="description" content=""/>
        <link rel="icon" href={Favicon} />
        <meta name="theme-color" content="#191919" />
        <link href={ModularCSSfonstRequired} rel="stylesheet" />
      </Helmet>

      <header>
        <h1>Header section</h1>
      </header>

      { props.children }

    </>
  );
};

export default Layout;