import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";
import Home from "./Home";

function App() {
  const getUser = localStorage.getItem("user");
  const getPassword = localStorage.getItem("password");
  const user = useRef();
  const password = useRef();
  const handleSubmit = () => {
    console.log(user.current.value, password.current.value);
    if (
      user.current.value === "abc@gmail.com" &&
      password.current.value === "123"
    ) {
      localStorage.setItem("user", user.current.value);
      localStorage.setItem("password", password.current.value);
    }
  };
  return (
    <div className="App">
      {console.log(getUser, getPassword)}
      {/* this page will show the logIn if user data is not in localstorage, if data exist it will move to home page */}
      {getUser && getPassword ? (
        <Home />
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" ref={user} />
          </div>
          <div>
            <input type="password" ref={password} />
          </div>
          <button>login</button>
        </form>
      )}
    </div>
  );
}

export default App;
