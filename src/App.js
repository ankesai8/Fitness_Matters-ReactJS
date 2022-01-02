import './App.css';
import Navbar from './components/Navbar';
import New_User from './components/New_User';
import New_Exercise from './components/New_Exercise';
import HomePage from './components/HomePage';
import About from './components/About';
import Footer from './components/Footer';
import UserList from './components/UserList';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        

        <Switch>

          <Route exact path="/">
            <HomePage/>
          </Route>

          <Route exact path="/existing_user">
            <New_Exercise />
          </Route>

          <Route exact path="/new_user">
            <New_User />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/userlist">
            <UserList />
          </Route>

        </Switch>

        <Footer/>

      </Router>
    </>
  );
}

export default App;


// TO-DO
// add something so that usernames and passwords are being checked and displayed.