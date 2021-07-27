import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Context from "../context/Auth";

function Profile() {
  const logger = useContext(Context);
  return (
    <div className="profile">
      <Route>
        <div className="profile-p">
          {logger.logged ? <h2>Profile</h2> : <Redirect to="/" />}
        </div>
      </Route>
    </div>
  );
}

export default Profile;