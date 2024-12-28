import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ( {handleAddToBookmark, handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    } ,[])

    return (
        <div className="md: w-2/3">
            <h2>Blogs: {blogs.length}</h2>
            <div>
                {
                    blogs.map(blog => <Blog 
                        key={blog.id}
                        blog={blog}
                        handleAddToBookmark={handleAddToBookmark}
                        handleMarkAsRead={handleMarkAsRead}
                    ></Blog>)
                }
            </div>
        </div>
    );
};


export default Blogs;