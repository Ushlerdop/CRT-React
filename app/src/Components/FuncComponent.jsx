import React from 'react';

const FuncComponent = ({isClassToggle}) => {
  return (
    <div>
      <h1>Функциональная компонента</h1>
      <button onClick={isClassToggle}>Поменять на классовую компоненту</button>
    </div>
  );
};

export default FuncComponent;