import React from 'react'

import logo from '../assets/images/logo-white.png'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="" />
    </span>
    <h1>Facilazo</h1>
    <p>
      Soluciones digitales simples
      <br />
    </p>
  </header>
)

export default Header
