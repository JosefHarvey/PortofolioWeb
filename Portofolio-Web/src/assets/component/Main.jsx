
import { useState } from "react";
import Experience from "./Experience";
import Credential from "./Credential";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox, faLocationDot, faPhone, faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faInstagram, faReact, faFigma, faCss, faJs } from "@fortawesome/free-brands-svg-icons";


export default function Main() {
    const tabs = ["Experience", "Credential"]
    const [activeTab, setActiveTab] = useState("Experience")

    const renderContent = () => {
        switch (activeTab) {
            case 'Experience':
                return <Experience />
            case 'Credential':
                return <Credential />
            default:
                return null
        }
    }


    return (
        <div className="dark:bg-[#030712] dark:text-[#f3f4f6]">
            {/* ====== HOME SECTION ====== */}
            <div id="home" className="container px-4"> {/* Added horizontal padding for mobile */}
                {/* Changed flex direction for mobile, adjusted padding */}
                <div className="flex flex-col lg:flex-row pt-[80px] pb-[80px] lg:pt-[150px] lg:pb-[150px] items-center gap-12 lg:gap-0">
                    <div className="flex flex-col flex-1  lg:text-left items-center lg:items-start">
                        <div className="content">
                            <div className="text-sm font-[500] tracking-widest uppercase mb-3">
                                Welcome to my portofolio
                            </div>
                            {/* Responsive Font Sizes */}
                            <div className="text-5xl md:text-6xl lg:text-7xl font-[700]  mb-3 lg:mb-6">
                                Hi, I'm <span className="text-red-500 dark:text-[#db2777]">Josef Harvey</span>
                            </div>
                            <div className="text-3xl sm: md:text-5xl lg:text-6xl font-[700] mb-3 lg:mb-6">
                                a <span className="lg:text-red-500 dark:lg:text-[#db2777] ">Software Engineer</span>
                            </div>
                            {/* Responsive Width and Leading */}
                            <div className="leading-[30px] w-full lg:w-[600px] text-lg lg:mb-8"> {/* Added bottom margin */}
                                I've always been drawn to things I could personalize, from toy cars and games to the digital experiences I build today.
                                <br /> That early curiosity naturally led me to study Computer Science, where I learned to turn ideas into real, interactive products.
                                <br />Now, as a Front-End Web Developer, I focus on creating intuitive user interfaces with React, while continuously deepening my understanding of full-stack systems.
                            </div>
                        </div>

                        <a href="https://drive.google.com/file/d/1icOjt7tDCM9JFhKcyk5f9jPLdGM132d7/view?usp=sharing" className="text-red-500 dark:text-[#db2777] w-fit rounded-md pt-[15px] pb-[15px] pr-[35px] pl-[35px] mb-[50px] shadow-lg text-sm font-[700] hover:bg-red-500 hover:text-white hover:-translate-y-2 transition duration-300 dark:hover:bg-[#db2777] dark:hover:text-[#030712] dark:shadow-[2px_2px_25px_#374151,_-10px_-13px_25px_#2e3338]">
                            View CV
                        </a>

                        {/* Changed to flex-col on mobile, added gap */}
                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 w-full">
                            <div className="flex-1">
                                <p className="uppercase tracking-widest font-[500] mb-5">Find me on</p>
                                <div className="flex gap-6 justify-center lg:justify-start"> {/* Reduced gap for mobile */}
                                    <a href="https://www.linkedin.com/in/josef-harvey/" className="bg-white rounded w-16 h-16 flex items-center justify-center shadow-2xl hover:bg-red-500 hover:text-white hover:-translate-y-2 transition duration-300 dark:rounded-md dark:bg-[#030712] dark:hover:bg-[#db2777] dark:hover:text-white dark:text-[#f3f4f6] dark:shadow-[2px_2px_25px_#374151,_-10px_-13px_25px_#2e3338]">
                                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                                    </a>
                                    <a href="https://github.com/JosefHarvey" className="bg-white rounded w-16 h-16 flex items-center justify-center shadow-2xl hover:bg-red-500 hover:text-white hover:-translate-y-2 transition dark:rounded-md dark:bg-[#030712] dark:hover:bg-[#db2777] dark:hover:text-white dark:text-[#f3f4f6] dark:shadow-[2px_2px_25px_#374151,_-10px_-13px_25px_#2e3338] duration-300">
                                        <FontAwesomeIcon icon={faGithub} size="2x" />
                                    </a>
                                    <a href="https://www.instagram.com/harveyy_0/" className="bg-white rounded w-16 h-16 flex items-center justify-center shadow-2xl hover:bg-red-500 hover:text-white hover:-translate-y-2 transition duration-300 dark:rounded-md dark:bg-[#030712] dark:hover:bg-[#db2777] dark:hover:text-white dark:text-[#f3f4f6] dark:shadow-[2px_2px_25px_#374151,_-10px_-13px_25px_#2e3338]">
                                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                                    </a>
                                </div>
                            </div>
                            <div className="flex-1 mt-10 lg:mt-0">
                                <p className="uppercase tracking-widest font-[500] mb-5">Best skill on</p>
                                <div className="flex gap-6 justify-center lg:justify-start"> {/* Reduced gap for mobile */}
                                    <div className="bg-white dark:bg-[#030712] rounded w-16 h-16 flex items-center justify-center shadow-2xl text-blue-400 dark:shadow-[2px_2px_25px_#374151,_-10px_-13px_25px_#2e3338]">
                                        <FontAwesomeIcon icon={faReact} size="2x" />
                                    </div>
                                    <div className="bg-white dark:bg-[#030712] rounded w-16 h-16 flex items-center justify-center shadow-2xl text-red-500 dark:text-[#db2777] dark:shadow-[2px_2px_25px_#374151,_-10px_-13px_25px_#2e3338]">
                                        <FontAwesomeIcon icon={faFigma} size="2x" />
                                    </div>
                                    <div className="bg-white dark:bg-[#030712] rounded w-16 h-16 flex items-center justify-center shadow-2xl text-blue-600 dark:shadow-[2px_2px_25px_#374151,_-10px_-13px_25px_#2e3338]">
                                        <FontAwesomeIcon icon={faCss} size="2x" />
                                    </div>
                                    <div className="bg-white dark:bg-[#030712] rounded w-16 h-16 flex items-center justify-center shadow-2xl text-yellow-400 dark:shadow-[2px_2px_25px_#374151,_-10px_-13px_25px_#2e3338]">
                                        <FontAwesomeIcon icon={faJs} size="2x" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center order-first lg:order-last">
                        <div className="w-[250px] md:w-[350px] h-auto dark:shadow-[2px_2px_25px_#374151,_-10px_-13px_25px_#2e3338]">
                            <img src="/testPorto.jpg" alt="Photo Josef Harvey" className="w-full h-auto object-cover rounded-md" />
                        </div>
                    </div>
                </div>
                <hr className="dark:border-gray-700" />
            </div>

            {/* ====== FEATURES SECTION ====== */}
            <div id="features" className="container px-4">
                <div className="pb-[100px] pt-[100px] text-center lg:text-left">
                    <div>
                        <p className="text-red-500 dark:text-[#db2777] uppercase tracking-widest text-sm font-[600]">features</p>
                        {/* Responsive Font Sizes */}
                        <p className="text-4xl lg:text-6xl font-[700] mb-6">What I <span className="text-6xl lg:text-8xl font-[500] text-red-500 dark:text-[#db2777]">♡</span> to Do</p>
                    </div>
                    {/* Changed to flex-col on mobile, added gap */}
                    <div className="flex flex-col lg:flex-row dark:mt-10 gap-8 lg:gap-4">
                        {/* Removed mr-10, flex-1 allows it to grow */}
                        <div className="group p-10 flex-1 shadow-lg rounded-lg hover:shadow-xl hover:bg-red-500 bg-white dark:bg-[#030712] dark:hover:dark:bg-[#030712] dark:text-[#f3f4f6] dark:shadow-[2px_2px_25px_#374151,_-10px_-13px_25px_#2e3338] text-left">
                            <div className="group-hover:text-white group-hover:-translate-y-5 transition duration-300">
                                <div className="pt-5 pb-5">
                                    <FontAwesomeIcon icon={faCode} size="2x" className="group-hover:text-white text-red-500 dark:text-[#db2777] dark:group-hover:text-white" />
                                </div>
                                <p className="text-2xl font-[700] mb-3">Coding</p>
                                <p className="leading-[30px] font-[500] dark:text-gray-400 group-hover:text-gray-100">I enjoy programming because it allows me to turn ideas into functional digital solutions that reflect my personal vision. It’s a creative outlet as well as an intellectual challenge that drives me to keep learning and growing.</p>
                                <div className="h-1 w-10 rounded-2xl bg-gray-300 my-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                        <div className="group p-10 flex-1 shadow-lg rounded-lg hover:shadow-xl hover:bg-red-500 bg-white dark:bg-[#030712] dark:hover:dark:bg-[#030712] dark:shadow-[2px_2px_25px_#374151,_-10px_-13px_25px_#2e3338] text-left">
                            <div className="group-hover:text-white group-hover:-translate-y-5 transition duration-300">
                                <div className="pt-5 pb-5">
                                    <FontAwesomeIcon icon={faWindowMaximize} size="2x" className="group-hover:text-white text-red-500 dark:text-[#db2777] dark:group-hover:text-white" />
                                </div>
                                <p className="text-2xl font-[700] mb-3">Web Development</p>
                                <p className="leading-[30px] font-[500] dark:text-gray-400 group-hover:text-gray-100">I build responsive websites that work well on both mobile and desktop. I enjoy turning ideas into interactive, reliable, and engaging experiences. To me, good design balances usability, performance, and clean visuals.</p>
                                <div className="h-1 w-10 rounded-2xl bg-gray-300 my-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                        <div className="group p-10 flex-1 shadow-lg rounded-lg hover:shadow-xl hover:bg-red-500 bg-white dark:bg-[#030712] dark:hover:bg-[#030712] dark:text-[#f3f4f6] dark:shadow-[2px_2px_25px_#374151,_-10px_-13px_25px_#2e3338] text-left">
                            <div className="group-hover:text-white group-hover:-translate-y-5 transition duration-300">
                                <div className="pt-5 pb-5">
                                    <FontAwesomeIcon icon={faFigma} size="2x" className="text-red-500 dark:text-[#db2777] dark:group-hover:text-white group-hover:text-white" />
                                </div>
                                <p className="text-2xl font-[700] mb-3">UI Design</p>
                                <p className="leading-[30px] font-[500] dark:text-gray-400 group-hover:text-gray-100">I enjoy designing interfaces that are both visually appealing and improve the user experience. For me, a good UI is the face of an application it builds trust and guides users naturally.</p>
                                <div className="h-1 w-10 rounded-2xl bg-gray-300 my-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="dark:border-gray-700" />
            </div>

            {/* ====== PROJECTS SECTION ====== */}
            <div id="projects" className="container px-4">
                <div className="pb-[100px] pt-[100px]">
                    <div className="flex flex-col justify-center items-center text-center">
                        <p className="text-red-500 dark:text-[#db2777] uppercase tracking-widest text-sm font-[600] mb-3">made with <span className="text-base">♡</span></p>
                        <p className="text-4xl lg:text-6xl font-[700] mb-6">My Projects</p>
                    </div>
                    {/* Changed grid to 1 column on mobile */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 dark:mt-10">
                        {/* Removed col-start-2 for mobile, applied only on lg screens */}
                        <div className="md:col-span-2 lg:col-span-1 lg:col-start-2 p-7 shadow-lg rounded-lg hover:shadow-xl bg-white dark:bg-[#030712] dark:text-[#f3f4f6] dark:shadow-[2px_2px_25px_#374151,_-10px_-13px_25px_#2e3338] duration-300">
                            <div className="w-auto h-auto mb-3">
                                <img src="/enviro.png"alt="Photo Enviro" className="w-full h-auto object-cover rounded-md" />
                            </div>
                            <div className="flex justify-between mb-3 mt-4 items-center">
                                <a href="https://enviro-backend.onrender.com/" className="text-red-500 dark:text-[#db2777] text-sm font-[500] hover:underline inline-block group">
                                    Explore Enviro
                                    <span className="inline-block transition-transform group-hover:translate-x-1"> →</span>
                                </a>
                                <p className="text-sm font-[500] dark:text-gray-400">Web</p>
                            </div>
                            <p className="uppercase text-2xl font-[900] mb-3">Enviro</p>
                            <p className="leading-[30px] dark:text-gray-400">Enviro is a web-based learning application focused on educating users about environmental pollution covering its types, causes, and prevention methods.The goal of Enviro is to raise public awareness and make learning about pollution more accessible and engaging.</p>
                        </div>
                    </div>
                </div>
                <hr className="dark:border-gray-700" />
            </div>

            {/* ====== RESUME SECTION ====== */}
            <div id="resume" className="container px-4">
                <div className="pb-[100px] pt-[100px]">
                    <div className="flex flex-col justify-center items-center text-center">
                        <p className="text-red-500 dark:text-[#db2777] uppercase tracking-widest text-sm font-[600] mb-3">1 years experience</p>
                        <p className="text-4xl lg:text-6xl font-[700]">My Resume</p>
                    </div>
                    <div className="mt-11 flex flex-col items-center">
                        <ul className="inline-flex mb-6 shadow-xl rounded-xl bg-white dark:bg-[#030712]" id="myTab">
                            {tabs.map((tab) => (
                                <li key={tab}>
                                    <button
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 md:px-6 py-4 text-md font-[500] h-[60px] w-auto transition-all duration-300 rounded-xl ${activeTab === tab
                                            ? "text-red-500 dark:text-[#db2777] shadow-inner bg-gray-100 dark:bg-gray-900"
                                            : "hover:text-red-500 dark:hover:text-[#db2777] cursor-pointer"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="p-4 md:p-6 w-full rounded shadow-md bg-white dark:bg-[#030712]">
                            {renderContent()}
                        </div>
                    </div>
                </div>
                <hr className="dark:border-gray-700" />
            </div>

            {/* ====== CONTACT SECTION ====== */}
            <div id="contact" className="container px-4">
                <div className="pb-[100px] pt-[100px]">
                    <div className="flex flex-col justify-center items-center text-center">
                        <p className="text-red-500 dark:text-[#db2777] uppercase tracking-widest text-sm font-[600] mb-3">contact</p>
                        <p className="text-4xl lg:text-6xl font-[700] mb-10">Contact With Me</p>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <div className="text-red-500 dark:text-[#db2777] text-2xl lg:text-3xl font-[700] mb-5">Contact Information</div>
                        <div className="dark:mt-5 w-full max-w-lg"> {/* Constrain width */}
                            <div className="shadow-lg px-6 py-4 text-md font-[500] h-auto md:h-[60px] w-full mb-5 rounded bg-white dark:bg-[#030712] hover:shadow-xl dark:shadow-[2px_2px_25px_#374151,_-10px_-13px_25px_#2e3338]">
                                <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center">
                                    <FontAwesomeIcon icon={faInbox} className="text-xl text-red-500 dark:text-[#db2777]" />
                                    <div className="text-base lg:text-lg break-all">josefharveymangaratua@gmail.com</div>
                                </div>
                            </div>
                            <div className="shadow-lg px-6 py-4 text-md font-[500] h-auto md:h-[60px] w-full mb-5 rounded bg-white dark:bg-[#030712] hover:shadow-xl dark:shadow-[2px_2px_25px_#374151,_-10px_-13px_25px_#2e3338]">
                                <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center">
                                    <FontAwesomeIcon icon={faPhone} className="text-xl text-red-500 dark:text-[#db2777]" />
                                    <div className="text-base lg:text-lg">(+62) 81517433866</div>
                                </div>
                            </div>
                            <div className="shadow-lg px-6 py-4 text-md font-[500] h-auto md:h-[60px] w-full mb-5 rounded bg-white dark:bg-[#030712] hover:shadow-xl dark:shadow-[2px_2px_25px_#374151,_-10px_-13px_25px_#2e3338]">
                                <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-xl text-red-500 dark:text-[#db2777]" />
                                    <div className="text-base lg:text-lg">Jakarta, Indonesia</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="dark:border-gray-700" />
            </div>
        </div>
    );
}