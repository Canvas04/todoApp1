import React from 'react';
import './taskFilter.css';
import PropTypes from 'prop-types';

const FilterList = ({handlerAll,handlerActive,handlerDone }) => {
  
  return (

    <ul className='filters'>
      <li>
        <button type='button' onClick={handlerAll}>All</button>
      </li>
      <li>
        <button type='button' onClick={handlerActive} >Active</button>
      </li>
      <li>
        <button type='button' onClick = {handlerDone} >Completed</button>
      </li>
    </ul>
  )
}
FilterList.defaultProps = {
  handlerAll: () => {},
  handlerActive: () => {},
  handlerDone: () => {},
}
FilterList.propTypes = {
  handlerAll: PropTypes.func,
  handlerActive: PropTypes.func,
  handlerDone: PropTypes.func,
}
export default FilterList;