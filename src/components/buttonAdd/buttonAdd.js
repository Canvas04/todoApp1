import React , {Component} from 'react';


export default class ButtonAdd extends Component {

    render () {
        return  (
            <button className='btn btn-info' onClick={this.props.onSubmit}>Add item</button>
        )
    }
}