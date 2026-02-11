import { MapPinIcon, ClockIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const TanggalSection = () => {
  const [sesi, setSesi] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sesiParam = params.get("sesi");
  
    if (sesiParam) {
      setSesi(sesiParam);
    }
  }, []); 
  

  return (
    <section id="tanggal" className="py-20 px-5 pt-44 bg-yellow-50/50 text-center text-orange-900">
      <div className="container mx-auto px-4">
        {/* Judul & Lokasi */}
        <div className="max-w-xl mx-auto">
          {/* <h2 className="text-3xl font-bold mb-4" data-aos="flip-down-right" data-aos-duration="2000">
            Informasi Acara
          </h2> */}
          <p className="text-lg mb-5 mt-10" data-aos="fade-up-right" data-aos-duration="2000">
            Assalamu'alaikum Warahmatullah Wabarakatuh <br />
            Dengan memohon Rahmat Ridlo Allah Subhanahu wa taala, kami bermaksud mengundang Bapak Ibu Saudara/i utk menghadiri acara walimatul ursy putra putri kami, serta memberikan doa restu. InsyaAllah walimatul 'Urs akan diselenggarakan pada:
          </p>

          <div 
            className="shadow-lg rounded-tr-lg rounded-tl-lg p-6 text-orange-800" 
            data-aos="fade-up-right" data-aos-duration="2000">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <CalendarDaysIcon className="w-8 h-8 text-orange-800 mx-auto" />
                <p className="mt-2 text-lg">Senin, 16 Februari 2026</p>
              </div>
              <div>
                <ClockIcon className="w-8 h-8 text-orange-800 mx-auto" />
                <p className="mt-2 text-lg">
                  09:00 - selesai WIB
                </p>
              </div>
              
            </div>
            <div>
              <p className="text-lg mt-10" data-aos="fade-up-left" data-aos-duration="2000">
                Yang bertempat di: <br /> Waroeng Omah Sawah <br />
                Miri, Timbulharjo, Sewon, Bantul Regency, Special Region of Yogyakarta 55185
              </p>
              <p data-aos="fade-up-left" data-aos-duration="2000" className="mt-4">
                <a 
                  href="https://maps.app.goo.gl/Mjkj3YPizd3iNTF36"
                  target="_blank" 
                  className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-yellow-700 rounded-lg shadow-md hover:bg-orange-500 transition">
                  <MapPinIcon className="w-6 h-6" /> Klik Map
                </a>
              </p>
              
            </div>
          </div>
        </div>

        {/* Kartu Acara */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-3xl mx-auto">

        </div>
      </div>
    </section>
  );
};

export default TanggalSection;
