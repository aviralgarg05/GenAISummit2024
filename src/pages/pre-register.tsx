import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '@/styles/preRegister.module.scss'
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, collection, addDoc, Firestore } from "firebase/firestore";
import Image from 'next/image';

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
        <title>Gen AI - Summit | Pre Register</title>
        <meta name="description" content="Pre-register for the Gen AI Summit - Join us for cutting-edge discussions on artificial intelligence." />
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

<div className={styles.imageGallery}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/preRegister1.webp" 
              alt="Speaker 1" 
              fill 
              priority
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 33vw,
                     50vw"
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/preRegister2.jpg" 
              alt="Speaker 2" 
              fill
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 33vw,
                     50vw"
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/preRegister3.jpg" 
              alt="Speaker 3" 
              fill
              sizes="(max-width: 640px) 100vw,
                     (max-width: 1024px) 33vw,
                     50vw"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default PreRegister