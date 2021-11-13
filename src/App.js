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
import Footer from './components/Home/Footer/Footer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

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
            <PrivateRoute path="/detailes/:serviceId">
              <Detailes></Detailes>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/aDashboard">
              <ADashBoard></ADashBoard>
            </PrivateRoute>
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
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
