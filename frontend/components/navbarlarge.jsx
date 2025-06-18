import '../src/App.css'
import { Github } from 'lucide-react'

function NavBarLarge() {
    return (
        <div className='flex justify-between items-center px-4 py-6 mx-auto fixed top-0 left-0 w-full bg-white z-50'>
            <h1 className='text-4xl font-semibold cursor-pointer select-none'>Questlytics</h1>
            <div className='flex gap-[30px] items-center'>
                <p className='font-medium underline underline-offset-4 decoration-1 select-none'>Overview</p>
                <a
                    href="https://github.com/NivinLouis/Questlytics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-0.5 cursor-pointer select-none hover:underline hover:underline-offset-4 hover:decoration-1 transition-all duration-500"
                >
                <Github className="w-5 h-5" />
                <span className="font-medium">GitHub</span>
                </a>
                <a href=''><button className='bg-[#0F172A] text-white w-[100px] font-normal h-[40px] text-xl rounded-[5px] flex justify-center items-center cursor-pointer p-[10px] hover:text-[#0F172A] hover:bg-white hover:border hover:border-[#0F172A]  transition-all duration-500ms]'>
                    Try Now
                </button></a>
            </div>
        </div>
    )
}

export default NavBarLarge