import photo from "../../assets/testporto.jpg"
import enviro from "../../assets/enviro.png"
import { useState } from "react";
import Experience from "./Experience";
import Credential from "./Credential";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";


export default function Main (){
    const tabs = ["Experience" , "Credential" ]
    const [activeTab,setActiveTab] = useState("Experience")

    const renderContent = () =>{
        switch(activeTab) {
            case 'Experience':
                return <Experience />
            case 'Credential':
                return <Credential />
            default:
                return null
        }
    }
    
    
    return (
        <div>
            <div id="home" className="container">
                <div className="flex pt-[150px] pb-[150px] items-center">
                    <div className=" flex flex-col flex-1">
                       <div className="content">
                            <div className=" text-sm font-[500] tracking-widest uppercase mb-3">
                                    Welcome to my portofolio
                            </div>
                            <div className=" text-7xl font-[700] mb-6">
                                    Hi, I'm <span className="text-[#D71515]">Josef Harvey</span>
                            </div>
                            <div className="text-6xl font-[700] mb-6">
                                    a Frontend Engineer
                            </div>
                            <div className="leading-[30px] w-[600px] text-lg ">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    <br/> tempor incididunt ut labore et dolore magna aliqua. 
                                    <br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi       
                            </div>  
                         </div>
                
                        <a href="" className=" text-[#D71515] w-34 rounded-sm pt-[15px] pb-[15px] pr-[35px] pl-[35px] mb-[50px] shadow-lg text-sm font-[700]">View CV </a>

                        <div className="flex ">
                            <div className="flex-1">
                                <p className="uppercase tracking-widest font-[500] mb-5">Find me on</p>            
                                <div className="flex gap-10">
                                    <div className="bg-zinc-600 object-cover rounded  w-15 h-15 p-6 shadow-2xl "></div>
                                    <div className="bg-zinc-600 object-cover rounded  w-15 h-15 p-6 shadow-2xl"></div>
                                    <div className="bg-zinc-600 object-cover rounded  w-15 h-15 p-6 shadow-2xl"></div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="uppercase tracking-widest font-[500] mb-5">Best skill on</p>
                                 <div className="flex gap-10">
                                    <div className="bg-zinc-600 object-cover rounded  w-15 h-15 p-6 shadow-2xl"></div>
                                    <div className="bg-zinc-600 object-cover rounded  w-15 h-15 p-6 shadow-2xl"></div>
                                    <div className="bg-zinc-600 object-cover rounded  w-15 h-15 p-6 shadow-2xl"></div>
                                    <div className="bg-zinc-600 object-cover rounded  w-15 h-15 p-6 shadow-2xl"></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <div className="w-[300px] h-auto ">
                            <img src={photo} alt="Photo Josef Harvey" className="w-full h-auto object-cover rounded-md"/>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <div id="features" className="container">
                <div className=" pb-[100px] pt-[100px]">
                     <div>
                        <p className="text-[#D71515] uppercase tracking-widest text-sm font-[600]">features</p>
                        <p className="text-6xl font-[700] mb-6">What i <span className="text-8xl font-[500]">♡</span> to Do</p>
                    </div>
                    <div className="flex ">
                        <div className="mr-10  p-5 flex-1.5 shadow-lg rounded-lg hover:shadow-xl">
                            <p className="text-2xl font-[700] mb-3">Web Development</p>
                            <p className="leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                        </div>
                        <div className="mr-10  p-5 flex-1.5 shadow-lg rounded-lg hover:shadow-xl">
                            <p className="text-2xl font-[700] mb-3">Web Development</p>
                            <p className="leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                        </div>
                        <div className="mr-10  p-5 flex-1.5 shadow-lg rounded-lg hover:shadow-xl">
                            <p className="text-2xl font-[700] mb-3">Web Development</p>
                            <p className="leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                        </div>
                    </div>
                </div>
              <hr />
            </div>
            <div id="projects" className="container ">
                <div className="pb-[100px] pt-[100px]">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-[#D71515] uppercase tracking-widest text-sm font-[600] mb-3">made with <span className="text-base">♡</span></p>
                        <p className="text-6xl font-[700] mb-6">My Projects</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-start-2  p-7 shadow-lg rounded-lg hover:shadow-xl">
                            <div className="w-auto h-auto mb-3">
                                <img src={enviro} alt="Photo Enviro" className="w-full h-auto object-cover rounded-md"/>
                            </div>
                            <div className="flex justify-between mb-6">
                                <a href="https://enviro-backend.onrender.com/" className="text-[#D71515] text-sm font-[500]">Explore Enviro!</a>
                                <p className="text-sm font-[500]">Web</p>
                            </div>
                            <p className="uppercase text-2xl font-[900] mb-3">Enviro</p>
                            <p className="leading-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                        </div>
                    </div>
                </div>
            <hr />
            </div>
            <div id="resume" className="container ">
                <div className="pb-[100px] pt-[100px]">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-[#D71515] uppercase tracking-widest text-sm font-[600] mb-3">3+ years experience</p>
                        <p className="text-6xl font-[700]">My Resume</p>
                    </div>   
                    <div className="mt-11">
                        <ul className="flex justify-center mb-6" id="myTab">
                            {tabs.map((tab) => (
                                <li key={tab}>
                                <button
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-4 text-md font-[500] h-[60px] w-100 transition-all duration-300    ${
                                        activeTab === tab
                                        ? "shadow-lg text-[#D71515]"
                                        : " hover:text-[#D71515]"
                                    }`}
                                >
                                {tab}
                                </button>
                            </li>
                            ))}
                        </ul>
                        <div className="p-6 rounded shadow-sm bg-white">
                            {renderContent()}
                        </div>
                    </div>             
                </div>
            <hr />
            </div>

            <div id="contact" className="container">
                <div className="pb-[100px] pt-[100px]">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-[#D71515] uppercase tracking-widest text-sm font-[600] mb-3">contact</p>
                        <p className="text-6xl font-[700] mb-10">Contact With Me</p>
                    </div>   
                    <div className="flex flex-col items-center">
                        <div className="text-[#D71515] text-3xl font-[700] mb-5">Contact Information</div>
                        <div>
                            <div className="shadow-lg px-6 py-4 text-md font-[500] h-[60px] w-100 mb-5 rounded hover:shadow-xl">
                                <div className="flex gap-5 items-center">
                                    <FontAwesomeIcon icon={faInbox} className= "text-xl  text-[#D71515]"/>
                                    <div className="text-lg">josefharveymangaratua@gmail.com</div>
                                    </div>
                            </div>
                             <div className="shadow-lg px-6 py-4 text-md font-[500] h-[60px] w-100 mb-5 rounded hover:shadow-xl">
                                <div className="flex gap-5 items-center">
                                    <FontAwesomeIcon icon={faPhone} className= "text-xl text-[#D71515]"/>
                                    <div className="text-lg ">(+62) 81517433866</div>
                                    </div>
                            </div>
                             <div className="shadow-lg px-6 py-4 text-md font-[500] h-[60px] w-100 mb-5 rounded hover:shadow-xl">
                                <div className="flex gap-5 items-center">
                                    <FontAwesomeIcon icon={faLocationDot} className= "text-xl text-[#D71515] "/>
                                    <div className="text-lg ">Jakarta, Indonesia</div>
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>
            <hr />
            </div>
        </div>
    );
}