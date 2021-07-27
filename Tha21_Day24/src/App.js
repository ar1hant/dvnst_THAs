import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./router/About.jsx";
import Dashboard from "./router/Dashboard.jsx";
import Home from "./router/Home.jsx";
import Profile from "./router/Profile.jsx";
import { AuthContext } from "./context/Auth";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/profile">Profile</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
        <Switch>
          <AuthContext>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/dashboard" component={Dashboard} />
          </AuthContext>
        </Switch>
      </Router>
    </div>
  );
}

export default App;