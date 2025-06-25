import ThemeToggle from "./themeToggle";

export default function Navbar(){
   return (
   <div className="navbar sticky top-0 bg-white z-50 dark:bg-[#030712]"> 
       <div className="flex px-28 py-10 justify-between items-center shadow-md text-sm ">
            <div className="bg-black-300">
                <ThemeToggle/>
            </div>
            <div className="flex gap-10 dark:text-[#a1a1aa] ">
                <a href="#home" className="dark:hover:text-white">HOME</a>
                <a href="#features" className="dark:hover:text-white">FEATURES</a>
                <a href="#projects" className="dark:hover:text-white">PROJECTS</a>
                <a href="#resume" className="dark:hover:text-white">RESUME</a>
                <a href="#contact" className="dark:hover:text-white" >CONTACT</a>
            </div>
       </div>
        
    </div>
   );
}