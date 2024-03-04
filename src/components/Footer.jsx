import React, { useContext } from 'react';
import { TodoDataContext } from '../context/TodoData';

export default function Footer() {
  const { inputValue, setInputValue, insertSubmitHandler } =
    useContext(TodoDataContext);

  const insertInputChange = e => {
    const insertTarget = e.target.value;
    setInputValue(insertTarget);
  };

  const insertSubmit = e => {
    e.preventDefault();
    if (inputValue.trim().length === 0) {
      return;
    }
    insertSubmitHandler();
    setInputValue('');
  };

  return (
    <form className='footerForm' onSubmit={insertSubmit}>
      <input
        type='text'
        value={inputValue}
        placeholder='insert todoList..'
        onChange={insertInputChange}
      />
    </form>
  );
}
