import React, { useContext } from 'react';
import { TodoDataContext } from '../context/TodoData';
import ModifyModal from './ModifyModal';
import { HeaderModalContext } from '../context/HeaderModal';

export default function TodoList({ todosObj }) {
  const { id, text, status } = todosObj;
  const { removeHandler, modifyModalHandler, setInitValue, todos, setTodos } =
    useContext(TodoDataContext);

  const changeCheckHandler = e => {
    const status = e.target.checked ? 'completed' : 'active';
    const checkValue = todos.map(t =>
      t.id === id ? { ...todosObj, status } : t
    );
    setTodos(checkValue);
  };

  const removes = () => {
    removeHandler(todosObj);
  };

  return (
    <ul>
      <li className='mainList'>
        <input
          type='checkbox'
          checked={status === 'completed'}
          onChange={changeCheckHandler}
        />
        <span
          style={{
            color: status === 'completed' ? 'red' : 'black',
            textDecoration: status === 'completed' ? 'line-through' : 'none',
          }}
        >
          {text} :{status}
        </span>
        <button
          onClick={() => {
            setInitValue(todosObj);
            modifyModalHandler();
          }}
        >
          수정
        </button>
        <button onClick={removes}>삭제</button>
      </li>
    </ul>
  );
}
