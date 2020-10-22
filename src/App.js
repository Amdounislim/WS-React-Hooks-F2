import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  const [counter, setCounter] = useState(0);
  // const [input, setInput] = useState("");
  // const [list, setList] = useState(["Hello", "Boujour", "3aslema"]);

  // const AddItem=(x)=>setList([...list, x])

  // const Add=()=>{setList(list.concat(input))}

  // const Change =(x)=>setInput(x)


  useEffect(() => {
console.log("Effect")
  }, [counter])

  return (
    <div className="App">
      <button onClick={()=>setCounter(counter+1)}>+</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter(counter-1)}>-</button>
      {/* <Nav input={input}/> */}
      {/* <Main setInput={setInput} /> */}
      {/* <Main AddItem={AddItem} />
      <div>
        {list.map((el) => (
          <h2>{el}</h2>
        ))}
      </div> */}
    </div>
  );
}

export default App;
