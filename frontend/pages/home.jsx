import { useState, useEffect } from 'react'
import '../src/App.css';
import NavBar from '../components/navbar.jsx';
import NavBarLarge from '../components/navbarlarge.jsx';
import { CloudUpload, ChartLine, FileCheck } from 'lucide-react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,       // animation duration
      once: false,          // whether animation should happen only once
      offset: 100,         // offset (in px) from the original trigger point
    });
  }, []);

  return (
    <div>
      
      <div data-aos="fade-down" className='w-[95vw] mt-[25vh] mx-auto'>
        <h1 className='text-6xl font-bold w-[330px] text-center mx-auto'>Understand what to<br/>Study</h1>
        <p className='text-[24px] text-center mx-auto m-[50px] text-[#575757] w-[90%] md:w-[40vw]'>Your personal exam strategy assistant, powered by AI and  past question papers.</p>
        <div className='flex justify-center'>
          <button className='bg-[#0F172A] text-white w-[141px] font-normal h-[64px] text-2xl rounded-[10px] flex justify-center items-center cursor-pointer hover:text-[#0F172A] hover:bg-white hover:border hover:border-[#0F172A]  transition duration-500'>
            Try Now
          </button>
        </div>
        <p className='m-[50px] text-[30px] text-center mx-auto font-medium w-[70vw]'>Your Personalized Study Partner</p>
      </div>


      <div id='box-container' className="space-y-4 w-[90vw] mx-auto mb-[50px] flex flex-col gap-[15px] md:w-[30vw]">
        <div data-aos="fade-up" className="border border-[#E5E7EB] p-4 pl-[30px] pr-[30px] rounded-md shadow-lg md:flex md:items-center">
          <CloudUpload className='mb-[10px] md:w-[100px] md:h-[50px] md:mr-[30px] md:mb-0'/>
          <div>
            <h4 className="font-semibold mb-[10px]">Upload Past Papers</h4>
            <p className="text-sm text-gray-600">
              Upload PDFs or text files of previous year question papers. Our AI will analyze them, spot trends, and extract the most important recurring topics - so you know exactly what to focus on.
            </p>
          </div>
          
        </div>

        <div data-aos="fade-up" className="border border-[#E5E7EB] p-4 pl-[30px] pr-[30px] rounded-md shadow-lg md:flex md:items-center">
          <ChartLine className='mb-[10px] md:w-[85px] md:h-[50px] md:mr-[20px] md:mb-0'/>
          <div>
            <h4 className="font-semibold mb-[10px]">Instant Insights</h4>
          <p className="text-sm text-gray-600">
            With your uploaded papers, Questlytics gets to work - identifying high-frequency topics, emerging trends, and syllabus hotspots in seconds.
          </p>
          </div>
        </div>

        <div data-aos="fade-up" className="border border-[#E5E7EB] p-4 pl-[30px] pr-[30px] rounded-md shadow-lg md:flex md:items-center">
          <FileCheck className='mb-[10px] md:w-[70px] md:h-[50px] md:mr-[20px] md:mb-0'/>
          <div>
            <h4 className="font-semibold mb-[10px]">See the Syllabus</h4>
          <p className="text-sm text-gray-600">
            Every suggested topic is backed by citations - see exactly where it came from and how often it appeared in past years.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
