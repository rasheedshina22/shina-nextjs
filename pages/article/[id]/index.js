// import { useRouter } from 'next/router';
import Link from 'next/link';

const Article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{article.title}</h1>
      <p style={{ marginBottom: '5rem' }}>{article.body}</p>

      <Link href="/">Go back</Link>
    </div>
  );
};

//this appears slow. this data is only be fetched when we request this data
//that us why is seem slow
// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

//this is the standard way to do it in conjuction with getStaticPaths
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default Article;
