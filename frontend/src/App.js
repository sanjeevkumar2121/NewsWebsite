
import Navbar from './Components/navbar';
import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/footer";
import { HomePage, Body } from "./Components/homepage";
function App() {
  return (
    <div className="App">
     < Navbar / >

      <HomePage />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
