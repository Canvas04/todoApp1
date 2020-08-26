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
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        })
    }
    render() {
        return (
            <header className='header'>
                <h1>todos</h1>
                <form className='form-inline' onSubmit = {this.onSubmit}>
                    <div className='input-block-el'>
                        <input className='new-todo' placeholder='What needs to be done ?' onChange={this.onLabelChange} value = {this.state.label} autoFocus /></div>
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