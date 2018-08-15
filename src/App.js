import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Code Challenge</h1>
        </header>
        <p className="App-intro">

          You can implement this in your favourite way, we are interested in the approach more than anything else.<br />
          Feel free to install any package you believe is necessary to achieve the final goal if necessary.<br />

          Please vocalise your thoughts and ask questions if needed.
        </p>
        <p className="App-intro">
          <h1><span role="img" aria-label="Tasks">✅</span>&nbsp;Tasks:</h1>
          <ul>
            <li>Please create a component called "<strong>ClkContainer</strong>"</li>
            <li>Please create a new component called "<strong>ClkSelectList</strong>"<br />
          Its purpose is to wrap the &lt;select&gt; HTML element and to bind it to a model. <br />
          The available options are ["white", "red", "green", "yellow", "blue"]
          </li>

          <li>Please create a component called "<strong>ClkInputSelector</strong>"
          Its purpose is to wrap the &lt;input&gt; HTML element and to add some logic to it.</li>
          </ul>
       
          <span role="img" aria-label="Goal">🏁</span>&nbsp;The final goal is:
          <ul>
          <li>Display <strong>ClkSelectList</strong> with all its options</li>
          <li>Display <strong>ClkInputSelector</strong> next to it</li>
          <li>If the content of <strong>ClkInputSelector</strong> matches one of the available options in <strong>ClkSelectList</strong>, select that value, if not, don't do anything </li>
          <li><span role="img" aria-label="Boom">💥</span> BONUS: provide a way for adding new elements to the <strong>ClkSelectList</strong> at runtime at runtime while preserving the functionality you have built so far, again, you have complete freedom over the approach</li>
          </ul>
        </p>
      </div>
    );
  }
}

export default App;
