import {useState} from "react"
import ButtonBar from "./Compnents/ButtonBar";
import PG from "./Compnents/PasswordGenerator";


export default function App() {
  const [color,setColor] = useState("black");

  return (
    <div>
      <PG />
    </div>
  );
}