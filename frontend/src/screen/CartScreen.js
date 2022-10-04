import axios from 'axios';
import { useContext } from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MessageBox from '../component/MessageBox';
import Store from '../Store';

function CartScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry, Product is out of stock');
      return;
    }

    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const checkoutHandler = () => {
    navigate('/signin?redirect=/shipping');
  };

  return (
    <div>
      <Helmet>
        <title>Shopping</title>
      </Helmet>
      <h1>
        <b>Shopping Cart</b>
      </h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/"> Go Shopping</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id} style={{ borderColor: 'pink' }}>
                  <Row className="align-items-center">
                    <Col md={4} sm={6} xs={6}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                      />{' '}
                      <Link
                        to={`/product/${item.slug}`}
                        style={{ textDecoration: 'none', color: '#fc53ab' }}
                      >
                        {item.name}
                      </Link>
                    </Col>
                    <Col md={4} sm={3} xs={6}>
                      <Button
                        variant="light"
                        onClick={() =>
                          updateCartHandler(item, item.quantity - 1)
                        }
                        style={{ backgroundColor: 'inherit', color: '#fc53ab' }}
                        disabled={item.quantity === 1}
                      >
                        <i className="fas fa-minus-circle"></i>
                      </Button>{' '}
                      <span style={{ color: '#fc53ab' }}>{item.quantity}</span>{' '}
                      <Button
                        variant="light"
                        onClick={() =>
                          updateCartHandler(item, item.quantity + 1)
                        }
                        style={{ backgroundColor: 'inherit', color: '#fc53ab' }}
                        disabled={item.quantity === item.countInStock}
                      >
                        <i className="fas fa-plus-circle"></i>
                      </Button>{' '}
                    </Col>
                    <Col md={2} sm={3} xs={2} style={{ color: '#fc53ab' }}>
                      ${item.price}
                    </Col>
                    <Col md={2} sm={2}>
                      <Button
                        className="me-auto"
                        variant="light"
                        onClick={() => removeItemHandler(item)}
                        style={{ color: '#fff' }}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card style={{ borderColor: 'pink' }}>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3 style={{ color: '#fc53ab' }}>
                    Subtotal ( {cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items ) : $
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      variant="primary"
                      onClick={checkoutHandler}
                      style={{ backgroundColor: 'pink', color: '#fff' }}
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CartScreen;
