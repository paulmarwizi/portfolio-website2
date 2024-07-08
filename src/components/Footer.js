import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/git.png';
import lenk from '../assets/img/lenk.jpg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/paul-marwizi-5927b42a1/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://web.facebook.com/" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/paulmarwizi" target="_blank"><img src={navIcon4} alt="" /></a>
            <a href="https://sites.google.com/view/ariane5-zcas-casestudy/home" target="_blank"><img src={lenk} alt="" /></a>
            </div>
            <p>&gt;&gt;&gt;Copyright 2024. All Rights Reserved&lt;&lt;&lt;</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

/*import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Footer = () => {

    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col sm={6}>
                    <img src = {logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href=""><img src={navIcon1} /> </a>
                        <a href=""><img src={navIcon2} /> </a>
                        <a href=""><img src={navIcon3} /> </a>
                    </div>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}*/