import Hero from "./Hero";
import Home from "./Home";
import Mempelai from "./Mempelai";
import Navbar from "./Navbar";
import AOS from "aos";
import { useEffect, useRef, useState } from "react";
import TanggalSection from "./TanggalSection";
import AdabSection from "./AdabSection";
import KonfirmasiKehadiran from "./KonfirmasiKehadiran";
import DoaSection from "./DoaSection";
import Footer from "./Footer";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import Undangan from "./Undangan";

export default function Experience() {
    const [isScrollEnabled, setIsScrollEnabled] = useState(false);
    const heroRef = useRef(null);
    const audioRef = useRef(new Audio("/o.m4a"));
    audioRef.current.crossOrigin = "anonymous";
    const [isPlaying, setIsPlaying] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false)

    // Fungsi untuk menonaktifkan scroll di awal
    const disableScroll = () => {
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
        window.scrollTo(0, 0);
        window.onscroll = () => {
            window.scrollTo(0, 0);
        };
    };

    // Fungsi untuk mengaktifkan scroll setelah tombol ditekan
    const enableScroll = () => {
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
        window.onscroll = null;
        setIsScrollEnabled(true);

        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });

        // Mulai audio
        const audio = audioRef.current;
        audio.play().then(() => setIsPlaying(true)).catch(err => console.log("Autoplay gagal:", err));
    };

    // Fungsi toggle play/pause audio
    const toggleAudio = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
        disableScroll(); // Kunci scroll saat halaman dimuat

        const params = new URLSearchParams(window.location.search);
        let admin = params.get("admin");
        if (admin==="admin"){
            setIsAdmin(true)
        }


        return () => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        };
        
    }, []);

    return (
        <div className="relative font-delius max-w-[500px]">
            {isAdmin && <Undangan/>}
            
            
            {!isAdmin && <><div className="fixed inset-0 bg-[url('/bg.jpg')] bg-contain bg-center bg-repeat-y opacity-20 -z-10"></div>
            
            <Hero enableScroll={enableScroll} heroRef={heroRef} />
            <Navbar isScrollEnabled={isScrollEnabled} />
            <Home />
            <div className="relative w-full h-[10px] contain">
                <img src="4.png" className="absolute -top-[100px]" data-aos="flip-up"/>
            </div>

            <Mempelai />
            <div className="relative w-full h-[10px] contain">
                <img src="4.png" className="absolute -top-[80px]" data-aos="flip-down"/>
            </div>
            <TanggalSection />
            <AdabSection />
            <KonfirmasiKehadiran />
            <DoaSection />
            <Footer />

            {/* Tombol Play/Pause */}
            <button 
                onClick={toggleAudio} 
                className={`${isScrollEnabled ? "opacity-1" : "opacity-0"} fixed bottom-16 right-5 bg-amber-800 text-white p-5 rounded-full shadow-lg transition-all duration-300 active:scale-90`}
            >
                <div className={isPlaying ? "animate-spin-slow" : ""}>
                    {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
                </div>
            </button></>}
        </div>
    );
}