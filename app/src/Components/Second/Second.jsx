import React, { Component } from 'react';
import styles from './Second.module.css';

class Second extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStopPropagationActive: false
    }
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.onDivClick = this.onDivClick.bind(this);
    this.onParagraphClick = this.onParagraphClick.bind(this);
  }

  onCheckboxChange(e) {
    e.target.checked
      ? this.setState({ isStopPropagationActive: true })
      : this.setState({ isStopPropagationActive: false })
  }

  onDivClick() {
    console.log(`На внешнем div всплыл эвент`);
  }

  onParagraphClick(e) {
    this.state.isStopPropagationActive && e.stopPropagation();
    console.log(`Вы ткнули по параграфу`);
  }

  render() {
    return (
      <div className={styles.container}>
        <h2>Вторая компонента</h2>
        <p>Переключите использование stop propagation через checkbox</p>
        <label className={styles.label}>
          <span>Использовать stop propagation</span>
          <input type={'checkbox'} onChange={this.onCheckboxChange} className={styles.checkbox} />
        </label>
        <div
          onClick={this.onDivClick}
          className={styles.outerBlock}>
          Это внешний div и на нём висит onClick
          <p
            onClick={this.onParagraphClick}
            className={styles.innerBlock}
          >Это параграф и на нём тоже висит onClick</p>
        </div>
      </div>
    );
  }
}

export default Second;