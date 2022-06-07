import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pylonboard sunset</title>
        <meta name="description" content="You must construct additional Pylons..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Pylonboard has been sunset 🌑
        </h1>

        <p className={styles.description}>
          This is not the end, this is a new beginning. See more at <a href="https://sapient.fi" target={"_blank"} rel={"noopener noreferrer"}>Sapient FI</a>
        </p>
      </main>
    </div>
  )
}

export default Home
