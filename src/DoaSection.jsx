import { useState, useEffect } from "react";
import { db, auth } from "./firebaseConfig"; // Tambahkan auth
import { 
    collection, addDoc, serverTimestamp, query, orderBy, onSnapshot, where, deleteDoc, doc 
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const DoaSection = () => {
    const [nama, setNama] = useState("");
    const [doa, setDoa] = useState("");
    const [loading, setLoading] = useState(false);
    const [doaList, setDoaList] = useState([]);
    const [user, setUser] = useState(null);

    // Cek AuthState untuk mendapatkan UID pengguna anonim
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            }
        });
        return () => unsubscribe();
    }, []);

    // Ambil data doa dari Firestore (hanya yang type = "doa")
    useEffect(() => {
        const q = query(
            collection(db, "pesan-pesan"),
            where("type", "==", "doa"), // Hanya ambil data yang type = "doa"
            orderBy("waktu", "desc") // Urutkan dari terbaru
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setDoaList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        });

        return () => unsubscribe();
    }, []);

    // Fungsi menambah doa ke Firestore
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!nama.trim() || !doa.trim()) {
            alert("Nama dan doa tidak boleh kosong!");
            return;
        }

        setLoading(true);
        try {
            await addDoc(collection(db, "pesan-pesan"), {
                type: "doa",
                nama,
                doa,
                waktu: serverTimestamp(),
                uid: user?.uid || null, // Simpan UID pengguna anonim
            });
            setNama("");
            setDoa("");
        } catch (error) {
            console.error("Error menambahkan doa: ", error);
            alert("Gagal mengirim, coba lagi.");
        }
        setLoading(false);
    };

    // Fungsi untuk menghapus doa
    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "pesan-pesan", id));
        } catch (error) {
            console.error("Error menghapus doa: ", error);
            alert("Gagal menghapus, coba lagi.");
        }
    };

    // Fungsi untuk mengonversi timestamp menjadi format tanggal
    const formatTanggal = (timestamp) => {
        if (!timestamp) return "Tanggal tidak tersedia";
        const date = timestamp.toDate();
        return date.toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" });
    };


    return (
        <section className="py-20 px-8" id="chat">
            {/* Form input doa */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Tulis Doa & Harapan</h2>
                <input
                    type="text"
                    placeholder="Nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="border p-2 w-full rounded"
                />
                <textarea
                    placeholder="Tulis doa..."
                    value={doa}
                    onChange={(e) => setDoa(e.target.value)}
                    className="border p-2 w-full rounded mt-2"
                ></textarea>
                <button 
                    type="submit" 
                    disabled={loading} 
                    className="w-full p-2 bg-yellow-700 text-white rounded disabled:bg-gray-400"
                >
                    {loading ? "Mengirim..." : "Kirim"}
                </button>
            </form>
            <div className="mt-6 max-h-[50vh] overflow-y-scroll">
                {/* List doa yang sudah dikirim */}
                {doaList.map((item) => (
                    <div key={item.id} className="flex items-start gap-3 p-3 border-b">
                        {/* Kotak inisial nama */}
                        <div className="w-10 h-10 flex items-center justify-center bg-amber-500 text-yellow-100 font-bold rounded-md flex-shrink-0">
                            {item.nama.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1">
                            <p className="font-semibold">{item.nama}</p>
                            <p className="text-gray-700">{item.doa}</p>
                            <p className="text-sm text-gray-500">{formatTanggal(item.waktu)}</p>
                        </div>
                        {/* Tampilkan tombol hapus jika user yang menulis doa */}
                        {item.uid === user?.uid && (
                            <button 
                                onClick={() => handleDelete(item.id)} 
                                className="text-red-500 text-sm ml-auto"
                            >
                                Hapus
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DoaSection;
