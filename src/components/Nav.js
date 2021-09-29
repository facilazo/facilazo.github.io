import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy
      items={['intro', 'first', 'second', 'cta']}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="intro">
          <a href="#">Inicio</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="first">
          <a href="#">Nuestros productos</a>
        </Scroll>
      </li>
      {/* <li>
        <Scroll type="id" element="second">
          <a href="#"></a>
        </Scroll>
      </li> */}
      <li>
        <Scroll type="id" element="second">
          <a href="#">Contacto</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
