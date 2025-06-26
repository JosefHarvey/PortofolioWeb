import educationElement from "../education.Element";
import certificationElement from "../certification.Element";
import unpad from "../logo-unpad1.webp";



export default function Credential() {
  return (

    <div className="flex flex-col md:flex-row gap-12 lg:gap-16 w-full max-w-6xl mx-auto px-4 py-12 dark:text-[#4b5563]">
      

      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-10 text-tagCred dark:text-gray-500">Education</h2>
        <div className="relative">
          <div className="absolute top-5 left-5 w-1 h-full bg-gray z-0 rounded dark:bg-gray-800 "></div>

          <div className="space-y-10">
            {educationElement.map((element) => (
              <div key={element.id} className="relative pl-14">
                <div className="absolute top-5 left-5 transform -translate-x-1/2 w-10 h-10 bg-white rounded-lg border-2 border-gray flex items-center justify-center z-10 overflow-hidden">
                  <img src={unpad} alt="Logo Universitas" className="w-full h-full object-contain" />
                </div>

                <div className="bg-white border border-gray rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 dark:bg-[#030712] dark:border-[#030712] dark:shadow-[2px_2px_25px_#374151,_-10px_-13px_25px_#2e3338]">
                  <h3 className="text-xl font-bold text-red dark:text-[#db2777]">{element.title}</h3>
                  <p className="text-sm text-dateCred mt-2">{element.date}</p>
                  <hr className="my-3 text-hrCred"/>
                  <p className="text-sm text-gpaCred dark:text-[#99a1af] font-medium">{element.GPA}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-10 text-tagCred dark:text-gray-500">Certification</h2>
        <div className="relative">

          <div className="absolute top-5 left-5 w-1 h-full bg-gray z-0 dark:bg-gray-800 "></div>

          <div className="space-y-10">
            {certificationElement.map((element) => (
              <div key={element.id} className="relative pl-14">
                <div className="absolute top-5 left-5 transform -translate-x-1/2 w-10 h-10 bg-white rounded-lg flex items-center justify-center z-10 shadow-md overflow-hidden ">

                  <img src={element.image} alt="Logo Sertifikasi" className="w-full h-full object-contain p-1" />
                </div>

                {/* Card untuk Konten Sertifikasi */}
                <div className="bg-white border border-gray rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 dark:bg-[#030712] dark:border-[#030712] dark:shadow-[2px_2px_25px_#374151,_-10px_-13px_25px_#2e3338]">
                  <h3 className="text-xl font-bold text-red dark:text-[#db2777] ">{element.Title}</h3>
                  <p className="text-md text-fromCred mt-1 dark:text-[#99a1af]">{element.from}</p>
                  <div className="flex items-center justify-between">
                        <p className="text-sm text-dateCred mt-2">{element.date}</p>
                        <a
                            href={element.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            // FIX: 'font-500' diubah menjadi 'font-medium' yang merupakan kelas Tailwind yang valid
                            className="text-sm font-medium text-red dark:text-[#db2777]  hover:underline mt-4 inline-block group"
                        >
                        Show credential <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}