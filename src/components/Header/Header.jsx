import React from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderInput from './HeaderInput';

export default function Header({ newArray }) {
  return (
    <header>
      <HeaderTitle newArray={newArray} />
      <HeaderInput newArray={newArray} />
    </header>
  );
}
