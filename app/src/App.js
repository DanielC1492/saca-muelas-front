
import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Home from './containers/Home/Home';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <header className="App-header">
        <div className="headerText">Sacamuelas Clinic</div>
        </header>
        

        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/register' exact component={Register}/>
        </Switch>
      
      

      </BrowserRouter>

    </div>
  );
}

export default App;
