import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Badge, Nav, NavDropdown } from 'react-bootstrap';
import Store from './Store';
import { useContext } from 'react';
import CartScreen from './screen/CartScreen';
import SigninScreen from './screen/SigninScreen';
import ShippingAddressScreen from './screen/ShippingAddressScreen';
import SignupScreen from './screen/SignupScreen';
import PaymentMethodScreen from './screen/PaymentMethodScreen';
import PlaceOrderScreen from './screen/PlaceOrderScreen';
import OrderScreen from './screen/OrderScreen';
import OrderHistoryScreen from './screen/OrderHistoryScreen';
import ProfileScreen from './screen/ProfileScreen';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar className="top" fixed="top" expand="lg">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>
                  <img src={'/images/logo.png'} alt=""></img>
                </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto  w-100  justify-content-end">
                  <Link to="/cart" className="nav-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="pink"
                      className="bi bi-cart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                  {userInfo ? (
                    <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </NavDropdown>
                  ) : (
                    <Link className="nav-link" to="/signin">
                      Sign In
                    </Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-5">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} exact></Route>
              <Route path="/signin" element={<SigninScreen />}></Route>
              <Route path="/signup" element={<SignupScreen />}></Route>
              <Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
              <Route path="/profile" element={<ProfileScreen />}></Route>
              <Route path="/order/:id" element={<OrderScreen />}></Route>
              <Route
                path="/orderhistory"
                element={<OrderHistoryScreen />}
              ></Route>
              <Route
                path="/shipping"
                element={<ShippingAddressScreen />}
              ></Route>
              <Route path="/payment" element={<PaymentMethodScreen />}></Route>

              <Route path="*" element={<HomeScreen />} exact></Route>
            </Routes>
          </Container>
        </main>
        <footer className="footer-page">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 216">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,128L80,122.7C160,117,320,107,480,128C640,149,800,203,960,213.3C1120,224,1280,192,1360,176L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>

          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <h1>
                <b>Homemade cake</b>
              </h1>
            </div>

            <div className="social-media">
              <a href="/" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="/" className="me-4 text-reset">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>
          <div
            className="text-center"
            style={{ color: '#fc53ab', fontSize: 20 }}
          >
            All rights reserved
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
