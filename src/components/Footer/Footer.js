import "./Footer.css";
import Gryffindor from "../img/Gryffindor.jpg";
import Ravenclaw from "../img/Ravenclaw.jpg";
import Slytherin from "../img/Slytherin.jpg";
import Hufflepuff from "../img/Hufflepuff.jpg";

function Footer() {
  return (
    <div className="Footer__styling">
      <img class="Footer__button" src={Gryffindor} />
      <img class="Footer__button" src={Ravenclaw} />
      <img class="Footer__button" src={Hufflepuff} />
      <img class="Footer__button" src={Slytherin} />
    </div>

    // <div className="Footer__styling">
    //   <img></img>
    //   <button class="Footer__button" type="button">
    //     Gryfindor
    //   </button>
    //   <button class="Footer__button" type="button">
    //     Ravenclaw
    //   </button>
    //   <button class="Footer__button" type="button">
    //     Hufflepuff
    //   </button>
    //   <button class="Footer__button" type="button">
    //     Slytherin
    //   </button>
    // </div>
  );
}

export default Footer;
