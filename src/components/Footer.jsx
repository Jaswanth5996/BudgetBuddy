const Footer = () =>{
    return (
        <div className="flex flex-col">
        <div className="p-10 flex justify-around bg-gray-600">
            <div className="w-1/4">
                <p className="text-2xl mb-3">Savings</p>
                <p className="text-l">This finance tracker and savings app helps users manage their money with ease. It lets you track expenses, set savings goals, create budgets, and view real-time insights into your spending habits.</p>
            </div>
            <div className="">
                <p className="text-2xl mb-3">Useful Links</p>
                <p className="text-l">Home</p>                
                <p className="text-l">About</p>                
                <p className="text-l">Profile</p>                
                <p className="text-l">Login/Signup</p>                

            </div>
            <div className="">
                <p className="text-2xl mb-3">Contact</p>
                <p className="text-l">Jaswanth Kanchipati</p>
                <p className="text-l">jaswanth.140760@gmail.com</p>
                <p className="text-l">+91 9533838323</p>
                <p className="text-l">Visakhapatnam</p>
            </div>
        </div>
        <div className="text-center">
            &#169; Savings All rights reserved.
        </div>
    </div>
    )
}

export default Footer;