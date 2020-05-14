import React from 'react';
import logo from '../progate_lg.svg'

const Footer = () => {
  const footer = ['Services', 'Support', 'Connect with us'];
  return (
    <div className='footer'>
      <div className='container footer-inner'>
        <div className='footer-logo'>
          <img
            src={logo}
            alt='progate'
          />
          <p>Learn to code, learn to creative.</p>
        </div>
        <ul className='footer-list'>
          {footer.map((list) => {
            return (
              <li className="footer__item" key={list}>{list}</li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
