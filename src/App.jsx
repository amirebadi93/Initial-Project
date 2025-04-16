import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState();
  const [list, setList] = useState(["Test", "test1", "test2"]);

  return (
    <div className="container">
      <div className="form">
        <input
          type="text"
          value={value}
          onChange={e => {
            const tempValue = e.target.value;
            setValue(tempValue);
          }}
        />

        <button
          onClick={() => {
            const updatedList = [...list];
            updatedList.push(value);
            setList(updatedList);
            setValue("");
          }}
        >
          add
        </button>
      </div>
      <span>
        {value}
      </span>
      <div className="todo-list">
        <ul>
          {list.map(item =>
            <li>
              {item}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
