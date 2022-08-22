import { AuthContext } from 'AuthContext';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { removeAuthData } from 'util/storage';
import './styles.css';

const Navbar = () => {

  const history = useHistory();

  const { authContextData, setAuthContextData } = useContext(AuthContext);

  const handleLogoutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="navbar bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </Link>
        <div>
          {authContextData.authenticated ? (
            <button type="submit" onClick={handleLogoutClick}>Sair</button>
          ) : ('')}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
