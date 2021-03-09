
import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <header className="App-header"/>
        

        <Switch>

          <Route path='/login' exact component={Login}/>
          <Route path='/register' exact component={Register}/>
        </Switch>
      
      

      </BrowserRouter>

    </div>
  );
}

export default App;
