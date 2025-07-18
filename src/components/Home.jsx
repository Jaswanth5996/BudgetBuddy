import finance from '../images/savings.svg'
import Navbar from './Navbar';
const Home = () =>{

    return (
        <>
        <Navbar />
        <div className="text-black flex justify-around items-center bg-orange-400 rounded py-12 pr-10">
            <div className="flex flex-col items-center w-3/4 space-y-10">
                <div className="text-5xl font-bold ">
                    Track and Guardian your Wealth
                </div>
                <div className="text-xl self-center ">
                    Hello guys this is the man that has never drank water for over 100 years
                </div>
                <div className="flex space-x-25 ">
                    <button className="border-black p-4 px-8 bg-blue-400 cursor-pointer text-white rounded hover:bg-white hover:text-black ">Get Secured</button>
                    <button className="border p-4 px-8 bg-white rounded cursor-pointer hover:bg-black hover:text-white ">See Demo</button>
                </div>
            </div>
            <div className="w-1/4">
                <img className='' src={finance} width={400} height={400}/>
            </div>
        </div>
        <div className="mt-25 grid grid-cols-3 place-items-center gap-1">
            <div className="w-3/4 border rounded-2xl">
                <p className='text-2xl'>Custom Savings</p>
            </div>
        </div>
        </>
    )
};

export default Home;