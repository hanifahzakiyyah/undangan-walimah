import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = ({ enableScroll, heroRef }) => {
  const [namaTamu, setNamaTamu] = useState(""); // Simpan nama tamu dari URL
  const [panggilan, setPanggilan] = useState("")

  const toTitleCase = (str) => {
      if (!str) return "";

      const exceptions = ["TPQ", "SMA", "SMP", "SD", "MI", "MTS", "MA", "PAUD", "TK"];
      return str
          .trim()
          .split(/\s+/) // pecah berdasarkan 1+ spasi, aman untuk spasi ganda
          .map(word => {
              const lower = word.toLowerCase();

              if (lower === "dan") return lower;

              return exceptions.includes(word.toUpperCase()) 
                  ? word.toUpperCase() 
                  : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          })
          .join(" ");
  };



  

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  
    const params = new URLSearchParams(window.location.search);
  
    let nama = params.get("kpd");
    if (nama) {
      nama = decodeURIComponent(nama)
      
      setNamaTamu(nama);
    }
  
    let p = params.get("p");
    if (p) {
      p = decodeURIComponent(p)
  
      setPanggilan(p);
    }
  }, []);
  
  const handleTap = () => {
    enableScroll();
  };

  
  

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full h-screen mx-auto text-center flex justify-center items-center"
    >
      {/* Background Blur */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center filter blur-sm overflow-hidden z-[-1]"
        style={{ backgroundImage: "url('/tangan.jpg')" }}
        data-aos="fade-in"
      ></div>

      <main>
        <div className="flex justify-center">
          <img src="/pngwing.com.webp" alt="" className="w-10 mx-auto h-10 object-cover" data-aos="zoom-in" />
        </div>
        <div className="bg-orange-100/50 rounded-3xl py-5 backdrop-blur-[2px] border border-orange-800" data-aos="fade-down">
          <h4 className="text-md text-orange-900 " data-aos="fade-down">
            Kepada Yth {panggilan ? toTitleCase(panggilan) : ""} 
          </h4>
          
          {/* Nama tamu dari URL */}
          <h4 className="text-2xl diundang" data-aos="fade-down">
            {namaTamu ? toTitleCase(namaTamu) : "Tamu Undangan"}
          </h4>

          <h4 className="text-xl" data-aos="fade-down">
            Di Tempat
          </h4>
        </div>

        <div
          className="mt-6 flex flex-col items-center text-orange-900 opacity-80"
          data-aos="flip-up" onClick={handleTap} onTouchStart={handleTap}
        >
          <p className="text-sm tracking-wide">
            tap disini untuk membuka undangan
          </p>

          <div className="mt-2 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

      </main>
    </section>
  );
};

export default Hero;
