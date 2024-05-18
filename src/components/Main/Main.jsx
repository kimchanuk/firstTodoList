import React, { useContext, useEffect, useState } from 'react';
import { TodoDataContext } from '../../context/TodoData';
import TodoList from './TodoList';
import ModifyModal from '../Modal/ModifyModal';
import SearchInput from './SearchInput';

export default function Main({ newArray }) {
  const { modifyModal } = useContext(TodoDataContext);

  return (
    <section className='main'>
      <SearchInput />
      <div>
        {newArray.map(t => (
          <TodoList todosObj={t} key={t.id} />
        ))}
      </div>
      {modifyModal && <ModifyModal />}
    </section>
  );
}
