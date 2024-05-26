import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/footer";
import { HomePage, Body } from "./Components/homepage";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
