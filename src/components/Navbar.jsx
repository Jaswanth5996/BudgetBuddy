import {Link} from 'react-router-dom'
const Navbar = () => {

    return (
        <div className="sticky top-0 z-50 bg-black flex justify-between px-20 py-5 ">
            <div className="text-2xl">Savings</div>
            <div className="flex space-x-10 items-center text-xl">
                <a href="">Home</a>
                <Link to="/login">Signup/Login</Link>
                <a href="">Contact</a>
                <a href="">Demo</a>
            </div>
        </div>
    )
};
export default Navbar;