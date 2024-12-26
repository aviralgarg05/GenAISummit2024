import Image from 'next/image';
import styles from '../styles/Agenda.module.scss';

interface AgendaItemProps {
  item: {
    type: string;
    title?: string;
    time: string;
    image?: string;
    name?: string;
    company?: string;
    designation?: string;
    topic?: string;
  };
}

const AgendaItem: React.FC<AgendaItemProps> = ({ item }) => {
  if (item.type === 'break') {
    return (
      <div className={styles.breakCard}>
        <span className={styles.breakTitle}>{item.title}</span>
        <span className={styles.breakTime}>{item.time}</span>
      </div>
    );
  }

  return (
    <div className={styles.sessionCard}>
      <div className={styles.timeSlot}>{item.time}</div>
      <div className={styles.cardContent}>
        <Image
          src={item.image || '/path/to/placeholder/image.png'}
          alt={item.name || ''}
          width={80}
          height={80}
          className={styles.sessionSpeakerImage}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
        />
        <div className={styles.speakerInfo}>
          <h4>{item.name}</h4>
          <p className={styles.company}>{item.company}</p>
          <p className={styles.designation}>{item.designation}</p>
        </div>
        <div className={styles.sessionTopic}>{item.topic}</div>
      </div>
    </div>
  );
};

export default AgendaItem;

