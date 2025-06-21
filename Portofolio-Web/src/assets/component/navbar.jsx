
export default function Navbar(){
   return (
   <div className="navbar"> 
       <div className="flex px-28 py-10 justify-between items-center shadow-md text-sm sticky">
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