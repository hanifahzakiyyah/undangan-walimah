import "aos/dist/aos.css";
import { MapPinIcon, ClockIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";


const Mempelai = () => {
  return (
    <section id="mempelai" className="pt-[8rem] pb-[8rem] px-5 bg-yellow-100/50 text-orange-900">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 data-aos="fade-down" data-aos-duration="2000" className="font-zain">بسم الله الرحمن الرحيم</h2>

          <div className="mt-5 mb-5 text-center max-w-2xl mx-auto">
            <p data-aos="zoom-in-up" data-aos-duration="2000" className="leading-relaxed">
              Dan di antara tanda-tanda (Kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
              agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. <br />
              Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda Kebesaran Allah bagi kaum yang berpikir.
              <br />(Q.S Ar-Rum : 21)
            </p>
          </div>
          <h3 data-aos="fade-up" data-aos-duration="2000" className="leading-relaxed">
            Maha Suci Allah yang telah menciptakan makhluk-Nya
            berpasang-pasangan. <br /> Ya Allah, perkenankanlah kami menikahkan putra putri kami:
          </h3>
        </div>

        <div className="flex flex-col items-center mt-10">

          <div className="flex flex-row items-center md:justify-center w-full max-w-3xl ">
            <div className="md:w-1/3 flex justify-center">
                <div className=" text-right" data-aos="flip-up" data-aos-duration="2000">
                    <h3 className="text-2xl font-sacramento text-orange-800">Chasana Kunarti Ummu Hanifah</h3>
                </div>
            </div>
            <img
                src="6.png"
                alt="aisyah"
                className="w-48 h-48 rounded-full object-cover"
                data-aos="flip-left"
                data-aos-duration="2000"
            />
          </div>

          <div className="flex flex-row items-center md:justify-center w-full max-w-3xl">
            <img
                src="5.png"
                alt="anang"
                className="w-48 h-48 rounded-full object-cover"
                data-aos="flip-down"
                data-aos-duration="2000"
            />
            <div className="md:w-1/3 flex justify-center">
                <div className="text-left" data-aos="flip-right" data-aos-duration="2000">
                    <h3 className="text-2xl font-sacramento text-orange-800">Sugiyono Abu Ramadhan</h3>
                </div>
            </div>
          </div>
            
        </div>

        <div 
            className=" shadow-lg rounded-lg p-6 text-orange-800" 
            data-aos="fade-up-right" data-aos-duration="2000">
            <div className="text-xl font-semibold border-b pb-2 mb-4 text-center">Akad Nikah</div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <CalendarDaysIcon className="w-8 h-8 text-orange-800 mx-auto" />
                <p className="mt-2 text-lg">--, -- Agustus 2025</p>
              </div>
              <div>
                <ClockIcon className="w-8 h-8 text-orange-800 mx-auto" />
                <p className="mt-2 text-lg">08:00 - 09:00 WIB</p>
              </div>
              
            </div>
          </div>

          


        
      </div>
    </section>
  );
};

export default Mempelai;
