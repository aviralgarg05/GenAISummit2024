import React, { useState } from 'react';
import styles from '../styles/BecomeASpeaker.module.scss';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const BecomeASpeaker = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission started'); // Debug log

    // Reset states
    setError('');
    setIsSuccess(false);

    // Validate email
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Attempting to add document to Firestore'); // Debug log
      
      // Create the document
      const docData = {
        email: trimmedEmail,
        timestamp: serverTimestamp(),
        status: 'pending',
        submittedAt: new Date().toISOString()
      };

      // Add to Firestore
      const speakersRef = collection(db, 'speaker_registrations'); // Changed collection name
      const docRef = await addDoc(speakersRef, docData);
      
      console.log('Document written with ID: ', docRef.id); // Debug log

      // Success handling
      setIsSuccess(true);
      setEmail('');
      
    } catch (error) {
      console.error('Error adding document: ', error); // Detailed error logging
      
      // More specific error messaging
      if (error instanceof Error) {
        setError(`Failed to submit: ${error.message}`);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError('');
    if (isSuccess) setIsSuccess(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h2>Become a Speaker/Sponsor</h2>
          <p>
            Interested in becoming a speaker or sponsor at The GenAI Summit 2024? Join us in 
            shaping the future of generative AI! Connect with innovators, share insights, and elevate 
            your brand among industry leaders. Apply today to make your mark!
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputWrapper}>
            <input
              type="email"
              value={email}
              onChange={handleInputChange}
              placeholder="youremail@gmail.com"
              className={`${styles.input} ${error ? styles.errorInput : ''}`}
              disabled={isSubmitting || isSuccess}
            />
            {error && <span className={styles.errorText}>{error}</span>}
            {isSuccess && (
              <span className={styles.successText}>
                Notification sent! We&apos;ll contact you shortly.
              </span>
            )}
          </div>
          
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting || isSuccess}
          >
            {isSubmitting ? 'Submitting...' : 'Join us now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BecomeASpeaker;