import React, { useContext, useState } from 'react';
import { TodoDataContext } from '../context/TodoData';
import TodoList from './TodoList';
import ModifyModal from './ModifyModal';
import { HeaderModalContext } from '../context/HeaderModal';

export default function Main({ newArray }) {
  const { modifyModal } = useContext(TodoDataContext);

  return (
    <section className='main'>
      <div>
        {newArray.map(t => (
          <TodoList todosObj={t} key={t.id} />
        ))}
      </div>
      {modifyModal && <ModifyModal />}
    </section>
  );
}
