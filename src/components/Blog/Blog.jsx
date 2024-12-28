import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id, cover, title, author_img, author_name, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-8'>
            <img className='rounded-lg w-full mb-2' src={cover} alt={`cover pic of ${title}`} />
            <div className='flex justify-between  mb-2 px-4'>
                <div className='flex items-center'>
                    <img className='w-16 h-16 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author_name}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} read</span>
                    {/* <button> <BsBookmarks></BsBookmarks> </button> */}
                    <button className='ml-2 text-2xl' onClick={() => handleAddToBookmark(blog)}>
                         <FaRegBookmark></FaRegBookmark> 
                    </button>
                </div>
            </div>
            <h2 className='text-4xl px-4'>{title}</h2> 
            <p className='px-4'>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">{hash}</a> </span>)
                }
            </p>
            <button className='text-purple-600 font-bold underline px-4' onClick={() => handleMarkAsRead(id, reading_time)}>
                Mark as Read
            </button>
        </div>
    );
};


Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
    
}

export default Blog;