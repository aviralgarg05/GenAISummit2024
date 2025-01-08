'use client'
import React from 'react';
import Link from 'next/link';
import { Instagram, LinkedinIcon, MapPin } from 'lucide-react';
import styles from '../styles/SocialSidebar.module.scss';

const SocialSidebar = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <Instagram size={24} />,
      href: 'https://www.instagram.com/genaisummit01?igsh=MW13aDhwM3o3NjFxMg==',
      label: 'Follow us on Instagram',
    },
    {
      id: 2,
      icon: <LinkedinIcon size={24} />,
      href: 'https://www.linkedin.com/company/genaisummit2025/',
      label: 'Connect with us on LinkedIn',
    },
    {
      id: 3,
      icon: <MapPin size={24} />,
      href: 'https://maps.app.goo.gl/ALjg9digTFQyzxi39',
      label: 'Connect with us on LinkedIn',
    },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.container}>
        {socialLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={link.label}
          >
            <span className={styles.icon}>{link.icon}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default SocialSidebar;