import "./Connect.css";
import React from "react";
import { Form } from "react-bootstrap";
import { Button  } from "react-bootstrap"

function Connect() {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.8213113968054!2d34.7943914844513!3d32.074081426798934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b996d0afa93%3A0xf7b39dda408c811c!2z157XkteT15zXmSDXoteW16jXmdeQ15zXmSwg15PXqNeaINee16DXl9edINeR15LXmdefLCDXqtecINeQ15HXmdeR!5e0!3m2!1siw!2sil!4v1666205964081!5m2!1siw!2sil" width="600" height="750" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
  return (
    <div className="div-connect">
    <Form className="d-flex align-items-center justify-content-center flex-column square border border-dark ">
     <Form.Group className="mb-3"> 
      <Form.Control type="text" placeholder="first name"/>
     </Form.Group>
     <Form.Group className="mb-3">
      <Form.Control type="text" placeholder="last  name"/>
     </Form.Group>
     <Form.Group className="mb-3">
      <Form.Control type="Email" placeholder="Email adrress"/>
     </Form.Group>
     <Form.Group className="mb-3">
      <Form.Control type="number" placeholder=" ENTER YOUR AGE"/>
     </Form.Group>
     <Button>SEND</Button>
    </Form>
    <iframe src={map} className="map-form"></iframe>
    </div>
  );
};

export default Connect;
