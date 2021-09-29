import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/Adminstore-logo.png'

class Adminstore extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Generic Page Title" />
        {/* <HeaderGeneric /> */}
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img
                src={pic04}
                alt=""
                style={{ width: '60%', margin: '0 auto', marginTop: '5%' }}
              />
            </span>
            <h2>Adminstore</h2>
            <p>
              La web-app Adminstore surge para cubrir la necesidad de pequeños
              negocios que requieran una carga rápida de sus ventas, proveedores
              y compras a proveedores.
            </p>
            <p>
              Usando Adminstore vas a tener mayor control sobre los alcances de
              tus ventas y así poder tomar decisiones que influyan positivamente
              en tu empresa.
            </p>
            <p>Contactanos para probarla.</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Adminstore
