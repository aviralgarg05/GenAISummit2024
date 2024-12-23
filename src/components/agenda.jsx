// Agenda.js
import Image from 'next/image';
import styles from '../styles/Agenda.module.scss';

const Agenda = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <Image
                    src="/AgendaFinal.svg"
                    alt="Conference Agenda"
                    width={1200}
                    height={1500}
                    className={styles.agendaImage}
                    priority
                />
            </div>
        </div>
    );
};

export default Agenda;