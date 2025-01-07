import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Blog. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  padding: '10px',
  background: '#a88c60',
  color: '#fff',
  textAlign: 'center',
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
};

export default Footer;
