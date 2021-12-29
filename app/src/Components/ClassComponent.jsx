import React, { Component } from 'react';
import '../App.css';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: this.props.time };
    this.setClassComponentTime = this.props.setClassComponentTime.bind(this);
    this.isClassToggle = this.props.isClassToggle.bind(this);
    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    this.timerId = setInterval(this.timer, 100);
  }

  componentWillUnmount() {
    this.setClassComponentTime(this.state.seconds);
    clearInterval(this.timerId);
  }

  timer() {
    this.setState({
      seconds: this.state.seconds + 0.1,
    })
  }

  render() {
    return (
      <div>
        <h1>Классовая компонента</h1>
        <p className='timer'>Вы смотрите на этот компонент приблизительно <span>{this.state.seconds.toFixed(1)} сек.</span></p>
        <button onClick={this.isClassToggle}>Поменять на функциональную компоненту</button>
      </div>
    );
  }
}

export default ClassComponent;