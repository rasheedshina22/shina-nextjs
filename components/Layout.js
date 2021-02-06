import styles from '../styles/Layout.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from './Header';
import Meta from '../components/Meta';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <section className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </section>
      <Footer />
    </>
  );
};

export default Layout;
