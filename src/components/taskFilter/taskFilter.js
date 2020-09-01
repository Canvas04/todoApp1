import React from 'react';
import './taskFilter.css';
import PropTypes from 'prop-types';

const FilterList = ({ onHandlerDone,onHandlerActive,onHandlerAll}) => {
  
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
FilterList.defaultProps = {
  onHandlerAll: () => {},
  onHandlerActive : () => {},
  onHandlerDone : () => {}
}
FilterList.propTypes = {
  onHandlerAll: PropTypes.func,
  onHandlerActive: PropTypes.func,
  onHandlerDone: PropTypes.func
}
export default FilterList;