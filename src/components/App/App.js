import Header from "../Header/Header";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import "./App.css";
import { useState } from "react";

function App({ data }) {
  const [activeButton, setButtonColor] = useState("");
  function handleHouseButtonClick(house) {
    setButtonColor(house);
  }

  const filteredData = data.filter((character) => {
    return character.house === activeButton;
  });

  const [favorites, setFavorite] = useState(() => {
    if (localStorage.getItem("favoritesLocalStorage")) {
      return JSON.parse(localStorage.getItem("favoritesLocalStorage"));
    } else {
      return [];
    }
  });

  function handleFavoriteButtonClick(characterName) {
    const isFavorite = favorites.includes(characterName);

    let newFavorites;
    if (isFavorite) {
      newFavorites = favorites.filter((item) => {
        if (item === characterName) {
          return false;
        } else {
          return true;
        }
      });
    } else {
      newFavorites = favorites.concat(characterName);
    }
    setFavorite(newFavorites);
    localStorage.setItem("favoritesLocalStorage", JSON.stringify(newFavorites));
  }

  data.filter(
    (character) => character.house === activeButton || activeButton === ""
  );

  return (
    <div className="App">
      <Header />

      {filteredData.map((character) => (
        <Card
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
          onFavoriteButtonClick={handleFavoriteButtonClick}
          isFavorite={favorites.indexOf(character.name) > -1}
          favorites={favorites}
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
