import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  constructor(){
    super();
    this.state={
      input: ''
    }
  }

  onChangeHandler(event){
   this.setState({
      input: event.target.value,
    })
  }
  render() {
    const lower = this.state.input.toLowerCase()
    const list = posts
        .filter(d => this.state.input === '' || d.title.toLowerCase().includes(lower))
        .map((d, index) => <li key={index}>
          <a href={d.url}><img src={d.image } alt={d.title}/></a>
           <p>{ d.title }</p>
          </li>);
    return (
      <div>
        <div className="filter">
          <input type="text" value={this.state.input} onChange={this.onChangeHandler.bind(this)} placeholder="Ingresa el término de búsqueda" />
        </div>
        <ul>
        {list}
        </ul>
      </div>
    )
  }
}


export default App


