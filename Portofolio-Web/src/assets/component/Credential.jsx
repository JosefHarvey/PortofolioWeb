import educationElement from "../education.Element";
import certificationElement from "../certification.Element";
import unpad from "../../assets/logo-unpad1.webp";



export default function Credential() {
  return (

    <div className="flex flex-col md:flex-row gap-12 lg:gap-16 w-full max-w-6xl mx-auto px-4 py-12">
      

      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Education</h2>
        <div className="relative">
          <div className="absolute top-5 left-5 w-1 h-full bg-gray-200 z-0 rounded"></div>

          <div className="space-y-10">
            {educationElement.map((element) => (
              <div key={element.id} className="relative pl-14">
                <div className="absolute top-5 left-5 transform -translate-x-1/2 w-10 h-10 bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center z-10 overflow-hidden">
                  <img src={unpad} alt="Logo Universitas" className="w-full h-full object-contain" />
                </div>

                <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-[#D71515]">{element.title}</h3>
                  <p className="text-sm text-gray-400 mt-2">{element.date}</p>
                  <hr className="my-3"/>
                  <p className="text-sm text-gray-700 font-medium">{element.GPA}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Credentials</h2>
        <div className="relative">

          <div className="absolute top-5 left-5 w-1 h-full bg-gray-200 z-0"></div>

          <div className="space-y-10">
            {certificationElement.map((element) => (
              <div key={element.id} className="relative pl-14">
                <div className="absolute top-5 left-5 transform -translate-x-1/2 w-10 h-10 bg-white rounded-lg flex items-center justify-center z-10 shadow-md overflow-hidden">

                  <img src={element.image} alt="Logo Sertifikasi" className="w-full h-full object-contain p-1" />
                </div>

                {/* Card untuk Konten Sertifikasi */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-[#D71515]">{element.Title}</h3>
                  <p className="text-md text-gray-600 mt-1">{element.from}</p>
                  <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-400 mt-2">{element.date}</p>
                        <a
                            href={element.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            // FIX: 'font-500' diubah menjadi 'font-medium' yang merupakan kelas Tailwind yang valid
                            className="text-sm font-medium text-[#D71515] hover:underline mt-4 inline-block group"
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