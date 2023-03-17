import React from "react";
// import { NavLink } from 'react-router-dom';

const NavTabs = () => {
  const menuItems = [
    {
      label: "Quisine",
      items: [
        "English",
        "Indian",
        "Chinese",
        "Italian",
        "Mexican",
        "Greek",
        "Turkish",
      ],
    },
    { label: "Recipes", items: ["Item 4", "Item 5", "Item 6"] },
    { label: "Ingredients", items: ["Item 7", "Item 8", "Item 9"] },
    {
      label: "Kitchen Tips",
      items: ["How to Chop Vegetable", "Roast Chicken", "Item 12"],
    },
    { label: "News", items: ["Item 13", "Item 14", "Item 15"] },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <div>
          <h4 className="logo">Tasty Buds</h4>
        </div>
        {menuItems.map((menu, i) => (
          <li key={i} className="dropdown">
            <button className="dropbtn">{menu.label}</button>
            <ul className="dropdown-content">
              {menu.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavTabs;
