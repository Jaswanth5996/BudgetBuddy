import image from '../images/signup.png'
import {Link} from 'react-router-dom'

const Signup = () => {
    return (
        <div className="flex justify-around bg-gray-900">
            <div className="flex justify-center items-center w-1/2 ml-20 min-h-screen-600">
                <form className="flex flex-col w-[500px] space-y-5" action="">
                    <legend className="text-center text-3xl p-4 font-bold">SIGNUP</legend>
                    <input className="rounded-xl w-[70%] h-[35px] p-5 self-center bg-gray-600 " placeholder="username" type="text" />
                    <input className="rounded-xl w-[70%] h-[35px] p-5 self-center bg-gray-600 " placeholder="email" type="email" />
                    <input className="rounded-xl w-[70%] h-[35px] p-5 self-center bg-gray-600 " placeholder="enter password" type="password" />
                    <input className="rounded-xl w-[70%] h-[35px] p-5 self-center bg-gray-600 " placeholder="confirm password" type="password" />
                    <p className='underline self-center hover:cursor-pointer'><Link to="/login">Have an account? Login</Link></p>
                    <button className="mt-4 rounded-2xl font-bold w-[30%] h-[50px] self-center bg-violet-700" type="submit">signup</button>
                </form>
            </div>

            <div className="w-1/2 mr-20 flex justify-center items-center min-h-screen">
            <img src={image} alt="" height={500} width={500} />
            </div>
        </div>
    )
};
export default Signup;