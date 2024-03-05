import React, { useContext, useState } from 'react';
import { TodoDataContext } from '../../context/TodoData';
import { HeaderModalContext } from '../../context/HeaderModal';

export default function SearchInput() {
  const { searchInit, setSearchInit } = useContext(HeaderModalContext);

  const searchChangeInput = e => {
    setSearchInit(e.target.value);
  };

  return (
    <div className='searchForm'>
      <input
        type='text'
        placeholder='Todo검색 인풋'
        onChange={searchChangeInput}
        value={searchInit}
      />
    </div>
  );
}
