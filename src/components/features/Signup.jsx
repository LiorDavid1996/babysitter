
import React, { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import{ Button} from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import {useUserAuth} from "../../context/UserAuthContext"

const SignUp =() => {
    const [email,setEmail]=useState("")
    const[password,setPassword]= useState("")
    const [error,setError]= useState("")
    const {signUp} = useUserAuth() 
    const navigate = useNavigate()
    const handelSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try {
        await signUp(email,password)
        navigate("/")
        }catch(err){
        setError(err.message)
        
        }


    } 
return(
    <>

    <div className="p-4 box">
        <h2 className="mb-3">sign up</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handelSubmit} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="email address" onChange={(e)=> setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="primary" type="Submit">
                   sign up
                </Button>

            </div>
        </Form>
    </div>
    <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/"  >Log In</Link>

    </div>
    </>
)
}
export default SignUp