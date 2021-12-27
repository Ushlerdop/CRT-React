import './App.css';
import { useState } from 'react';
import ClassComponent from './Components/ClassComponent';
import FuncComponent from './Components/FuncComponent';

function App() {
  let [isClass, setIsClass] = useState('false');

  const isClassToggle = () => {
    setIsClass(!isClass);
  }

  console.log(isClass);

  return (
    <div className="App">
      {isClass === true
        ? <ClassComponent isClassToggle={isClassToggle} />
        : <FuncComponent isClassToggle={isClassToggle} />
      }
    </div>
  );
}

export default App;
