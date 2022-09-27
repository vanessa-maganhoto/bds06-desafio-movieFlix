import PrivateRoute from 'components/PrivateRoute';
import Home from 'pages/Home';
import { Switch } from 'react-router-dom';

const Movies = () => {
  return (
    <>
      <Switch>
        <PrivateRoute path="/movies">
          <Home />
        </PrivateRoute>
        <PrivateRoute path="/movies/:movieId">
          <Home />
        </PrivateRoute>
      </Switch>
    </>
  );
};

export default Movies;
