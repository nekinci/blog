
import matter from 'gray-matter';
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const Info = () => {
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
        <Jumbotron style={{backgroundColor: '#fffaff'}}>
          <ReactMarkdown escapeHtml={true} source={aboutMe} />
        </Jumbotron>
    )
}

export default Info;