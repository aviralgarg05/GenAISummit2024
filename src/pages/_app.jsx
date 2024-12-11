import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useEffect } from 'react';
import '@/styles/globals.scss';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Function to handle the double refresh
    const handleDoubleRefresh = () => {
      const hasFirstRefresh = sessionStorage.getItem('firstRefresh');
      const hasSecondRefresh = sessionStorage.getItem('secondRefresh');

      if (!hasFirstRefresh && router.pathname === '/pre-register') {
        // First refresh
        sessionStorage.setItem('firstRefresh', 'true');
        window.location.reload();
      } else if (hasFirstRefresh && !hasSecondRefresh && router.pathname === '/pre-register') {
        // Second refresh
        sessionStorage.setItem('secondRefresh', 'true');
        window.location.reload();
      }
    };
    // Clear refresh flags when leaving the pre-register page
    const handleRouteChange = (url) => {
      if (!url.includes('/pre-register')) {
        sessionStorage.removeItem('firstRefresh');
        sessionStorage.removeItem('secondRefresh');
      }
    };

    // Add route change listener
    router.events.on('routeChangeComplete', handleRouteChange);

    // Execute the double refresh
    handleDoubleRefresh();

    // Cleanup
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.pathname]);

  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;