import React, { Component } from "react";

class NumberButtons extends Component {
  render() {
    return (
      <div className="leftPanel">
        <div className="numbers">
          <button value="7" onClick={e => this.props.handleNumber(e)}>
            7
          </button>
          <button value="8" onClick={e => this.props.handleNumber(e)}>
            8
          </button>
          <button value="9" onClick={e => this.props.handleNumber(e)}>
            9
          </button>
        </div>
        <div className="numbers">
          <button value="4" onClick={e => this.props.handleNumber(e)}>
            4
          </button>
          <button value="5" onClick={e => this.props.handleNumber(e)}>
            5
          </button>
          <button value="6" onClick={e => this.props.handleNumber(e)}>
            6
          </button>
        </div>
        <div className="numbers">
          <button value="1" onClick={e => this.props.handleNumber(e)}>
            1
          </button>
          <button value="2" onClick={e => this.props.handleNumber(e)}>
            2
          </button>
          <button value="3" onClick={e => this.props.handleNumber(e)}>
            3
          </button>
        </div>
        <div className="numbers">
          <button value="0" onClick={e => this.props.handleNumber(e)}>
            0
          </button>
          <button value="." onClick={e => this.props.handleNumber(e)}>
            .
          </button>
          <button value="clear" onClick={e => this.props.handleNumber(e)}>
            C
          </button>
        </div>
      </div>
    );
  }
}

export default NumberButtons;
