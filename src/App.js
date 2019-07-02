import React, { Component } from "react";
import NumberButtons from "./numberButton.js";
import Operators from "./operators.js";
import "./App.css";

class App extends Component {
  state = { resultDisplayed: false, result: "" };

  result = 0;
  operation = "";

  handleNumber = e => {
    //create empty string to desired value to add to result
    let newResult;
    let displayedResult;
    //create lastChar to check last character of result
    let lastChar = this.state.result[this.state.result.length - 1];

    //IF ACTUAL RESULT IS NOT DISPLAYED, ONLY APPEND NEW NUMBER TO RESULT
    if (e.currentTarget.value === "clear") {
      newResult = "";
    } else if (!this.state.resultDisplayed) {
      newResult = this.state.result + e.currentTarget.value;
      //ELSE IF RESULT IS DISPLAYED, AND LAST CHARACTER IS AN OPERATOR, APPEND NEW NUMBER AND FLIP RESULTDISPLAYED
    } else if (
      (this.state.resultDisplayed && lastChar === "+") ||
      lastChar === "-" ||
      lastChar === "*" ||
      lastChar === "/"
    ) {
      newResult = this.state.result + e.currentTarget.value;
      displayedResult = false;
    } else {
      newResult = e.currentTarget.value;
      displayedResult = false;
    }
    this.setState(() => {
      return { result: newResult, resultDisplayed: displayedResult };
    });
  };

  handleOperator = e => {
    let newResult;
    let lastChar = this.state.result[this.state.result.length - 1];
    let currentString = this.state.result;

    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "*" ||
      lastChar === "/"
    ) {
      newResult =
        currentString.substring(0, currentString.length - 1) +
        e.currentTarget.value;
    } else if (currentString.length === 0) {
      console.log("enter a number first");
    } else {
      newResult = this.state.result + e.currentTarget.value;
    }
    this.setState(() => {
      return { result: newResult };
    });
  };

  handleResult = () => {
    const opString = this.state.result;
    const numbersStringArray = opString.split(/\+|\-|\*|\//g);

    let numbers = [];
    numbersStringArray.forEach(function(number) {
      numbers.push(Number(number));
    });

    const operators = opString.replace(/[0-9]|\./g, "").split("");

    let multiply = operators.indexOf("*");
    while (multiply !== -1) {
      numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
      operators.splice(multiply, 1);
      multiply = operators.indexOf("*");
    }

    let divide = operators.indexOf("/");
    while (divide !== -1) {
      numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
      operators.splice(divide, 1);
      divide = operators.indexOf("/");
    }

    let add = operators.indexOf("+");
    while (add !== -1) {
      // using parseFloat is necessary, otherwise it will result in string concatenation :)
      numbers.splice(
        add,
        2,
        parseFloat(numbers[add]) + parseFloat(numbers[add + 1])
      );
      operators.splice(add, 1);
      add = operators.indexOf("+");
    }

    let subtract = operators.indexOf("-");
    while (subtract !== -1) {
      numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
      operators.splice(subtract, 1);
      subtract = operators.indexOf("-");
    }

    this.setState(() => {
      return { result: numbers[0], resultDisplayed: true };
    });
  };

  handleClear() {
    console.log("clear button");
    this.setState(() => {
      return { result: "" };
    });
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="calculator">
            <div className="input" id="input">
              {this.state.result}
            </div>
            <div className="buttons">
              <Operators handleOperator={e => this.handleOperator(e)} />
              <NumberButtons handleNumber={e => this.handleNumber(e)} />
              <button className="equal" onClick={this.handleResult}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
