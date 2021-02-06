import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>webdev</span> News
      </h1>
      <p className={styles.description}>
        keep up to date with the lates web development news
      </p>
    </div>
  );
};

export default Header;
