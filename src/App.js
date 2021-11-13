import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Header from './components/Home/Header/Header';
import AuthProvider from './Contexts/AuthProvider';
import Detailes from './components/Home/Detailes/Detailes';
import Login from './components/Home/Login/Login';
import ADashBoard from './components/Home/AdminDashBoard/ADashBoard';
import MyOrder from './components/Home/MyOrder/MyOrder';
import Register from './components/Home/Ragister/Register';
import Review from './components/Home/Riveiw/Review';
import Service from './components/Home/Service/Service';
import Services from './components/Home/Services/Services';

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
            <Route path="/aDashboard">
              <ADashBoard></ADashBoard>
            </Route>
            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
          </Switch>

        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
