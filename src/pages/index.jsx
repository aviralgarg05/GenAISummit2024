import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
import WhoShouldAttend from '../components/WhoShouldAttend'
import AdvisoryCommittee from '../components/AdvisoryCommittee'
import styles from '../styles/Home.module.scss'
import Speakers from '@/components/Speaker'
import Themes from '@/components/Themes'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gen AI - Summit</title>
        <meta name="description" content="Summit website description" />
        <link rel="icon" href="/GenAI.svg" />
      </Head>

      <main className={styles.main}>
        <About />
        <WhoShouldAttend />
        <Speakers/>
        <Themes/>
        <AdvisoryCommittee />
      </main>

    </div>
  )
}