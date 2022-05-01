import styles from "./card.module.css";

const Data = [
  { id: 1, name: "Microsoft", img: "" },
  {
    name: "Microsoft",
    img: "",
  },
  { id: 2, name: "Microsoft", img: "" },
  { id: 3, name: "Aliianz", img: "" },
  { id: 4, name: "Upworks", img: "" },
  { id: 5, name: "Volvo", img: "" },
  { id: 6, name: "Grab", img: "" },
  { id: 7, name: "Verizon", img: "" },
  { id: 8, name: "coinbase", img: "" },
  { id: 9, name: "Expedia", img: "" },
  { id: 10, name: "Airtable", img: "" },
  { id: 11, name: "Magneto", img: "" },
  { id: 12, name: "Carre", img: "" },
  { id: 13, name: "Microsoft", img: "" },
  { id: 14, name: "Microsoft", img: "" },
  { id: 15, name: "Microsoft", img: "" },
];
function Card() {
  return (
    <div className={styles.container}>
      {Data.map((data) => (
        <div className={styles.card}>{data.id}</div>
      ))}
    </div>
  );
}

export default Card;
