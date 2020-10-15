import React from 'react';
import NavbarComponent from './Navbar';
import { Button, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

const Layout = ({children}) => {

    const [aboutMe, setAboutMe] = React.useState("");
    const getAboutMe = async () => {
        const content = await import(`../content/about-me.md`);
        const data = matter(content.default);
        setAboutMe(data.content);
    }
    React.useEffect( () => {
        getAboutMe();
    }, []);
    return (
        <Container fluid="md">
            <NavbarComponent/>
            <Jumbotron style={{backgroundColor: 'white'}}>
                <ReactMarkdown escapeHtml={true} source={aboutMe} />
            </Jumbotron>
            {children}
        </Container>
    )
}

Layout.getInitialProps = async (context) => {

   
    return {...data};
};
export default Layout;