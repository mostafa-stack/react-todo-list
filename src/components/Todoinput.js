import React, { Component } from 'react';

class Todoinput extends Component {
    render() {
        const {handleChange , handleSubmit , editItem , item} = this.props
        return (
        <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <i className="fas fa-book text-light bg-primary py-2 px-3 "></i>
                    </div> 
                    <input type="text" className="form-control" onChange={handleChange} value={item
                    } ></input>
                </div>  
                <button 
                type="submit" 
                disabled = {item?false : true}
                className={editItem?'form-control bg-success text-center text-light text-capitalize mt-3':'form-control bg-primary text-center text-light text-capitalize mt-3'} >
                    {editItem?'edit item':'add item'} 
                </button>  
            </form>
        </div>
        );
    }
}

export default Todoinput;
