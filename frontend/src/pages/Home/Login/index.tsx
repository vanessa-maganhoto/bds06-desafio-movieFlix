import Button from 'components/Button';
import { useForm } from 'react-hook-form';
import './styles.css';


type FormData = {
  username: string;
  password: string;
}
const Login = () => {

  const { register, handleSubmit} = useForm<FormData>();

  const onSubmit = (formData : FormData) => {
    console.log(formData);
  };

  return (
    <div className="home-login">
      <h1>login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
        {...register("username")}
        type="text" 
        placeholder="Email"
        name="username" 
        />
        <input 
        {...register("password")}
        type="password" 
        placeholder="Senha" 
        name="password"
        />
      <Button text="fazer login"/>
      </form>
    </div>
  );
};

export default Login;
