import styles from '../styles/Layout.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
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
