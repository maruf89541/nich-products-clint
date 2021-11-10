import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Header from './components/Home/Header/Header';
import AuthProvider from './Contexts/AuthProvider';
import Detailes from './components/Home/Detailes/Detailes';
import Login from './components/Home/Login/Login';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/detailes/:serviceId">
              <Detailes></Detailes>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
      <h2>Hello world</h2>
    </div>
  );
}

export default App;
