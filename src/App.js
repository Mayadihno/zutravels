import "./App.css";
import Header from "./Components/BlogHeader/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
