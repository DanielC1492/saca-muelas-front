
import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Login from './containers/Login/Login';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <header className="App-header"/>
        

        <Switch>

          <Route path='/login' exact component={Login}/>

        </Switch>
      
      

      </BrowserRouter>

    </div>
  );
}

export default App;
