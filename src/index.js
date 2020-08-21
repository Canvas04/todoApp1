import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './components/footer'
import Header from './components/header';
import TodoList from './components/taskList';
import Main from './components/main';


const App = () => {
  return (
    <section className='todoApp'>
      <Header />
      <Main />
    </section>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))