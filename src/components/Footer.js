import React from 'react';



const Footer = () => {
  const technologies = ['React', 'JavaScript', 'CSS', 'HTML','Framer','Bootstrap'];
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
    { src: './js.webp', alt: 'JS' },
    { src: './html.svg.png', alt: 'HTML' },
    { src: './bs.svg.png', alt: 'Bootstrap' },
    { src: './ChatGPT.svg', alt: 'ChatGPT' },
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
          {logos.map((logo, i) => (
            <img key={i} src={logo.src} alt={logo.alt} className="logo" />
          ))}
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







