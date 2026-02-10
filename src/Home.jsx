import Countdown from "react-countdown";

const Home = () => {
  const weddingDate = new Date("2026-02-16T08:30:00").getTime();

  // Custom Renderer untuk Countdown
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex justify-center gap-4 mt-8">
        <div className="w-24 h-24 flex flex-col items-center justify-center bg-yellow-100 shadow-inner rounded-full">
          <span className="text-2xl font-bold">{days}</span>
          <span className="text-sm">Hari</span>
        </div>
        <div className="w-24 h-24 flex flex-col items-center justify-center bg-yellow-100 shadow-inner rounded-full">
          <span className="text-2xl font-bold">{hours}</span>
          <span className="text-sm">Jam</span>
        </div>
        <div className="w-24 h-24 flex flex-col items-center justify-center bg-yellow-100 shadow-inner rounded-full">
          <span className="text-2xl font-bold">{minutes}</span>
          <span className="text-sm">Menit</span>
        </div>
        <div className="w-24 h-24 flex flex-col items-center justify-center bg-yellow-100 shadow-inner rounded-full">
          <span className="text-2xl font-bold">{seconds}</span>
          <span className="text-sm">Detik</span>
        </div>
      </div>
    );
  };

  return (
    <section id="home" className="home pt-4 text-center pb-4 px-5">
      <div className="container mx-auto">
        <h2
          data-aos="flip-right"
          data-aos-duration="2000"
          className="font-semibold text-4xl text-shadow"
        >
          Walimatul 'Urs
        </h2>

        <img
          src="pngwing.com.webp"
          alt=""
          data-aos="flip-left"
          data-aos-duration="2000"
          className="w-64 mx-auto mt-16 h-64 object-cover"
        />

        <h3 data-aos="fade-up" data-aos-duration="2000" className="text-2xl mt-4">
          Hasanuddin & Purwi Riswanti <br />
          <p className="text-xl">Senin, 16 Februari 2026 </p> 
        </h3>
        

        {/* Countdown Timer */}
        <div data-aos="fade-down" data-aos-duration="2000">
          <Countdown date={weddingDate} renderer={renderer} />
        </div>
      </div>

      
    </section>
  );
};

export default Home;
