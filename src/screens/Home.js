import React from "react";
import image from '../assets/takvim.jpg'; 

const Home = () => {
  return (
    <div>
      <h2 style={{
        fontSize: '3rem',  
        textAlign: 'center',
        marginTop: '-40px',   
        fontWeight: 'bold',
        color: '#FFD700',
      }}>
        WELCOME
      </h2>
      <h1 style={{
        textAlign: 'center', 
        marginTop: '-20px',
        color: '#FFD700',
      }}>
        Randevu Sistemi ile Tüm İhtiyaçlarınız Elinizin Altında!
      </h1>

      <p style={{
        fontSize: '1.5rem',
        textAlign: 'justify', // Yazıyı her iki kenara hizalı yapıyoruz
        fontStyle: 'italic',
        lineHeight: '1.8',
        marginTop: '-20px',
        width: '80%',         // Yazının genişliğini artırıyoruz
        margin: '0 auto',     // Yazıyı yatayda ortalıyoruz
        textOverflow: 'ellipsis', // Taşan yazıyı "..." ile gösterir
      }}>
        Hayatınızın parçası olan tüm gereksinim ve ihtiyaçlarınıza ulaşabileceğiniz
        tek bir noktada buluşun. Bu randevu sistemi, sağlık, eğitim, güzellik, bakım
        ve daha birçok alanda size en uygun hizmetleri kolayca bulmanızı sağlar. Zamanınızı
        verimli kullanarak, hayatınızı kolaylaştıracak tüm hizmetlere tek bir adımda
        erişebilirsiniz. Hem hızlı hem güvenilir randevu çözümleri ile hayatınızı düzenleyin,
        her şey sizin için tek bir noktada!
      </p>

      <img src={image} alt="Randevu Sistemi" style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />
    </div>
  );
};

export default Home;
