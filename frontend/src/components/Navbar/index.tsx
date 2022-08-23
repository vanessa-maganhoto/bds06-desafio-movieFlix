import { AuthContext } from 'AuthContext';
import { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getTokenData, isAuthenticated } from 'util/auth';
import { removeAuthData } from 'util/storage';
import './styles.css';

const Navbar = () => {
  const history = useHistory();

  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
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

        {authContextData.authenticated ? (
          <button className="nav-button">
            <a href="#logout" onClick={handleLogoutClick}>
              SAIR
            </a>
          </button>
        ) : (
          ''
        )}
      </div>
    </nav>
  );
};

export default Navbar;
