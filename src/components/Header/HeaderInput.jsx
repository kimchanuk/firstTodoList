import React, { useContext } from 'react';
import { HeaderModalContext } from '../../context/HeaderModal';
import { useDarkMode } from '../../context/DarkMode';

export default function HeaderInput() {
  const { headerTaps, changeHeader } = useContext(HeaderModalContext);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <ul className='header'>
      <button onClick={toggleDarkMode}>
        {!darkMode ? '다크모드' : '라이트모드'}
      </button>
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
  );
}
