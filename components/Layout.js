import React from 'react';
import NavbarComponent from './Navbar';
import { Button, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

const Layout = ({children, content}) => {
    return (
        <Container fluid="md">
            <NavbarComponent/>
            <Jumbotron color="">
                <ReactMarkdown escapeHtml={true} source={content} />
            </Jumbotron>
            {children}
        </Container>
    )
}

Layout.getInitialProps = async (context) => {

    const content = await import(`../content/about-me.md`);
    const data = matter(content.default);
    return {...data};
};
export default Layout;