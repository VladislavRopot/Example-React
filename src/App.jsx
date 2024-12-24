import { useEffect, useState, createContext } from "react";  // Add createContext import
import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import Posts from "./components/Posts/Posts";

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('User a fost modificat!');
  }, []);  // [] - lista de dependente, fara el va fi randat de fiecare data

  return (
    <UserContext.Provider value={user}>
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
    </UserContext.Provider>
  );
}

export default App;
