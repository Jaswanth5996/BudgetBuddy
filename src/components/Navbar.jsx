const Navbar = () => {

    return (
        <div className="flex justify-between px-10 py-5 mx-10">
            <div className="text-2xl">Savings</div>
            <div className="flex space-x-10 items-center text-xl">
                <a href="">Home</a>
                <a href="">Signup/Login</a>
                <a href="">Contact</a>
                <a href="">Demo</a>
            </div>
        </div>
    )
};
export default Navbar;