import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '@/styles/becomeSpeaker.module.scss'
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, collection, addDoc, Firestore } from "firebase/firestore";
import {Envelope, Phone} from 'phosphor-react';

let app: FirebaseApp | undefined;
let db: Firestore | undefined;

type Role = 'speaker' | 'sponsor';

interface FormData {
  role: Role;
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  phoneNumber: string;
  previousExperience?: string;
  topicProposal?: string;
  sponsorshipInterest?: string;
  additionalRemarks: string;
}

const BecomeSpeakerSponsor: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    role: 'speaker',
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    phoneNumber: '',
    previousExperience: '',
    topicProposal: '',
    sponsorshipInterest: '',
    additionalRemarks: ''
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    setFeedbackMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!db) {
      console.error("Firestore is not initialized");
      setFeedbackMessage({ text: "An error occurred. Please try again.", isError: true });
      return;
    }
    
    try {
      const collectionName = formData.role === 'speaker' ? 'speakerApplications' : 'sponsorApplications';
      await addDoc(collection(db, collectionName), formData);
      setFeedbackMessage({ 
        text: `Thank you for your interest in becoming a ${formData.role}! We'll contact you soon.`, 
        isError: false 
      });
      // Reset form
      setFormData({
        role: 'speaker',
        name: '',
        email: '',
        company: '',
        jobTitle: '',
        phoneNumber: '',
        previousExperience: '',
        topicProposal: '',
        sponsorshipInterest: '',
        additionalRemarks: ''
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      setFeedbackMessage({ text: "Submission failed. Please try again.", isError: true });
    }
  };

  return (
    <div className={styles.becomeSpeakerSponsor}>
      <Head>
        <title>Gen AI Summit | Become a Speaker/Sponsor</title>
        <meta name="description" content="Apply to become a speaker or sponsor at the Gen AI Summit - Share your expertise or support the future of AI." />
        <link rel="icon" href="/GenAI.svg" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.formContainer}>
          <h1>Join Us as a Speaker or Sponsor</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className={styles.roleSelect}
              >
                <option value="speaker">Speaker</option>
                <option value="sponsor">Sponsor</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <input
                type="text"
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
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            
            {formData.role === 'speaker' && (
              <>
                <div className={styles.formGroup}>
                  <textarea
                    name="previousExperience"
                    placeholder="Previous Speaking Experience"
                    value={formData.previousExperience}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <textarea
                    name="topicProposal"
                    placeholder="Proposed Topic and Brief Description"
                    value={formData.topicProposal}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}
            
            {formData.role === 'sponsor' && (
              <div className={styles.formGroup}>
                <textarea
                  name="sponsorshipInterest"
                  placeholder="Areas of Interest for Sponsorship"
                  value={formData.sponsorshipInterest}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            
            <div className={styles.formGroup}>
              <textarea
                name="additionalRemarks"
                placeholder="Additional Remarks"
                value={formData.additionalRemarks}
                onChange={handleChange}
              />
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Submit Application
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
            Join us at the GenAI Summit 2024 this December in Delhi! We're looking for innovative speakers and sponsors to be part of this transformative event. As a speaker, share your expertise and insights with AI enthusiasts and industry leaders. As a sponsor, align your brand with the future of AI and connect with a highly engaged audience.
          </span>
          <div className={styles.contacts}>
            <div className={styles.phone}>
              <Phone size={45} cursor="pointer" onClick={handleCallClick} />
            </div>
            <div className={styles.mail}>
              <Envelope size={45} cursor="pointer" onClick={handleMailClick} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default BecomeSpeakerSponsor