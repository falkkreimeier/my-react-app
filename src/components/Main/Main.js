import { useState } from "react";
import "./Main.css";

// function Main() {
// const characterName = "Hermione Granger";
// const house = "Gryffindor";

function tellColorName(house) {
  let color;
  if (house === "Gryffindor") {
    color = "red";
  } else if (house === "Hufflepuff") {
    color = "yellow";
  } else if (house === "Ravenclaw") {
    color = "blue";
  } else if (house === "Slytherin") {
    color = "green";
  } else {
    color = "white";
  }
  return color;
}

function Main(props) {
  const [showDetails, setshowDetails] = useState(false);
  const [emoji, setemoji] = useState("");

  const handleEmojiButtonClick = (emoji) => {
    setemoji(emoji);
  };

  const showDetailsButton = () => {
    setshowDetails(!showDetails);
  };
  const color = tellColorName(props.house);

  return (
    <div>
      <div className={`Main__styling ${color}`}>
        <section class="Main__emojis">
          <button
            onClick={() => handleEmojiButtonClick("⚡️")}
            className="Main__emojis--button"
          >
            ⚡️
          </button>
          <button
            onClick={() => handleEmojiButtonClick("🙊")}
            className="Main__emojis--button"
          >
            🙊
          </button>
          <button
            onClick={() => handleEmojiButtonClick("👹")}
            className="Main__emojis--button"
          >
            👹
          </button>
          <button
            onClick={() => handleEmojiButtonClick("😱")}
            className="Main__emojis--button"
          >
            😱
          </button>
        </section>
        <img
          className="Main__profile"
          src={props.imgURL}
          alt={props.characterName}
        />
        <div>
          {emoji}
          <h3 className="Main__name">{props.characterName}</h3>
          <p className="Main__name">House: {props.house}</p>
          <p className="Main__name"> Birthday: {props.dateOfBirth}</p>
        </div>
        {showDetails && (
          <div className="main__details">
            <p> Ancestry: {props.ancestry}</p>
            <p>Eye color: {props.eyeColour}</p>
            <p>Hair color: {props.hairColour}</p>
            <p>Patronus: {props.patronus}</p>
            <p>Actor: {props.actor}</p>
            <p>Wand: {props.wand}</p>
          </div>
        )}
        {/* {showDetails ? <div>Details</div> : <div></div>} */}
        <div class="Main__button--space main__profile">
          <button
            onClick={showDetailsButton}
            className="Main__button"
            type="button"
          >
            Show details
          </button>
        </div>
      </div>
    </div>
  );
}

// "name": "Hermione Granger",
// "species": "human",
// "gender": "female",
// "house": "Gryffindor",
// "dateOfBirth": "19-09-1979",
// "yearOfBirth": 1979,
// "ancestry": "muggleborn",
// "eyeColour": "brown",
// "hairColour": "brown",
// "wand": { "wood": "vine", "core": "dragon heartstring", "length": "" },
// "patronus": "otter",
// "hogwartsStudent": true,
// "hogwartsStaff": false,
// "actor": "Emma Watson",
// "alive": true,
// "image": "http://hp-api.herokuapp.com/images/hermione.jpeg"
export default Main;
