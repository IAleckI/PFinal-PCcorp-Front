import React from 'react';
import Style from './aboutUs.module.css'
import { NavBar, Footer } from "../../components/Index";

const AboutUs = () => {
  // Datos para las filas
  const data = [
    { nombre: 'Heiler Alexander Salguero Vargas', linkedin: 'Enlace 1' },
    { nombre: 'Julian Sotelo', linkedin: 'Enlace 2' },
    { nombre: 'Carlos Santiago Ruggeri', linkedin: 'Enlace 3' },
    { nombre: 'Tomas Santiago Idalgo', linkedin: 'Enlace 4' },
    { nombre: 'Santiago Sheuermann', linkedin: 'Enlace 5' },
    { nombre: 'Guillermo Bayona Querevalu', linkedin: 'https://www.arimetrics.com/blog' },
    { nombre: 'Valentín Sheuermann', linkedin: 'Enlace 7' },
    { nombre: 'Robert Andres Holguin Caruso', linkedin: 'Enlace 8' },
  ];

  return (
    
    <div>
      <NavBar />
     
      <article className={Style.AboutUs}>
      {/* ---------------- aqui debe ir la renderizacion del aboutus --------------- */}
      <h1>Quiénes somos</h1>
      <p>
        Bienvenido a nuestra aplicación. Somos un equipo apasionado comprometido
        a proporcionar soluciones increíbles a nuestros usuarios.
      </p>
      <p>
        En nuestra misión de excelencia, nos esforzamos por ofrecer productos y
        servicios de alta calidad que satisfagan las necesidades de nuestros clientes.
      </p>
      <h1>Grupo de Trabajo</h1>
        {/* <p>
        healsava12@gmail.com
        juliansotelo02@gmail.com
        santiruu@gmail.com
        tomasidalgo51@gmail.com
        santisch1997@gmail.com
        guillermo-bayona@hotmail.com
        valen.scheuermann@hotmail.com
        robert23.holguin06@gmail.com
        </p> */}
        <div>
        <table>
            <thead>
            <tr>
                <th>NOMBRE</th>
                <th>LINKEDIN</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                <td>{item.nombre}</td>
                <td>
                    <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                    {item.linkedin}
                    </a>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
      </article>
      
      <Footer />
      
    </div>
    
  );
};

export default AboutUs;