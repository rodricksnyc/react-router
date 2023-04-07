import React, { useState, useRef } from 'react';


import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem, NavLink, Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';



function TopNav() {


  const [activeLink, setActiveLink] = React.useState("home");

  const [navbar, setNavbar] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);



  const toggleMenu =()=>{
    if(window.scrollY >= 68) {
      setNavbar(true)
    } else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', toggleMenu);

return (
  <header className={navbar ? "theme-main-menu sticky-menu theme-menu-four fixed" : "theme-main-menu sticky-menu theme-menu-four"}>
  <Navbar expand="lg">
    <Container fluid>
      <Navbar.Brand href="#" className="logo">
      <img src="./images/logo.svg" alt="" width="90"></img>
      </Navbar.Brand>


      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">

        <Nav
        className="me-auto my-2 my-lg-0"
      
        navbarScroll
        defaultActiveKey={activeLink}
        onSelect={(selectedKey, event) => {

       setActiveLink(selectedKey);
      }}
        >
          <Nav.Link href="#home" eventKey="home">Home</Nav.Link>
          <Nav.Link href="#about" eventKey="about">About</Nav.Link>


          <Nav.Link href="#services" eventKey="services">Services</Nav.Link>
          <Nav.Link href="#pricing" eventKey="pricing">Pricing</Nav.Link>


        </Nav>


        <div className="right-widget d-flex align-items-center ms-auto order-lg-3">
        <div className="call-button d-none d-xl-block me-5">Call us<a href="#">212 888 1111</a></div>

        <a className="send-msg-btn tran3s d-none d-lg-block" href="/contact">Send a Message</a></div>



      </Navbar.Collapse>
    </Container>
  </Navbar>
  </header>





)

}


  export default TopNav;
