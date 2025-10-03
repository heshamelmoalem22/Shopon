import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Foot = styled.footer`
  text-align: center;
  padding: 20px;
  background: #222;
  color: #fff;

  .links {
    margin-bottom: 10px;
  }

  .links a {
    margin: 0 10px;
    color: #fff;
    text-decoration: none;
    font-size: 14px;
  }

  .links a:hover {
    text-decoration: underline;
  }

  .socials {
    margin-bottom: 10px;
  }

  .socials a {
    margin: 0 8px;
    color: #fff;
    font-size: 18px;
    transition: color 0.3s;
  }

  .socials a:hover {
    color: #1da1f2; 
  }
`;

function Footer() {
  return (
    <Foot>
      <div className="links">
        <a href="/">Home</a> | <a href="/products">Products</a> |{" "}
        <a href="/contact">Contact</a>
      </div>
      <div className="socials">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>
      <div>© {new Date().getFullYear()} Product Catalog</div>
    </Foot>
  );
}

export default Footer;
