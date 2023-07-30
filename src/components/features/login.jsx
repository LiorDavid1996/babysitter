import React from "react";
import GoogleButton from "react-google-button";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap"
import {Col} from "react-bootstrap"
import { Link } from "react-router-dom";
import {Container} from "react-bootstrap"

const Login = () => {
     return(
        <>
        
        <div className="p-4 box bg-white ms-5 ">
            <h1 className="mb-5">welcome to babyCENTER</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Control type="email" placeholder="Email address" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="Password" placeholder="Password" />
                </Form.Group>
                <div className="d-grid gap-2">
                 <Button variant="primary" type="submit">
                    Log In
                 </Button>
                </div>
            </Form>
            <hr />
            <div>
                <GoogleButton className="g-bth" type= "dark"/>
            </div>
            <div className="p-4 box mt-3 text-center">
               Don't have an account? <Link to="/SingUp">sign up</Link>
            </div>
        </div>
       
        </>
     )
}
export default Login