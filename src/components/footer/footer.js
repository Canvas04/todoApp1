import React from 'react';
import FilterList from '../taskFilter';
import './footer.css';
const Footer = ({doneCount,allCount,todoCount}) => {
    return (
        <footer className='footer'>
            <span className='todo-count'>{todoCount} left, {doneCount} done</span>
            <FilterList todoCount = {todoCount} doneCount = {doneCount} />
            <button className='clear-completed'>Clear completed</button>
        </footer>

    )
}
export default Footer;