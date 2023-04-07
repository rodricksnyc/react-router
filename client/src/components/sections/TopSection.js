
import React, { useState, useRef, useEffect } from 'react';

import { SingleValue } from "@looker/visualizations-single-value";
import {
  buildChartConfig,
  Debug,
  QueryContext,
  ErrorBoundary,
  Unsupported,
  tabularResponse
} from "@looker/visualizations-adapters";

import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';

import AOS from 'aos';
import "aos/dist/aos.css"

function TopSection() {

  const ServiceContent = [
      {
          icon: "icon_31",
          title: 'Looker',
          desc: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.`,
          arrow: 'icon_20',
          datadelay: '',
          dataAos: 'fade-right',
          className: ''
      }, {
          icon: "icon_32",
          title: 'Retool',
          desc: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.`,
          arrow: 'icon_20',
          datadelay: '100',
          dataAos: 'fade-up',
          className: 'active'
      }, {
          icon: "icon_33",
          title: 'dbt',
          desc: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.`,
          arrow: 'icon_20',
          dataDelay: '',
          dataAos: 'fade-left',
          className: ''
      }
  ]

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const [navbar, setNavbar] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
      setIsOpen(true);
  }
  const closeModal = () => {
      setIsOpen(!modalIsOpen);
  }

  const toggleMenu =()=>{
    if(window.scrollY >= 68) {
      setNavbar(true)
    } else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', toggleMenu);



    let data = []

    const dataCopy = tabularResponse(Array.from(data));


console.log(dataCopy)

return (




<Container fluid>









<div className="hero-banner-five" id="home">
        <Container>
              <Row>

                <Col sm={12} md={7} lg={6}>





                      <h1 className="hero-heading">Lorem ipsum dolor sit amet<span> amet.</span></h1>
                      <p className="text-lg mb-50 pt-40 pe-xl-5 md-pt-30 md-mb-40">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <ul className="style-none button-group d-flex align-items-center">
                          <li className="me-4"><a href="contact-us.html" className="demo-btn ripple-btn tran3s">Lorem Ipsum</a></li>

                      </ul>
                </Col>
              </Row>

        </Container>
          <div className="illustration-holder move">
          <img src="./images/ils_05.svg" alt="" class="main-illustration w-100 shape0" />
          <img src="./images/ils_05_1.svg" alt="" class="shapes shape-one" />
          <img src="./images/ils_05_2.svg" alt="" class="shapes shape-two aos-init aos-animate" data-aos="fade-up" data-aos-anchor=".fancy-feature-two" data-aos-delay="100" data-aos-duration="2000" />
          <img src="./images/ils_05_3.svg" alt="" class="shapes shape-three aos-init aos-animate" data-aos="fade-up" data-aos-anchor=".fancy-feature-two" data-aos-delay="150" data-aos-duration="2000" />
          <img src="./images/ils_05_4.svg" alt="" class="shapes shape-four" />
          <img src="./images/ils_05_5.svg" alt="" class="shapes shape-five" />
          </div>

          <div className="shapes oval-one" />
      </div>



      <div className="theme-inner-banner" id="about">
          <Container>
            <h2 class="intro-title text-center">About Us</h2>
            <ul class="page-breadcrumb style-none d-flex justify-content-center">

            </ul>
          </Container>
          <img src="./images/shape_38.svg" alt="" class="shapes shape-one" />
          <img src="./images/shape_39.svg" alt="" class="shapes shape-two" />
      </div>





        <div className="fancy-feature-seventeen position-relative mt-160 xl-mt-50 mb-5 mt-5">
            <Container>
                  <Row className="row align-items-center">
                    <Col sm={12} md={6} lg={5}  data-aos="fade-right">
                        <div className="title-style-three text-center text-lg-start">
                            <h2 className="main-title strong">
                                <span>Excepteur</span> Duis aute irure.</h2>
                        </div>

                    </Col>
                    <Col sm={12} md={6} lg={7} data-aos="fade-left">
                        <p className="m0 text-center text-lg-start md-pt-30">Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                </Row>

                <Row className="row align-items-center marginTop">
                    {ServiceContent.map((val, i) => (
                        <Col key={i} sm={12} md={6} lg={4} data-aos={val.dataAos} data-aos-delay={val.dataDelay}>
                            <div
                                className={`block-style-twelve block-space ${val.className}`}>
                                <div className="icon d-flex align-items-end">
                                <img src={`./images/${val.icon}.svg`} alt=""/></div>
                                <h5 className="mt-3">
                                    <a to="">{val.title}</a>
                                </h5>
                                <p>{val.desc}</p>
                                <a to="" className="tran3s more-btn"><img src="./images/icon_20.svg" alt=""/></a>
                            </div>

                        </Col>
                    ))}

                </Row>
            </Container>

            <div className="shapes shape-one"/>
        </div>


      <div className="fancy-feature-five position-relative mt-50">
          <Container>
              <Row className="row align-items-center">

                  <Col sm={12} md={6} lg={5} className="ms-auto">
                      <div className="block-style-five pt-60 md-pt-20" data-aos="fade-right">
                          <div className="title-style-one">
                              <div className="sc-title-four">WHY US</div>
                              <h2 className="main-title strong">Lorem ipsum?</h2>
                          </div>

                          <p className="pt-10 pb-70">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

                          <ul class="style-none list-item color-rev">
                          <li>Ut enim ad minim veniam.</li>
                          <li>Ut enim ad minim veniam.</li>
                          <li>Ut enim ad minim veniam.</li>
                          <li>Ut enim ad minim veniam.</li>
                          </ul>
                          <a class="btn-one mt-3" href="">Contact us</a>

                          <div class="shapes oval-two"></div>

                      </div>

                  </Col>

                  <Col sm={12} md={6} lg={7} className="text-end">
                      <div className="illustration-holder d-inline-block position-relative xs-mt-20">
                          <img src="./images/ils_06.svg" alt="" className="main-illustration w-100"/>
                          <img src="./images/ils_06_1.svg" alt="" className="shapes shape-one"/>
                          <img src="./images/ils_06_2.svg" alt="" className="shapes shape-two"/>
                          <img
                              src="./images/ils_06_3.svg"
                              alt=""
                              className="shapes shape-three"
                              data-aos="fade-down"
                              data-aos-duration={1800}/>
                          <img
                              src="./images/ils_06_4.svg"
                              alt=""
                              className="shapes shape-four"
                              data-aos="fade-left"
                              data-aos-duration={1800}/>
                          <img src="./images/ils_06_5.svg" alt="" className="shapes shape-five"/>
                      </div>
                  </Col>
              </Row>
        </Container>
      </div>

</Container>


)

}

  export default TopSection;
