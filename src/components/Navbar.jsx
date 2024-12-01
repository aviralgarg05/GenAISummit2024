import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';
import Image from 'next/image';

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
          <Image src="/GenAI.svg" width={100} height={100} alt="GenAI Summit Logo" />
        </Link>
        <Link href="/">
          <Image src="/ajeeshlogo.webp" width={100} height={100} alt="Ajeesh Logo" />
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
          <a href="#contact" onClick={handleNavClick('contact')}>
            Contact Us
          </a>
        </li>
        <li>
          <Link href="/buy-pass">
            <button className={styles.preRegisterBtn}>Buy Tickets</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;