
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/*  */}
<section id="visita" className="cc-stripe-module">
  <div className="cc-stripe-container">
    
    {/*  */}
    <div className="cc-stripe-banner">
      <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18" fill="#3b82f6"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
      <span>Agenda en 60 segundos | Pago seguro con Stripe.</span>
    </div>

    {/*  */}
    <div className="cc-stripe-header">
      <h2>Visita de Levantamiento / Proyecto</h2>
      <div className="cc-stripe-subtitle">
        <span>Agenda Lunes a Viernes de 8:00 a 20:00 hrs.</span>
        <span className="cc-badge-priority">
          <svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="14" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
          Atención prioritaria
        </span>
      </div>
    </div>

    {/*  */}
    <div className="cc-stripe-cards-wrapper">
      
      {/*  */}
      <div className="cc-stripe-card cc-card-popular">
        <span className="cc-badge-popular">Más popular</span>
        <h3>Visita de levantamiento simple</h3>
        <p>Un técnico visita tu sitio para tomar medidas y datos clave. Con esto generamos un presupuesto exacto.</p>
        <div className="cc-stripe-price">MXN 350</div>
        
        {/*  */}
        <a href="https://app.ccurity.com.mx/api/stripe/checkout?type=simple" target="_blank" rel="noopener" className="cc-stripe-btn">Pagar</a>
        
        <div className="cc-stripe-features">
          <span>Esto incluye:</span>
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="#9ca3af"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> 
              Mediciones y verificación de puntos clave.
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="#9ca3af"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              Revisión de acometidas, recorridos y tomas.
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="#9ca3af"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              Recomendaciones rápidas en sitio.
            </li>
          </ul>
        </div>
      </div>

      {/*  */}
      <div className="cc-stripe-card">
        <h3>Visita de proyecto</h3>
        <p>Incluye la visita anterior y la entrega de un proyecto ejecutivo: planos sembrados, propuesta de canalizaciones, propuesta de equipos y justificaciones técnicas.</p>
        <div className="cc-stripe-price">MXN 1,900</div>
        
        {/*  */}
        <a href="https://app.ccurity.com.mx/api/stripe/checkout?type=project" target="_blank" rel="noopener" className="cc-stripe-btn">Pagar</a>
        
        <div className="cc-stripe-features">
          <span>Esto incluye:</span>
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="#9ca3af"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              Planos sembrados con ubicaciones sugeridas.
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="#9ca3af"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              Propuesta de canalizaciones (rutas y calibres).
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="#9ca3af"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              Propuesta de equipos por marca/segmento.
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16" fill="#9ca3af"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              Justificaciones técnicas y criterios de diseño.
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>

{/*  */}
<footer className="cc-footer">
  <div className="cc-footer-container">
    <div className="cc-footer-grid">
      
      {/*  */}
      <div className="cc-footer-col cc-brand-col">
        <a href="/" aria-label="Inicio C-CURITY">
          <img className="cc-footer-logo" src="https://ccurity.com.mx/wp-content/uploads/2023/07/CCURITY-PROVEEDOR-DE-SISTEMAS-DE-SEGURIDAD-1.svg" alt="C-CURITY Proveedores de Seguridad Logo" loading="lazy" />
        </a>
        <p className="cc-brand-desc">
          Proveedores de sistemas de seguridad electrónica, videovigilancia y control de acceso en la CDMX y toda la República Mexicana.
        </p>
      </div>

      {/*  */}
      <div className="cc-footer-col">
        <h3>Accesos Rápidos</h3>
        <ul className="cc-link-list">
          <li><a href="/servicios/">Soluciones y Servicios</a></li>
          <li><a href="/catalogo/">Cátalogo de Productos</a></li>
          <li><a href="/proyectos/">Casos de Éxito Industriales</a></li>
          <li><a href="/aviso-de-privacidad/">Aviso de Privacidad</a></li>
          <li><a href="/terminos-y-condiciones/">Términos y Condiciones</a></li>
          <li><a href="https://ccurity.com.mx/hoja-de-datos-ccurity/" target="_blank" rel="noopener">Datos Fiscales y de Pago</a></li>
        </ul>
      </div>

      {/*  */}
      <div className="cc-footer-col">
        <h3>Contacto</h3>
        <ul className="cc-contact-list">
          <li>
            <svg className="cc-icon" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="currentColor"><path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm0 12c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm6 6H6V8h12v12z"/></svg>
            <div className="cc-contact-text">
              <strong>Ventas Corporativas</strong>
              <a href="mailto:ventas@ccurity.com.mx">ventas@ccurity.com.mx</a>
            </div>
          </li>
          <li>
            <svg className="cc-icon" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            <div className="cc-contact-text">
              <strong>Ingeniería y Proyectos</strong>
              <a href="mailto:proyectos@ccurity.com.mx">proyectos@ccurity.com.mx</a>
            </div>
          </li>
          <li>
            <svg className="cc-icon" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
            <div className="cc-contact-text">
              <strong>Gerencia Operativa</strong>
              <a href="mailto:armandogarcia@ccurity.com.mx">armandogarcia@ccurity.com.mx</a>
            </div>
          </li>
          <li>
            <svg className="cc-icon" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            <div className="cc-contact-text">
              <strong>Dirección General</strong>
              <a href="mailto:juangarcia@ccurity.com.mx">juangarcia@ccurity.com.mx</a>
            </div>
          </li>
        </ul>
      </div>

      {/*  */}
      <div className="cc-footer-col">
        <h3>Líneas Directas</h3>
        <ul className="cc-contact-list">
          <li>
            <svg className="cc-icon" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 1.23 0 2.44.2 3.57.57.35.13.41.52.24 1.02l-2.2 2.2z"/></svg>
            <div className="cc-contact-text">
              <strong>Atención Telefónica</strong>
              <a href="tel:+525541695680">55 4169 5680</a>
            </div>
          </li>
          <li>
            <svg className="cc-icon" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="currentColor"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
            <div className="cc-contact-text">
              <strong>Atención WhatsApp</strong>
              <a href="https://wa.me/525580875650" target="_blank">55 8087 5650</a>
            </div>
          </li>
          <li className="cc-hours">
            <svg className="cc-icon cc-icon-muted" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            <div className="cc-contact-text">
              <strong className="cc-text-muted">Horario de Servicio</strong>
              <span className="cc-text-muted">Lunes a Viernes 9:00 – 18:00 hrs</span>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>

  <div className="cc-footer-bottom">
    <div className="cc-footer-bottom-container">
      <p>© 2026 C-CURITY Proveedores de Seguridad Privada S.A. de C.V.</p>
      <p className="cc-legal-links">
        <a href="/aviso-de-privacidad/">Aviso de Privacidad</a>
        <span className="cc-separator">|</span>
        <a href="/terminos-y-condiciones/">Términos y Condiciones</a>
      </p>
    </div>
  </div>
</footer>


    </>
  );
}
