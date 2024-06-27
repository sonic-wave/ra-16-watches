import React from 'react'
import './Form.css'

interface FormProps {
    onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  }

export const Form: React.FC<FormProps> = ({onSubmitHandler}) => {
  return (
    <form className='form-container' onSubmit={onSubmitHandler}>
        <label htmlFor='name'>Название</label>
        <input type='text' id='name' name='name' />
        <label htmlFor='time-zone'>Временная зона</label>
        <input type='text' id='time-zone' name='time-zone' />
        <button className='form-button' type="submit">Добавить</button>
    </form>
  )
}
