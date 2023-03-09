import img_dice from "./assets/icon-dice.svg";
import img_desktop from "./assets/pattern-divider-desktop.svg";
import img_mobile from "./assets/pattern-divider-mobile.svg";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

function App() {
  const { data, isLoading, refetch } = useQuery(["KEY1"], () => {
    return Axios.get("https://api.adviceslip.com/advice").then(
      (key) => key.data.slip
    );
  });
  if (isLoading) {
    return (
      <h1 style={{ color: "hsl(150, 100%, 66%)" }}>L o a d i n g . . .</h1>
    );
  }
  return (
    <div className="App">
      <div className="Card">
        <p className="Card__title">
          ADVICE <span className="Card__title-id"> #{data?.id}</span>
        </p>
        <p className="Card__disc">{data?.advice}</p>
        <div className="Card__line">
          <img src={img_desktop} alt="" />
        </div>
        <button onClick={refetch} className="Card__btn">
          <img className="Card__btn-icon" src={img_dice} alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;
