import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./components/Routes/Posts/Posts";
import Articles from "./components/Routes/Articles/Articles";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<>Home page</>} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/articles" Component={Articles} />
        <Route path="*" element={<>Error, Pagina nu a fost gasita!!!</>} /> //mereu trebuie sa fie ultima
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
