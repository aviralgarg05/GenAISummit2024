import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '@/styles/preRegister.module.scss'
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, collection, addDoc, Firestore } from "firebase/firestore";

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
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    };

    if (!getApps().length) {
      app = initializeApp(firebaseConfig);
      db = getFirestore(app);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
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
        <title>Gen AI - Summit | Pre Register</title>
        <meta name="description" content="Pre-register for the Gen AI Summit - Join us for cutting-edge discussions on artificial intelligence." />
        <link rel="icon" href="/GenAI.svg" />
      </Head>
      <main className={styles.main}>
        <h1>Pre-register for Gen AI Summit</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="interests">Areas of Interest</label>
            <textarea
              id="interests"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              placeholder="E.g., Machine Learning, Natural Language Processing, Computer Vision"
            />
          </div>
          <button type="submit" className={styles.submitButton}>Pre-Register</button>
          {feedbackMessage && (
            <div className={`${styles.feedbackMessage} ${feedbackMessage.isError ? styles.error : styles.success}`}>
              {feedbackMessage.text}
            </div>
          )}
        </form>
      </main>
    </div>
  )
}

export default PreRegister