import "./Home.css";
import React , {useState} from "react";
import { Alert, Row} from "react-bootstrap";
import GoogleButton from "react-google-button";
import { Form } from "react-bootstrap";
import { Button  } from "react-bootstrap"
import {Col} from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import {Container} from "react-bootstrap"
import {useUserAuth} from "../../../context/UserAuthContext"



function Home() {
  const [email,setEmail]=useState("")
  const[password,setPassword]= useState("")
  const [error,setError]= useState("")
  const {logIn,googleSignIn} = useUserAuth() 
  const navigate = useNavigate()
  const handelSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
    await logIn(email,password)
    navigate("/Babysitter")
    }catch(err){
    setError(err.message)
    
    }}

 const handleGoogleSignIn = async ( e ) => {
  e.preventDefault();
  try {
    await googleSignIn()
    navigate("/Babysitter")
  } catch (err) {
    setError(err.massage)
    
  }
 }
 
  return (
    
    <div className="home d-flex align-items-center justify-content-center  ">
      <Col  xs={12} md={6}>
       <div className="square border border-dark " >
      <img className="img" src="picture/—Pngtree—baby_2710926.png"/>
    </div>
    </Col>
    <Col xs={12} md={6} >
    <div className="p-4 box bg-white ms-5 square border border-dark ">
            <h1 className="mb-5">welcome to babyCENTER</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Control type="email" placeholder="Email address"
                    onChange={ (e) => setEmail(e.target.value)}/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="Password" placeholder="Password"
                 onChange={ (e) => setPassword(e.target.value)} />
                </Form.Group>
                <div className="d-grid gap-2">
                 <Button variant="primary" type="submit">
                    Log In
                 </Button>
                </div>
            </Form>
            <hr />
            <div>
                <GoogleButton className="g-bth" type= "dark" onClick={ handleGoogleSignIn }/>
            </div>
            <div className="p-4 box mt-3 text-center">
               Don't have an account? <Link to="/SingUp">sign up</Link>
            </div>
        </div>
        </Col>
    </div>
    
   
  );
};

export default Home;
