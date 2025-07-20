import image from '../images/login.png'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <>
        <div className="flex justify-around bg-gray-900">
            <div className="flex justify-center items-center w-1/2 ml-20 min-h-screen-600">
                <form className="flex flex-col w-[500px] space-y-5" action="">
                    <legend className="text-center text-3xl p-4 font-bold">LOGIN</legend>
                    <input className="rounded-xl w-[70%] h-[35px] p-5 self-center bg-gray-600 " placeholder="username" type="text" />
                    <input className="rounded-xl w-[70%] h-[35px] p-5 self-center bg-gray-600 " placeholder="password" type="password" />
                    <p className='underline self-center hover:cursor-pointer'><Link to="/signup">Don't have an account? Signup</Link></p>
                    <button className="mt-4 rounded-2xl font-bold w-[30%] h-[50px] self-center bg-violet-700" type="submit">login</button>
                </form>
            </div>

            <div className="w-1/2 mr-20 flex justify-center items-center min-h-screen">
            <img src={image} alt="" height={450} width={450} />
            </div>
        </div>
        </>
    )
};
export default Login;