import Head from 'next/head';
import ArticleList from '../components/ArticleList';
import styles from '../styles/Layout.module.css';

export default function Home({ articles }) {
  return (
    <main className={styles.container}>
      <Head>
        <title>webdev news</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="web development programming software development"
        />
      </Head>

      <ArticleList articles={articles} />
    </main>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts/?_limit=10'
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
