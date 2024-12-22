import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import Posts from "./components/Posts/Posts";
import { useState } from "react";


function App() {
  const [user, setUser] = useState(null);
  return (
    <div>

      {user !== null ? (
        <>
          <NavBar user={user} setUser={setUser} />
          
          <Posts />

          <Articles />
        </>
      ) : (
        <Login setUser={setUser} />
      )}

      <Footer />
    </div>
  );
}

export default App;
