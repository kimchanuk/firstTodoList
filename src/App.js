import { useContext } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import {
  HeaderModalContext,
  HeaderModalContextProvider,
} from './context/HeaderModal';
import TodoListContainer from './components/TodoListContainer';

function App() {
  return (
    <div className='App'>
      <TodoListContainer />
    </div>
  );
}

export default App;
