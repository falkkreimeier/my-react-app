import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.css";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <Header />
      {data.map((character) => (
        <Main
          characterName={character.name}
          house={character.house}
          imgURL={character.image}
          ancestry={character.ancestry}
          key={character.name}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
