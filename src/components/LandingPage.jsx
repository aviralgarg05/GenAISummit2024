"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import styles from "../styles/Home.module.scss";

export function WavyBackgroundDemo() {
  return (
    <div className={styles.mainContainer}>
      <WavyBackground 
        className={styles.wavyBackground}
        colors={[
          "#FF7527",
          "#FC4D4D",
          "#FC4D4D",
          "#FF7527",
        ]}
        blur={2}
        speed="slow"
        waveWidth={2}
        backgroundFill="#FFFFFF"
        waveOpacity={0.5}
      >
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.titleContainer}>
              <span className={styles.topAccent}>The</span>
              <div className={styles.mainTitle}>
                <span>GenAI</span>
                <span>Summit</span>
              </div>
              <span className={styles.yearAccent}></span>
            </div>
            <p className={styles.tagline}>Elevate. Innovate. Accelerate.</p>
          </div>
        </div>
      </WavyBackground>
      <div className={styles.announceStrip}>
        <p>“India’s GenAI pioneers gathered at the Ashoka Hotel on January 11th, 2025, lighting the path to the future.”<br></br>
        “Were you part of it, or did you miss the dawn of a new era?”<span className={styles.date}></span> </p>
      </div>
    </div>
  );
}

// session 5 
// Building the AI Economy - A Roundtable with Policymakers, Industry and Investors ( By Invite)
// An exclusive roundtable discussion convening entrepreneurs, government officials, industry specialists, and investors to explore the dynamic landscape of Generative AI. This intimate gathering aims to facilitate meaningful connections and foster productive dialogue on the latest advancements and opportunities in this transformative field. A discussion to charter the way forward to stay a step ahead in the Generative AI arena .