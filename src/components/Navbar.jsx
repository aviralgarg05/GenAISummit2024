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
    setIsHome(router.pathname === '/');

    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    // Close menu on route change
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    window.addEventListener('resize', handleResize);
    router.events.on('routeChangeStart', handleRouteChange);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [isOpen, router.pathname, router.events]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    if (!isHome) {
      router.push('/').then(() => {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
          setIsOpen(false);
        }, 100);
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      setIsOpen(false);
    }
  };

  const handleNavClick = (sectionId) => (e) => {
    e.preventDefault();
    setIsOpen(false);
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

      <div className={styles.mobileTicketButton} >
        <Link href="/buy-pass" style={{textDecoration:'none'}}>
          <button className={styles.buyTicketsBtn}>Buy Tickets</button>
        </Link>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <li onClick={() => setIsOpen(false)}>
          <a href="#home" onClick={handleNavClick('home')}>
            Home
          </a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#about" onClick={handleNavClick('about')}>
            About
          </a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#sessions" onClick={handleNavClick('sessions')}>
            Agenda
          </a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#speakers" onClick={handleNavClick('speakers')}>
            Speakers
          </a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#themes" onClick={handleNavClick('themes')}>
            Themes
          </a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#committee" onClick={handleNavClick('committee')}>
            Committee
          </a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#contact" onClick={handleNavClick('contact')}>
            Contact Us
          </a>
        </li>
        <li className={styles.desktopOnly}>
          <Link href="/buy-pass">
            <button className={styles.preRegisterBtn}>Buy Tickets</button>
          </Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <Link href="/become-a-speaker-sponsor">
            <button className={styles.sponsorBtn}>Become a Sponsor</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;