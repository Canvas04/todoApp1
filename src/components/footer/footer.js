import React, { Component } from 'react';
import FilterList from '../taskFilter';
import './footer.css';
class Footer extends Component {
    state = {
        countTask: this.props.todoCount + this.props.doneCount
    }
    handlerDone = () => {
        this.setState(() => {
            return {
                countTask: this.props.doneCount
            }

        })
    }

    handlerActive = () => {
        this.setState(() => {
            return {
                countTask: this.props.todoCount
            }

        })
    }
handlerAll = () => {
    this.setState(() => {
        return {
            countTask: this.props.todoCount + this.props.doneCount
        }

    });
}

    render() {
        return (
            <footer className='footer'>
                <span className='todo-count'>{this.props.todoCount} left, {this.props.doneCount} done</span>
                <span className='tab-count'>{this.state.countTask}</span>
                <FilterList todoCount={this.props.todoCount} doneCount={this.props.doneCount} onHandlerDone={this.handlerDone} onHandlerActive = {this.handlerActive} onHandlerAll = {this.handlerAll}/>
                <button className='clear-completed'>Clear completed</button>
            </footer>

        )
    }

}
export default Footer;