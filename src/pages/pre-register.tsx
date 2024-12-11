import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '@/styles/preRegister.module.scss'
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, collection, addDoc, Firestore } from "firebase/firestore";
import Image from 'next/image';
import {Envelope, Phone} from 'phosphor-react';

let app: FirebaseApp | undefined;
let db: Firestore | undefined;

const PreRegister: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    interests: '',
  });
  const [feedbackMessage, setFeedbackMessage] = useState<{ text: string; isError: boolean } | null>(null);

  useEffect(() => {
    const firebaseConfig = {
  apiKey: "AIzaSyAaJEWMEsU0Mt6RI2E_43v0_a-KCpS8y9c",
  authDomain: "genai-summit.firebaseapp.com",
  projectId: "genai-summit",
  storageBucket: "genai-summit.appspot.com",
  messagingSenderId: "451993233683",
  appId: "1:451993233683:web:5f8e95e2188770ffb4d2e6",
  measurementId: "G-P440ENWW7V"
    };

    if (!getApps().length) {
      app = initializeApp(firebaseConfig);
      db = getFirestore(app);
    }
  }, []);

    const handleCallClick = () => {
      window.location.href = `tel:+916230356822`;
    };

    const handleMailClick = () => {
      window.location.href = `mailto:connect@genaisummit.in`;
    };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    setFeedbackMessage(null); // Clear feedback when user starts typing
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!db) {
      console.error("Firestore is not initialized");
      setFeedbackMessage({ text: "An error occurred. Please try again.", isError: true });
      return;
    }
    try {
      await addDoc(collection(db, "preregistrations"), formData);
      setFeedbackMessage({ text: "Pre-registration successful!", isError: false });
      setFormData({ name: '', email: '', company: '', jobTitle: '', interests: '' });
    } catch (error) {
      console.error("Error adding document: ", error);
      setFeedbackMessage({ text: "Pre-registration failed. Please try again.", isError: true });
    }
  };

  return (
    <div className={styles.preRegister}>
      <Head>
        <title>GenAI - Summit | Pre Register</title>
        <meta name="description" content="Pre-register for the GenAI Summit - Join us for cutting-edge discussions on artificial intelligence." />
        <link rel="icon" href="/GenAI.svg" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.formContainer}>
          <h1>Pre-register</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            
            <div className={styles.formGroup}>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
              />
            </div>
            
            <div className={styles.formGroup}>
              <input
                id="interests"
                name="interests"
                placeholder="Area of interest (e.g. Machine Learning, Natural Language Processing...)"
                value={formData.interests}
                onChange={handleChange}
              />
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Pre-register
            </button>
            
            {feedbackMessage && (
              <div className={`${styles.feedbackMessage} ${feedbackMessage.isError ? styles.error : styles.success}`}>
                {feedbackMessage.text}
              </div>
            )}
          </form>
        </div>
        <div className={styles.preRegisterContent}>
          <span>
          Pre-register now for the GenAI Summit 2025, happening this January in Delhi! This exciting event will bring together AI innovators, industry leaders, and enthusiasts for a day of inspiring talks, hands-on workshops, and networking with the brightest minds in the field. While official bookings will be live soon, pre-registering now ensures you&apos;re first to know as soon as they open. Don&apos;t miss your chance to be part of this transformative experience in Generative AI—sign up today and stay tuned for further updates!

          </span>
              <div className={styles.contacts}>
                <div className={styles.phone}>
              <Phone size={45} cursor={"pointer"} onClick={handleCallClick} /></div>
              <div className={styles.mail}>
              <Envelope size={45} cursor={"pointer"} onClick={handleCallClick} /></div>
              </div>
        </div>
      </main>
    </div>
  )
}

export default PreRegister