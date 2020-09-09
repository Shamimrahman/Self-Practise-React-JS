import React, { useState } from "react";
import "./index.css";
import Todolist from "./Todolist";

function App() {
  let [present_state, update_State] = useState("");
  let [items, uitems] = useState([]);

  let input_event = (event) => {
    update_State(event.target.value);
  };

  let save_items = (event) => {
    event.preventDefault();

    uitems((olditems) => {
      return [...olditems, present_state];
    });

    update_State("");
  };

  let deleteitems = (id) => {
    uitems((olditems) => {
      return olditems.filter((arrayelement, index) => {
        return index != id;
      });
    });
  };

  return (
    <div className="main-div">
      <div className="center-div">
        <h1>To do List</h1>
        <br></br>
        <input
          type="text"
          placeholder="Please Tell"
          onChange={input_event}
          value={present_state}
        ></input>
        <button onClick={save_items}>+</button>

        <ol>
          {items.map((itemvalue, index) => {
            return (
              <Todolist
                text={itemvalue}
                key={index}
                id={index}
                onSelect={deleteitems}
              ></Todolist>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
