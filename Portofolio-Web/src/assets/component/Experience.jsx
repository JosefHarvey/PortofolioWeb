import experienceElements from "../../assets/experienceElements";
import himatif from "../himatif.png";

export default function Experience() {
  return (
    <div className="flex flex-col items-center justify-center relative w-full max-w-5xl mx-auto px-4 py-8 sm:px-0">

      {/* Garis Waktu Vertikal (Desktop) */}
      <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray z-0 rounded hidden sm:block dark:bg-gray-800" />
      
      {/* Garis Waktu Vertikal (Mobile) */}
      <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gray z-0 block  dark:bg-gray-800 sm:hidden" />

      {experienceElements.map((element, index) => {
        const isLeft = index % 2 !== 0;

        return (
          <div
            key={element.id}
            className="relative w-full my-4 flex flex-col sm:flex-row items-center justify-center sm:my-8 "
          >
            {/* === DESKTOP === */}
            <div className="hidden sm:flex w-full items-center">
              {/* Bagian Tanggal */}
              <div className={`w-1/2 ${isLeft ? "order-2 pl-16" : "order-1 pr-16 text-right"}`}>
                <p className="text-md font-medium text-red dark:text-[#db2777]">{element.date}</p>
              </div>

              {/* Bagian Kartu */}
              <div className={`w-1/2 ${isLeft ? "order-1" : "order-2"}`}>
                <div className={`relative ${isLeft ? 'pr-16' : 'pl-16'}`}>
                  {/* Card untuk Konten (Tanpa Logo) */}
                  <div className="bg-white border border-gray rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 dark:bg-[#030712] dark:border-[#030712] dark:hover:border-gray-700 group dark:shadow-[2px_2px_25px_#374151,_-10px_-13px_25px_#2e3338]">
                    <h3 className="text-xl font-bold text-red dark:text-[#db2777] mb-1">{element.title}</h3>
                    <p className="text-sm text-locationExp mb-3">{element.location}</p>
                    <div class="h-0.5 w-full rounded-2xl bg-hrExp my-4 opacity-100 transition-opacity  dark:bg-[#030712] duration-300"></div>
                    <ul className="list-disc list-outside ml-5 text-discLi space-y-1 text-md  dark:text-gray-500 dark:group-hover:text-white dark:duration-300">
                      <li>{element.description1}</li>
                      <li>{element.description2}</li>
                      <li>{element.description3}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Node/Logo Persegi di Tengah (Hanya Desktop) */}
            <div className="hidden sm:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-lg border-2 border-gray items-center justify-center z-10 overflow-hidden shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src={himatif} alt="icon" className="w-full h-full object-contain" />
            </div>


            {/* === MOBILE === */}
            <div className="block sm:hidden w-full pl-5 ">
               {/* Node/Logo Persegi di Kiri (Hanya Mobile) */}
              <div className="absolute -top-2 left-2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-lg border-2 border-gray flex items-center justify-center z-10 overflow-hidden shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img src={himatif} alt="icon" className="w-full h-full object-contain p-1" />
              </div>

              {/* Konten Mobile */}
              <p className="text-md text-locationExp mb-5 dark:mb-8 pl-5">{element.date}</p>
              <div className="bg-white border border-gray rounded-xl shadow-lg p-6 dark:bg-[#030712] dark:border-[#030712] dark:shadow-[2px_2px_25px_#374151,_-10px_-13px_25px_#2e3338]">
                <h3 className="text-xl font-bold text-red dark:text-[#db2777] mb-1">{element.title}</h3>
                <p className="text-sm text-locationExp mb-3">{element.location}</p>
                <ul className="list-disc list-outside ml-5 text-discLi space-y-1 dark:text-gray-500 text-sm">
                  <li>{element.description1}</li>
                  <li>{element.description2}</li>
                  <li>{element.description3}</li>
                </ul>
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
}