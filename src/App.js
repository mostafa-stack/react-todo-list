import React, { Component } from 'react';
import uuid from "react-uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css" ;
import Todoinput from './components/Todoinput'
import Todolist from './components/Todolist'
class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    e.preventDefault();
    let itemVal = e.target.value;
    this.setState({
      item: itemVal,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: this.state.id, title: this.state.item };
    const updatedItems = [...this.state.items, newItem];
    this.setState(
      {
        items: updatedItems,
        item: "",
        id: uuid(),
        editItem: false,
      }
    );
  };
  handleEdit = (id) => {
    const sortedItems = this.state.items.filter((item) => item.id !== id);
    const itemEdited = this.state.items.filter((item) => item.id === id);
    console.log(itemEdited);
    this.setState({
      items: sortedItems,
      id: itemEdited[0].id,
      item: itemEdited[0].title,
      editItem: true,
    });
  };
  handleDelete = (id) => {
    const sortedItems = this.state.items.filter(item =>item.id !== id)
    this.setState({
      items : sortedItems
    })
  };
  clearList = () => {
    this.setState({
      items: []
    })
  };
  render() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-8 mx-auto mt-4 md-5 text-center">
            <h3>Todo Input</h3>
            <Todoinput
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              item={this.state.item}
              editItem={this.state.editItem}
            />
            <Todolist
              items={this.state.items}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
              clearList={this.clearList}
            />
            <i className="fas fa-ad"></i>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
