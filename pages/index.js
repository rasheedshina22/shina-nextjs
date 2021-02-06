import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>Create Next App</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <h1>hello world. this is a nextjs app</h1>
    </main>
  );
}
