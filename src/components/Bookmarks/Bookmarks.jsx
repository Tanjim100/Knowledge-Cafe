import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md: w-1/3 m-4 rounded-lg space-y-4">
            <div className='bg-gray-200 p-8 border-4 border-purple-700 rounded-xl text-center'>
                <h3 className='text-xl md:text-2xl text-purple-700'>Spent Time on Read: {readingTime} min</h3>
            </div>
            <div className='bg-gray-200 pb-4 rounded-lg'>
                <h2 className='text-center text-2xl p-4'>Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.PropTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;