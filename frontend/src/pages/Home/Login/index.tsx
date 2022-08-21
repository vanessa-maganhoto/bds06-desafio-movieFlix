import Button from 'components/Button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getAuthData, requestBackendLogin, saveAuthData } from 'util/requests';
import './styles.css';

type FormData = {
  username: string;
  password: string;
};
const Login = () => {
  const [hasError, setHasError] = useState(false);

  const { register, handleSubmit, formState: {errors} } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        const token = getAuthData().access_token;
        console.log(token);
        setHasError(false);
        console.log('SUCESSO', response);
      })
      .catch((error) => {
        setHasError(true);
        console.log('ERRO', error);
      });
  };

  return (
    <div className="home-login">
      <h1>login</h1>
      {hasError && (
        <div className="alert alert-danger">Preencha os dados corretamente</div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('username', {
            required: 'Campo obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Preencha com email válido'
            }
          })}
          type="text"
          placeholder="Email"
          name="username"
        />
        {/* Pode ser colocada a classe mb-2 do bootstrap para facilitar a responsividade para isso é preciso envolver o input e a div abaixo com uma outro div que receberá a classe mb-2 */}
        <div className="invalid-feedback d-block">{errors.username?.message}</div>
        <input
          {...register('password', {
            required: 'Campo obrigatório'
          })}
          type="password"
          placeholder="Senha"
          name="password"
        /> 
        {/* Pode ser colocada a classe mb-2 do bootstrap para facilitar a responsividade para isso é preciso envolver o input e a div abaixo com uma outro div que receberá a classe mb-2 */}
        <div className="invalid-feedback d-block">{errors.password?.message}</div>
        <Button text="fazer login" />
      </form>
    </div>
  );
};

export default Login;
