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
              <span className={styles.yearAccent}>2024</span>
            </div>
            <p className={styles.tagline}>Elevate. Innovate. Accelerate.</p>
          </div>
        </div>
      </WavyBackground>
      <div className={styles.announceStrip}>
        <p>Join us in December at Delhi</p>
      </div>
    </div>
  );
}