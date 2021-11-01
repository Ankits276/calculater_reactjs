import React from "react";
import "./Calculater.css";

class Calculater extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {firststring: "", secondstring: "", result: ""};
  }

  handleOnchangeFirst = (event: any) => {
    this.setState({
      firststring: event.target.value,
    });
  };
  handleOnchangeSecond = (event: any) => {
    this.setState({
      secondstring: event.target.value,
    });
  };
  addition = () => {
    const {firststring, secondstring} = this.state;
    const output = parseInt(firststring) + parseInt(secondstring);
    this.setState({result: output});
  };
  subtract = () => {
    const {firststring, secondstring} = this.state;
    const output = parseInt(firststring) - parseInt(secondstring);
    this.setState({result: output});
  };
  multification = () => {
    const {firststring, secondstring} = this.state;
    const output = parseInt(firststring) * parseInt(secondstring);
    this.setState({result: output});
  };
  devide = () => {
    const {firststring, secondstring} = this.state;
    const output = parseInt(firststring) / parseInt(secondstring);
    this.setState({result: output});
  };

  render() {
    const {firststring, secondstring, result} = this.state;
    return (
      <>
        <input
          type="number"
          name="secondstring"
          placeholder="Enter first value"
          onChange={this.handleOnchangeFirst}
          value={firststring}
        />
        <input
          type="number"
          name="secondstring"
          placeholder="Enter second value"
          value={secondstring}
          onChange={this.handleOnchangeSecond}
        />
        <div className="btn">
          <button className="addition" onClick={this.addition}>
            Addition
          </button>
          <button className="Subtract" onClick={this.subtract}>
            Subtract
          </button>
          <button className="multification" onClick={this.multification}>
            Multification
          </button>
          <button className="devide" onClick={this.devide}>
            devide
          </button>
        </div>
        <p className="output">Output: {result}</p>
      </>
    );
  }
}
export default Calculater;
