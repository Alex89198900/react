import React, { useEffect } from 'react';
import { CardType } from '../model';
import List from '../components/List';
import Header from '../components/Header';
import { setData } from '../model';
import { FieldValues, useForm } from 'react-hook-form';
import Sppiner from '../components/Spinner';
type FormInputs = {
  input?: string;
};

function Main() {
  const [arr, setCards] = React.useState<CardType[]>([]);
  const [paramFil, setparamFil] = React.useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: {},
  } = useForm<FormInputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
  const onSubmit = (data: FieldValues): void => {
    setparamFil(data.input);
    reset();
  };

  useEffect(() => {
    setData(setCards, paramFil);
  }, [paramFil]);

  return (
    <div className="main">
      <h1>Main</h1>
      <Header title="Main" />
      <form onSubmit={handleSubmit(onSubmit)} className="catalin">
        <input
          type="text"
          {...register('input', { required: 'Please Enter Name' })}
          className="input"
          placeholder="search by category and name product"
        />
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
      <List elem={arr} />
      {arr.length === 0 && <Sppiner />}
    </div>
  );
}
export default Main;
