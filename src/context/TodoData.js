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
  //모달창의 상태값

  const modifyModalHandler = () => {
    setModifyModal(prev => !prev);
  };
  //모달창을 클릭시 상태가 변하는 함수

  const [initValue, setInitValue] = useState(null);
  //모달창의 초기 데이터 상태값 처음은 null

  //////////////////
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
