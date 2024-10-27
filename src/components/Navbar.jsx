import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    // Check if we're on the home page
    setIsHome(router.pathname === '/');
    
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, router.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    if (!isHome) {
      // If not on home page, first navigate to home then scroll
      router.push('/').then(() => {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
          setIsOpen(false); // Close menu after navigation and scrolling
        }, 100);
      });
    } else {
      // If on home page, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
      setIsOpen(false); // Close menu after scrolling
    }
  };

  const handleNavClick = (sectionId) => (e) => {
    e.preventDefault();
    setIsOpen(false); // Immediately start closing the menu
    scrollToSection(sectionId);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/GenAI.svg" alt="GenAI Summit Logo" />
        </Link>
      </div>
      
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <li>
          <a href="#home" onClick={handleNavClick('home')}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleNavClick('about')}>
            About
          </a>
        </li>
        <li>
          <a href="#sessions" onClick={handleNavClick('sessions')}>
            Sessions
          </a>
        </li>
        <li>
          <a href="#speakers" onClick={handleNavClick('speakers')}>
            Speakers
          </a>
        </li>
        <li>
          <a href="#themes" onClick={handleNavClick('themes')}>
            Themes
          </a>
        </li>
        <li>
          <a href="#committee" onClick={handleNavClick('committee')}>
            Committee
          </a>
        </li>
        <li>
          <Link href="/pre-register">
            <button className={styles.preRegisterBtn}>Pre-Register</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;