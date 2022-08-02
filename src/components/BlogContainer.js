import React,{Fragment} from "react";
import BlogHeader from "./BlogHeader";
import FirstBlog from "./LatestBlog";
import BlogNewsletter from "./BlogNewsletter";
import OtherBlogs from "./otherBlog";
import './blog-header.css'

const BlogContainer = () => {

    return (
        <Fragment className="blog-container">
            <BlogHeader/>
            <FirstBlog/>
            <BlogNewsletter/>
            <OtherBlogs/>
        </Fragment>

    )

}

export default BlogContainer

