import matter from 'gray-matter';
import Head from 'next/head';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactMarkdown from "react-markdown";
import Info from '../components/Info';
import Layout from '../components/Layout';

const Blog = ({content, data}) => {
    const frontmatter = data;

    return (
        <React.Fragment>
            <Head>
                <title>{frontmatter.title}</title>
            </Head>
            <Layout>
            <div style={{padding: '25px'}}>
                <h1>{frontmatter.title}</h1>
                <h6 className="text-secondary"><small>{frontmatter.date}</small></h6>
                <hr/>
                <Container className="article-body px-0 pt-2">
                    <Row >
                        <Col md="12" sm="12" lg="8" style={{margin: '0 auto'}}>
                    <ReactMarkdown escapeHtml={false} source={content} />
                        </Col>
                    </Row>
                </Container>
            </div>
                <Info/>

        </Layout>
        </React.Fragment>
    );
};

Blog.getInitialProps = async (context) => {
    const { blog } = context.query;

    const content = await import(`../content/posts/${blog}.md`);
    const data = matter(content.default);

    return {...data};
};

export default Blog;