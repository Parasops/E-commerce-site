import Bot from "./components/Bot.jsx";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Store from "./components/Store.jsx";


import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/Footer.scss";
import "./styles/Contact.scss";
import "./styles/Store.scss";
import "./styles/Bot.scss";
function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path = "/home" element = {<Home />} />
        <Route path = "/Contact" element = {<Contact />} />
        <Route path = "/Store" element = {<Store />} />
        
      </Routes>
      <Footer />
      <Bot />
    </Router>


  );
}

export default App;
