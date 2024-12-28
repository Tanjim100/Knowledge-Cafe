import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const Blogs = ({blog}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    } ,[])

    return (
        <div className="md: w-2/3">
            <h2>Blogs: {blogs.length}</h2>
        </div>
    );
};

Blogs.PropTypes = {
    blog: PropTypes.object.isRequired
}

export default Blogs;