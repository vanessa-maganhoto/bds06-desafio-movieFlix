import { AxiosRequestConfig } from 'axios';
import Button from 'components/Button';
import { useForm } from 'react-hook-form';
import { Review } from 'types/review';
import { BASE_URL, requestBackend } from 'util/requests';

import './styles.css';

type Props = {
  movieId: string;
  onInsertReview: (review: Review) => void;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);
    const saveReview: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      withCredentials: true,
      baseURL: BASE_URL,
      data: formData,
    };

    requestBackend(saveReview)
      .then((response) => {
        setValue('text', '');
        onInsertReview(response.data);
        console.log('Salvo com sucesso', response);
      })
      .catch((e) => {
        console.log('Erro ao salvar', e);
      });
  };

  return (
    <div className="container-review">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('text', {
            required: 'Campo obrigatório',
          })}
          type="text"
          placeholder="Deixe sua avaliação aqui"
          name="text"
        />
        {errors.text?.message}

        <Button text="salvar avaliação" />
      </form>
    </div>
  );
};

export default ReviewForm;
