import React from "react";
import Login from "./LoginModal";
import RegisterModal from "./RegisterModal";
function Home() {
  const auth = {
    isAuthenticated: false,
    user: null,
    token: null,
  };

  const error = {
    id: null,
    msg: null,
  };
  return (
    <div>
      HOME
      <Login auth={auth} error={error} />
      <RegisterModal auth={auth} error={error} />
    </div>
  );
}

export default Home;
