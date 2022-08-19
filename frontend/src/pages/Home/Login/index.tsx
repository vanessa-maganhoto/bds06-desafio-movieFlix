import Button from 'components/Button';
import './styles.css';

const Login = () => {
  return (
    <div className="home-login">
      <h1>login</h1>
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Senha" />
      </form>
      <Button />
    </div>
  );
};

export default Login;
