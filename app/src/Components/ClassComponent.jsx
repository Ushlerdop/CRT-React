import React, { Component } from 'react';

class ClassComponent extends Component {
  isClassToggle = () => {
    this.props.isClassToggle();
  }

  render() {
    return (
      <div>
        <h1>Классовая компонента</h1>
        <button onClick={this.isClassToggle}>Поменять на функциональную компоненту</button>
      </div>
    );
  }
}

export default ClassComponent;