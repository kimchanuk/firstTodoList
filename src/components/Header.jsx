import React, { useContext } from 'react';
import { TodoDataContext } from '../context/TodoData';
import { HeaderModalContext } from '../context/HeaderModal';

export default function Header({ newArray }) {
  const {
    headerModal,
    headerModalHandler,
    nameInput,
    setNameInput,
    headerTitle,
    setHeaderTitle,
    headerTaps,
    changeHeader,
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
    <header>
      <div className='main-length'>
        <p>
          {headerTap}
          <p>{newArray.length}개</p>
        </p>
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

      <ul className='header'>
        <button>다크모드</button>
        {headerTaps.map((t, i) => (
          <li className='headerList' key={i}>
            <button
              onClick={() => {
                changeHeader(t);
              }}
            >
              {t}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
