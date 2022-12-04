import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ArticleDetail from "./pages/ArticleDetail";
import Nav from "./components/Nav";
import ScrollToTop from "./components/ScrollTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FormData from "./components/FormData";
import ReactGA from "react-ga4";
//
ReactGA.initialize("G-M0NPHRKVNK");
const OnGa = () => {
  ReactGA.event({
    category: "your category",
    action: "your action",
    label: "your label", // optional
    value: 99, // optional, must be a number
    nonInteraction: true, // optional, true/false
    transport: "xhr", // optional, beacon/xhr/image
  });
};
function App() {
  return (
    <div className="App ">
      <div onClick={OnGa}>quang test ..................... </div>
      <ScrollToTop />
      <Nav />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations/:id" element={<ArticleDetail />} />
        </Routes>
      </Layout>
      <Footer />
      <FormData />
      <div>quang test ..................... </div>
    </div>
  );
}

export default App;
