import { useEffect, useState } from 'react'
import './App.css'
import { createContext} from 'react'
import UseContext from './components/UseContext';
export const ToggleTheme = createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext/>
    </ToggleTheme.Provider>
  );
}

export default App;

// import { useEffect, useState } from "react";
// import "./App.css";
// import UseContext from "./Components/UseContext";

// function UseState() {
//   const [age, setAge] = useState(19);
//   const [sib, setSib] = useState(1);
//   const [count, setCount] = useState(0);

//   const handleAdd = (userInput) => {
//     setCount(count + userInput);
//   };
  
//   useEffect(() => {
//     alert(`something changed ${age}`)
//   },[age]);
  
//   return (
//     <div>
//       <h3>My Current Age is {age}</h3>
//       <h4>My siblings{sib}</h4>
//       <button onClick={()=>setAge(currAge=>currAge+1)}>Get Older</button>
//       <button onClick={()=>setSib(currsib=>currsib+1)}>Get more sibs</button>
//     </div>
//   );
// }

// export default UseState;