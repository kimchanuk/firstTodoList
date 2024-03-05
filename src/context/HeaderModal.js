import { createContext, useState } from 'react';

export const HeaderModalContext = createContext();

export const HeaderModalContextProvider = ({ children }) => {
  const changeHeader = data => {
    setHeaderTap(data);
  };

  const headerTaps = ['all', 'active', 'completed'];
  const [headerTap, setHeaderTap] = useState(headerTaps[0]);
  const [nameInput, setNameInput] = useState('');
  const [headerTitle, setHeaderTitle] = useState(null);
  const [headerModal, setHeaderModal] = useState(false);
  const headerModalHandler = () => {
    setHeaderModal(prev => !prev);
  };

  const [searchInit, setSearchInit] = useState('');

  const searchFilter = todoItem => {
    if (searchInit === '') {
      return todoItem;
    } else if (todoItem.map(t => t.text.includes(searchInit))) {
      return todoItem.filter(t => t.text.includes(searchInit));
    }
  }; //검색메뉴

  const getFilteredItem = (todoItem, filterItem) => {
    if (filterItem === 'all') {
      return todoItem;
    } else if (filterItem === 'active' || filterItem === 'completed') {
      return todoItem.filter(t => t.status === filterItem);
    }
  };

  //TAB메뉴

  //   if (searchInit === '') {
  //     return todoItem;
  //   } else {
  //     return todoItem.filter(t => t.text.includes(searchInit));
  //   }

  //   const searchInputHandler = () => {
  //     if (searchInit === '') {
  //       return todos;
  //     }
  //     return todos.filter(t => t.text.includes(searchInit));
  //   };

  //서치 인풋의 초기상태

  //   todos.map(t =>
  //     t.text.includes(data)
  //       ? setTodos(todos.filter(t => t.text.includes(data)))
  //       : setTodos([...todos])
  //   );

  //   if (todos.map(t => t.text.includes(searchInit) === false)) {
  //     setTodos([...todos]);
  //   }
  //   if (todos.map(t => t.text.includes(searchInit))) {
  //     const searchFilter = todos.filter(t =>
  //       t.text.toUpperCase().includes(searchInit.toUpperCase())
  //     );
  //     setTodos(searchFilter);
  //   }

  return (
    <HeaderModalContext.Provider
      value={{
        headerModal,
        setHeaderModal,
        headerModalHandler,
        nameInput,
        setNameInput,
        headerTitle,
        setHeaderTitle,
        headerTaps,
        changeHeader,
        headerTap,
        getFilteredItem,
        searchInit,
        setSearchInit,
        searchFilter,
      }}
    >
      {children}
    </HeaderModalContext.Provider>
  );
};
