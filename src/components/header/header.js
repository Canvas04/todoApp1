import React, { Component } from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import ButtonAdd from '../buttonAdd';

class Header extends Component {
state = {
    label: ''
}

    onLabelChange = (e) => {
        this.setState( {
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        const {addItem} = this.props;
        const {label} = this.state;
        e.preventDefault();
        addItem(label);
        this.setState({
            label: ''
        })
    }

onChangeItem = (e) => {
e.preventDefault();
}

    render() {
        const {label} = this.state;
        return (
            <header className='header'>
                <h1>todos</h1>
                <form className='form-inline' onSubmit = {this.onSubmit} id='formTodo'>
                    <div className='input-block-el'>
                        <input className='new-todo' placeholder='What needs to be done ?' onChange={this.onLabelChange} value = {label} /></div> 
                    <ButtonAdd addItem={this.onSubmit} />
                </form>
            </header>
        )
    }

}
Header.defaultProps ={
addItem : () => {}
}
Header.propTypes = {
addItem : PropTypes.func
}
export default Header;