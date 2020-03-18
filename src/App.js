import React, { Component } from "react";
import { connect } from "react-redux";

import { addData$ } from "./services/action";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { name: "", message: "", permission: null, showdata: false };
  }

  clickHandler = () => {
    let name = this.state.name;
    let message = this.state.message;
    let permission = this.state.permission;
    this.props.addUpData(name, message, permission);
  };

  dataShow = () => {
    if (this.state.showdata) {
      return this.props.userData.map((item, index) => {
        if (item.permission) {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.message}</td>
              <button key={index}>Update</button>
              <button key={index}>
                Delete
              </button>
            </tr>
          );
        }
      });
    }
  };

  render() {
    return (
      <>
        <div className="App">
          <input
            className="input"
            type="text"
            placeholder="Enter name"
            onChange={event => this.setState({ name: event.target.value })}
          />
          <textarea
            onChange={event => this.setState({ message: event.target.value })}
            className="textarea"
            type="text"
            placeholder="Enter text here..."
            rows="5"
            cols="40"
          />
          <div className="checkbox">
            <input
              type="checkbox"
              id="enable"
              onChange={() =>
                this.setState({ permission: !this.state.permission })
              }
            />
            <label htmlFor="enable">Enabled</label>
          </div>
          <button onClick={()=>this.clickHandler}>Create</button>
          <button
            onClick={() => this.setState({ showdata: !this.state.showdata })}
          >
            Read
          </button>
        </div>
        <table>
          <th>
            <td>Name</td>
            <td>Message</td>
          </th>
          {this.state.showdata ? <div>{this.dataShow()}</div> : null}
        </table>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { userData: state };
}

export default connect(mapStateToProps, dispatch => ({
  addUpData: (name, message, permission) =>
    dispatch(addData$.trigger({ name, message, permission }))
}))(App);
