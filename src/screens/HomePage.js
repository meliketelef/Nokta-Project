import React from "react";

const HomePage = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Nokta</div>
        <ul className="nav-links">
          <li>
            <a href="/" className="active">
              Ana Sayfa
            </a>
          </li>
          <li>
            <a href="/appointments">Randevularım</a>
          </li>
          <li>
            <a href="/profile">Profil</a>
          </li>
        </ul>
        <button className="menu-toggle" onClick={() => alert("Menu Toggled!")}>
          ☰
        </button>
      </nav>

      <div className="boxes-section">
        <div className="box">
          <h2>Box 1</h2>
          <p>Content for box 1.</p>
        </div>
        <div className="box">
          <h2>Box 2</h2>
          <p>Content for box 2.</p>
        </div>
        <div className="box">
          <h2>Box 3</h2>
          <p>Content for box 3.</p>
        </div>
      </div>

      <div className="hero">
        <div className="hero-content">
          <h1>Randevu Sistemi ile Tüm İhtiyaçlarınız Elinizin Altında!</h1>
          <p>
            Hayatınızın parçası olan tüm gereksinim ve ihtiyaçlarınıza
            ulaşabileceğiniz tek bir noktada buluşun. Bu randevu sistemi,
            sağlık, eğitim, güzellik, bakım ve daha birçok alanda size en uygun
            hizmetleri kolayca bulmanızı sağlar. Zamanınızı verimli kullanarak,
            hayatınızı kolaylaştıracak tüm hizmetlere tek bir adımda
            erişebilirsiniz. Hem hızlı hem güvenilir randevu çözümleri ile
            hayatınızı düzenleyin, her şey sizin için tek bir noktada!
          </p>
          <img
            src="/assets/calenderimg.jpg"
            alt="Takvim Görseli"
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
