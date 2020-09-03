import React, { Component } from 'react';
import Todoitem from './Todoitem';

class Todolist extends Component {
    render() {
        return (
            <div>
                <h1>hello from list</h1>
                <Todoitem/>
            </div>
        );
    }
}

export default Todolist;
