import logo from './logo.svg';
import './App.css';
import Homepage from './components/home/Homepage'
import MakeAChange from './components/MakeAChange/MakeAChange'
import Nav from './components/navigation/Nav'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div><div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
    <div>
      <Router>
        <Nav></Nav>
          <Switch></Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/makeAChange" component={MakeAChange} />
      </Router>
    </div></div>
      )
}

export default App;
