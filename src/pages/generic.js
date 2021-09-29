import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/undraw_Experts_re_i40h.svg'

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Generic Page Title" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img
                src={pic04}
                alt=""
                style={{ width: '60%', margin: '0 auto', marginTop: '5%' }}
              />
            </span>
            <h2>Soluciones simples</h2>
            <p>
              Nuestros productos están enfocados en clientes que deseen
              incrementar el alcance de sus negocios usando software sencillo
              que no suponga una adaptación demasiado compleja a las
              tecnologías. Analizando las realidades de nuestros clientes,
              llegamos a la conclusión de que la transformación digital debe
              ser, principalmente, simple.
            </p>
            <p>
              De ésta manera se logra en primer lugar la inserción del negocio
              al mundo digital, para luego complejizar y profundizar sobre los
              aspectos que el cliente requiera.
            </p>
            <h2>Nosotros</h2>
            <p>
              Nuestro equipo está compuesto por el área de desarrollo y de
              testing, supervisados por personal con amplia experiencia en el
              desarrollo de software.
            </p>
            <p>Somos principiantes que se toman el trabajo muy en serio.</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
