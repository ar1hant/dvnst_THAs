import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Context from "../context/Auth";

function Dashboard() {
  const logger = useContext(Context);
  return (
    <div className="dashboard">
      <Route>
        <div className="dashboard-p">
          {logger.logged ? <h2>Dashboard: Private Route</h2> : <Redirect to="/" />}
        </div>
      </Route>
    </div>
  );
}

export default Dashboard;