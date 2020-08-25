import React from 'react';
import './taskFilter.css';
const FilterList = ({ doneCount, todoCount ,tabCount, onHandlerDone,onHandlerActive,onHandlerAll}) => {
  
  return (

    <ul className='filters'>
      <li>
        <button  onClick={onHandlerAll}>All</button>
      </li>
      <li>
        <button onClick={onHandlerActive} >Active</button>
      </li>
      <li>
        <button onClick = {onHandlerDone} >Completed</button>
      </li>
    </ul>
  )
}

export default FilterList;