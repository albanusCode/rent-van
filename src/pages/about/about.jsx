import React from 'react'
import { Link } from 'react-router-dom';
import Image2 from '../../assets/image2.jpg'

const About = () => {
  return (
    <section class="py-4 max-w-[1300px] md:px-16 bg-[#FFF7ED]">
      <div class="container px-4 mx-auto">
          <div className='bg-white rounded-lg sm:mb-0 mb-10'>
            <h1 class="text-3xl md:text-5xl font-semibold mb-6 mt-14 max-w-lg lg:max-w-3xl px-10 pt-10">On a mission to make Adventure fun</h1>
            <p class="text-gray-600 text-lg lg:mb-32 max-w-xl p-10">
              RentVans is your gateway to unforgettable journeys and remarkable adventures. 
              As a premier van rental service dedicated to exploring the great outdoors, 
              we empower travelers to embrace freedom and spontaneity on the open road.
            </p>
          </div>
            <div className='bg-orange-300 h-[300px] sm:w-[470px] rounded-xl'>
              <p className='text-white flex justify-center pt-20'>
                Your destination is waititng. <br />
                Your van is ready
              </p>
              <Link to='/vans' className='flex justify-center items-center pt-10'>
                <button className='bg-gray-800 py-4 px-2 text-white w-3/4 rounded-lg hover:bg-orange-600'>Explore Our Vans</button>
              </Link>
            </div>
        <div class="relative h-[250px] mb-10 sm:mb-0">
          <div class="absolute z-0 transform translate-x-1/2 md:translate-x-0 right-1/2 md:right-24 md:left-[50%] -top-36 bg-white rounded-3xl border-2 border-orange-500 shadow-md mt-20 md:mt-0 p-8 w-3/4 md:max-w-md">
            <p class="text-base lg:text-lg font-semibold">&ldquo;RentVans transformed the way we explore, elevating the journey to new heights. With just a click, I can invite my friends to embark on a shared adventure, delving into specific destinations with ease and excitement.&rdquo;</p>
            <div class="flex items-center flex-wrap gap-4">
              <div class="relative bg-orange-300 rounded-full overflow-hidden mt-2">
                <img class="absolute bottom-0 right-0" src="https://images.unsplash.com/photo-1595971294624-80bcf0d7eb24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzaWNpYW58ZW58MHx8MHx8fDA%3D" alt="" className='h-16 w-16'/>
              </div>
              <div>
                <p class="font-semibold mb-1">Rob Schapiro</p>
                <p class="text-gray-500 text-sm">Artist</p>
              </div>
            </div>
          </div>
          
          <img class="w-full h-full md:absolute md:top-12 md:right-12 rounded-5xl object-cover hidden" src={Image2} alt="" />
        </div>
     </div>
</section>
  )
}

export default About