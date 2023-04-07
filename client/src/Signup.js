


import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from './firebase';

import { Accordion, AccordionButton, AccordionCollapse, AccordionContext, Alert, Anchor, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, ButtonToolbar, Card, CardGroup, CardImg, Carousel, CarouselItem, CloseButton, Col, Collapse, Container, Dropdown, DropdownButton, Fade, Figure, FloatingLabel, Form, FormCheck, FormControl, FormFloating, FormGroup, FormLabel, FormSelect, FormText, Image, InputGroup, ListGroup, ListGroupItem, Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Nav, NavDropdown, NavItem,  Navbar, NavbarBrand, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Overlay, OverlayTrigger, PageItem, Pagination, Placeholder, PlaceholderButton, Popover, PopoverBody, PopoverHeader, ProgressBar, Ratio, Row, SSRProvider, Spinner, SplitButton, Stack, Tab, TabContainer, TabContent, TabPane, Table, Tabs, ThemeProvider, Toast, ToastBody, ToastContainer, ToastHeader, ToggleButton, ToggleButtonGroup, Tooltip} from 'react-bootstrap';



import AOS from 'aos';
import "aos/dist/aos.css"


function Signup() {



  const navigate = useNavigate();

     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('');

     const onSubmit = async (e) => {
       e.preventDefault()

       await createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
             // Signed in
             const user = userCredential.user;
             console.log(user);
             navigate("/login")
             // ...
         })
         .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             console.log(errorCode, errorMessage);
             // ..
         });


     }

return (


  <main >
          <section>
              <div>
                  <div>
                      <h1> FocusApp </h1>
                      <form>
                          <div>
                              <label htmlFor="email-address">
                                  Email address
                              </label>
                              <input
                                  type="email"
                                  label="Email address"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  required
                                  placeholder="Email address"
                              />
                          </div>

                          <div>
                              <label htmlFor="password">
                                  Password
                              </label>
                              <input
                                  type="password"
                                  label="Create password"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  required
                                  placeholder="Password"
                              />
                          </div>

                          <button
                              type="submit"
                              onClick={onSubmit}
                          >
                              Sign up
                          </button>

                      </form>

                      <p>
                          Already have an account?{' '}
                          <NavLink to="/login" >
                              Sign in
                          </NavLink>
                      </p>
                  </div>
              </div>
          </section>
      </main>


)

}

  export default Signup;
