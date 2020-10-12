import matter from 'gray-matter';
import React from 'react';
import ReactMarkdown from "react-markdown";

const Blog = ({content, data}) => {
    const frontmatter = data;

    return (
        <React.Fragment>
            <h1>{frontmatter.title}</h1>
            <h1>{frontmatter.description}</h1>
            <ReactMarkdown escapeHtml={true} source={content} />
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