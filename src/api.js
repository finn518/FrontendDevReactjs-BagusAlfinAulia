import axios from "axios";

const BASE_URL =
	"https://678f359e49875e5a1a90e889.mockapi.io/restaurant/restaurant";

// Fungsi untuk mendapatkan semua data
const FetchData = async () => {
	try {
		const response = await axios.get(BASE_URL);
		return response.data;
	} catch (err) {
		console.error("Error fetching data:", err);
		return [];
	}
};

// Fungsi untuk mendapatkan data detail berdasarkan id
const FetchDataById = async (id) => {
	try {
		const response = await axios.get(`${BASE_URL}/${id}`);
		return response.data;
	} catch (err) {
		console.error(`Error fetching data for ID ${id}:`, err);
		return null; // Kembalikan null jika ada kesalahan
	}
};

export { FetchData, FetchDataById };
