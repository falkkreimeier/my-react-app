import "./Footer.css";
import Gryffindor from "../img/Gryffindor.jpg";
import Ravenclaw from "../img/Ravenclaw.jpg";
import Slytherin from "../img/Slytherin.jpg";
import Hufflepuff from "../img/Hufflepuff.jpg";

function Footer({ activeButton, onHouseButtonClick }) {
  return (
    <div className="Footer__styling">
      <button className="Footer__button">
        <img
          className={`Footer__img ${
            activeButton === "Gryffindor" ? "footer__img--activered" : ""
          }`}
          onClick={() => onHouseButtonClick("Gryffindor")}
          src={Gryffindor}
        />
      </button>

      <button className="Footer__button">
        <img
          className={`Footer__img ${
            activeButton === "Ravenclaw" ? "footer__img--activeblue" : ""
          }`}
          onClick={() => onHouseButtonClick("Ravenclaw")}
          src={Ravenclaw}
        />
      </button>

      <button className="Footer__button">
        <img
          className={`Footer__img ${
            activeButton === "Hufflepuff" ? "footer__img--activeyellow" : ""
          }`}
          onClick={() => onHouseButtonClick("Hufflepuff")}
          src={Hufflepuff}
        />
      </button>

      <button className="Footer__button">
        <img
          className={`Footer__img ${
            activeButton === "Slytherin" ? "footer__img--activegreen" : ""
          }`}
          onClick={() => onHouseButtonClick("Slytherin")}
          src={Slytherin}
        />{" "}
      </button>
    </div>
  );
}

export default Footer;
