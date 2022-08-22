import Button from 'components/Button';

import './styles.css';

const ReviewWrite = () => {
  return (
    <div className="container-review">
      <form>
        <input 
        type="text" 
        placeholder="Deixe sua avaliação aqui" 
        name="text" />
        <Button text="salvar avaliação" />
      </form>
    </div>
  );
};

export default ReviewWrite;
