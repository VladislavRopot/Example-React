import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Posts from "./components/Posts/Posts";


function App() {
  return (
    <div>
       <NavBar />

       <Posts />

       <Articles /> 

       <Footer />
    </div>
  );
}

export default App;
