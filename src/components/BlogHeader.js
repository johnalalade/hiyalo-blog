import React from "react";
import './blog-header.css'


const BlogHeader = () => {

    return (
        <header className="blog-container-header">
            <p data-aos="fade-up">Hiyalo Blog</p>
            <div class="search-bar">
                <form action="" data-aos="fade-up">
                    <input type="text" placeholder="Search for blog post"  name="" id=""/>
                    <button>Search</button>
                </form>
            </div>
        </header>

    )

}

export default BlogHeader;