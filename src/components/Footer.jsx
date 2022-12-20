import React from "react";

import "./Footer.css";

function SocialButton({ href, ...props }) {
  return (
    <>
      <a href={href}>
        <img width="40px" height="40px" {...props} />
      </a>
    </>
  );
}

const FooterItem = ({ text }) => {
  return (
    <li className="footer-item">
      <a href="">{text}</a>
    </li>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="footer-content clip">
        <p>
          Questions? Call <a href="tel:+1(421) 264-4932">+1 (421) 264-4932</a>
        </p>
        
        <ul className="footer-items">
          <FooterItem text="FAQ" />
          <FooterItem text="Help Centre" />
          <FooterItem text="Account" />
          <FooterItem text="Media Centre" />
          <FooterItem text="Investor Relations" />
          <FooterItem text="Jobs" />
          <FooterItem text="Redeem gift cards" />
          <FooterItem text="Buy gift cards" />
          <FooterItem text="Ways to Watch" />
          <FooterItem text="Terms of Use" />
          <FooterItem text="Privacy" />
          <FooterItem text="Cookie Preferences" />
          <FooterItem text="Corporate Information" />
          <FooterItem text="Contact Us" />
          <FooterItem text="Speed Test" />
          <FooterItem text="Legal Guarantee" />
          <FooterItem text="Legal Notices" />
          <FooterItem text="Only on Netflix" />
        </ul>
        <p>Copyright &copy; rjkilpatrick 2023</p>
      </div>
    </footer>
  );
};

export { Footer };
