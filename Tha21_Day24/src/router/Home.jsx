import React, { useContext } from "react";
import Context from "../context/Auth";

function Home(){
  const logger = useContext(Context);

  return(
    <div className="home">
      <h1>Home</h1>
      <h2>If not logged in cant access, Profile & Dashboard</h2>
      {
        (logger.loading ? (<p>Loading...</p>) : (logger.logged ? <button onClick={logger.logout}>Logout</button>: <button onClick={logger.login}>Login</button>))
      }
    </div>
  );
}

export default Home;