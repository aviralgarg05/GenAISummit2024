import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '@/styles/becomeSpeaker.module.scss';
import { Envelope, Phone } from 'phosphor-react';
import { db } from '../lib/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Test Firebase connection on component mount
  useEffect(() => {
    const testFirebaseConnection = async () => {
      try {
        const testCollection = collection(db, 'test_connection');
        await getDocs(testCollection);
        console.log('Firebase connection successful');
      } catch (error) {
        console.error('Firebase connection test failed:', error);
      }
    };

    testFirebaseConnection();
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
    setIsSubmitting(true);
    setFeedbackMessage(null);

    try {
      console.log('Starting form submission...');
      
      // Prepare the document data
      const docData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        status: 'pending'
      };

      console.log('Document data prepared:', docData);

      // Get the appropriate collection reference
      const collectionName = formData.role === 'speaker' ? 'speaker_applications' : 'sponsor_applications';
      console.log('Using collection:', collectionName);
      
      const collectionRef = collection(db, collectionName);

      // Attempt to add the document
      console.log('Attempting to add document to Firestore...');
      const docRef = await addDoc(collectionRef, docData);
      
      console.log('Document successfully added with ID:', docRef.id);
      
      // Show success message
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
      console.error("Error during form submission:", error);
      // More detailed error message
      let errorMessage = "Submission failed. ";
      if (error instanceof Error) {
        errorMessage += error.message;
      } else {
        errorMessage += "Please try again later.";
      }
      
      setFeedbackMessage({ 
        text: errorMessage, 
        isError: true 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.becomeSpeakerSponsor}>
      <Head>
        <title>GenAI Summit | Become a Speaker/Sponsor</title>
        <meta name="description" content="Apply to become a speaker or sponsor at the GenAI Summit - Share your expertise or support the future of AI." />
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
                disabled={isSubmitting}
              >
                <option value="speaker" style={{color:'black'}}>Speaker</option>
                <option value="sponsor" style={{color:'black'}}>Sponsor</option>
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <textarea
                    name="topicProposal"
                    placeholder="Proposed Topic and Brief Description"
                    value={formData.topicProposal}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
              </div>
            )}
            
            <div className={styles.formGroup}>
              <textarea
                name="additionalRemarks"
                placeholder="Additional Remarks"
                value={formData.additionalRemarks}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
            
            {feedbackMessage && (
              <div 
                className={`${styles.feedbackMessage} ${
                  feedbackMessage.isError ? styles.error : styles.success
                }`}
              >
                {feedbackMessage.text}
              </div>
            )}
          </form>
        </div>
        
        <div className={styles.preRegisterContent}>
          <span>
            Join us at the GenAI Summit 2025 this January in Eros Hotel New Delhi! We&apos;re looking for innovative speakers and sponsors to be part of this transformative event. As a speaker, share your expertise and insights with AI enthusiasts and industry leaders. As a sponsor, align your brand with the future of AI and connect with a highly engaged audience.
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
  );
};

export default BecomeSpeakerSponsor;