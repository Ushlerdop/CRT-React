import './App.css';
import { useState } from 'react';
import ClassComponent from './Components/ClassComponent';
import FuncComponent from './Components/FuncComponent';

function App() {
  let [isClass, setIsClass] = useState(false);
  const isClassToggle = () => {
    setIsClass(!isClass);
  }

  let [classComponentTime, setClassComponentTime] = useState(0);  

  let [funcComponentTime, setFuncComponentTime] = useState(0);

  return (
    <div className="App">
      {isClass === true
        ? <ClassComponent isClassToggle={isClassToggle} time={classComponentTime} setClassComponentTime={setClassComponentTime}/>
        : <FuncComponent isClassToggle={isClassToggle} time={funcComponentTime} setFuncComponentTime={setFuncComponentTime}/>
      }
    </div>
  );
}

export default App;
