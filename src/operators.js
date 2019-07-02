import React, { Component } from "react";

class Operators extends Component {
  render() {
    return (
      <div className="operators">
        <button value="+" onClick={e => this.props.handleOperator(e)}>
          +
        </button>
        <button value="-" onClick={e => this.props.handleOperator(e)}>
          -
        </button>
        <button value="*" onClick={e => this.props.handleOperator(e)}>
          *
        </button>
        <button value="/" onClick={e => this.props.handleOperator(e)}>
          /
        </button>
      </div>
    );
  }
}

export default Operators;
