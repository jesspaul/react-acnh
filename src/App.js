import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Category from './pages/Category/Category';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' render={() => 
          <Home />
        }/>
        <Route exact path='/category' render={() => 
          <Category />
        }/>
      </Switch>
    </div>
  );
}

export default App;
