import React from 'react';
import './taskFilter.css';
import PropTypes from 'prop-types';

const FilterList = ({filter,changeFilter }) => {
  
  const handlerFilterChange = (e) => {
changeFilter(e.currentTarget.dataset.value)
  }
  return (

    <ul className='filters'>
      <li>
        <button type='button' data-value='all' onClick={handlerFilterChange}>All</button>
      </li>
      <li>
        <button type='button' data-value='active' onClick={handlerFilterChange} >Active</button>
      </li>
      <li>
        <button type='button' data-value='completed' onClick = {handlerFilterChange} >Completed</button>
      </li>
    </ul>
  )
}
FilterList.defaultProps = {
  changeFilter: () => {},
 
}
FilterList.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func
}
export default FilterList;