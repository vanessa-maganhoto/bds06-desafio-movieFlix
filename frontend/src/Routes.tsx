import Navbar from 'components/Navbar';
import PrivateRoute from 'components/PrivateRoute';
import Home from 'pages/Home';
import MovieCatalog from 'pages/Private/MovieCatalog';
import MovieDetails from 'pages/Private/MovieDetails';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'util/history';

const Routes = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        
        <PrivateRoute path="/movies" exact>
          <MovieCatalog />
        </PrivateRoute>

        <Route exact>
          <PrivateRoute path="/movies/:movieId">
            <MovieDetails />
          </PrivateRoute>
        </Route>

        <PrivateRoute path="/movies/:movieId/reviews">
          <MovieDetails />
        </PrivateRoute>
        
      </Switch>
      </Router >
  );
};

export default Routes;
