import React from "react";
import ReactDOM from "react-dom";
import ConvertInput from "./ConvertInput";
import ConvertOutput from "./ConvertOutput";
import convertToRoman from "./convertToRoman";

import "./styles.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      output: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({
      output: convertToRoman(e.target.value)
    });
  }

  render() {
    return (
      <div className="App container">
        <h1 className="container__label">Roman Numeral Converter</h1>
        <ConvertInput onChange={this.handleInput} />
        <ConvertOutput value={this.state.output} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
