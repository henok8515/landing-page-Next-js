import styles from "./motto.module.css";

function Motto() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        Findtrend helps you to increase your productivity and reduce your
        computer's memory load,
        <span className={styles.span}>
          {" "}
          an application that can fulfill your daily browsing needs.
        </span>
      </h1>
      <h1 className={styles.h1}>Findtrend make +1000 Startup grow</h1>
    </div>
  );
}

export default Motto;