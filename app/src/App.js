
import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Home from './containers/Home/Home';
import Profile from './containers/Profile/Profile';
import Appointment from './containers/Appointment/Appointment';
import Schedule from './containers/Schedule/Schedule';
import Admin from './containers/Admin/Admin';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/register' exact component={Register}/>
          <Route path='/profile' exact component={Profile} />
          <Route path='/appointment' exact component={Appointment}/>
          <Route path='/schedule' exact component={Schedule} />
          <Route path='/admin' exact component={Admin}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
