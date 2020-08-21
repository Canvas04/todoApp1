import React from 'react';

import TodoList from '../taskList';
import Footer from '../footer';
import './main.css';
const Main = () => {
    return (
      <section className='main'>
  
        <TodoList />
        <Footer />
      </section>
    )
  }

  export default Main;