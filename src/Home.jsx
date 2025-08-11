import Countdown from "react-countdown";

const Home = () => {
  const weddingDate = new Date("2025-08-24T08:00:00").getTime();

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
    <section id="home" className="home pt-32 text-center pb-32 px-5">
      <div className="container mx-auto">
        <h2
          data-aos="flip-right"
          data-aos-duration="2000"
          className="font-semibold text-4xl text-shadow"
        >
          Walimatul 'Urs
        </h2>

        <img
          src="pngwing.com.png"
          alt=""
          data-aos="flip-left"
          data-aos-duration="2000"
          className="w-64 mx-auto mt-16"
        />

        <h3 data-aos="fade-up" data-aos-duration="2000" className="text-2xl mt-4">
          Sugiyono Abu Ramadhan <br />
          & <br />
          Chasana Kunarti Ummu Hanifah
        </h3>
        <h4 data-aos="fade-up" data-aos-duration="2000" className="text-xl mt-10">
          Ahad, 24 Agustus 2025
        </h4>

        {/* Countdown Timer */}
        <div data-aos="fade-down" data-aos-duration="2000">
          <Countdown date={weddingDate} renderer={renderer} />
        </div>
      </div>

      
    </section>
  );
};

export default Home;
