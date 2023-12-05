import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/Layout'
import RouteGuard from '../components/RouteGuard'
import styles from '../styles/globals.css'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <RouteGuard>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RouteGuard>
  )
}

export default MyApp
