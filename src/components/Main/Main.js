import "./Main.css";
import HermineGranger from "../img/HermineGranger.webp";
import GryfindorFahne from "../img/GryfindorFahne.jpg";

function Main() {
  const characterName = "Hermione Granger";
  const house = "Gryfindor";

  return (
    <div class="Main__rotate">
      <div className="Main__styling">
        <img
          className="Main__profile"
          src={HermineGranger}
          alt={characterName}
        />
        <p className="Main__name">Name: {characterName}</p>
        <p className="Main__house">House: {house}</p>
      </div>

      <div className="Main__styling">
        <img
          className="Main__profile"
          src={HermineGranger}
          alt={characterName}
        />
        <p className="Main__name">{characterName}</p>
        <p className="Main__house">{house}</p>
      </div>

      <div className="Main__styling">
        <img
          className="Main__profile"
          src={HermineGranger}
          alt={characterName}
        />
        <p className="Main__name">{characterName}</p>
        <p className="Main__house">{house}</p>
      </div>

      <div className="Main__styling">
        <img
          className="Main__profile"
          src={HermineGranger}
          alt={characterName}
        />
        <p className="Main__name">{characterName}</p>
        <p className="Main__house">{house}</p>
      </div>
    </div>
  );
}

export default Main;
