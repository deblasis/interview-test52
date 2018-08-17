import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    
    this.state = {elements: [{
      name: "a",
    },{
      name: "b",
    },{
      name: "c",
    }]};

    this.addElement = this.addElement.bind(this);
    this.deleteSecond = this.deleteSecond.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }

  addElement() {

    let array = this.state.elements;
    array.push({name: "NEW!"});

    this.setState(({
      elements: array
    }));
  }



  deleteSecond() {
    this.setState(prevState => ({
      elements: prevState.elements.filter((_, i) => i !== 1)
    }));
  }


  
  shuffle() {

    let array = this.state.elements;
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState(({
      elements: array
    }));
  }

  render() {
    const content = this.state.elements.map((e, index) =>
      <div key={index}>
        <p>{e.name}</p>
      </div>
    );

  

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Code Challenge</h1>
        </header>
       
        <button onClick={this.addElement}>Add element</button>
        <button onClick={this.deleteSecond}>Delete second element</button>
        <button onClick={this.shuffle}>SHUFFLE!!</button>


        {content}

        <pre>
          {JSON.stringify(this.state.elements)}
        </pre>

      </div>
    );
  }
}

export default App;
