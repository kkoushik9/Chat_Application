import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button'
import {useRef} from 'react'


function Login(props) {
    const idRef= useRef();

    function submitHandler(e){
        e.preventDefault();

        props.onIdSubmit(idRef.current.value)
    }

    return (
      <Container className=" d-flex justify-content-center " style={{height:'100vh'}}>
          
        <Form  onSubmit={submitHandler} className="p-5 m-5 align-self-center w-50" style={{border:'1px solid #cfcfcf', backgroundColor:'whitesmoke'}}>
            <Form.Group   controlId="email">
                <Form.Label >Enter ID</Form.Label>
                <Form.Control autoFocus  type="text" ref={idRef}></Form.Control>
            </Form.Group>
            <Button className="btn btn-success" type="submit">Login</Button>
            <Button className="ml-2 btn btn-info">Create New ID</Button>
        </Form>
      </Container>
      
    );
  }
  
  export default Login;