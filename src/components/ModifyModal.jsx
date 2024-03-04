import React, { useContext, useState } from 'react';
import { TodoDataContext } from '../context/TodoData';

export default function ModifyModal() {
  const { modifyModalHandler, todos, setTodos, initValue, setInitValue } =
    useContext(TodoDataContext);
  const { id, text } = initValue;
  const modifyCompleted = e => {
    e.preventDefault();
    const d = todos.map(t => (t.id === id ? { ...initValue, text } : t));
    setTodos(d);
    modifyModalHandler();
  };
  //확인

  const modifyChange = e => {
    setInitValue({ ...initValue, text: e.target.value });
  };
  //체인지

  return (
    <form className='modifyModal' onSubmit={modifyCompleted}>
      <input type='text' value={text} onChange={modifyChange} />
      <div className='modifyModalDiv'>
        <button>확인</button>
        <button onClick={modifyModalHandler}>취소</button>
      </div>
    </form>
  );
}
