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
      .split(" ")
      .map(word => exceptions.includes(word.toUpperCase()) ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
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
  
  
  
  

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative w-full h-screen mx-auto text-center flex justify-center items-center"
    >
      {/* Background Blur */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center filter blur-md overflow-hidden z-[-1]"
        style={{ backgroundImage: "url('/tangan.jpg')" }}
        data-aos="fade-in"
      ></div>

      <main>
        <div className="flex justify-center">
          <img src="/pngwing.com.png" alt="" className="w-80 mx-auto" data-aos="zoom-in" />
        </div>
        <h4 className="text-md text-orange-700 capitalize" data-aos="fade-up">
          Kepada Yth {panggilan ? toTitleCase(panggilan) : "Bapak/Ibu/Saudara/i"} 
        </h4>
        
        {/* Nama tamu dari URL */}
        <h4 className="text-2xl diundang capitalize" data-aos="fade-up">
          {namaTamu ? toTitleCase(namaTamu) : "Tamu Undangan"}
        </h4>

        <h4 className="text-xl" data-aos="fade-up">
          Di Tempat
        </h4>

        <button
          onClick={enableScroll}
          className="mt-4 px-6 py-3 bg-yellow-700 text-white rounded-lg"
          data-aos="flip-up"
        >
          Lihat Undangan
        </button>
      </main>
    </section>
  );
};

export default Hero;
