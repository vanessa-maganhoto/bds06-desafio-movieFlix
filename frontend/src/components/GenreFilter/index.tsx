
import { useEffect, useState } from 'react';
import { Genre } from 'types/genre';
import { requestBackend } from 'util/requests';
import './styles.css';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';

export type GenreFilterData = {
  name: Genre | null;
}

type Props = {
  onSubmitFilter: (data: GenreFilterData) => void;
};

const GenreFilter = ({ onSubmitFilter }: Props) => {

  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

  const { 
    handleSubmit, 
    setValue, 
    control, 
    getValues 
  } = useForm<GenreFilterData>();

  const onSubmit = (formData: GenreFilterData) => {
    onSubmitFilter(formData);
  };


  const handleChangeGenre = (value: Genre) => {
    setValue('name', value);

    const obj: GenreFilterData = {
      name: getValues('name'),
    };

    onSubmitFilter(obj);
  };

  useEffect(() => {
    requestBackend({ url: '/genres', withCredentials: true }).then((response) => {
      setSelectGenres(response.data);
    });
  }, []);

       
  return (
    <div className="genre-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="genre-filter-form">
        <div className="genre-filter-form-select">
        <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={selectGenres}
                  isClearable
                  classNamePrefix="genre-filter-select"
                  onChange={(value) => handleChangeGenre(value as Genre)}
                  getOptionLabel={(genre: Genre) => genre.name}
                  getOptionValue={(genre: Genre) => String(genre.id)}
                />
              )}
            />
          
        </div>
      </form>
    </div>
  );
};

export default GenreFilter;
