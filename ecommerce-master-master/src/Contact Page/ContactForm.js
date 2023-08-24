import React,{useRef} from 'react'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

const ContactForm = (props) => {
    const nameRef = useRef('');
    const numberRef = useRef('');
    const mailRef = useRef('');
    function contactHandler(event){
        event.preventDefault();
      
        const contact = {
          name: nameRef.current.value,
          number: numberRef.current.value,
          mail: mailRef.current.value,
        };
    
        props.onAddContact(contact);
      }
  return (
    <>
    <h2 className="text-center">Contact US</h2>
    <div style={{display:"block",
    textAlign: "center"}}>
      <Form onSubmit={contactHandler} style={{textAlign:"center",display:'inline-block', marginLeft: 'auto',
    marginRight: 'auto'}}>
        
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Name" ref={nameRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" htmlSize="50" placeholder="Enter email" ref={mailRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupNumber" >
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="number" placeholder="Enter Number" ref={numberRef}/>
        </Form.Group>
        <Button variant="primary" className="text-center" type="submit" >
          Submit
        </Button>
      </Form>
      </div>
    </>
  )
}

export default ContactForm