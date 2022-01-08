import React, { Component } from 'react';
import styles from './First.module.css';

class First extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault(); 
    console.log(`Произошёл submit и в стейт передалась пустая строка`);
    this.setState({
      inputText: ''
    });
  }

  onChange(e) {
    this.setState({
      inputText: e.target.value
    });
    console.log(`В инпуте произошли изменения и в стейт попал текст из инпута`);
  }

  render() {
    return (
      <div className={styles.container}>
        <h2>Первая компонента</h2>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <input
            placeholder='Введи текст, наведи фокус, сними фокус и смотри в консоль :)'
            className={styles.input}
            value={this.state.inputText}
            onChange={this.onChange}
            onFocus={() => console.log(`Инпут зафокусился`)}
            onBlur={() => console.log(`Инпут расфокусился`)}
          />
          <button onClick={() => console.log(`Клик по кнопке`)}>Кнопка</button>
        </form>
      </div>
    );
  }
}

export default First;