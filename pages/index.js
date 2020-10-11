import React from "react";
import Head from 'next/head'
import Link from "next/link";
import matter from "gray-matter";
import Layout from "../components/Layout";

const Index = (props) => {
  const RealData = props.data.map((blog) => matter(blog));
  const ListItems = RealData.map((listItem) => listItem.data);

  return (
    <React.Fragment>
       <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content={props.description}></meta>
    </Head>
    <Layout>
    <div className="h-full">
      <ul className="h-full">
        {ListItems.map((blog, i) => {
          return (
            <li key={i}>
              <Link href={`/${blog.slug}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
    </Layout>
    </React.Fragment>
    )
};

export default Index;


export async function getStaticProps(){
  const siteData = await import(`../config.json`);
  const fs = require('fs');
  const files = fs.readdirSync(`${process.cwd()}\\content`, 'utf-8');
  const blogs = files.filter((fn) => fn.endsWith(".md"));

  const data = blogs.map((blog) => {
    const path = `${process.cwd()}\\content\\${blog}`;
    const rawContent = fs.readFileSync(path, {encoding: 'utf-8'});

    return rawContent;
  });
  return {
    props: {
      title: siteData.default.title,
      description: siteData.default.description,
      data
    }
  }
}