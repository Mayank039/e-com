import React from "react";
import ContactForm from "./ContactForm";
import Footer from '../Layout/Footer'
import Header from '../Layout/Header'

const ContactPage = () => {

    async function contactHandler(info) {
        const response = await fetch('https://react-http-6bbce-default-rtdb.firebaseio.com/contact.json',{
          method: 'POST',
          body:JSON.stringify(info),
          headers:{
            'Content-Type':'application/json'
          }
        });
        const data = await response.json();
        console.log(data)
      }
  return (
    <>
      <Header/>
      <ContactForm onAddContact={contactHandler}/>
      <Footer/>
    </>
  );
};

export default ContactPage;
