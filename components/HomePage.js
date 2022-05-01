import Card from "./Card";
import Content from "./Content";
import Content1 from "./Content1";
import Header from "./Header";
import styles from "./home.module.css";
import Motto from "./Motto";

function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <Content />
      <Content1 />
      <Motto />
      <Card />
    </div>
  );
}

export default HomePage;
