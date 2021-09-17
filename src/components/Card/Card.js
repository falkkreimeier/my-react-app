import { useState } from "react";
import "./Card.css";

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

function Card(props) {
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
    <div className={props.isFavorite ? "Card__button--favorite" : ""}>
      <div className={`Card__styling ${color}`}>
        <section className="Card__emojis">
          <button
            onClick={() => handleEmojiButtonClick("⚡️")}
            className="Card__emojis--button"
          >
            ⚡️
          </button>
          <button
            onClick={() => handleEmojiButtonClick("🙊")}
            className="Card__emojis--button"
          >
            🙊
          </button>
          <button
            onClick={() => handleEmojiButtonClick("👹")}
            className="Card__emojis--button"
          >
            👹
          </button>
          <button
            onClick={() => handleEmojiButtonClick("😱")}
            className="Card__emojis--button"
          >
            😱
          </button>
          <button
            onClick={() => props.onFavoriteButtonClick("⭐️")}
            className="Card__button--favorit"
          >
            ⭐️
          </button>
        </section>
        <img
          className="Card__profile"
          src={props.imgURL}
          alt={props.characterName}
        />
        <div>
          <h3 className="Card__name">
            {emoji}
            {props.favorites}
            {props.characterName}
          </h3>
          <p className="Card__name">House: {props.house}</p>
          <p className="Card__name"> Birthday: {props.dateOfBirth}</p>
        </div>
        {showDetails && (
          <div className="Card__details">
            <h2>Backround</h2>
            <p>Ancestry: {props.ancestry}</p>
            <p>Eye color: {props.eyeColour}</p>
            <p>Hair color: {props.hairColour}</p>
            <p>Patronus: {props.patronus}</p>
            <p>Actor: {props.actor}</p>
            <p>Wand: {props.wand}</p>
          </div>
        )}
        <div className="Card__button--space Card__button--place">
          <button
            onClick={showDetailsButton}
            className="Card__button"
            type="button"
          >
            {showDetails ? "Less" : "More"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
