import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TodoDataContext = createContext();

export const TodoDataContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할일1',
      status: 'active',
    },
    {
      id: 2,
      text: '할일2',
      status: 'active',
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const insertSubmitHandler = () => {
    setTodos([...todos, { id: uuidv4(), text: inputValue, status: 'active' }]);
  };
  //todos에 인풋값이 추가되는 함수

  //검색

  const [modifyModal, setModifyModal] = useState(false);
  const modifyModalHandler = () => {
    setModifyModal(prev => !prev);
  };

  const [initValue, setInitValue] = useState(null);

  //modify

  const removeHandler = todosObj => {
    const removeValue = todos.filter(t => t.id !== todosObj.id);
    setTodos(removeValue);
  };
  //todos에 filter를 이용하여 삭제하는 함수

  return (
    <TodoDataContext.Provider
      value={{
        todos,
        setTodos,
        inputValue,
        setInputValue,
        insertSubmitHandler,
        removeHandler,
        modifyModalHandler,
        modifyModal,
        initValue,
        setInitValue,
      }}
    >
      {children}
    </TodoDataContext.Provider>
  );
};
