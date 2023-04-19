import '@/styles/globals.css'
import Layout from '@/components/Layout'
import React, { useEffect, useState, Fragment } from 'react'

export default function App({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
