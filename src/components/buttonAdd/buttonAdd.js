import React , {Component} from 'react';


export default class ButtonAdd extends Component {

    render () {
        return  (
            <button className='btn btn-info' onClick={(e) =>{
                e.preventDefault();
                this.props.addItem('Hello World')
        } }>Add item</button>
        )
    }
}