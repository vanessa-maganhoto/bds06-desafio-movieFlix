import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import MovieCatalog from 'pages/Private/MovieCatalog';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies">
            <MovieCatalog />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
