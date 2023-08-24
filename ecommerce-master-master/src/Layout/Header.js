import React, { useContext } from 'react'
import HeaderCartButton from './HeaderCartButton'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Cart } from '../store/CartContext';
import { useNavigate } from 'react-router-dom';


const Header = (props) => {  
  const navigate = useNavigate()
  const cartCntx = useContext(Cart);
  const logoutHandler = () =>{
      navigate('/Auth');
      cartCntx.logout();
}
  return (
        <>
        
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/" >Home</Nav.Link>
                <Nav.Link href="/Store">Store</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
                <Nav.Link href="/ContactUS">Contact Us</Nav.Link>
                {cartCntx.isLoggedIn?<Nav.Link href="/Auth"><button onClick={ logoutHandler}>Logout</button></Nav.Link>:<Nav.Link href="/Auth"><button>Login</button></Nav.Link>}

              </Nav>
              {props.button?<HeaderCartButton onClick={props.onClick}/>:""}
            </Container>
          </Navbar>
          <h1 className="text-center" style={{backgroundColor:"#d3d3d3",padding: 40,
    fontSize: 100}}>The Generious</h1>
        </>
      );
    }


export default Header