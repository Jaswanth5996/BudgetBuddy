import finance from '../images/investi.svg'
import goals from '../images/goals.svg'
import security from '../images/security.svg'
import tips from '../images/tips.svg'
import tracking from '../images/tracking.svg'
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
                    <button className="border-black p-4 px-8 bg-blue-400 cursor-pointer text-white rounded-2xl hover:bg-white hover:text-black ">Get Secured</button>
                    <button className="border p-4 px-8 bg-white rounded-2xl cursor-pointer hover:bg-black hover:text-white ">See Demo</button>
                </div>
            </div>
            <div className="w-1/4">
                <img className='' src={finance} width={400} height={400}/>
            </div>
        </div>
        <p className='text-center mt-20 text-3xl font-bold'>Features</p>
        <div className="mt-2 p-15 grid grid-cols-4 place-items-center  gap-15">
            <div className=" text-center p-6 bg-gray-600 rounded-3xl h-full">
                <img className='mb-5 self-center' src={tracking} alt="" height={180} width={180}/>
                <p className='text-2xl font-bold mb-5'>Smart Expense Tracking</p>
                <p className=''>Effortlessly record and categorize your daily expenses. Visualize your spending habits and take control of your financial wellness.</p>
            </div>
            <div className=" text-center p-6 bg-gray-600 rounded-3xl h-full">
                <img className='mb-5 self-center' src={security} alt="" height={200} width={200}/>
                <p className='text-2xl font-bold mb-5'> Secure Data Protection</p>
                <p className=''>Your privacy matters. Enjoy encrypted data storage, secure login, and strict confidentiality for all your financial information.</p>
            </div>
            <div className=" text-center p-6 bg-gray-600 rounded-3xl h-full">
                <img className='mb-5 self-center' src={tips} alt="" height={200} width={200}/>
                <p className='text-2xl font-bold mb-5'>Personalized Financial Tips
</p>
                <p className=''>Receive actionable tips based on your unique spending patterns. Unlock smarter ways to save and grow your money with expert advice.</p>
            </div>
            <div className=" text-center p-6 bg-gray-600 rounded-3xl h-full">
                <img className='mb-5 self-center' src={goals} alt="" height={200} width={200}/>
                <p className='text-2xl font-bold mb-5'>Custom Savings Goals</p>
                <p className=''>Set personalized savings targets—whether for travel, emergencies, or future investments. Monitor your progress and celebrate every milestone.</p>
            </div>
        </div>
        </>
    )
};

export default Home;