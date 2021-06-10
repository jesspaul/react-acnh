import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' render={() => 
          <Home />
        }/>
      </Switch>
    </div>
  );
}

export default App;
