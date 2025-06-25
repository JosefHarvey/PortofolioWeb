import photo from "../../assets/testporto.jpg"
import enviro from "../../assets/enviro.png"
import { useState } from "react";
import Experience from "./Experience";
import Credential from "./Credential";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox, faLocationDot, faPhone, faCode, faWindowMaximize  } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faInstagram, faReact, faFigma, faCss, faJs } from "@fortawesome/free-brands-svg-icons";


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
        <div className="dark:bg-[#030712] dark:text-[#4b5563]">
            <div id="home" className="container ">
                <div className="flex pt-[150px] pb-[150px] items-center">
                    <div className=" flex flex-col flex-1">
                       <div className="content">
                            <div className=" text-sm font-[500] tracking-widest uppercase mb-3">
                                    Welcome to my portofolio
                            </div>
                            <div className=" text-7xl font-[700] mb-6">
                                    Hi, I'm <span className="text-red dark:text-[#db2777]">Josef Harvey</span>
                            </div>
                            <div className="text-6xl font-[700] mb-6">
                                    a  <span className="text-red dark:text-[#db2777]">Frontend Engineer</span>
                            </div>
                            <div className="leading-[30px] w-[600px] text-lg ">
                                    I've always been drawn to things I could personalize, from toy cars and games to the digital experiences I build today.  
                                    <br/> That early curiosity naturally led me to study Computer Science, where I learned to turn ideas into real, interactive products. 
                                    <br/>Now, as a Front-End Web Developer, I focus on creating intuitive user interfaces with React, while continuously deepening my understanding of full-stack systems.    
                            </div>  
                         </div>
                
                        <a href="" className=" text-red dark:text-[#db2777] w-34 rounded-md pt-[15px] pb-[15px] pr-[35px] pl-[35px] mb-[50px] shadow-lg text-sm font-[700] hover:bg-red hover:text-white hover:-translate-y-2  transition duration-300 dark:hover:bg-[#030712] dark:hover:text-[#db2777]">View CV </a>

                        <div className="flex ">
                            <div className="flex-1">
                                <p className="uppercase tracking-widest font-[500] mb-5">Find me on</p>            
                                <div className="flex gap-10">
                                    <a href="https://www.linkedin.com/in/josef-harvey/" className="bg-white dark:bg-[#030712] dark:hover:bg-[#030712] dark:hover:text-[#db2777] dark:shadow-white-2xl rounded  w-16 h-16 flex items-center justify-center shadow-2xl hover:bg-red hover:text-white hover:-translate-y-2  transition duration-300">
                                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                                    </a>
                                    <a href="https://github.com/JosefHarvey" className="bg-white dark:bg-[#030712] dark:hover:bg-[#030712] dark:hover:text-[#db2777] rounded  w-16 h-16 flex items-center justify-center shadow-2xl hover:bg-red hover:text-white hover:-translate-y-2  transition duration-300">
                                        <FontAwesomeIcon icon={faGithub} size="2x" />
                                    </a>
                                    <a href="https://www.instagram.com/harveyy_0/" className="bg-white dark:bg-[#030712] dark:hover:bg-[#030712] dark:hover:text-[#db2777] rounded  w-16 h-16 flex items-center justify-center shadow-2xl hover:bg-red hover:text-white hover:-translate-y-2  transition duration-300">
                                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                                    </a>
                                    
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="uppercase tracking-widest font-[500] mb-5">Best skill on</p>
                                 <div className="flex gap-10">
                                    <div className="bg-white dark:bg-[#030712] rounded  w-16 h-16 flex items-center justify-center shadow-2xl text-blue-300 ">
                                        <FontAwesomeIcon icon={faReact} size="2x" />
                                    </div>
                                    <div className="bg-white dark:bg-[#030712] rounded  w-16 h-16 flex items-center justify-center shadow-2xl text-red dark:text-[#db2777]">
                                        <FontAwesomeIcon icon={faFigma} size="2x" />
                                    </div>
                                    <div className="bg-white dark:bg-[#030712] rounded  w-16 h-16 flex items-center justify-center shadow-2xl text-purple-500">
                                        <FontAwesomeIcon icon={faCss} size="2x" />
                                    </div>
                                    <div className="bg-white dark:bg-[#030712] rounded  w-16 h-16 flex items-center justify-center shadow-2xl text-yellow-300">
                                        <FontAwesomeIcon icon={faJs} size="2x" />
                                    </div>
                                   
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
                        <p className="text-red dark:text-[#db2777] uppercase tracking-widest text-sm font-[600]">features</p>
                        <p className="text-6xl font-[700] mb-6">What i <span className="text-8xl font-[500] text-red dark:text-[#db2777]">♡</span> to Do</p>
                    </div>
                    <div className="flex ">
                        <div className="group mr-10  p-10 flex-1.5 shadow-lg rounded-lg hover:shadow-xl hover:bg-red bg-white dark:bg-[#030712] dark:hover:bg-[#030712]">
                           <div className="group-hover:text-white group-hover:-translate-y-5  transition duration-300" >
                                <div className="pt-5 pb-5">
                                     <FontAwesomeIcon icon={faCode} size="2x" className="group-hover:text-white text-red dark:text-[#db2777] dark:group-hover:text-[#db2777]" />
                                </div>
                                <p className="text-2xl font-[700] mb-3">Coding</p>
                                <p className="leading-[30px] font-[500] ">I enjoy programming because it allows me to turn ideas into functional digital solutions that reflect my personal vision. It’s a creative outlet as well as an intellectual challenge that drives me to keep learning and growing.</p>
                                <div class="h-1 w-10 rounded-2xl bg-gray-300 my-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                           </div>
                        </div>
                        <div className="group mr-10  p-10 flex-1.5 shadow-lg rounded-lg hover:shadow-xl hover:bg-red bg-white dark:bg-[#030712] dark:hover:bg-[#030712]">
                           <div className="group-hover:text-white group-hover:-translate-y-5  transition duration-300" >
                                <div className="pt-5 pb-5 ">
                                     <FontAwesomeIcon icon={faWindowMaximize} size="2x" className="group-hover:text-white text-red dark:text-[#db2777] dark:group-hover:text-[#db2777]" />
                                </div>
                                <p className="text-2xl font-[700] mb-3">Web Development</p>
                                <p className="leading-[30px] font-[500] ">II build responsive websites that work well on both mobile and desktop. I enjoy turning ideas into interactive, reliable, and engaging experiences. To me, good design balances usability, performance, and clean visuals.</p>
                                <div class="h-1 w-10 rounded-2xl bg-gray-300 my-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                           </div>
                        </div>
                        <div className="group mr-10  p-10 flex-1.5 shadow-lg rounded-lg hover:shadow-xl hover:bg-red bg-white dark:bg-[#030712] dark:hover:bg-[#030712] ">
                           <div className="group-hover:text-white group-hover:-translate-y-5  transition duration-300" >
                                <div className="pt-5 pb-5">
                                     <FontAwesomeIcon icon={faFigma} size="2x" className="text-red dark:text-[#db2777] dark:group-hover:text-[#db2777] group-hover:text-white" />
                                </div>
                                <p className="text-2xl font-[700] mb-3">UI Design</p>
                                <p className="leading-[30px] font-[500] ">I enjoy designing interfaces that are both visually appealing and improve the user experience. For me, a good UI is the face of an application it builds trust and guides users naturally.</p>
                                <div class="h-1 w-10 rounded-2xl bg-gray-300 my-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                           </div>
                        </div>
                       
                        
                    </div>
                </div>
              <hr />
            </div>
            <div id="projects" className="container ">
                <div className="pb-[100px] pt-[100px]">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-red dark:text-[#db2777] uppercase tracking-widest text-sm font-[600] mb-3">made with <span className="text-base">♡</span></p>
                        <p className="text-6xl font-[700] mb-6">My Projects</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 ">
                        <div className="col-start-2  p-7 shadow-lg rounded-lg hover:shadow-xl dark:hover:text-white">
                            <div className="w-auto h-auto mb-3">
                                <img src={enviro} alt="Photo Enviro" className="w-full h-auto object-cover rounded-md"/>
                            </div>
                            <div className="flex justify-between mb-3 mt-4 items-center">
                                <a href="https://enviro-backend.onrender.com/" className="text-red dark:text-[#db2777] text-sm font-[500] hover:underline  inline-block group">
                                Explore Enviro 
                                <span className="inline-block transition-transform group-hover:translate-x-1"> →</span></a>
                                <p className="text-sm font-[500]">Web</p>
                            </div>
                            <p className="uppercase text-2xl font-[900] mb-3">Enviro</p>
                            <p className="leading-[30px]">Enviro is a web-based learning application focused on educating users about environmental pollution covering its types, causes, and prevention methods.The goal of Enviro is to raise public awareness and make learning about pollution more accessible and engaging.</p>
                        </div>
                    </div>
                </div>
            <hr />
            </div>
            <div id="resume" className="container ">
                <div className="pb-[100px] pt-[100px]">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-red dark:text-[#db2777] uppercase tracking-widest text-sm font-[600] mb-3">1 years experience</p>
                        <p className="text-6xl font-[700]">My Resume</p>
                    </div>   
                    <div className="mt-11 flex flex-col items-center">
                        <ul className="inline-flex mb-6 shadow-xl rounded-xl" id="myTab">
                            {tabs.map((tab) => (
                                <li key={tab}>
                                <button
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-4 text-md font-[500] h-[60px] w-100  transition-all duration-300    ${
                                        activeTab === tab
                                        ? " hover:text-red dark:text-[#db2777] shadow-2xl "
                                        : " hover:text-red dark:text-[#db2777] cursor-pointer "
                                    }`}
                                >
                                {tab}
                                </button>
                            </li>
                            ))}
                        </ul>
                        <div className="p-6 w-full rounded shadow-md bg-white dark:bg-[#030712]">
                            {renderContent()}
                        </div>
                    </div>             
                </div>
            <hr />
            </div>

            <div id="contact" className="container">
                <div className="pb-[100px] pt-[100px]">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-red dark:text-[#db2777] uppercase tracking-widest text-sm font-[600] mb-3">contact</p>
                        <p className="text-6xl font-[700] mb-10">Contact With Me</p>
                    </div>   
                    <div className="flex flex-col items-center">
                        <div className="text-red dark:text-[#db2777] text-3xl font-[700] mb-5">Contact Information</div>
                        <div>
                            <div className="shadow-lg px-6 py-4 text-md font-[500] h-[60px] w-100 mb-5 rounded hover:shadow-xl">
                                <div className="flex gap-5 items-center">
                                    <FontAwesomeIcon icon={faInbox} className= "text-xl  text-red dark:text-[#db2777]"/>
                                    <div className="text-lg">josefharveymangaratua@gmail.com</div>
                                    </div>
                            </div>
                             <div className="shadow-lg px-6 py-4 text-md font-[500] h-[60px] w-100 mb-5 rounded hover:shadow-xl">
                                <div className="flex gap-5 items-center">
                                    <FontAwesomeIcon icon={faPhone} className= "text-xl text-red dark:text-[#db2777]"/>
                                    <div className="text-lg ">(+62) 81517433866</div>
                                    </div>
                            </div>
                             <div className="shadow-lg px-6 py-4 text-md font-[500] h-[60px] w-100 mb-5 rounded hover:shadow-xl">
                                <div className="flex gap-5 items-center">
                                    <FontAwesomeIcon icon={faLocationDot} className= "text-xl text-red dark:text-[#db2777] "/>
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