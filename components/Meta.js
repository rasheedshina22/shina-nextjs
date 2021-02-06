import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Webdev Newz',
  keywords: 'web development, programming',
  description: 'site to read web dev and programming articles',
};

export default Meta;
