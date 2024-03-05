import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TodoDataContextProvider } from './context/TodoData';
import { HeaderModalContextProvider } from './context/HeaderModal';
import { DarkMoeContextProvider } from './context/DarkMode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DarkMoeContextProvider>
    <HeaderModalContextProvider>
      <TodoDataContextProvider>
        <App />
      </TodoDataContextProvider>
    </HeaderModalContextProvider>
  </DarkMoeContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
