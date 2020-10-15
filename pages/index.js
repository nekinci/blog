import React from "react";
import Head from 'next/head'
import Link from "next/link";
import matter from "gray-matter";
import Layout from "../components/Layout";
import { Jumbotron } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Info from "../components/Info";

const Index = (props) => {
  const RealData = props.data.map((blog) => matter(blog));
  const ListItems = RealData.map((listItem) => listItem.data);
  const mediumPosts = matter(props.mediumPosts);
  return (
    <React.Fragment>
       <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content={props.description}></meta>
    </Head>
    <Layout>
      
      <div className="h-full">
        <Info/>
        <hr/>
        <div>
          <ReactMarkdown escapeHtml={false} source={mediumPosts.content} />
        </div>
        <hr/>
        <div>
        <h4>Blog Yazılarım</h4>
        <br/>
        <ul>
            {ListItems.map((data, i) => {
              return (
                <li key={i}>
                  <Link href={`/${data.slug}`}><a>{data.title}</a></Link>
                </li>
              )
            })}
        </ul>
        </div> 
      </div>
    </Layout>
    </React.Fragment>
    )
};

export default Index;


export async function getStaticProps(){
  const siteData = await import(`../config.json`);
  const fs = require('fs');
  const files = fs.readdirSync(`${process.cwd()}/content/posts`, 'utf-8');
  const blogs = files.filter((fn) => fn.endsWith(".md"));
  
  const mediumPostPath = `${process.cwd()}/content/medium-posts.md`;
  const mediumPosts = fs.readFileSync(mediumPostPath, {encoding: 'utf-8'});

  const data = blogs.map((blog) => {
    const path = `${process.cwd()}/content/posts/${blog}`;
    const rawContent = fs.readFileSync(path, {encoding: 'utf-8'});

    return rawContent;
  });
  return {
    props: {
      title: siteData.default.title,
      description: siteData.default.description,
      data,
      mediumPosts
    }
  }
}