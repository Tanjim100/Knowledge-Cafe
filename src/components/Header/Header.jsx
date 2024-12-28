import ProfilePic from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-2 max-w-7xl mx-auto '>
            <h1 className='text-4xl font-bold'>Knowledge cafe</h1>
            <img src={ProfilePic} alt="" />
        </header>
    );
};

export default Header;