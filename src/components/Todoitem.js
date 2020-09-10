import React, { Component } from 'react';

class Todoitem extends Component {
    render() {
        const {title , handleEdit , handleDelete} =  this.props
        return (
            <div className="list-group-item d-flex justify-content-between">
                <h4 className='text-left' >{title}</h4>
                <div >
                    <i className="fas fa-pen text-success mr-3" onClick={handleEdit}></i>
                    <i className="fas fa-trash text-danger" onClick={handleDelete}></i>
                </div>
            </div>
        );
    }
}

export default Todoitem;
