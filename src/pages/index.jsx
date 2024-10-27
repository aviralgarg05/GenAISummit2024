import { useEffect, useRef, useState } from 'react';
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
import WhoShouldAttend from '../components/WhoShouldAttend'
import AdvisoryCommittee from '../components/AdvisoryCommittee'
import styles from '../styles/Home.module.scss'
import Speakers from '@/components/Speaker'
import Themes from '@/components/Themes'
import AnimatedSection from '@/components/AnimatedSection';
import BecomeASpeaker from './../components/BecomeASpeaker';
import SpeakerSessions from '../components/SpeakerSessions';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gen AI - Summit</title>
        <meta name="description" content="Summit website description" />
        <link rel="icon" href="/GenAI.svg" />
      </Head>

      <main className={styles.main}>
        <div id="home">
          <AnimatedSection delay={0} className={styles.landingSection}>
            <h1>GenAI Summit</h1>
            <p>GenAI for Everyone</p>
          </AnimatedSection>
        </div>

        <div id="about">
          <AnimatedSection delay={100}>
            <About />
          </AnimatedSection>
        </div>

       {/* <div id="who-should-attend">
          <AnimatedSection delay={200}>
            <WhoShouldAttend />
          </AnimatedSection>
        </div>
        */}

        <div id="speakers">
          <AnimatedSection delay={300}>
            <SpeakerSessions/>
          </AnimatedSection>
        </div>

        <div id="speakers">
          <AnimatedSection delay={300}>
            <Speakers />
          </AnimatedSection>
        </div>

        <div id="become-speaker">
          <AnimatedSection delay={300}>
            <BecomeASpeaker/>
          </AnimatedSection>
        </div>

        <div id="themes">
          <AnimatedSection delay={400}>
            <Themes />
          </AnimatedSection>
        </div>

        <div id="committee">
          <AnimatedSection delay={500}>
            <AdvisoryCommittee />
          </AnimatedSection>
        </div>
      </main>
    </div>
  );
}