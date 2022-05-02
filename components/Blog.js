import styles from "./blog.module.css";

let Data = [1, 2, 3, 4, 5, 6, 7, 8];
function Blog() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>All platform connect to Findtrend</h1>
      <div className={styles.cardContainer}>
        {Data.map((data) => (
          <div className={styles.card}>{data}</div>
        ))}
      </div>
      <div className={styles.tweet}></div>
    </div>
  );
}

export default Blog;
