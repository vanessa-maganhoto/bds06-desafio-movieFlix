import Navbar from 'components/Navbar';
import { ReactComponent as BannerHome } from 'assets/images/banner-home.svg';
import Button from 'components/Button';
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h1>Avalie Filmes</h1>
            <p>Diga o que você achou do seu filme favorito</p>
          </div>
          <div className="home-image-container">
            <BannerHome />
          </div>
        </div>

        <div className="home-login">
            <h1>login</h1>
            <form>
                <input type='text' placeholder='Email'/>
                <input type="password"
                placeholder="Senha"/>
            </form>
            <Button />
        </div>
      </div>
    </>
  );
};

export default Home;
