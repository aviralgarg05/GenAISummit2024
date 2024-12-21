import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useEffect } from 'react';
import '@/styles/globals.scss';
import { useRouter } from 'next/router';
import Script from 'next/script';

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
      {/* Google Tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-11493790682"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11493790682');
        `}
      </Script>

      {/* Facebook Pixel */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1611318049482327');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1611318049482327&ev=PageView&noscript=1"
        />
      </noscript>

      {/* LinkedIn Tracking */}
      <Script id="linkedin-tracking" strategy="afterInteractive">
        {`
          *linkedin*partner_id = "6860612";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src="https://px.ads.linkedin.com/collect/?pid=6860612&fmt=gif"
        />
      </noscript>

      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;