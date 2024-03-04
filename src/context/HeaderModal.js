import { createContext, useState } from 'react';

export const HeaderModalContext = createContext();

export const HeaderModalContextProvider = ({ children }) => {
  const headerTaps = ['all', 'active', 'completed'];
  const [headerTap, setHeaderTap] = useState(headerTaps[0]);
  const [nameInput, setNameInput] = useState('');
  const [headerTitle, setHeaderTitle] = useState(null);
  const [headerModal, setHeaderModal] = useState(false);
  const headerModalHandler = () => {
    setHeaderModal(prev => !prev);
  };

  const changeHeader = data => {
    setHeaderTap(data);
  };

  const getFilteredItem = (todoItem, filterItem) => {
    if (filterItem === 'all') {
      return todoItem;
    } else {
      return todoItem.filter(t => t.status === filterItem);
    }
  };

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
      }}
    >
      {children}
    </HeaderModalContext.Provider>
  );
};
