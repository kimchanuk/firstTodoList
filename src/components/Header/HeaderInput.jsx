import React, { useContext } from 'react';
import { HeaderModalContext } from '../../context/HeaderModal';

export default function HeaderInput() {
  const { headerTaps, changeHeader } = useContext(HeaderModalContext);

  return (
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
  );
}
