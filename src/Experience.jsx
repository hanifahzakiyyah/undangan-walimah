import Hero from "./Hero";
import Home from "./Home";
import Mempelai from "./Mempelai";
import Navbar from "./Navbar";
import AOS from "aos";
import { useEffect, useRef, useState } from "react";
import TanggalSection from "./TanggalSection";
import AdabSection from "./AdabSection";
import DoaSection from "./DoaSection";
import Footer from "./Footer";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import Undangan from "./Undangan";

export default function Experience() {
    const [isScrollEnabled, setIsScrollEnabled] = useState(true); // langsung aktif
    const heroRef = useRef(null);
    const audioRef = useRef(new Audio("/o.mp3"));
    audioRef.current.crossOrigin = "anonymous";
    const [isPlaying, setIsPlaying] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    // Fungsi enable scroll (dipertahankan, tapi tanpa lock/unlock)
    // const enableScroll = () => {
        setIsScrollEnabled(true);

        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });

        const audio = audioRef.current;
        audio.loop = true;
        audio.play()
            .then(() => setIsPlaying(true))
            .catch(err => console.log("Autoplay gagal:", err));
    // };

    // Toggle play / pause audio
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

        const params = new URLSearchParams(window.location.search);
        const admin = params.get("admin");
        if (admin === "admin") {
            setIsAdmin(true);
        }

        return () => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        };
    }, []);

    return (
        <div className="relative font-delius max-w-[500px]">
            {isAdmin && <Undangan />}

            {!isAdmin && (
                <>
                    <div className="fixed inset-0 bg-[url('/bg.jpg')] bg-contain bg-center bg-repeat-y opacity-20 -z-10"></div>

                    <Hero enableScroll={enableScroll} heroRef={heroRef} />
                    <Navbar isScrollEnabled={isScrollEnabled} />
                    <Home />

                    <div className="relative w-full h-[10px] contain">
                        <img src="4.png" className="absolute -top-[100px]" data-aos="flip-up" />
                    </div>

                    <Mempelai />

                    <div className="relative w-full h-[10px] contain">
                        <img src="4.png" className="absolute -top-[150px]" data-aos="flip-down" />
                    </div>

                    <TanggalSection />
                    <AdabSection />
                    <DoaSection />
                    <Footer />

                    {/* Tombol Play / Pause */}
                    <button
                        onClick={toggleAudio}
                        className="fixed bottom-16 right-5 bg-amber-800 text-white p-5 rounded-full shadow-lg transition-all duration-300 active:scale-90"
                    >
                        <div className={isPlaying ? "animate-spin-slow" : ""}>
                            {isPlaying ? (
                                <PauseIcon className="w-6 h-6" />
                            ) : (
                                <PlayIcon className="w-6 h-6" />
                            )}
                        </div>
                    </button>
                </>
            )}
        </div>
    );
}
