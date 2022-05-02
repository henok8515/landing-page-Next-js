import styles from "./card.module.css";
import Image from "next/image";

// import algolia from "../Assets.algolia.png";
// import bonanza from "../Assets.bonanza.png";
// import carrera from "../Assets.carrera.png";
// import coinbase from "../Assets.coinbase.png";
// import expedia from "../Assets.expedia.png";
// import grab from "../Assets.grab.png";
// import heineken from "../Assets.heineken.png";
// import magneto from "../Assets.magneto.png";
// import micro from "../Assets.micro.png";
// import suzuki from "../Assets.suzuki.png";
// import upwork from "../Assets.upwork.png";
// import verizon from "../Assets.verizon.png";
// import wetransfer from "../pages/wetransfer.png";
// // import volvo from "../Assets.volvo.png";
const Data = [
  { id: 1, name: "Microsoft", img: "micro" },
  { id: 2, name: "Algolia", img: "algolia" },
  { id: 3, name: "Bonanza", img: "bonanza" },
  { id: 4, name: "Upworks", img: "upwork" },
  { id: 5, name: "Volvo", img: "volvo" },
  { id: 6, name: "Grab", img: "grab" },
  { id: 7, name: "Verizon", img: "verizon" },
  { id: 8, name: "coinbase", img: "coinbase" },
  { id: 9, name: "Expedia", img: "expedia" },
  { id: 10, name: "Airtable", img: "airtable" },
  { id: 11, name: "Magneto", img: "magneto" },
  { id: 12, name: "Carre", img: "carrera" },
  { id: 13, name: "wetransfer", img: "wetransfer" },
  { id: 14, name: "Suzuki", img: "suzuki" },
  { id: 15, name: "Heineken", img: "heineken" },
];
function Card(params) {
  return (
    <div className={styles.container}>
      {Data.map((data) => (
        <div key={data.id} className={styles.card}>
          <Image
            className={styles.img}
            src={`/${data.img}.png`}
            alt="me"
            width="140"
            height="130 "
            // layout="fill"
            objectFit="contain"
          />
        </div>
      ))}
    </div>
  );
}
export default Card;
