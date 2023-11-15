import Blog from "./Blog";
import Card from "./Card";
import Content from "./Content";
import Content1 from "./Content1";
import Deal from "./Deal";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./home.module.css";
import Join from "./Join";
import Motto from "./Motto";

function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <Content />
      <Content1 id="section1" />
      <Motto />
      <Card />
      <Blog />
      <Deal />
      <Join />
      <Footer />
    </div>
  );
}

export default HomePage;
