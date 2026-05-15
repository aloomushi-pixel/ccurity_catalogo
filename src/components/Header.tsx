
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Ccurity",
        "url": "https://ccurity.com.mx/",
        "description": "Distribución e integración de soluciones de seguridad, automatización e infraestructura crítica.",
        "sameAs": [
          "https://wa.me/message/EFFSNE2UP3T7N1"
        ],
        "hasPart": [
          {
            "@type": "SiteNavigationElement",
            "name": "Menú Principal",
            "url": "https://ccurity.com.mx/"
          }
        ]
      }
      ` }} />

<header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
  <div className="mx-auto flex h-20 max-w-[1440px] items-center gap-6 px-6">
    
    {/* Menu Button */}
    <button 
      id="menu-button" 
      type="button" 
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-slate-300 text-slate-600 transition-colors hover:bg-slate-50 ${isOpen ? 'bg-slate-100' : 'bg-white'}`} 
      onClick={toggleMenu} 
      aria-expanded={isOpen ? "true" : "false"} 
      aria-controls="menu" 
      aria-label="Abrir menú de navegación"
    >
      {isOpen ? (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )}
    </button>

    {/* Logo Link back to Main Site */}
    <Link href="https://ccurity.com.mx/" className="flex shrink-0 items-center transition-opacity hover:opacity-80">
      <span className="text-3xl font-black tracking-tighter text-[#004A7F]">
        C<span className="text-[#4D4D4D]">·</span>CURITY
      </span>
    </Link>

    {/* Search Bar */}
    <div className="flex flex-1 items-center justify-start pl-4 md:pl-8">
      <div className="relative w-full max-w-[600px]">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input 
          type="text" 
          placeholder="Buscar productos, servicios..." 
          className="h-11 w-full rounded-full border border-slate-300 bg-white pl-11 pr-4 text-sm text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
    </div>

  </div>
</header>

{/* Mega Menu Wrapper */}
<nav className="cc-menu-wrapper" aria-label="Menú principal">
  <div id="menu" className={`cc-menu-panel ${isOpen ? 'menu-open' : ''}`} style={{ overflowY: 'auto' }} aria-hidden={isOpen ? "false" : "true"}>
    <div className="cc-menu-outer">
      <div className="cc-menu-layout">
        
        <div className="cc-menu-left">
          <div className="cc-menu-left-inner">
            
            <div className="cc-menu-top-grid">
              
              <div className="cc-menu-card">
                <div className="cc-menu-card-inner">
                  <h4 className="cc-menu-title">S E G U R I D A D</h4>
                  <ul className="cc-menu-list">
                    <li className="cc-menu-item-heading">
                      <svg className="cc-menu-item-heading-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span>Protección perimetral</span>
                    </li>
                    <li className="cc-menu-subitem">
                      <a href="https://ccurity.com.mx/seguridad-y-monitoreo/proteccion-perimetral/cerca-electrica/" title="Implementacion de cerca perimetral de alto voltaje" className="cc-menu-link">Cerca electrificada</a>
                    </li>
                    <li className="cc-menu-subitem">
                      <a href="https://ccurity.com.mx/alarma-de-seguridad/" title="Implementacion de sistemas de alarma perimetral y de acceso controlado" className="cc-menu-link">Sistema de alarma</a>
                    </li>
                    <li className="cc-menu-subitem">
                      <a href="https://ccurity.com.mx/sistemas-de-audio-y-megafonia/" title="Sistemas de perifoneo y audio ambiental IP" className="cc-menu-link">Audio y megafonía</a>
                    </li>
                    <li className="cc-menu-item-heading cc-menu-section-spacer">
                      <svg className="cc-menu-item-heading-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Videovigilancia</span>
                    </li>
                    <li className="cc-menu-subitem">
                      <a href="https://ccurity.com.mx/analiticos-por-ia/" title="Administración de datos analíticos obtenidos a través de video" className="cc-menu-link">Analíticos por IA</a>
                    </li>
                    <li className="cc-menu-subitem">
                      <a href="https://ccurity.com.mx/seguridad-y-monitoreo/camaras/instalacion/" title="Implementacion de sistemas de videovigilancia" className="cc-menu-link">Instalación de sistemas de CCTV</a>
                    </li>
                    <li className="cc-menu-subitem">
                      <a href="https://ccurity.com.mx/automatizacion/videoportero/" title="Solucion de videoportero multiapartamento" className="cc-menu-link">Videoportero</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="cc-menu-card">
                <div className="cc-menu-card-inner">
                  <h4 className="cc-menu-title">A U T O M A T I Z A C I O N</h4>
                  <ul className="cc-menu-list">
                    <li className="cc-menu-item-heading">
                      <svg className="cc-menu-item-heading-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      <span>Control de acceso y asistencia</span>
                    </li>
                    <li className="cc-menu-subitem">
                      <a href="https://ccurity.com.mx/instalacion-de-control-de-acceso/" title="sistemas de control de acceso para puertas en general" className="cc-menu-link">Control de acceso general</a>
                    </li>
                    <li className="cc-menu-subitem">
                      <a href="https://ccurity.com.mx/control-de-acceso-para-elevadores/" title="Servicio especializado para ascensores de pasajeros" className="cc-menu-link">Control para elevadores</a>
                    </li>

                    <li className="cc-menu-item-heading cc-menu-section-spacer">
                      <svg className="cc-menu-item-heading-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Automatizacion Física</span>
                    </li>
                    <li className="cc-menu-subitem">
                      <a href="https://ccurity.com.mx/automatizacion/portones-electricos/motores/" title="Implementacion de motores para apertura de portones" className="cc-menu-link">Apertura de portones</a>
                    </li>
                    <li className="cc-menu-subitem">
                      <a href="https://ccurity.com.mx/automatizacion/control-de-acceso/barrera-vehicular/" title="Instalacion especializada de barrera vehicular" className="cc-menu-link">Barrera vehicular</a>
                    </li>
                    <li className="cc-menu-subitem">
                      <a href="https://ccurity.com.mx/automatizacion/portones-electricos/americano/" title="Instalacion de portones ascendentes automatizados" className="cc-menu-link">Portón tipo americano</a>
                    </li>
                    <li className="cc-menu-subitem">
                      <a href="https://ccurity.com.mx/automatizacion/control-de-acceso/torniquetes/" title="Implementacion de torniquetes para control de flujo peatonal" className="cc-menu-link">Torniquetes de acceso</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="cc-menu-card">
                <div className="cc-menu-card-inner">
                  <h4 className="cc-menu-title">I N F R A E S T R U C T U R A</h4>
                  <ul className="cc-menu-list">
                    <li className="cc-menu-item-heading">
                      <svg className="cc-menu-item-heading-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                      <span>Infraestructura crítica</span>
                    </li>
                    
                    <li className="cc-menu-subitem">
                      <a href="https://ccurity.com.mx/cerca-electrificada/" title="cercas electrificadas de alto voltaje" className="cc-menu-link">Cerca electrificada</a>
                    </li>
                    <li className="cc-menu-subitem">
                      <a href="https://ccurity.com.mx/alarma-de-seguridad/" title="sistemas de alarma contra intrusión" className="cc-menu-link">Alarmas de intrusión</a>
                    </li>
                    <li className="cc-menu-subitem">
                      <a href="https://ccurity.com.mx/sistemas-de-energia-solar-industrial-y-respaldo-ups/" title="Implementación de paneles solares para abastecimiento eléctrico residencial" className="cc-menu-link">Energía solar</a>
                    </li>
                    <li className="cc-menu-subitem">
                      <a href="https://ccurity.com.mx/conectividad-inalambrica/" title="Soluciones de conectividad inalámbrica y mesh" className="cc-menu-link">Conectividad inalámbrica</a>
                    </li>
                    <li className="cc-menu-subitem">
                      <a href="https://ccurity.com.mx/instalacion-de-cableado-estructurado/" title="Servicios de ingeniería e instalación de cableado estructurado UTP/Fibra" className="cc-menu-link">Cableado estructurado</a>
                    </li>

                    <li className="cc-menu-item-heading cc-menu-section-spacer">
                      <svg className="cc-menu-item-heading-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Mantenimiento</span>
                    </li>
                    <li className="cc-menu-subitem">
                      <a href="https://ccurity.com.mx/poliza-de-cctv/" title="Pólizas de mantenimiento a medida" className="cc-menu-link">Circuito Cerrado (CCTV)</a>
                    </li>
                    <li className="cc-menu-subitem">
                      <a href="https://ccurity.com.mx/mantenimiento-preventivo-de-control-de-acceso/" title="Mantenimiento preventivo y correctivo de accesos" className="cc-menu-link">Control de Acceso (Tornos y Barreras)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="cc-solutions-card">
              <div className="cc-solutions-card-inner">
                <h4 className="cc-menu-title">S O L U C I O N E S</h4>
                <ul className="cc-solutions-list">
                  <li>
                    <a href="https://ccurity.com.mx/bodegas/" className="cc-solutions-link">
                      <svg className="cc-solutions-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span>Bodegas</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://ccurity.com.mx/campo-de-golf/" className="cc-solutions-link">
                      <svg className="cc-solutions-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v18m0-12l9-4-9-4-9 4 9 4z" />
                      </svg>
                      <span>Campo de golf</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://ccurity.com.mx/comercios/" className="cc-solutions-link">
                      <svg className="cc-solutions-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      <span>Comercios</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://ccurity.com.mx/condominios/" className="cc-solutions-link">
                      <svg className="cc-solutions-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span>Condominios</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://ccurity.com.mx/colegios/" className="cc-solutions-link">
                      <svg className="cc-solutions-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                      <span>Colegios</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://ccurity.com.mx/hospitales/" className="cc-solutions-link">
                      <svg className="cc-solutions-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      <span>Hospitales</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://ccurity.com.mx/hoteles/" className="cc-solutions-link">
                      <svg className="cc-solutions-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>Hoteles</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://ccurity.com.mx/oficinas/" className="cc-solutions-link">
                      <svg className="cc-solutions-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span>Oficinas</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://ccurity.com.mx/plantas/" className="cc-solutions-link">
                      <svg className="cc-solutions-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Plantas de producción</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://ccurity.com.mx/residencial/" className="cc-solutions-link">
                      <svg className="cc-solutions-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>Residencial</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://ccurity.com.mx/restaurantes/" className="cc-solutions-link">
                      <svg className="cc-solutions-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span>Restaurantes</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://ccurity.com.mx/vehiculos/" className="cc-solutions-link">
                      <svg className="cc-solutions-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>Vehículos</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="cc-info-card">
              <div className="cc-info-card-inner">
                <div className="cc-info-layout">
                  <div className="cc-info-carousel">
                    <div className="carousel-container">
                      <div className="carousel-content">
                        <ul className="cc-info-links-list">
                          <li><a href="https://ccurity.com.mx/acerca-de-nosotros/" className="cc-menu-link" title="Acerca de nosotros">Acerca de nosotros</a></li>
                          <li><a href="https://ccurity.com.mx/bolsa-de-trabajo/" className="cc-menu-link" title="Bolsa de trabajo">Bolsa de trabajo</a></li>
                          <li><a href="https://ccurity.com.mx/aviso-de-privacidad/" className="cc-menu-link" title="Política de privacidad">Política de privacidad</a></li>
                          <li><a href="https://ccurity.com.mx/terminos-y-condiciones-de-uso/" className="cc-menu-link" title="Términos y condiciones">Términos y condiciones</a></li>
                          <li><a href="https://ccurity.com.mx/hoja-de-datos-ccurity/" className="cc-menu-link" title="Datos fiscales y de pago">Datos fiscales y de pago</a></li>
                        </ul>
                        {/*  */}
                        <ul className="cc-info-links-list" aria-hidden="true">
                          <li><a href="https://ccurity.com.mx/acerca-de-nosotros/" className="cc-menu-link" tabIndex={-1}>Acerca de nosotros</a></li>
                          <li><a href="https://ccurity.com.mx/bolsa-de-trabajo/" className="cc-menu-link" tabIndex={-1}>Bolsa de trabajo</a></li>
                          <li><a href="https://ccurity.com.mx/aviso-de-privacidad/" className="cc-menu-link" tabIndex={-1}>Política de privacidad</a></li>
                          <li><a href="https://ccurity.com.mx/terminos-y-condiciones-de-uso/" className="cc-menu-link" tabIndex={-1}>Términos y condiciones</a></li>
                          <li><a href="https://ccurity.com.mx/hoja-de-datos-ccurity/" className="cc-menu-link" tabIndex={-1}>Datos fiscales y de pago</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="cc-wa-wrapper">
                    <a href="https://wa.me/message/EFFSNE2UP3T7N1" target="_blank" rel="noopener noreferrer nofollow" className="cc-wa-button">
                      <svg className="cc-wa-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cc-menu-right">
          <div className="cc-brand-card">
            <div className="cc-brand-card-inner">
              <div className="cc-brand-buttons">
                <a href="https://ccurity.com.mx/catalogo/" className="cc-primary-button" title="Visita catálogo">
                  <svg className="cc-primary-button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="cc-primary-button-text">Catálogo de productos</span>
                </a>
              </div>

              <div className="cc-brand-intro">
                <h3 className="cc-brand-heading" style={{"color":"white"}}>Distribución de soluciones</h3>
                <p className="cc-brand-subheading">Marcas y fabricantes que distribuimos:</p>
              </div>

              <ul className="cc-brand-logos">
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-advantech/" title="Advantech" className="cc-brand-logo-link" data-brand="Advantech" data-domain="advantech.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=advantech.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">Advantech</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-vivotek/" title="Vivotek" className="cc-brand-logo-link" data-brand="Vivotek" data-domain="vivotek.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=vivotek.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">Vivotek</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-suprema/" title="Suprema" className="cc-brand-logo-link" data-brand="Suprema" data-domain="supremainc.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=supremainc.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">Suprema</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-stid-control-de-acceso/" title="STid" className="cc-brand-logo-link" data-brand="STid" data-domain="stid-security.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=stid-security.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">STid</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-softwarehouse/" title="Software House" className="cc-brand-logo-link" data-brand="Software House" data-domain="swhouse.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=swhouse.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">Software House</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-keyscan/" title="Keyscan" className="cc-brand-logo-link" data-brand="Keyscan" data-domain="dormakaba.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=dormakaba.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">Keyscan</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-simplex/" title="Simplex" className="cc-brand-logo-link" data-brand="Simplex" data-domain="simplexfire.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=simplexfire.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">Simplex</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-pelco/" title="Pelco" className="cc-brand-logo-link" data-brand="Pelco" data-domain="pelco.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=pelco.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">Pelco</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-nvt-phybridge/" title="NVT Phybridge" className="cc-brand-logo-link" data-brand="NVT Phybridge" data-domain="nvtphybridge.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=nvtphybridge.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">NVT Phybridge</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-keri-systems/" title="Keri Systems" className="cc-brand-logo-link" data-brand="Keri Systems" data-domain="kerisys.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=kerisys.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">Keri Systems</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-hid-pacs/" title="HID PACS" className="cc-brand-logo-link" data-brand="HID PACS" data-domain="hidglobal.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=hidglobal.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">HID PACS</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-kantech/" title="Kantech" className="cc-brand-logo-link" data-brand="Kantech" data-domain="kantech.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=kantech.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">Kantech</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-gvision/" title="GVision" className="cc-brand-logo-link" data-brand="GVision" data-domain="gvision-usa.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=gvision-usa.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">GVision</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-exacq/" title="Exacq" className="cc-brand-logo-link" data-brand="Exacq" data-domain="exacq.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=exacq.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">Exacq</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-fibrain-fibra/" title="Fibrain Fibra" className="cc-brand-logo-link" data-brand="Fibrain Fibra" data-domain="fibrain.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=fibrain.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">Fibrain Fibra</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-fibrain-cobre/" title="Fibrain Cobre" className="cc-brand-logo-link" data-brand="Fibrain Cobre" data-domain="fibrain.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=fibrain.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">Fibrain Cobre</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-cdvi/" title="CDVI" className="cc-brand-logo-link" data-brand="CDVI" data-domain="cdvi.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=cdvi.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">CDVI</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-bolide-mobile/" title="Bolide" className="cc-brand-logo-link" data-brand="Bolide" data-domain="bolideco.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=bolideco.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">Bolide</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-ista-axxonsoft/" title="AxxonSoft" className="cc-brand-logo-link" data-brand="AxxonSoft" data-domain="axxonsoft.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=axxonsoft.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">AxxonSoft</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-avigilon-unity-video/" title="Avigilon Unity Video" className="cc-brand-logo-link" data-brand="Avigilon Unity Video" data-domain="avigilon.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=avigilon.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">Avigilon Unity Video</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-avigilon-alta-video/" title="Avigilon Alta Video" className="cc-brand-logo-link" data-brand="Avigilon Alta Video" data-domain="avigilon.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=avigilon.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">Avigilon Alta Video</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-avigilon-unity-access/" title="Avigilon Unity Access" className="cc-brand-logo-link" data-brand="Avigilon Unity Access" data-domain="avigilon.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=avigilon.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">Avigilon Unity Access</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-avigilon-alta-access/" title="Avigilon Alta Access" className="cc-brand-logo-link" data-brand="Avigilon Alta Access" data-domain="avigilon.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=avigilon.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">Avigilon Alta Access</span>
                  </a>
                </li>
                <li className="cc-brand-logo-item">
                  <a href="https://ccurity.com.mx/precio-de-lista-illustra/" title="Illustra" className="cc-brand-logo-link" data-brand="Illustra" data-domain="illustracameras.com">
                    <span className="cc-brand-logo-favicon" aria-hidden="true"><img src={`https://www.google.com/s2/favicons?domain=illustracameras.com&sz=32`} alt="" loading="lazy" /></span>
                    <span className="cc-brand-logo-name">Illustra</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav> 

      <style jsx>{`
        .menu-open {
          display: block;
        }
        /* Make sure menu panel hides initially if we don't have CSS for it */
        .cc-menu-panel:not(.menu-open) {
          display: none; /* Just in case */
        }
      `}</style>
    </>
  );
}
