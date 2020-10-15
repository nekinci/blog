import React from 'react';
import NavbarComponent from './Navbar';
import { Button, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

const Layout = ({children}) => {

   
    return (
        <Container fluid="md">
            <NavbarComponent/>
            {children}
        </Container>
    )
}

Layout.getInitialProps = async (context) => {

   
    return {...data};
};
export default Layout;