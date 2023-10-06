import React from "react";

const Home = () => {
  return (
    <div>
      Home
      <button
        onClick={() => {
          localStorage.removeItem("user");
          window.location.reload();
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Home;
