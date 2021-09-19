import React, {useState} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: "2%"
  }
})

export default function Nav() {
const [click, setClick] = useState(false);
const classes = useStyles();
const handleClick = () => setClick(!click);
  return (
     <>
      <nav className="navbar">
        <div className="nav-container">
          <Button variant="contained">
            <NavLink exact to="/" className="nav-logo" style={{margin: '5px'}}>
              Home
              <i className="fas fa-code"></i>
            </NavLink>
          </Button>
          <Button variant="contained">
            <NavLink
                  exact
                  to="/makeAChange"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                  style={{margin: '5px'}}
                >
                  Made a Lifestyle Change?
            </NavLink>
          </Button>
          
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
    );
  }