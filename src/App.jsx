import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Posts from "./components/Posts/Posts";
import { useState } from "react";


function App() {
  let [isAuthentificated, setIsAuthenticated] = useState(false);
  return (
    <div>
      <NavBar isAuthentificated={isAuthentificated} setIsAuthenticated={setIsAuthenticated} />

      {isAuthentificated === true && (
        <>
          <Posts />

          <Articles />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
