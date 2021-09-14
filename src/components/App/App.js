import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  console.log("test");

  const someTextDescription = "Welcome to the first Day of your Life!";
  const url = "https://reactjs.org";

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
