import React, { useState } from "react";
import Button from "@mui/joy/Button";
import "./ShoppingList.css";

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") return;
    setItems([...items, inputValue]);
    setInputValue("");
  };

  const handleItemRemove = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <div className="header2">
        <form onSubmit={handleFormSubmit}>
          <h4 className="buttonTitle">Create a shopping list for your favorite recipe</h4>
          <input
            type="text"
            value={inputValue}
            placeholder="Add your ingredients..."
            onChange={handleInputChange}
          />

          <Button
            className="shoopingList"
            // color="primary"
            // backgroundColor=""
            type="submit"
            size="sm"
            variant="outlined"
            sx={{ marginLeft: "8px" }}
          >
            Add
          </Button>
        </form>

        <div className="header3">
          <ul>
            {items.map((item, index) => (
              <li style={{ color: "black" }} key={index}>
                {item}
                <button
                  className="button"
                  onClick={() => handleItemRemove(index)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
<div className="badgeholder">
      <div id="edamam-badge" data-color="white"></div>
      </div>
    </div>
  );
}

export default ShoppingList;
