import React, { useContext } from 'react';
import { HeaderModalContext } from '../../context/HeaderModal';

export default function HeaderTitle({ newArray }) {
  const {
    headerModal,
    headerModalHandler,
    nameInput,
    setNameInput,
    headerTitle,
    setHeaderTitle,
    headerTap,
  } = useContext(HeaderModalContext);

  const headerChange = e => {
    const headerValue = e.target.value;
    setNameInput(headerValue);
  };

  const headerSubmit = e => {
    e.preventDefault();
    setHeaderTitle(nameInput);
    setNameInput('');
    headerModalHandler();
  };

  return (
    <div className='main-length'>
      <p>{headerTap}</p>
      <p>{newArray.length}개</p>

      {headerTitle}
      {headerModal && (
        <form onSubmit={headerSubmit}>
          <input
            type='text'
            value={nameInput}
            placeholder='이름을 입력하세요'
            onChange={headerChange}
          />
        </form>
      )}
      <button onClick={headerModalHandler}>수정</button>
    </div>
  );
}
