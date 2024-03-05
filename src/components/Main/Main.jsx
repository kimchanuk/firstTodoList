import React, { useContext, useState } from 'react';
import { TodoDataContext } from '../../context/TodoData';
import TodoList from './TodoList';
import ModifyModal from '../Modal/ModifyModal';
import SearchInput from './SearchInput';

export default function Main({ newArray }) {
  const { modifyModal } = useContext(TodoDataContext);

  //헤더 메뉴를 클릭하면 headerArray가 나오게 해줘
  //검색 인풋을 클릭하면 떙땡배열이 나오게 해줘

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
