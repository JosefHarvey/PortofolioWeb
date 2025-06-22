
export default function Navbar(){
   return (
   <div className="navbar sticky top-0 bg-white z-50"> 
       <div className="flex px-28 py-10 justify-between items-center shadow-md text-sm ">
            <div>
                dark mode
            </div>
            <div className="flex gap-10">
                <div>HOME</div>
                <div>FEATURES</div>
                <div>PROJECTS</div>
                <div>RESUME</div>
                <div>CONTACT</div>
            </div>
       </div>
        
    </div>
   );
}