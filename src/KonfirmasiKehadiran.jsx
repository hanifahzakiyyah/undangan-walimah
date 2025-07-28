import { useEffect, useState } from "react";
import { db } from "./firebaseConfig"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const KonfirmasiKehadiran = () => {
  const [nama, setNama] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [loading, setLoading] = useState(false);
  const [buka, setBuka] = useState(false)
  const [ada, setAda] = useState(false)

  useEffect(()=>{
    // Ambil nama dari URL
    const params = new URLSearchParams(window.location.search);
    const r = params.get("r");
    if (r && r == "y") {
      setAda(true) 
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "pesan-pesan"), {
        type: "kehadiran",
        nama,
        status,
        jumlah: parseInt(jumlah),
        waktu: serverTimestamp(),
      });
      alert("Terima kasih! Konfirmasi kehadiran berhasil dikirim.");
      setNama("");
      setStatus("Hadir");
      setJumlah(1);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Gagal mengirim, coba lagi.");
    }
    setLoading(false);
  };

  return (
    <section className="py-20 px-8">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Konfirmasi Kehadiran</h2>
            <input
                type="text"
                placeholder="Nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
                className="w-full p-2 border rounded mb-3"
            />
            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full p-2 border rounded mb-3"
            >
                <option value="" disabled>Pilih Kehadiran</option>
                <option value="Hadir">Hadir</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
            </select>

            <input
                type="number"
                placeholder="Jumlah orang"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
                min="1"
                required
                className="w-full p-2 border rounded mb-3"
            />
            <button
                type="submit"
                disabled={loading}
                className="w-full p-2 bg-yellow-700 text-white rounded disabled:bg-gray-400"
            >
                {loading ? "Mengirim..." : "Kirim"}
            </button>
        </form>

        {ada && <div className="max-w-md m-auto p-4">
          <div onClick={()=>setBuka(!buka)} className="p-5 cursor-pointer text-slate-800 text-center hover:text-slate-600 hover:border rounded-full hover:shadow-xl ">{ !buka ? "klik disini untuk melempar hadiah 😋" : "tutup ah malu 😂"}</div>
          {buka && <div className="text-center border rounded-3xl px-10 flex flex-col lg:flex-row justify-center items-center shadow-xl">
            <div className="p-5">
              <p>BSI</p>
              <p>1370016697977</p>
            </div>
            <div className="p-5">
              <p>QRis</p>
              <p><img src="qr.png" alt=""/></p>
            </div>
          </div>}
        </div>}
    </section>
  );
};

export default KonfirmasiKehadiran;