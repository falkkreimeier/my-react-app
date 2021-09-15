import "./Footer.css";
import Gryffindor from "../img/Gryffindor.jpg";
import Ravenclaw from "../img/Ravenclaw.jpg";
import Slytherin from "../img/Slytherin.jpg";
import Hufflepuff from "../img/Hufflepuff.jpg";
import { useState } from "react";

function Footer() {
  const [button, setButtonColor] = useState("");

  return (
    <div className="Footer__styling">
      <img
        className={`Footer__button ${
          button === "Gryffindor" ? "footer__button--activered" : ""
        }`}
        onClick={() => setButtonColor("Gryffindor")}
        class="Footer__button"
        src={Gryffindor}
      />

      <img
        className={`Footer__button ${
          button === "Ravenclaw" ? "footer__button--activeblue" : ""
        }`}
        onClick={() => setButtonColor("Ravenclaw")}
        class="Footer__button"
        src={Ravenclaw}
      />
      <img
        className={`Footer__button ${
          button === "Hufflepuff" ? "footer__button--activeyellow" : ""
        }`}
        onClick={() => setButtonColor("Hufflepuff")}
        class="Footer__button"
        src={Hufflepuff}
      />
      <img
        className={`Footer__button ${
          button === "Slytherin" ? "footer__button--activegreen" : ""
        }`}
        onClick={() => setButtonColor("Slytherin")}
        class="Footer__button"
        src={Slytherin}
      />
    </div>

    // <div className="Footer__styling">
    //   <img></img>
    //   <button
    //     // class="Footer__button"
    //     className={button === "Gryffindor" ? "footer__button--active" : ""}
    //     onClick={() => setButtonColor("Gryffindor")}
    //     type="button"
    //   >
    //     Gryfindor
    //   </button>
    //   <button
    //     className={button === "Ravenclaw" ? "footer__button--active" : ""}
    //     onClick={() => setButtonColor("Ravenclaw")}
    //     type="button"
    //   >
    //     Ravenclaw
    //   </button>
    //   <button
    //     className={button === "Hufflepuff" ? "footer__button--active" : ""}
    //     onClick={() => setButtonColor("Hufflepuff")}
    //     type="button"
    //   >
    //     Hufflepuff
    //   </button>
    //   <button
    //     className={button === "Slytherin" ? "footer__button--active" : ""}
    //     onClick={() => setButtonColor("Slytherin")}
    //     type="button"
    //   >
    //     Slytherin
    //   </button>
    // </div>
  );
}

export default Footer;
