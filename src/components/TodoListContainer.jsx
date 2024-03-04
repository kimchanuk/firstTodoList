import React, { useContext } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { HeaderModalContext } from '../context/HeaderModal';
import { TodoDataContext } from '../context/TodoData';

export default function TodoListContainer() {
  const { todos } = useContext(TodoDataContext);
  const { headerTap, getFilteredItem } = useContext(HeaderModalContext);
  const newArray = getFilteredItem(todos, headerTap);
  return (
    <>
      <Header newArray={newArray} />
      <Main newArray={newArray} />
      <Footer />
    </>
  );
}
