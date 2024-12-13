import React, { useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/preRegister.module.scss'
import { initializeApp, getApps, FirebaseApp, getApp } from "firebase/app";
import { getFirestore, collection, addDoc, Firestore } from "firebase/firestore";
import { Envelope, Phone } from 'phosphor-react';
import { useRouter } from 'next/router';




// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaJEWMEsU0Mt6RI2E_43v0_a-KCpS8y9c",
  authDomain: "genai-summit.firebaseapp.com",
  projectId: "genai-summit",
  storageBucket: "genai-summit.appspot.com",
  messagingSenderId: "451993233683",
  appId: "1:451993233683:web:5f8e95e2188770ffb4d2e6",
  measurementId: "G-P440ENWW7V"
};

// Initialize Firebase outside of component
let app: FirebaseApp;
let db: Firestore;

try {
  app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  interests: string;
}

interface FeedbackMessage {
  text: string;
  isError: boolean;
}

const PreRegister: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    interests: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<FeedbackMessage | null>(null);

  const handleCallClick = () => {
    window.location.href = `tel:+916230356822`;
  };

  const handleMailClick = () => {
    window.location.href = `mailto:connect@genaisummit.in`;
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setFeedbackMessage({ text: "Please enter your name", isError: true });
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFeedbackMessage({ text: "Please enter a valid email address", isError: true });
      return false;
    }
    
    // Optional phone validation (if provided)
    if (formData.phone && !/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      setFeedbackMessage({ text: "Please enter a valid phone number", isError: true });
      return false;
    }
    
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    setFeedbackMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isSubmitting) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setFeedbackMessage(null);

    try {
      if (!db) {
        throw new Error("Firebase database not initialized");
      }

      const submissionData = {
        ...formData,
        timestamp: new Date().toISOString(),
        submitted_from: window.location.href
      };

      const docRef = await addDoc(collection(db, "preregistrations"), submissionData);
      
      if (docRef.id) {
        router.push('/thank-you');
      } else {
        throw new Error("Failed to get document reference");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setFeedbackMessage({ 
        text: "An error occurred. Please try again in a few moments.", 
        isError: true 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    
    <div className={styles.preRegister}>
      <Head>
        <title>GenAI - Summit | Pre Register</title>
        <meta 
          name="description" 
          content="Pre-register for the GenAI Summit - Join us for cutting-edge discussions on artificial intelligence." 
        />
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
            </div>
            
            <div className={styles.formGroup}>
              <input
                id="interests"
                name="interests"
                placeholder="Area of interest (e.g. Machine Learning, Natural Language Processing...)"
                value={formData.interests}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Pre-register'}
            </button>
            
            {feedbackMessage && (
              <div 
                className={`${styles.feedbackMessage} ${
                  feedbackMessage.isError ? styles.error : styles.success
                }`}
                role="alert"
              >
                {feedbackMessage.text}
              </div>
            )}
          </form>
        </div>
        
        <div className={styles.preRegisterContent}>
          <span>
            Register now for the GenAI Summit 2025, happening this January in Delhi! 
            This exciting event will bring together AI innovators, industry leaders, and 
            enthusiasts for a day of inspiring talks, hands-on workshops, and networking 
            with the brightest minds in the field. While official bookings will be live soon, 
            pre-registering now ensures you&apos;re first to know as soon as they open. 
            Don&apos;t miss your chance to be part of this transformative experience in 
            Generative AI—sign up today and stay tuned for further updates!
          </span>
          <div className={styles.contacts}>
            <div className={styles.phone}>
              <Phone 
                size={45} 
                cursor="pointer" 
                onClick={handleCallClick} 
              />
            </div>
            <div className={styles.mail}>
              <Envelope 
                size={45} 
                cursor="pointer" 
                onClick={handleMailClick} 
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PreRegister