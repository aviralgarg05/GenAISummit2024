// pages/privacy-policy.js
import React from 'react';
import Head from 'next/head';

const PrivacyPolicy = () => {
  const styles = {
    container: {
      maxWidth: '800px',
      margin : '70',
      padding: '100px 20px',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      lineHeight: '1.6'
    },
    heading: {
      fontSize: '2rem',
      marginBottom: '30px',
      color: '#1a1a1a',
      borderBottom: '2px solid #eee',
      paddingBottom: '10px'
    },
    section: {
      marginBottom: '24px'
    },
    paragraph: {
      fontSize: '16px',
      marginBottom: '16px',
      textAlign: 'justify'
    }
  };

  return (
    <>
      <Head>
        <title>Privacy Policy - GenAI</title>
        <meta name="description" content="Privacy Policy for GenAI - Learn about how we handle and protect your personal information" />
      </Head>

      <main style={styles.container}>
        <h1 style={styles.heading}>Privacy Policy</h1>
        <div style={styles.section}>
          <p style={styles.paragraph}>
            This Privacy Policy applies to GenAI&apos; use of personal information provided by you to GenAI via this website, 
            over the phone, via email or through any other form of communication with GenAI. It also applies to other 
            personal information about you that may be made available to us when you visit our website, or our social 
            media pages.
          </p>
          <p style={styles.paragraph}>
            This Privacy Policy does not apply to personal information managed by GenAI software applications. Where 
            GenAI manages this information on our customers&apos; behalf, we do so in accordance with data protection laws 
            and strict privacy and security requirements in our contractual agreements with our customers.
          </p>
          <p style={styles.paragraph}>
            GenAI is committed to protecting your personal information. Whenever you provide us personal information, 
            we will comply with all applicable data protection and privacy laws in your country.
          </p>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;