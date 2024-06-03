import Header from "./FormHandleElements/Header.js";
import Footer from "./FooterElements/Footer.js";
import './App.css';


//MainWeather is included in CityForm, Which is included in Header

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
