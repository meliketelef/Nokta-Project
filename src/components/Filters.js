import React from 'react';

export default function Filters({ filters, setFilters }) {
  return (
    <div className="filters-container">
      <input
        type="text"
        name="name" 
        placeholder="İsme göre filtrele"
        value={filters.name}
        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
      />
      <select
        name="status" 
        value={filters.status}
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
      >
        <option value="">Durum</option>
        <option value="alive">Yaşıyor</option>
        <option value="dead">Ölü</option>
        <option value="unknown">Bilinmiyor</option>
      </select>
      <select
        name="gender" 
        value={filters.gender}
        onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
      >
        <option value="">Cinsiyet</option>
        <option value="male">Erkek</option>
        <option value="female">Kadın</option>
        <option value="genderless">Cinsiyetsiz</option>
        <option value="unknown">Bilinmiyor</option>
      </select>
    </div>
  );
}


