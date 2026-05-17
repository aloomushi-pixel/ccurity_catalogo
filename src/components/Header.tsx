
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

      <div className="relative flex h-10 w-full items-center overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="flex animate-marquee whitespace-nowrap text-[13px] font-medium text-slate-500">
          <div className="flex min-w-full items-center justify-around px-4">
            <Link href="https://ccurity.com.mx/acerca-de-nosotros/" className="mx-6 hover:text-blue-500 transition-colors">Acerca de nosotros</Link>
            <Link href="https://ccurity.com.mx/bolsa-de-trabajo/" className="mx-6 hover:text-blue-500 transition-colors">Bolsa de trabajo</Link>
            <Link href="https://ccurity.com.mx/aviso-de-privacidad/" className="mx-6 hover:text-blue-500 transition-colors">Política de privacidad</Link>
            <Link href="https://ccurity.com.mx/terminos-y-condiciones-de-uso/" className="mx-6 hover:text-blue-500 transition-colors">Términos y condiciones</Link>
            <Link href="https://ccurity.com.mx/hoja-de-datos-ccurity/" className="mx-6 hover:text-blue-500 transition-colors">Datos fiscales y de pago</Link>
          </div>
          <div className="flex min-w-full items-center justify-around px-4" aria-hidden="true">
            <Link href="https://ccurity.com.mx/acerca-de-nosotros/" className="mx-6 hover:text-blue-500 transition-colors" tabIndex={-1}>Acerca de nosotros</Link>
            <Link href="https://ccurity.com.mx/bolsa-de-trabajo/" className="mx-6 hover:text-blue-500 transition-colors" tabIndex={-1}>Bolsa de trabajo</Link>
            <Link href="https://ccurity.com.mx/aviso-de-privacidad/" className="mx-6 hover:text-blue-500 transition-colors" tabIndex={-1}>Política de privacidad</Link>
            <Link href="https://ccurity.com.mx/terminos-y-condiciones-de-uso/" className="mx-6 hover:text-blue-500 transition-colors" tabIndex={-1}>Términos y condiciones</Link>
            <Link href="https://ccurity.com.mx/hoja-de-datos-ccurity/" className="mx-6 hover:text-blue-500 transition-colors" tabIndex={-1}>Datos fiscales y de pago</Link>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-10 flex h-full items-center border-l border-slate-200 bg-slate-50 px-4 md:px-6 shadow-[-15px_0_15px_-5px_rgba(248,250,252,1)]">
          <a href="https://wa.me/525580875650" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 rounded-full bg-[#25D366] px-3.5 py-1.5 text-[13px] font-bold text-white transition-colors hover:bg-[#128C7E] shadow-sm">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.013 2.008C6.49 2.008 2 6.498 2 12.021c0 1.764.462 3.483 1.34 5.002L2 22l5.122-1.343c1.48.816 3.16 1.246 4.891 1.246 5.522 0 10.013-4.49 10.013-10.013 0-5.523-4.491-10.013-10.013-10.013zm5.666 14.497c-.24.675-1.393 1.275-1.93 1.366-.537.09-1.238.163-3.415-.742-2.616-1.085-4.298-3.75-4.44-3.938-.142-.187-1.062-1.41-1.062-2.69 0-1.28.665-1.91 1.006-2.272.34-.362.744-.452.99-.452.246 0 .493.003.705.012.217.01.507-.085.792.604.285.69.972 2.373 1.057 2.544.086.171.143.372.028.6-.115.228-.172.373-.343.575-.172.202-.358.423-.515.586-.172.172-.35.358-.152.697.2.34.887 1.464 1.91 2.376 1.321 1.176 2.41 1.54 2.75 1.696.342.155.54.128.745-.11.202-.238.874-1.018 1.104-1.366.23-.348.46-.29.77-.171.312.12 1.977.933 2.318 1.103.342.172.57.257.656.402.086.144.086.837-.154 1.512z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>

<header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white shadow-sm">
  <div className="mx-auto flex h-20 max-w-[1440px] items-center gap-6 px-6">
    
    {/* Menu Button */}
    <button 
      id="menu-button" 
      type="button" 
      className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-slate-300 transition-colors hover:bg-slate-50 overflow-hidden ${isOpen ? 'bg-red-50 border-red-200 text-red-500' : 'bg-white text-slate-600'}`} 
      onClick={toggleMenu} 
      aria-expanded={isOpen ? "true" : "false"} 
      aria-controls="menu" 
      aria-label="Abrir menú de navegación"
    >
      <div className="relative w-6 h-6">
        <svg className={`absolute inset-0 h-6 w-6 transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg className={`absolute inset-0 h-6 w-6 transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </button>

        {/* Animated Logo Link back to Main Site */}
    <Link href="https://ccurity.com.mx/" className="flex shrink-0 items-center transition-opacity hover:opacity-80 alogo" style={{ width: '180px' }}>
      <svg className="cc-logo-svg cc-logo-desktop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23923.04 6483.83">
        <g>
            
            <rect className="cc-fil0 cc-str0" x="8.47" y="8.47" width="23906.11" height="6466.89" style={{stroke: "none"}} />
            <g>
                
                <path className="cc-fil1 cc-logo-part cc-text-body"
                    d="M18314.31 2317.94c0,-50.68 -41.33,-91.77 -92.3,-91.77l-987.75 0c-50.97,0 -92.3,-41.1 -92.3,-91.78l0 -100.14 0 -273.33c0,-50.69 41.33,-91.78 92.3,-91.78 1181.51,0 2363.03,0 3544.55,0 57.78,0 59.95,30.51 84.49,76.17l170.71 317.55 1168.96 0 170.71 -317.55c23.97,-44.58 26,-76.17 81.19,-76.17l100.72 0 450.32 0c0.76,0 1.51,0.01 2.26,0.03l0.01 0c0.74,0.02 1.47,0.04 2.19,0.08l0.03 0c0.71,0.04 1.43,0.08 2.13,0.13l0.04 0c0.7,0.06 1.4,0.12 2.09,0.19l0.04 0.01c0.69,0.06 1.36,0.14 2.04,0.23l0.04 0c0.68,0.09 1.34,0.18 2,0.29l0.06 0.01c0.65,0.1 1.29,0.21 1.93,0.33l0.07 0.01c0.63,0.11 1.25,0.25 1.88,0.38l0.08 0.01 0.67 0.16c0.42,0.1 0.83,0.19 1.23,0.29l0.01 0c0.59,0.14 1.19,0.3 1.77,0.46l0.09 0.03 0.77 0.23c0.35,0.1 0.68,0.2 1.01,0.3l0.04 0.01c0.56,0.18 1.12,0.36 1.67,0.55l0.1 0.05c0.54,0.19 1.1,0.38 1.62,0.59l0.05 0.02 0.9 0.35 0.8 0.33 0.05 0.03c0.51,0.21 1.02,0.44 1.52,0.67l0.04 0.02 0.82 0.39 0.8 0.4 0.64 0.33 0.9 0.48 0.56 0.33c0.32,0.18 0.64,0.35 0.95,0.54l0.47 0.29c0.32,0.2 0.64,0.4 0.97,0.6l0.88 0.61 0.46 0.31c0.29,0.21 0.59,0.42 0.87,0.63l0.52 0.38c0.25,0.2 0.5,0.4 0.75,0.6l0.54 0.42c0.27,0.23 0.53,0.45 0.79,0.67l0.47 0.4c0.23,0.21 0.46,0.43 0.69,0.64l0.52 0.48c0.25,0.24 0.48,0.48 0.73,0.71l0.42 0.43 0.59 0.63 0.56 0.6c0.19,0.22 0.38,0.45 0.58,0.67l0.43 0.51 0.63 0.78 0.4 0.5 0.47 0.65 0.51 0.69 0.39 0.59 0.49 0.72 0.51 0.81 0.34 0.55 0.48 0.82 0.34 0.62 0.37 0.69c0.13,0.26 0.26,0.51 0.39,0.77l0.38 0.77 0.3 0.67 0.36 0.82 0.31 0.74 0.26 0.64c0.11,0.31 0.23,0.61 0.34,0.92l0.23 0.64 0.32 0.91 0.26 0.84 0.22 0.75 0.24 0.89 0.2 0.75 0.19 0.81c0.07,0.31 0.14,0.62 0.21,0.92l0.14 0.72 0.18 0.93 0.14 0.85 0.14 0.93 0.11 0.8 0.11 0.92 0.09 0.9 0.08 0.87 0.07 1.06 0.04 0.73 0.04 1.05 0.02 0.82 0.01 0.99 -0.01 0.88 -0.02 1.03 -0.03 0.84 -0.05 1.07 -0.06 0.86 -0.08 1.06 -0.08 0.87 -0.11 0.99 -0.12 1.04 -0.11 0.82 -0.18 1.19 -0.13 0.8 -0.2 1.2 -0.16 0.87 -0.23 1.13 -0.21 0.95 -0.24 1.11 -0.24 0.96 -0.27 1.11 -0.28 1 -0.29 1.06 -0.29 1.01 -0.36 1.18 -0.3 0.94 -0.35 1.08 -0.42 1.21 -0.33 0.94 -0.44 1.2 -0.38 0.99 -0.44 1.13 -0.42 1.05 -0.49 1.16 -0.42 1.01 -0.55 1.24 -0.29 0.66 -0.03 0.06 -0.3 0.65 -257.23 477.7 -160.43 0 -522.65 0 -987.28 0 -694.74 0 -753.93 0 -648.89 0c-50.97,0 -92.3,41.1 -92.3,91.78l0 2490.89c0,50.68 -41.34,91.77 -92.31,91.77l-436.07 0c-50.97,0 -92.3,-41.09 -92.3,-91.77l0 -2496.56zm4116.49 590.46c-100.17,185.93 -200.37,371.85 -300.6,557.74 -26.84,49.21 -87.49,81.68 -151.05,91.78 -47.93,7.62 -63.43,41.09 -63.43,91.77l0 1164.81c0,50.68 -41.33,91.77 -92.3,91.77l-415.78 0c-50.97,0 -92.3,-41.09 -92.3,-91.77l0 -1164.81c0,-50.68 -9.15,-85.99 -63.43,-91.77 -93.17,-9.92 -109.38,-29.17 -145.15,-82.53l-308.52 -566.99 1632.55 0zm-718.63 163.31l-187.37 0 66.42 123.55c1.08,1.51 26.59,36.74 54.57,-0.06l66.39 -123.49zm-8002.22 -163.31l500.18 0c186.05,0 338.28,-152.24 338.28,-338.28l0 0c0,-186.05 -152.27,-338.29 -338.28,-338.29l-500.18 0c-186.01,0 -338.28,152.24 -338.28,338.29l0 0c0,186.04 152.23,338.28 338.28,338.28zm-4004.67 333.51l0 -1483.6c0,-49.25 41.34,-89.18 92.31,-89.18l406.57 0c50.97,0 104.01,39.93 104.01,89.18l0 91.43 0 0.14 -3.91 1461.86c0.08,519.32 37.95,993.74 529.14,993.74 539.2,0 525.22,-607.79 525.22,-994.2l0 -1513.86 0 -39.11c0,-49.25 53.03,-89.18 104,-89.18l406.6 0c50.97,0 92.3,39.93 92.3,89.18l0 39.11 0 1444.49 0 91.59 0 48.69 0 91.58c0,787.87 -507.66,1432.48 -1128.12,1432.48 -620.47,0 -1128.12,-644.62 -1128.12,-1432.48l0 -91.4 0 -0.18 0 -140.28zm4383.26 202.49c-34.49,-45.87 -26.16,-81.56 21.34,-81.56l206.79 0c447.34,0 813.41,-363.95 813.41,-808.76 0,-444.82 -366.03,-808.76 -813.41,-808.76l-969.34 0c-94.84,0 -185.97,16.4 -270.79,46.41l0 45.36c0,-50.69 -41.32,-167.95 -92.29,-167.95l-358.03 0c-50.97,0 -92.29,41.09 -92.29,91.78l0 716.99 0 2336.59c0,50.68 41.32,91.77 92.29,91.77l358.03 0c50.97,0 92.29,-41.09 92.29,-91.77l0 -1498.08c73.21,25.91 151.16,41.68 232.1,45.5l1309.91 1426.83c0,0 300.38,247.43 641.91,23.1l0.04 -0.03c1.49,-1.16 48.64,-38.85 0.13,-94.9l-1172.09 -1272.52zm1936.56 -1775.26l415.78 0c50.97,0 92.3,41.09 92.3,91.78l0 3053.58c0,50.68 -41.33,91.77 -92.3,91.77l-415.78 0c-50.98,0 -92.3,-41.09 -92.3,-91.77l0 -3053.58c0,-50.69 41.32,-91.78 92.3,-91.78z" />

                
                <path className="cc-fil2 cc-logo-part cc-icon-1"
                    d="M5090.7 2908.4l0.02 0c131.53,0 239.15,107.59 239.15,239.14l0 280.34c0,131.53 -107.61,239.14 -239.15,239.14l-0.02 0c-131.54,0 -239.15,-107.6 -239.15,-239.14l0 -280.34c0,-131.54 107.6,-239.14 239.15,-239.14z" />
                <path className="cc-fil2 cc-logo-part cc-icon-2"
                    d="M7505.63 1669.14c418.15,0 798.99,159.76 1084.82,421.57 87.31,84.77 -0.14,135.46 -0.14,135.46l-1084.68 0 -0.22 0c-579.62,0 -1049.48,469.92 -1049.48,1049.62 0,579.7 469.86,1049.61 1049.48,1049.61 579.62,0 1049.48,-469.91 1049.48,-1049.61 0,-91.85 -11.82,-180.92 -34,-265.82l0.01 -0.01 -0.02 -0.07 -0.06 -0.22 -0.1 -0.36 -0.13 -0.49 -0.16 -0.62 -0.19 -0.75c-3.81,-15.63 -19.89,-99.03 70.07,-99.04l1.15 -0.01 376.61 0 0.38 0.01c97.35,0.01 121.23,98.77 121.88,101.49 14.42,86.49 21.94,175.31 21.94,265.89 0,887.32 -719.32,1606.62 -1606.63,1606.62 -887.34,0 -1606.65,-719.31 -1606.65,-1606.62 0,-887.34 719.32,-1606.65 1606.65,-1606.65z" />
                <path className="cc-fil2 cc-logo-part cc-icon-3"
                    d="M2675.81 1669.14c418.15,0 798.99,159.76 1084.81,421.57 87.31,84.77 -0.14,135.46 -0.14,135.46l-1084.67 0 -0.22 0c-579.62,0 -1049.48,469.92 -1049.48,1049.62 0,579.7 469.86,1049.61 1049.48,1049.61 579.62,0 1049.47,-469.91 1049.47,-1049.61 0,-91.85 -11.82,-180.92 -34,-265.82l0.01 -0.01 -0.02 -0.07 -0.06 -0.22 -0.1 -0.36 -0.13 -0.49 -0.16 -0.62 -0.19 -0.75c-3.81,-15.63 -19.88,-99.03 70.07,-99.04l1.15 -0.01 376.61 0 0.38 0.01c97.35,0.01 121.23,98.77 121.88,101.49 14.42,86.49 21.94,175.31 21.94,265.89 0,887.32 -719.31,1606.62 -1606.62,1606.62 -887.34,0 -1606.65,-719.31 -1606.65,-1606.62 0,-887.34 719.32,-1606.65 1606.65,-1606.65z" />
            </g>
        </g>
    </svg>

    
    <svg className="cc-logo-svg cc-logo-mobile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10500 6483.83">
        <g>
            
            <path className="cc-fil2 cc-logo-part cc-icon-dot"
                d="M5090.7 2908.4l0.02 0c131.53,0 239.15,107.59 239.15,239.14l0 280.34c0,131.53 -107.61,239.14 -239.15,239.14l-0.02 0c-131.54,0 -239.15,-107.6 -239.15,-239.14l0 -280.34c0,-131.54 107.6,-239.14 239.15,-239.14z" />

            
            <path className="cc-fil2 cc-logo-part cc-icon-c"
                d="M2675.81 1669.14c418.15,0 798.99,159.76 1084.81,421.57 87.31,84.77 -0.14,135.46 -0.14,135.46l-1084.67 0 -0.22 0c-579.62,0 -1049.48,469.92 -1049.48,1049.62 0,579.7 469.86,1049.61 1049.48,1049.61 579.62,0 1049.47,-469.91 1049.47,-1049.61 0,-91.85 -11.82,-180.92 -34,-265.82l0.01 -0.01 -0.02 -0.07 -0.06 -0.22 -0.1 -0.36 -0.13 -0.49 -0.16 -0.62 -0.19 -0.75c-3.81,-15.63 -19.88,-99.03 70.07,-99.04l1.15 -0.01 376.61 0 0.38 0.01c97.35,0.01 121.23,98.77 121.88,101.49 14.42,86.49 21.94,175.31 21.94,265.89 0,887.32 -719.31,1606.62 -1606.62,1606.62 -887.34,0 -1606.65,-719.31 -1606.65,-1606.62 0,-887.34 719.32,-1606.65 1606.65,-1606.65z" />
        </g>
    </svg>
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
