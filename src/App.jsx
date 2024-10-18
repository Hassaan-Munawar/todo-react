import './App.css';
import { useState } from "react";

function App() {
  let [isEditing, setIsEditing] = useState(false);
  let [inputText, setInputText] = useState("");
  let [list, setList] = useState(["breakfast", "workout"]);
  let [currentIndex, setCurrentIndex] = useState(null);

  let addItem = () => {
    if (inputText.trim() === "") return;

    let copyList = [...list];
    copyList.push(inputText);
    setList(copyList);
    setInputText("");
  };

  let handleInput = (e) => {
    setInputText(e.target.value);
  };

  let delItem = (index) => {
    let copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
  };

  let editItem = (index) => {
    setInputText(list[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  let updateItem = () => {
    if (inputText.trim() === "") return;

    let copyList = [...list];
    copyList[currentIndex] = inputText;
    setList(copyList);
    setInputText("");
    setIsEditing(false);
    setCurrentIndex(null);
  };

  return (
    <div className="main">
      <h1 style={{display:'flex',justifyContent:'center'}}>Todo Application</h1>
      <div className="input">
        <input
          value={inputText}
          onChange={handleInput}
          type="text"
          placeholder="Enter item"
        />
        {isEditing ? (
          <button onClick={updateItem}>Update</button>
        ) : (
          <button onClick={addItem}>Add</button>
        )}
      </div>

      <div className="list-container">
        <ul>
          {list.map((data, index) => (
            <li key={index}>
              <span>{data}</span>
              <div className="actions">
                <button onClick={() => editItem(index)}>Edit</button>
                <button onClick={() => delItem(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

