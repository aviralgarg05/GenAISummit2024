import { useState, useEffect, useRef, useCallback } from 'react';
import dynamic from 'next/dynamic';
import styles from '../styles/Agenda.module.scss';
import Image from 'next/image';
import { Line } from './ui/Line';

const AgendaItem = dynamic(() => import('./AgendaItem'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

const KeynoteSpeaker = dynamic(() => import('./KeynoteSpeaker'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});

const Agenda = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const keynoteSpeakers = [
    {
      name: 'Rameesh Kailasam',
      role: 'CEO @ Indiatech.org',
      time: '10:00 a.m. - 10:15 a.m.',
      topic: 'How the Indian Startup Ecosystem is Powering the Next AI Revolution',
      image: '/image4.png'
    },
    {
      name: 'Prafull Billore',
      role: 'CEO @ MBA Chaiwala',
      time: '10:20 a.m. - 10:35 a.m.',
      topic: 'Coming Soon',
      image: '/MBAr.png'
    }
  ];

  const agendaSections = [
    {
      id: 1,
      type:"Session",
      title: 'The Future of AI Entrepreneurs: Navigating the Shift from Global to Local in the Age of AI',
      items: [
        {
          type: 'speaker',
          name: 'Pankaj Rai',
          company: 'Aditya Birla Group',
          designation: 'Group Chief Data and Analytics Officer',
          time: '10:40 a.m. - 10:50 a.m.',
          topic: 'The 3W framework for AI led business transformation',
          image: '/rai.png'
        },
        {
          type: 'speaker',
          name: 'Nikhil Malhotra',
          company: 'Tech Mahindra',
          designation: 'Chief Innovation Officer, Global Head of AI and Emerging Technologies',
          time: '10:55 a.m. - 11:05 a.m.',
          topic: 'Coming Soon',
          image: '/nikhil.png'
        },
        {
          type: 'speaker',
          name: 'Harneet Singh',
          company: 'Rebel AI',
          designation: 'Founder and Chief AI Officer',
          time: '11:10 a.m. - 11:20 a.m.',
          topic: 'Coming Soon',
          image: '/harneetR.png'
        },
        {
          type: 'speaker',
          name: 'Arijit Bhattacharyya',
          company: 'VirtualInfocom',
          designation: 'Angel Investor & CEO, Coinnovateventures',
          time: '11:25 a.m. - 11:35 a.m.',
          topic: 'Coming Soon',
          image: '/arijit2.png'
        },
        {
          type: 'break',
          title: 'Tea Break',
          time: '11:40 am - 12:00 noon'
        }
      ]
    },
    {
      id: 2,
      type:"Session",
      title: 'The Future of AI Entrepreneurs: Navigating the Shift from Global to Local in the Age of AI',
      items: [
        {
          type: 'speaker',
          name: 'Dr. N Panigrahi',
          company: 'DRDO',
          designation: 'Outstanding Scientist, Centre for AI & Robotics',
          time: '12:05 p.m. - 12:15 p.m.',
          topic: 'Coming Soon',
          image: '/Pangu.png'
        },
        {
          type: 'speaker',
          name: 'Abhinav Sharma',
          company: 'Cisco Systems',
          designation: 'CIO, Global Head of AI and Emerging Technologies',
          time: '12:20 p.m. - 12:30 p.m.',
          topic: 'Coming Soon',
          image: '/abhinav.png'
        },
        {
          type: 'speaker',
          name: 'Abhishek Lal',
          company: 'Marks & Spencer',
          designation: 'Chief Digital Officer',
          time: '12:35 p.m. - 12:45 p.m.',
          topic: 'Future-Ready Retail: AI-Powered Innovations',
          image: '/abhishekR.png'
        },
        {
          type: 'speaker',
          name: 'Geetha Adinarayan',
          company: 'IBM',
          designation: 'IBM Distinguished Engineer, CTO, Product Engineering',
          time: '12:50 p.m. - 01:00 p.m.',
          topic: 'From Pilot to Production: Navigating the Scaling Journey',
          image: '/Geetha.png'
        },
        {
          type: 'speaker',
          name: 'Kanishka Agiwal',
          company: 'AWS',
          designation: 'Head, Service Lines, India & South Asia at Amazon Web Services',
          time: '01:05 p.m. - 01:15 p.m.',
          topic: 'Coming Soon',
          image: '/kanishkaR.png'
        }
      ]
    },{

      type:'Panel',
      title: "Gateway to Tomorrow: Al's Role in Transforming Digital Payments",
      time: '1:20pm - 1:40pm',
      items: [
        {
          type: 'speaker',
          name: 'Richa Mukherjee',
          company: 'PayU',
          designation: 'Senior Director',
 // Assuming time slot based on sequence, adjust if needed
          topic: 'Coming Soon',
          image: '/image2.png'
        },
        {
          type: 'speaker',
          name: 'Sahhil Kumar',
          company: 'Quick Pay',
          designation: 'Chief Executive Officer',
// Assuming time slot based on sequence, adjust if needed
          topic: 'Coming Soon',
          image: '/sahilspeakerfinal.png'
        },
        {
          type: 'speaker',
          name: 'Anand Vijay Jha',
          company: 'Visa',
          designation: 'Vice President',
 // Assuming time slot based on sequence, adjust if needed
          topic: 'Coming Soon',
          image: '/anand.png'
        },
        {
          type: 'break',
          title: 'Lunch Break',
          time: '1:40 pm - 2:40 pm'
        }
      ]
    },{
      id: 3,
      type:"Session",
      title: "Understanding Today, Shaping Tomorrow:How Technology is Driving the Al Revolution",
      items: [
        {
          type: 'speaker',
          name: 'Rajnish Virmani',
          company: 'Zoom',
          designation: 'CIO Advisor',
          time: '02:45 p.m. - 02:55 p.m.',
          topic: 'The AI-Enhanced Workplace: New look at Connectivity for Employees and Customers',
          image: '/rajnish.png'
        },
        {
          type: 'speaker',
          name: 'Atul Gohad',
          company: 'Bosch Global Software Technologies',
          designation: 'Head, AI and Emerging Technologies',
          time: '03:00 p.m. - 03:10 p.m.',
          topic: 'Empowering Enterprises: Unlocking Potential with AI and GenAI',
          image: '/image7.png'
        },
        {
          type: 'speaker',
          name: 'Nikhil Bhushan',
          company: 'Starbucks India',
          designation: 'Chief Technological Officer',
          time: '03:15 p.m. - 03:25 p.m.',
          topic: 'Brewing Innovation: How AI is shaping the Future of Coffee and Retail',
          image: '/NikhilBhushan.png'
        },
        {
          type: 'speaker',
          name: 'Amit Verma',
          company: 'Hindustan Times Digital',
          designation: 'Chief Technology Officer',
          time: '03:30 p.m. - 03:40 p.m.',
          topic: 'Future of media: Leveraging AI for speed accuracy, content and scale',
          image: '/amit.png'
        },
        {
          type: 'speaker',
          name: 'Gaurav Anand',
          company: 'DIAGEO',
          designation: 'Head of Data & Analytics',
          time: '03:45 p.m. - 03:55 p.m.',
          topic: 'Imperfect Imitations: Why Generative AI Struggles to Scale',
          image: '/gaurav.png'
        }
      ]
    },{

      type:'Panel',
      title: "Redefining Skills for the Al Era: Creating the Future Workforce",
      time: '4:00pm - 4:30pm',
      items: [
        {
          type: 'speaker',
          name: 'Rishikesh Patankar',
          company: 'National Skill Development Corporation',
          designation: 'Vice President',

          topic: 'Coming Soon',
          image: '/image6.png'
        },
        {
          type: 'speaker',
          name: 'Sunil Dahiya',
          company: 'Wadhwani Foundations',
          designation: 'Executive Vice President-Skilling',

          topic: 'Coming Soon',
          image: '/image5.png'
        },
        {
          type: 'speaker',
          name: 'Pankaj Rai',
          company: 'Aditya Birla Group',
          designation: 'Group Chief Data and Analytics Officer',

          topic: 'Coming Soon',
          image: '/rai.png'
        },
        {
          type: 'speaker',
          name: 'Kamesh Sanghi',
          company: 'American India Foundation',
          designation: 'Dy. Country Director',

          topic: 'Coming Soon',
          image: '/kameshR.png'
        },
        {
          type: 'break',
          title: 'High Tea',
          time: '4:30 p.m. - 5:00 p.m.'
        }
      ]
    },{
      type:'Panel',
      title: "The Ultimate Pitch: Seizing the Opportunity to Present Your Idea to Industry Experts",
      time: '5:00pm - 6:30pm',
      items:[]
    }
    // ... (keep the existing agenda sections data)
  ];

  const observer = useRef();
  const lastElementRef = useCallback(node => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && currentIndex < agendaSections.length - 1) {
        setCurrentIndex(prevIndex => prevIndex + 1);
        setVisibleSections(prev => [...prev, agendaSections[currentIndex + 1]]);
      }
    }, { rootMargin: '200px' });
    if (node) observer.current.observe(node);
  }, [currentIndex]);

  useEffect(() => {
    setVisibleSections(agendaSections.slice(0, 1));
  }, []);

  return (
    <div className={styles.agenda}>
      <div className={styles.Header}>
        <h1>Inauguration of the Summit 2025</h1>
        <p className={styles.headerText}>9:30 a.m. - 10:00 a.m.</p>
      </div>

      <h1 className={styles.mainTitle}>Keynote Speaker</h1>

      <div className={styles.keynoteSpeakers}>
        {keynoteSpeakers.map((speaker, index) => (
          <KeynoteSpeaker key={index} speaker={speaker} />
        ))}
      </div>

      {visibleSections.map((section, index) => (
        <div 
          key={section.id} 
          className={styles.sessionContainer}
          ref={index === visibleSections.length - 1 ? lastElementRef : null}
        >
          <Line />
          <div className={styles.sessionMainHeader}>
            <div className={styles.sessionHeader}>
              <span>🎯</span>
              <h2>{section.type} {section.id}</h2>
              <span>🎯</span>
            </div>
            <h3 className={styles.sessionTitle}>{section.title}</h3>
            {section.type === 'Panel' && section.time ? (
        <div className={styles.panelTime}>{section.time}</div>
      ) : null}
          </div>
          <Line />

          <div className={styles.sessionSpeakers}>
            {section.items.map((item, itemIndex) => (
              <AgendaItem key={itemIndex} item={item} />
            ))}
          </div>
        </div>
      ))}

      <div className={styles.Footer}>
        <h1>CEO Round Table</h1>
        <p className={styles.footerText}>CEOs engage in a thought-provoking discussion on how to harness the power of GenAI to stay ahead in an increasingly competitive market.</p>
      </div>
    </div>
  );
};

export default Agenda;

