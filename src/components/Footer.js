import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Facilazo</h2>
      <p>
        Facilazo surge de la necesidad de llevar soluciones digitales sencillas
        de manejar, administrar y personalizar a nuestros clientes, para que
        logren mejorar distintos áreas de sus negocios. La simpleza es el
        emblema de nuestra empresa, donde, día a día, trabajamos para que
        nuestros productos sean de calidad.
      </p>
      <ul className="actions">
        <li>
          <Link to="/generic" className="button">
            Ver más
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2>Contacto</h2>
      <dl className="alt">
        <dt>Email</dt>
        <dd>
          <a href="mailto:facilazo.it@gmail.com">facilazo.it@gmail.com</a>
        </dd>
      </dl>
      <ul className="icons">
        {/* <li>
          <a
            href="https://twitter.com/huntaroSan"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li> */}
        <li>
          <a
            href="https://www.instagram.com/facilazo.it/?hl=es"
            className="icon fa-instagram alt"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        {/* <li>
          <a
            href="https://github.com/codebushi/gatsby-starter-stellar"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-dribbble alt">
            <span className="label">Dribbble</span>
          </a>
        </li> */}
      </ul>
    </section>
    {/* <p className="copyright">
      &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p> */}
  </footer>
)

export default Footer
