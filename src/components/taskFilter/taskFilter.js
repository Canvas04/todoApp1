import React from 'react';
import './taskFilter.css';
const FilterList = ({ doneCount, todoCount }) => {
  const normalState = () => {
    document.querySelector('.todo-count').textContent = '';
    document.querySelector('.todo-count').insertAdjacentHTML('afterbegin', `<span> ${todoCount}  left,  ${doneCount}  done</span> `)
  }
  const handlerAll = () => {
    const allCount = doneCount + todoCount;
    document.querySelector('.todo-count').textContent = allCount + '   left';
    setTimeout(normalState, 3000);
  }
  const handlerDone = () => {
    document.querySelector('.todo-count').textContent = doneCount + '   completed';
    setTimeout(normalState, 3000);
  }
  const handlerActive = () => {
    document.querySelector('.todo-count').textContent = todoCount + '   left';
    setTimeout(normalState, 3000);
  }
  return (
    <ul className='filters'>
      <li>
        <button className='selected' onClick={handlerAll}>All</button>
      </li>
      <li>
        <button onClick={handlerActive}>Active</button>
      </li>
      <li>
        <button onClick={handlerDone}>Completed</button>
      </li>
    </ul>
  )
}

export default FilterList;