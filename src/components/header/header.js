import React from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ButtonAdd from '../buttonAdd';
const Header = (props) => {
    return (
        <header className='header'>
            <h1>todos</h1>
            <form className='form-inline'>
                <div className='input-block-el'>
                    <input className='new-todo' placeholder='What needs to be done ?' autoFocus /></div>
                    <ButtonAdd addItem = {props.addItem} />
            </form>
        </header>
    )
}
export default Header;