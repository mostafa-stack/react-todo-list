import React, { Component } from 'react';
import Todoitem from './Todoitem';
class Todolist extends Component {
    render() {
        const {items ,handleEdit , handleDelete ,clearList}=this.props
        return (
            <div>
                <div className="list-group my-5" >
                    <h2 className='text'>todo list</h2>
                    {items.map(item => <Todoitem key ={item.id} title={item.title} handleEdit= {()=>handleEdit(item.id)} handleDelete={()=>handleDelete(item.id)} />)}
                </div>
                <button className="btn btn-danger btn-block text-capitalize" onClick={clearList} >clear list</button>
            </div>
        );
    }
}

export default Todolist;
