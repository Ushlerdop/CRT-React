import React, { useEffect, useState } from 'react';
import useInterval from '../Utils/useInterval';
import '../App.css';

const FuncComponent = ({isClassToggle, setFuncComponentTime, time}) => {
  let [seconds, setSeconds] = useState(time);
  useEffect(() => {
    return setFuncComponentTime(seconds);
  })
  useInterval(() => setSeconds(seconds+0.1), 100);

  return (
    <div>
      <h1>Функциональная компонента</h1>
      <p className='timer'>Вы смотрите на этот компонент приблизительно <span>{seconds.toFixed(1)} сек.</span></p>
      <button onClick={isClassToggle}>Поменять на классовую компоненту</button>
    </div>
  );
};

export default FuncComponent;