// 일반적인 CSS
// import './Card1.css';
// CSS Module
import styles from './Card2.module.css';

function Card2() {
  return <article className={styles.card}>Card2</article>;
}
export default Card2;
