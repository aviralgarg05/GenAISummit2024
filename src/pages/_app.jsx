import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import '@/styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;