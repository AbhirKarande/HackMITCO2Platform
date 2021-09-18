import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from "./components/authentication/Signup";
import { Container } from "react-bootstrap"
import { AuthProvider } from "./components/authentication/AuthContext"
import Login from "./components/authentication/Login"
import PrivateRoute from "./components/authentication/PrivateRoute"
import ForgotPassword from "./components/authentication/ForgotPassword"
import UpdateProfile from "./components/authentication/UpdateProfile"
import Dashboard from "./components/home/Dashboard"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App;
