import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
   <div className="container">
    <div className="wrapper">
   <h1>Bozza Dao Wallet Tracker</h1>
   <p>Enter wallet address:</p>
   <input type="text"></input>
   <button>Enter</button>

   </div>
   </div>
  );
}
