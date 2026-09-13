import styles from './Header.module.css';
import Nav from '../Nav/Nav';
import articles from '../../data/articles';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>React Blog</h1>
        <Nav />
        <span className={styles.counter}>
          Статей: {articles.length}
        </span>
      </div>
    </header>
  );
}

export default Header;