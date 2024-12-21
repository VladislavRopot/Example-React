import LoginForm from "./components/LoginForm/LoginForm"; 
import Footer from "./components/Footer/Footer";
import Articles from "./components/Articles/Articles";
import Posts from "./components/Posts/Posts";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";

function App() {
  let [isAuthentificated, setIsAuthenticated] = useState(false);
  const [FormValues, setFormValues] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
  });

  const handleOnInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFormValues({
      ...FormValues,
      [name]: value,
    });
  };

  const login = (user) => {
    if (user.FirstName !== '' && user.LastName !== '') {
      setIsAuthenticated(true);
    } else {
      alert('Fill in form data!');
    }
  };

  return (
    <div>
      <NavBar isAuthentificated={isAuthentificated} setIsAuthenticated={setIsAuthenticated} />

      {isAuthentificated === true ? (
        <>
          <Posts />
          <Articles />
        </>
      ) : (
        <LoginForm FormValues={FormValues} handleOnInput={handleOnInput} login={login} />
      )}

      <Footer />
    </div>
  );
}

export default App;
