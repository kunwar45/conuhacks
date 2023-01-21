import React from "react";
import { ReactDOM } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';


export default function Header() {

    return(
    <>

    <Navbar>
    <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
    </Navbar>

    
        
    </>
    )

}