import React from 'react';
import Style from './aboutUs.module.css';
import bannerImage from '../../Assets/Img/AboutUsImgs/banneraboutus.jpg';
import historyIcon from '../../Assets/Img/AboutUsImgs/history1.png';
import teamIcon from '../../Assets/Img/AboutUsImgs/team1.png';
import partnerIcon from '../../Assets/Img/AboutUsImgs/partner1.png';
import futureIcon from '../../Assets/Img/AboutUsImgs/future.png';
import photoExample from '../../Assets/Img/AboutUsImgs/fotoejemplo.jpg';
import santisch from '../../Assets/Img/AboutUsImgs/santisch.png';


const AboutUsComponent = () => {
  const teamData = [
    { name: 'Alexander H.', photo: photoExample },
    { name: 'Julian S.', photo: photoExample },
    { name: 'Tomás I.', photo: photoExample },
    { name: 'Santiago R.', photo: photoExample },
    { name: 'Robert H.', photo: photoExample },
    { name: 'Valentin S.', photo: photoExample },
    { name: 'Santiago S.', photo: santisch },
    { name: 'Guillermo B.', photo: photoExample },
  ];

  return (
    <div className={Style.AboutUsWrapper}>
      <img src={bannerImage} alt="About Us Banner" className={Style.BannerImage} />
      <div className={Style.TextOverlay}>
        <h1 className={Style.AboutUsText}>About Us</h1>
      </div>

      {/* Contenedor de las secciones */}
      <div className={Style.SectionsContainer}>
        {/* Sección 1 */}
        <div className={Style.Section}>
          <img src={historyIcon} alt="History Icon" className={Style.SectionIcon} />
          <div className={Style.SectionContent}>
            <h2 className={Style.SectionTitle}>Nuestra Historia</h2>
            <p className={Style.text}>
              Somos un grupo de jóvenes apasionados por la programación y la tecnología. La combinación de ambas cosas
              nos llevó a lanzar nuestra primera página de componentes de computadora. ¡Que la disfrutes!
            </p>
          </div>
        </div>

        {/* Sección 2 */}
        <div className={Style.Section}>
          <img src={teamIcon} alt="Team Icon" className={Style.SectionIcon} />
          <div className={Style.SectionContent}>
            <h2 className={Style.SectionTitle}>Equipo</h2>
            <p className={Style.text}>
              Nuestro equipo está conformado por profesionales de diferentes áreas. Contamos con un equipo especializado
              para el desarrollo Back-End, otro equipo para Front-End, diseñadores Ux y mucho más.
            </p>
          </div>
        </div>
      </div>

      {/* Contenedor de las secciones 3 y 4 */}
      <div className={Style.SectionsContainer}>

        
        {/* Sección 3 */}
        <div className={Style.Section}>
          <img src={partnerIcon} alt="Partner Icon" className={Style.SectionIcon} />
          <div className={Style.SectionContent}>
            <h2 className={Style.SectionTitle}>Partnership</h2>
            <p className={Style.text}>
              Trabajamos con las mejores marcas del mercado de tecnología gamer para asegurarte que tu primer PC sea de la mejor calidad. ¿Qué esperas para ir y armar la tuya? Date prisa!
            </p>
          </div>
        </div>

        {/* Sección 4 */}
        <div className={Style.Section}>
          <img src={futureIcon} alt="Future Icon" className={Style.SectionIcon} />
          <div className={Style.SectionContent}>
            <h2 className={Style.SectionTitle}>Nuestro Futuro</h2>
            <p className={Style.text}>
              Trabajamos para desarrollar herramientas de Inteligencia Artificial que puedan mejorar aún más la experiencia de ustedes, nuestros clientes. ¡Cada vez será más fácil tener la PC de tus sueños!
            </p>
          </div>
        </div>
      </div>

      {/* Sección Nosotros */}
      <div className={Style.TeamSection}>
        <h2 className={Style.SectionTitle}>Nosotros</h2>
        <div className={Style.TeamMembers}>
          <div className={Style.TeamRow}>
            {teamData.slice(0, 4).map((member, index) => (
              <div key={index} className={Style.TeamMember}>
                <img src={member.photo} alt={`Team Member ${index + 1}`} className={Style.TeamMemberPhoto} />
                <h2 className={Style.TeamMemberName}>{member.name}</h2>
              </div>
            ))}
          </div>
          <div className={Style.TeamRow}>
            {teamData.slice(4).map((member, index) => (
              <div key={index} className={Style.TeamMember}>
                <img src={member.photo} alt={`Team Member ${index + 5}`} className={Style.TeamMemberPhoto} />
                <h2 className={Style.TeamMemberName}>{member.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;