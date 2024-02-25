import { Link } from 'react-router-dom';
import './index.css';
import Button from './components/button';

function App() {
  return (
    <section className='relative h-screen overflow-hidden'>
      <div className='flex justify-center items-center h-screen top-0 relative'>
        <img
          src="https://images.unsplash.com/photo-1566847286022-786addefb683?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className='absolute w-[1260px] h-full top-0 z-[-1] cover'
        />
        <div className='absolute bg-black w-screen h-screen opacity-[0.6]'/>
      </div>
      <div className='absolute top-1/4 flex flex-col justify-center items-center w-full sm:gap-16 px-4'>
        <h2 className='font-bold text-orange-200 sm:text-5xl text-4xl'>You got the travel plans, we got the travel vans</h2>
        <p className='mt-10 text-lg text-gray-400 md:leading-[25px] leading-[20px] mb-4'>
          Add adventure to your life by joining the rentvas movement. <br className='sm:block hidden'/> 
          Explore the open road with ease and comfort by renting the perfect van tailored to your needs. <br className='sm:block hidden'/>
          Whether you're embarking on a cross-country journey or seeking a weekend getaway, rentvas has you covered. <br className='sm:block hidden'/>
          Experience the freedom of travel and the thrill of discovery like never before. Start your journey today!
        </p>
        <Link to='/vans'className=' pt-6 flex flex-col justify-center items-center w-full mt-4 md:mt-0'>
          <Button title={'Find your van'}/>
        </Link>
      </div>
    </section>
  );
}

export default App;
