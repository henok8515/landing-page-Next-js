import styles from "./blog.module.css";
import Image from "next/image";
const Data = [
  {
    name: "facebook",
  },
  {
    name: "dribbble",
  },

  {
    name: "instagram",
  },
  {
    name: "linkedin",
  },
  {
    name: "github",
  },
  {
    name: "reddit",
  },
  {
    name: "pinterest",
  },
  {
    name: "twitter",
  },
];
function Blog() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>All platform connect to Findtrend</h1>
      <div className={styles.cardContainer}>
        {Data.map((data) => (
          <div key={data} className={styles.card}>
            <Image alt="img" src={`/${data.name}.png`} height="30" width="30" />
          </div>
        ))}
      </div>
      <div className={styles.tweet}></div>
      <div className={styles.tweet1}></div>
      <div className={styles.tweet}></div>
      <button className={styles.button}>View More Trend </button>
    </div>
  );
}

export default Blog;
