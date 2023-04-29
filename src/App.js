import Preloader from "./components/Preloader";
import Optin from "./components/Optin";
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="container">
      <h1>
        Website
        <br />
        Coming Soon
      </h1>
      <Optin />
      <Preloader />
    </div>
  </div>
  );
}

export default App;
