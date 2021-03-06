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
//
function App() {
  return (
    <div className="App ">
      <ScrollToTop />
      <Nav />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/*  */}
          <Route path="/locations/:id" element={<ArticleDetail />} />
        </Routes>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
