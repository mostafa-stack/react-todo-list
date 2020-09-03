import React, { Component } from 'react';
import uuid from "react-uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import Todoinput from './components/Todoinput'
import Todolist from './components/Todolist'
class App extends Component {
  state={
    items : [{id:1 , title : 'wake up'}  , {id:2 , title : 'breakfast'}],
    id:uuid() , 
    item:'',
    editItem:false
  }
  handleChange=(e)=>{console.log('handle change');}
  handleSubmit=(e)=>{console.log('handle Submit');}
  render() {
    return (
      <section className='container'>
        <div className="row">
          <div className="col-10 mx-auto mt-4 md-5 text-center">
            <h3>Todo Input</h3>
            <Todoinput handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            <Todolist/>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
