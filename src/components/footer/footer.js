import React from 'react';
import FilterList from '../taskFilter';
import './footer.css';
const Footer = () => {
    return (
        <footer className='footer'>
            <span className='todo-count'>1 items left</span>
            <FilterList />
            <button className='clear-completed'>Clear completed</button>
        </footer>

    )
}
export default Footer;