import React, { useState, useEffect } from "react";
import axios from "axios";
import Filters from "./Filters";

export default function CharacterTable() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [error, setError] = useState(""); 
  const [filters, setFilters] = useState({
    name: "",
    status: "",
    gender: "",
  });
  const [rowsPerPage, setRowsPerPage] = useState(250); // Varsayılan 250 satır olarak ayarladım.

  useEffect(() => {
    fetchCharacters();
  }, [filters, page, rowsPerPage]);

  const fetchCharacters = async () => {
    try {
      setError(""); 

      const res = await axios.get("https://rickandmortyapi.com/api/character/", {
        params: {
          page: 1, // İlk sayfadan başlayarak
          name: filters.name,
          status: filters.status,
          gender: filters.gender,
        },
      });

      const totalResults = res.data.info.count; 
      setTotalPages(Math.ceil(totalResults / rowsPerPage)); // Sayfa sayısını hesapladım.

      // Tüm sonuçları toplamak için API çağrıları yapılacak.
      const allResults = [];
      for (let i = 1; i <= Math.ceil(totalResults / 20); i++) {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character/",
          {
            params: {
              page: i,
              name: filters.name,
              status: filters.status,
              gender: filters.gender,
            },
          }
        );
        allResults.push(...response.data.results);
      }

      // Sayfa boyutuna göre sonuçları ayıklayacağız.
      const paginatedResults = allResults.slice(
        (page - 1) * rowsPerPage,
        page * rowsPerPage
      );

      setCharacters(paginatedResults);
    } catch (error) {
      console.error(error);
      setCharacters([]);
      setError("Karakterler yüklenirken bir hata oluştu. :(");
    }
  };

  return (
    <div>
      <h1 className="title">Rick and Morty Karakterleri</h1>

     {/* Satır Sayısı Seçimi */}
      <div className="page-size-container">
        <label htmlFor="rowsPerPage">Sayfa Boyutu:</label>
        <select
          id="rowsPerPage"
          value={rowsPerPage}
          onChange={(e) => {
            setRowsPerPage(Number(e.target.value));
            setPage(1); // Sayfa sıfırlama işlemi
          }}
        >
          <option value={250}>250 (Varsayılan)</option>
          <option value={300}>300</option>
          <option value={350}>350</option>
          <option value={400}>400</option>
          <option value={450}>450</option>
          <option value={500}>500</option>
        </select>
      </div>

      {/* Filtreleme Bölümü */}
      <Filters filters={filters} setFilters={setFilters} />
      <h2 className="characters-title">Karakterler</h2>

      {/* Hata Mesajı veya Boş Sonuç Mesajı */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!error && characters.length === 0 && (
        <p>Aramanızla eşleşen karakter bulunamadı.</p>
      )}

      {/* Tablo */}
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>İsim</th>
            <th>Durum</th>
            <th>Tür</th>
            <th>Cinsiyet</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((char, index) => (
            <tr
              key={`${char.id}-${index}`}
              onClick={() => setSelectedCharacter(char)}
              style={{ cursor: "pointer" }}
            >
              <td>{char.name}</td>
              <td>{char.status}</td>
              <td>{char.species}</td>
              <td>{char.gender}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" style={{ textAlign: "center", padding: "10px" }}>
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                style={{ marginRight: "10px" }}
              >
                Önceki
              </button>
              <span>
                Sayfa {page} / {totalPages}
              </span>
              <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
                style={{ marginLeft: "10px" }}
              >
                Sonraki
              </button>
            </td>
          </tr>
        </tfoot>
      </table>

      {selectedCharacter && (
        <div className="character-details">
          <h3>{selectedCharacter.name}</h3>
          <img src={selectedCharacter.image} alt={selectedCharacter.name} />
          <table>
            <tbody>
              <tr>
                <th>Durum:</th>
                <td>{selectedCharacter.status}</td>
              </tr>
              <tr>
                <th>Tür:</th>
                <td>{selectedCharacter.species}</td>
              </tr>
              <tr>
                <th>Cinsiyet:</th>
                <td>{selectedCharacter.gender}</td>
              </tr>
              <tr>
                <th>Orijin:</th>
                <td>{selectedCharacter.origin.name}</td>
              </tr>
              <tr>
                <th>Lokasyon:</th>
                <td>{selectedCharacter.location.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

