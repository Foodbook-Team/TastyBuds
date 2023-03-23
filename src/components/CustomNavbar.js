import React, {useState} from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./CustomNavbar.css";
import logo from '../assets/logo.png';



const CustomNavbar = () => {
  
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    {
      title: "Cuisine",
      items: [
        { id: "english-cuisine", name: "English" },
        { id: "indian-cuisine", name: "Indian" },
        { id: "chinese-cuisine", name: "Chinese" },
        { id: "italian-cuisine", name: "Italian" },
        { id: "mexican-cuisine", name: "Mexican" },
        { id: "turkish-cuisine", name: "Turkish" },
        { id: "greek-cuisine", name: "Greek" },
      ],
    },
    {
      title: "Meals",
      items: [
        { id: "breakfast-meals", name: "Breakfast" },
        { id: "brunch-meals", name: "Brunch" },
        { id: "lunch-meals", name: "Lunch" },
        { id: "dinner-meals", name: "Dinner" },
      ],
    },
    {
      title: "Ingredients",
      items: [
        { id: "chicken-ingredients", name: "Chicken" },
        { id: "fish-ingredients", name: "Fish" },
        { id: "lamb-ingredients", name: "Lamb" },
        { id: "beef-ingredients", name: "Beef" },
        { id: "vegetarian-ingredients", name: "Vegetarian" },
        { id: "vegan-ingredients", name: "Vegan" },
      ],
    },
    {
      title: "Kitchen Tips",
      items: [
        { id: "chop-vegetables-tips", name: "How to Chop Vegetables" },
        { id: "roast-chicken-tips", name: "Roast Chicken" },
        { id: "grind-spices-tips", name: "Grind Spices" },
        { id: "kitchen-hygiene-tips", name: "Kitchen Hygiene" },
      ],
    },
    {
      title: "News",
      items: [
        { id: "item1-news", name: "Item 1" },
        { id: "item2-news", name: "Item 2" },
        { id: "item3-news", name: "Item 3" },
      ],
    },
    {
      title: "Contact",
      items: [
        { id: "customer-services-contact", name: "Customer Services" },
        { id: "administration-contact", name: "Administration" },
        { id: "marketing-contact", name: "Marketing" },
        { id: "development-team-contact", name: "Development Team" },
        { id: "support-contact", name: "Support" },
      ],
    },
    
  ];

  return (
    <Navbar expand="lg" className="custom-navbar navbar-dark">
      <Container>
        <Navbar.Brand href="#">
          <img src = {logo} alt="Logo" className="brand-logo"/> Tasty Buds
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuItems.map((menu, index) => (

            <NavDropdown
            key={index}
            title={menu.title}
            id={`dropdown-${index}`}
            onMouseEnter={() => setActiveMenu(index)}
            onMouseLeave={() => setActiveMenu(null)}
            show={activeMenu === index}
          >

                {menu.items.map((item, idx) => (
                  <NavDropdown.Item 
                  key={idx} 
                  href={`#${item.id}`}>
                    {item.name}
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
