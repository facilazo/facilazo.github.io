import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import hello from '../assets/images/undraw_Developer_activity_re_39tg.svg'
import favicon from '../assets/images/logo.png'
import adminstore from '../assets/images/Adminstore-logo.png'
import contact from '../assets/images/undraw_Setup_analytics_re_foim.svg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Facilazo - soluciones digitales simples">
          <link rel="icon" href={favicon} />
        </Helmet>

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Facilazo</h2>
                </header>
                <p>
                  Una empresa dedicada a potenciar tus ventas de la mano de
                  nuestras soluciones digitales simples y fáciles de utilizar.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Ver más
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={hello} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Nuestros productos</h2>
            </header>
            <ul className="features">
              <li>
                <img src={adminstore} alt="" style={{ width: '200px' }} />
                {/* <span className="icon major style1 fa-code"></span> */}
                {/* <h3>Adminstore</h3> */}
                <p>
                  Una simple web app donde podés llevar un registro de tus
                  ventas y proveedores
                </p>
              </li>
              {/* <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Amed sed feugiat</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Dolor nullam</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li> */}
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/adminstore" className="button">
                    Ver más
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          {/* <section id="second" className="main special">
            <header className="major">
              <h2>Ipsum consequat</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section> */}

          <section id="second" className="main special">
            <header className="major">
              <h2>Contacto</h2>
              <p>
                Comunicate con nosotros y empecemos a trabajar juntos. Podemos
                armar la app que desees para que tu negocio despegue.
              </p>
              <img
                src={contact}
                alt=""
                style={{ width: '70%', marginBottom: '10px' }}
              />
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a
                    href="mailto:facilazo.it@gmail.com"
                    className="button special"
                  >
                    Contactanos
                  </a>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Ver más
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
