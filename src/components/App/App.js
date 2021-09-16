import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.css";
import { useState } from "react";

function App({ data }) {
  const [activeButton, setButtonColor] = useState("");
  function handleHouseButtonClick(house) {
    setButtonColor(house);
  }
  return (
    <div className="App">
      <Header />
      {data
        .filter(
          (character) => character.house === activeButton || activeButton === ""
        )
        .map((character) => (
          <Main
            characterName={character.name}
            house={character.house}
            imgURL={character.image}
            ancestry={character.ancestry}
            key={character.name}
            eyeColour={character.eyeColour}
            patronus={character.patronus}
            actor={character.actor}
            dateOfBirth={character.dateOfBirth}
            wandspecs={character.wand}
          />
        ))}
      <Footer
        activeButton={activeButton}
        onHouseButtonClick={handleHouseButtonClick}
      />
    </div>
  );
}

export default App;
