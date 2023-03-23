import React from 'react';
// import  from './assets/';
import HTML from '../assets/html.svg.png';
import JS from '../assets/js.webp';
import react from '../assets/react.webp';
import reactBS from '../assets/reactBS.png';
import Framer from '../assets/framer.webp';
import Material from '../assets/MaterialUI.png';
import Tidio from '../assets/tidio.png';
import Edemam from '../assets/Edemam.png';


const Footer = () => {
  const technologies = ['React',,'Bootstrap','React-Bootstrap','Tidio Chatbot','Edemam API','Material UI', 'JavaScript', 'CSS', 'HTML','Framer'];
  const developers = [
    { name: 'Mariusz Ruczkowski', role: 'Frontend Developer' },
    { name: 'Wlodzimierz Maciaszczyk', role: 'Frontend Developer' },
    { name: 'Shahid Hussain', role: 'Frontend Developer' },
    { name: 'Martin William', role: 'TA' },
  ];
  const contactDetails = {
    email: 'info@example.com',
    phone: '+1 (123) 456-7890',
  };
  const logos = [
    { src: '', alt: 'JS' },
    { src: './html.svg.png', alt: 'HTML' },
    { src: './bs.svg.png', alt: 'Bootstrap' },
    { src: './framer.webp', alt: 'Framer' },
    { src: './react.webp', alt: 'HTML' },
  ];

  return (
    <div>
    <footer className="footer">
      <div className="column">
        <h6>Technologies Used</h6>
        <ul>
          {technologies.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="column">
        <h6>Developers Details</h6>
        <ul>
          {developers.map((dev, i) => (
            <li key={i}>
              {dev.name} - {dev.role}
            </li>
          ))}
        </ul>
      </div>
      <div className="column">
        <h6>Contact Details</h6>
        <ul>
          <li>GitHub: https://github.com/Foodbook-Team/TastyBuds</li>
          <li>Email: {contactDetails.email}</li>
          <li>Email: {contactDetails.email}</li>
          <li>Phone: {contactDetails.phone}</li>
        </ul>
      </div>
      <div className="column">
        <h6>Logos</h6>
        <div className="logo-container">
          <img src= {HTML} className="logo"/>
          <img src= {JS} className="logo"/>
          <img src= {react} className="logo"/>
          <img src= {reactBS} className="logo"/>
          <img src= {Framer} className="logo"/>
          <img src= {Material} className="logo"/>
          <img src= {Tidio} className="logo"/>
          <img src= {Edemam} className="logo"/>
          {/* <img src= {JS} className="logo"/> */}
          {/* {logos.map((logo, i) => (
            <img key={i} src={logo.src} alt={logo.alt} className="logo" />
          ))} */}
        </div>
      </div>
    </footer>
    <div className="bottom">
    <p>Tasty Buds 2023</p>
    </div>
    </div>
  );
};

export default Footer;







