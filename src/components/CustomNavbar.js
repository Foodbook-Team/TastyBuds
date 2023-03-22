import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./CustomNavbar.css";

const CustomNavbar = () => {
  const menuItems = [
    {
      title: "Cuisine",
      items: [
        "English",
        "Indian",
        "Chinese",
        "Italian",
        "Mexican",
        "Turkish",
        "Greek",
      ],
    },
    { title: "Meals", items: ["Breakfast", "Brunch", "Lunch", "Dinner"] },
    {
      title: "Ingredients",
      items: ["Chicken", "Fish", "Lamb", "Beef", "Vegetarian", "Vegan"],
    },
    {
      title: "Kitchen Tips",
      items: [
        "How to Chop Vegetables",
        "Roast Chicken",
        "Grind Spices",
        "Kitchen Hygiene",
      ],
    },
    { title: "News", items: ["Item 1", "Item 2", "Item 3"] },
    {
      title: "Contact",
      items: [
        "Customer Services",
        "Administration",
        "Marketing",
        "Development Team",
        "Support",
      ],
    },
  ];

  return (
    <Navbar expand="lg" className="custom-navbar navbar-dark">
      <Container>
        <Navbar.Brand href="#">
          <img src="6.png" alt="Logo" className="brand-logo" /> Tasty Buds
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuItems.map((menu, index) => (
              <NavDropdown
                key={index}
                title={menu.title}
                id={`dropdown-${index}`}
              >
                {menu.items.map((item, idx) => (
                  <NavDropdown.Item key={idx} href="#">
                    {item}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
