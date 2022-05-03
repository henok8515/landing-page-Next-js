import styles from "./deal.module.css";
const Data = [
  {
    id: 1,
    title: "Personal",
    subTitle: "Special first packet for all",
    price: "$8",
    offer: "/ Month",
    desc1: "Up to 5 page each group",
    desc2: "Up to 10 group page",
    desc3: "5 Days group page saved",
  },
  {
    id: 2,
    title: "Regular",
    subTitle: "Recommended for personal pro",
    price: "$20",
    offer: "/ Month",
    desc1: "Up to 15 page each group",
    desc2: "Download page up to 20 page",
    desc3: "Up to 10 group page",
  },
  {
    id: 3,
    title: "Premium",
    subTitle: "Packet for Startup & Company",
    price: "$48",
    offer: "/ Month",
    desc1: "Unlimited group pages",
    desc2: " Unlimited group pages",
    desc3: "Customize sorting group pages",
  },
];
function Deal() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Get your best deal</h1>
      <div className={styles.button}>
        <span className={styles.span}>Monthly </span>
        {/* <input type="radio" /> */}
        <div className={styles.key}>
          <div className={styles.circle}></div>
        </div>
        <span className={styles.span}>Yearly</span>
      </div>
      <div className={styles.cardContainer}>
        {Data.map((data) => (
          <div className={styles.card}>
            <h1 className={styles.title}>{data.title}</h1>
            <h4 className={styles.subTitle}>{data.subTitle}</h4>
            <hr />
            <div className={styles.priceContainer}>
              <h2 className={styles.price}>{data.price}</h2>
              <h3 className={styles.offer}>{data.offer}</h3>
            </div>
            <div className={styles.desc}>
              <p className={styles.p}>✓{data.desc1}</p>
              <p className={styles.p}>✓{data.desc2}</p>
              <p className={styles.p}>✓{data.desc3}</p>
            </div>
            <button className={styles.button1}>Start now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deal;
