import { useState } from "react";
import "./Main.css";

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
            <h2>Backround</h2>
            <p> Ancestry: {props.ancestry}</p>
            <p>Eye color: {props.eyeColour}</p>
            <p>Hair color: {props.hairColour}</p>
            <p>Patronus: {props.patronus}</p>
            <p>Actor: {props.actor}</p>
            <p>Wand: {props.wand}</p>
          </div>
        )}
        <div className="Main__button--space main__profile">
          <button
            onClick={showDetailsButton}
            className="Main__button"
            type="button"
          >
            {showDetails ? "Less" : "More"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Main;
