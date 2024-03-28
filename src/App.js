import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList.tsx';
import PokemonDetails from './components/PokemonDetails.tsx';
import PokemonImage from './components/PokemonImage.tsx';
import { Provider } from 'react-redux';
import store from './redux/store.ts';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-wrapper">
          <div className="image-wrapper">
            <PokemonImage />
          </div>
          <div className="route-wrapper">
            <Switch>
              <Route path="/" exact>
                <PokemonList />
              </Route>
              <Route path="/details">
                <PokemonDetails />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
