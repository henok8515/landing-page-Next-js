import React from "react";
import styles from "./deal.module.css";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
const label = { inputProps: { "aria-label": "Switch demo" } };

const Data = [
  {
    id: 1,
    title: "Personal",
    subTitle: "Special first packet for all",
    price: {
      monthly: "$24",
      yearly: "$148",
    },
    offer: "/ Month",
    desc1: "Up to 5 page each group",
    desc2: "Up to 10 group page",
    desc3: "5 Days group page saved",
  },
  {
    id: 2,
    title: "Regular",
    subTitle: "Recommended for personal pro",
    price: {
      monthly: "$34",
      yearly: "$248",
    },
    offer: "/ Month",
    desc1: "Up to 15 page each group",
    desc2: "Download page up to 20 page",
    desc3: "Up to 10 group page",
  },
  {
    id: 3,
    title: "Premium",
    subTitle: "Packet for Startup & Company",
    price: {
      monthly: "$58",
      yearly: "$548",
    },
    offer: "/ Month",
    desc1: "Unlimited group pages",
    desc2: " Unlimited group pages",
    desc3: "Customize sorting group pages",
  },
];

function Deal() {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(checked, "checked");
  };

  const IOSSwitch = styled((props) => (
    <Switch
      checked={checked}
      onChange={handleChange}
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 82,
    height: 38,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(42px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#2ECA45",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 35,
      height: 35,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#2ECA45" : "#2ECA45",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Get your best deal</h1>
      <div className={styles.button}>
        <span className={styles.span}>Monthly </span>
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        />
        <span className={styles.span}>Yearly</span>
      </div>
      <div className={styles.cardContainer}>
        {Data.map((data) => (
          <div key={data.id} className={styles.card}>
            <h1 className={styles.title}>{data.title}</h1>
            <h4 className={styles.subTitle}>{data.subTitle}</h4>
            <hr />
            <div className={styles.priceContainer}>
              {checked ? (
                <h2 className={styles.price}>{data.price.yearly} </h2>
              ) : (
                <h2 className={styles.price}>{data.price.monthly} </h2>
              )}
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
