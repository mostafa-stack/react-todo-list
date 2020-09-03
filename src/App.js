import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todoinput from './components/Todoinput'
import Todolist from './components/Todolist'
class App extends Component {
  render() {
    return (
      <section>
        <Todoinput/>
        <Todolist/>
      </section>
    );
  }
}

export default App;
