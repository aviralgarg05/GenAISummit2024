import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhoShouldAttend from '../components/WhoShouldAttend';
import AdvisoryCommittee from '../components/AdvisoryCommittee';
import styles from '../styles/Home.module.scss';
import Themes from '@/components/Themes';
import AnimatedSection from '@/components/AnimatedSection';
import BecomeASpeaker from './../components/BecomeASpeaker';
import { WavyBackgroundDemo } from '../components/LandingPage';
import Contact from '../components/ContactUs';
import SocialSidebar from '../components/socialSidebar';
import Highlights from '@/components/Highlights';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GenAI - Summit</title>
        <meta name="description" content="Summit website description" />
        <link rel="icon" href="/GenAI.svg" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <SocialSidebar />

        {/* Landing Page Section */}
        <section className={styles.heroSection}>
          <WavyBackgroundDemo />
        </section>

        {/* Announcement Strip */}
        <div className={styles.announceStrip}>
          <p>"India's GenAI pioneers gathered at the Ashoka Hotel on January 11th, 2025, lighting the path to the future."<br />
          "Were you part of it, or did you miss the dawn of a new era?"</p>
        </div>

        {/* Highlights Section */}
        <section id="highlightsSection" className={styles.highlightsSection}>
          <Highlights />
        </section>

        {/* Who Should Attend Section */}
        <section id="who-should-attend">
          <AnimatedSection delay={200}>
            <WhoShouldAttend />
          </AnimatedSection>
        </section>

        <div id="themes">
          <AnimatedSection delay={300}>
            <Themes />
          </AnimatedSection>
        </div>

        <div id="become-speaker">
          <AnimatedSection delay={400}>
            <BecomeASpeaker />
          </AnimatedSection>
        </div>

        <div id="committee">
          <AnimatedSection delay={500}>
            <AdvisoryCommittee />
          </AnimatedSection>
        </div>

        <div id="contact">
          <AnimatedSection delay={600}>
            <Contact />
          </AnimatedSection>
        </div>
      </main>
    </div>
  );
}