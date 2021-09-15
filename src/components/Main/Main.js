import "./Main.css";
import HermineGranger from "../img/HermineGranger.webp";
import GryfindorFahne from "../img/GryfindorFahne.jpg";

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

function Main({ characterName, house, imgURL, ancestry }) {
  const color = tellColorName(house);

  return (
    <div>
      <div className={`Main__styling ${color}`}>
        <img className="Main__profile" src={imgURL} alt={characterName} />
        <div class>
          <h3 className="Main__name">{characterName}</h3>
          <p>House: {house}</p>
          <p className="Main__house"> Ancestry: {ancestry}</p>
        </div>
        <button className="Main__button" type="button">
          Mehr erfahren
        </button>
      </div>
    </div>
  );
}

export default Main;
