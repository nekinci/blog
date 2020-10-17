import matter from 'gray-matter';
import Head from 'next/head';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactMarkdown from "react-markdown";
import Info from '../components/Info';
import Layout from '../components/Layout';
import Axios from 'axios';

const Blog = ({content, data}) => {
    const frontmatter = data;
    const CLAPS_LIMIT = 10;
    const [totalClap, setTotalClap] = React.useState(0);
    const [isClapped, setIsClapped] = React.useState(false);
    const [animate, setAnimate] = React.useState(false);
    const [clapsLimit, setClapsLimit] = React.useState(10);

    const setLocalStorage = () => {
        const count = CLAPS_LIMIT - clapsLimit;
        localStorage.setItem(frontmatter.slug, count.toString());
    }

    const getLocalStorage = () => {
        return localStorage.getItem(frontmatter.slug);
    }
    const getClaps = async () => {
        const data = await Axios.get(`/api/getClaps?slug=${frontmatter.slug}`);
        setTotalClap(data.data.claps);
        const count = getLocalStorage();
        if(count || !isNaN(parseInt(count))) {
            setClapsLimit(CLAPS_LIMIT - (parseInt(count) + 1))
        }
    }
    React.useEffect(() => {
        getClaps();
    }, []);
    React.useEffect(()=> {
        if(clapsLimit < CLAPS_LIMIT){
            setIsClapped(true);
        }
    }, [clapsLimit]);

    const handleClaps = async () => {
        if(clapsLimit <= 0)
            return;
        setClapsLimit(p => p - 1);
        setAnimate(true);
        setTimeout(()=>{
            setAnimate(false);
        }, 700);
        setTotalClap(p => p + 1);
        setLocalStorage();
        const data = await Axios.get(`/api/postClaps?slug=${frontmatter.slug}`);
        if(data.status !== 201){
            setTotalClap(p => p - 1);
        }
    }
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
                <Container className="article-body px-0 pt-2 container-exts" >
                    <span className="inner-span">
                        <div className="text-secondary" style={{textAlign:'center'}}>{totalClap}</div>
                        <button onClick={handleClaps} style={{border:0, outline:'none', borderRadius:'100%', width:'48px', height:'48px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                            {
                                !isClapped ? (
                                    <span>🤍</span>
                                ): (
                               <span className={animate?'top':''}>🤎</span>
                                )
                            }
                        </button>
                    </span>
                    <Row>
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