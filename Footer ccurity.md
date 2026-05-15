<!-- ==============================================
     MODULO DE PAGO NATIVO STRIPE (LEVANTAMIENTO)
     ============================================== -->
<section id="visita" class="cc-stripe-module">
  <div class="cc-stripe-container">
    
    <!-- Banner Superior -->
    <div class="cc-stripe-banner">
      <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18" fill="#3b82f6"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
      <span>Agenda en 60 segundos | Pago seguro con Stripe.</span>
    </div>

    <!-- Títulos Módulo -->
    <div class="cc-stripe-header">
      <h2>Visita de Levantamiento / Proyecto</h2>
      <div class="cc-stripe-subtitle">
        <span>Agenda Lunes a Viernes de 8:00 a 20:00 hrs.</span>
        <span class="cc-badge-priority">
          <svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="14" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
          Atención prioritaria
        </span>
      </div>
    </div>

    <!-- Cards Wrapper -->
    <div class="cc-stripe-cards-wrapper">
      
      <!-- Card 1: Levantamiento Simple -->
      <div class="cc-stripe-card cc-card-popular">
        <span class="cc-badge-popular">Más popular</span>
        <h3>Visita de levantamiento simple</h3>
        <p>Un técnico visita tu sitio para tomar medidas y datos clave. Con esto generamos un presupuesto exacto.</p>
        <div class="cc-stripe-price">MXN 350</div>
        
        <!-- ENLACE DIRECTO A LA API DE LA APP 1 -->
        <a href="https://app.ccurity.com.mx/api/stripe/checkout?type=simple" target="_blank" rel="noopener" class="cc-stripe-btn">Pagar</a>
        
        <div class="cc-stripe-features">
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

      <!-- Card 2: Visita de Proyecto -->
      <div class="cc-stripe-card">
        <h3>Visita de proyecto</h3>
        <p>Incluye la visita anterior y la entrega de un proyecto ejecutivo: planos sembrados, propuesta de canalizaciones, propuesta de equipos y justificaciones técnicas.</p>
        <div class="cc-stripe-price">MXN 1,900</div>
        
        <!-- ENLACE DIRECTO A LA API DE LA APP 2 -->
        <a href="https://app.ccurity.com.mx/api/stripe/checkout?type=project" target="_blank" rel="noopener" class="cc-stripe-btn">Pagar</a>
        
        <div class="cc-stripe-features">
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

<!-- ==============================================
     FOOTER PRINCIPAL CORPORATIVO
     ============================================== -->
<footer class="cc-footer">
  <div class="cc-footer-container">
    <div class="cc-footer-grid">
      
      <!-- Col 1: Marca y Descripción -->
      <div class="cc-footer-col cc-brand-col">
        <a href="/" aria-label="Inicio C-CURITY">
          <img class="cc-footer-logo" src="https://ccurity.com.mx/wp-content/uploads/2023/07/CCURITY-PROVEEDOR-DE-SISTEMAS-DE-SEGURIDAD-1.svg" alt="C-CURITY Proveedores de Seguridad Logo" loading="lazy">
        </a>
        <p class="cc-brand-desc">
          Proveedores de sistemas de seguridad electrónica, videovigilancia y control de acceso en la CDMX y toda la República Mexicana.
        </p>
      </div>

      <!-- Col 2: Accesos Rápidos -->
      <div class="cc-footer-col">
        <h3>Accesos Rápidos</h3>
        <ul class="cc-link-list">
          <li><a href="/servicios/">Soluciones y Servicios</a></li>
          <li><a href="/catalogo/">Cátalogo de Productos</a></li>
          <li><a href="/proyectos/">Casos de Éxito Industriales</a></li>
          <li><a href="/aviso-de-privacidad/">Aviso de Privacidad</a></li>
          <li><a href="/terminos-y-condiciones/">Términos y Condiciones</a></li>
          <li><a href="https://ccurity.com.mx/hoja-de-datos-ccurity/" target="_blank" rel="noopener">Datos Fiscales y de Pago</a></li>
        </ul>
      </div>

      <!-- Col 3: Contacto Electrónico -->
      <div class="cc-footer-col">
        <h3>Contacto</h3>
        <ul class="cc-contact-list">
          <li>
            <svg class="cc-icon" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="currentColor"><path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm0 12c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2zm6 6H6V8h12v12z"/></svg>
            <div class="cc-contact-text">
              <strong>Ventas Corporativas</strong>
              <a href="mailto:ventas@ccurity.com.mx">ventas@ccurity.com.mx</a>
            </div>
          </li>
          <li>
            <svg class="cc-icon" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
            <div class="cc-contact-text">
              <strong>Ingeniería y Proyectos</strong>
              <a href="mailto:proyectos@ccurity.com.mx">proyectos@ccurity.com.mx</a>
            </div>
          </li>
          <li>
            <svg class="cc-icon" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
            <div class="cc-contact-text">
              <strong>Gerencia Operativa</strong>
              <a href="mailto:armandogarcia@ccurity.com.mx">armandogarcia@ccurity.com.mx</a>
            </div>
          </li>
          <li>
            <svg class="cc-icon" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            <div class="cc-contact-text">
              <strong>Dirección General</strong>
              <a href="mailto:juangarcia@ccurity.com.mx">juangarcia@ccurity.com.mx</a>
            </div>
          </li>
        </ul>
      </div>

      <!-- Col 4: Líneas Directas -->
      <div class="cc-footer-col">
        <h3>Líneas Directas</h3>
        <ul class="cc-contact-list">
          <li>
            <svg class="cc-icon" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 1.23 0 2.44.2 3.57.57.35.13.41.52.24 1.02l-2.2 2.2z"/></svg>
            <div class="cc-contact-text">
              <strong>Atención Telefónica</strong>
              <a href="tel:+525541695680">55 4169 5680</a>
            </div>
          </li>
          <li>
            <svg class="cc-icon" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="currentColor"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
            <div class="cc-contact-text">
              <strong>Atención WhatsApp</strong>
              <a href="https://wa.me/525580875650" target="_blank">55 8087 5650</a>
            </div>
          </li>
          <li class="cc-hours">
            <svg class="cc-icon cc-icon-muted" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            <div class="cc-contact-text">
              <strong class="cc-text-muted">Horario de Servicio</strong>
              <span class="cc-text-muted">Lunes a Viernes 9:00 – 18:00 hrs</span>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>

  <div class="cc-footer-bottom">
    <div class="cc-footer-bottom-container">
      <p>© 2026 C-CURITY Proveedores de Seguridad Privada S.A. de C.V.</p>
      <p class="cc-legal-links">
        <a href="/aviso-de-privacidad/">Aviso de Privacidad</a>
        <span class="cc-separator">|</span>
        <a href="/terminos-y-condiciones/">Términos y Condiciones</a>
      </p>
    </div>
  </div>
</footer>

<style>
/* Reset & Fonts Layer */
.cc-stripe-module,
.cc-footer {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  box-sizing: border-box;
}

.cc-stripe-module *,
.cc-footer * {
  box-sizing: inherit;
}

/* =========================================
   ESTILOS: MÓDULO STRIPE LEVANTAMIENTO
   ========================================= */
.cc-stripe-module {
  background-color: #f8fafc; /* Fondo Off-White Slate 50 */
  padding: 64px 24px;
}

.cc-stripe-container {
  max-width: 900px; /* Ancho acotado para UI tipo checkout */
  margin: 0 auto;
}

/* Banner Superior Stripe */
.cc-stripe-banner {
  background-color: #0f172a; /* Slate 900 */
  color: #f8fafc;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  border-radius: 8px;
  margin-bottom: 32px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Títulos Módulo Stripe */
.cc-stripe-header {
  margin-bottom: 48px;
}

.cc-stripe-header h2 {
  color: #0f172a;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 12px 0;
}

.cc-stripe-subtitle {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  color: #64748b; /* Slate 500 */
  font-size: 14px;
}

.cc-badge-priority {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: #ecfdf5; /* Emerald 50 */
  color: #059669; /* Emerald 600 */
  padding: 4px 10px;
  border-radius: 100px;
  font-weight: 600;
  font-size: 12px;
}

/* Cards Wrapper Stripe */
.cc-stripe-cards-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: flex-start;
}

/* Base Card Stripe */
.cc-stripe-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 40px;
  position: relative;
  transition: all 0.3s ease;
}

.cc-stripe-card:hover {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01);
  border-color: #cbd5e1;
}

/* Premium Styling for Popular Card */
.cc-card-popular {
  background-color: #f1f5f9; /* Slate 100 sutil para diferenciar */
  border-color: #e2e8f0;
}

.cc-badge-popular {
  position: absolute;
  top: 32px;
  background-color: white;
  color: #475569;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 4px 10px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  margin-bottom: 16px;
  display: inline-block;
  margin-top: -12px;
}

.cc-stripe-card h3 {
  color: #0f172a;
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 12px 0;
  letter-spacing: -0.01em;
}

.cc-stripe-card p {
  color: #64748b;
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 24px 0;
  min-height: 66px; /* Alinear alturas */
}

.cc-stripe-price {
  font-size: 32px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}

/* Botones Nativos Stripe Blue */
.cc-stripe-btn {
  display: block;
  width: 100%;
  background-color: #0066ff;
  color: white !important;
  text-align: center;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s ease, transform 0.1s ease;
  margin-bottom: 32px;
}

.cc-stripe-btn:hover {
  background-color: #005ce6;
  transform: translateY(-1px);
}

.cc-stripe-btn:active {
  transform: translateY(0);
}

/* Checkout Features List */
.cc-stripe-features span {
  display: block;
  font-size: 13px;
  color: #475569;
  font-weight: 600;
  margin-bottom: 16px;
}

.cc-stripe-features ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cc-stripe-features li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: #334155;
  line-height: 1.5;
}

.cc-stripe-features svg {
  flex-shrink: 0;
  margin-top: 3px;
}

/* Responsive Stripe Module */
@media (max-width: 768px) {
  .cc-stripe-cards-wrapper {
    grid-template-columns: 1fr;
  }
  .cc-stripe-card {
    padding: 32px 24px;
  }
  .cc-stripe-card p {
    min-height: auto;
  }
  .cc-badge-popular {
    position: relative;
    top: 0;
    margin-top: 0;
  }
}

/* =========================================
   ESTILOS: FOOTER B2B PREMIUM (LOWER)
   ========================================= */
.cc-footer {
  --ft-bg: #0f172a;           /* Base Slate 900 */
  --ft-bg-btm: #020617;       /* Base Slate 950 */
  --ft-text: #94a3b8;         /* Textos Slate 400 */
  --ft-text-hov: #ffffff;     /* Hover Blanco */
  --ft-title: #f8fafc;        /* Slate 50 Títulos */
  --ft-accent: #38bdf8;       /* Light Blue 400 */
  --ft-border: #1e293b;       /* Bordes Slate 800 */
  
  background-color: var(--ft-bg);
  color: var(--ft-text);
  font-size: 14px;
  line-height: 1.5;
  border-top: 1px solid var(--ft-border);
}

/* Container & Grid (4 Columns) */
.cc-footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 64px 24px;
}

.cc-footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 48px 32px;
}

/* Typography & Links */
.cc-footer h3 {
  color: var(--ft-title);
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 20px 0;
  letter-spacing: -0.01em;
}

.cc-footer a {
  color: var(--ft-text);
  text-decoration: none;
  transition: all 0.2s ease;
}

.cc-footer a:hover {
  color: var(--ft-text-hov);
}

.cc-footer ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Col 1: Brand (Logo Invertido) */
.cc-brand-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.cc-footer-logo {
  max-width: 200px;
  display: block;
  margin-bottom: 20px;
  /* MAGIA: Convierte tu logo negro a blanco puro */
  filter: brightness(0) invert(1); 
  opacity: 0.95;
}

.cc-brand-desc {
  margin: 0;
  color: var(--ft-text);
  line-height: 1.6;
  max-width: 280px;
}

/* Listas de Enlaces (Col 2) */
.cc-link-list li a {
  display: inline-block;
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
}
.cc-link-list li a:hover {
  color: var(--ft-accent);
  border-bottom-color: var(--ft-accent);
}

/* Contacto y Líneas Directas (Col 3 & 4) */
.cc-contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.cc-icon {
  margin-top: 2px;
  color: var(--ft-accent);
  flex-shrink: 0;
}

.cc-icon-muted {
  color: #64748b; /* Slate 500 */
}

.cc-contact-text {
  display: flex;
  flex-direction: column;
}

.cc-contact-text strong {
  color: var(--ft-title);
  font-weight: 500;
  margin-bottom: 2px;
}

.cc-contact-text .cc-text-muted {
  color: #64748b; /* Slate 500 */
  font-weight: 400;
}

/* Bottom Bar */
.cc-footer-bottom {
  background-color: var(--ft-bg-btm);
  border-top: 1px solid var(--ft-border);
  padding: 24px;
}

.cc-footer-bottom-container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.cc-footer-bottom p {
  margin: 0;
  color: #64748b;
  font-size: 13px;
}

.cc-legal-links {
  display: flex;
  gap: 12px;
  align-items: center;
}

.cc-legal-links a {
  color: #64748b;
}

.cc-legal-links a:hover {
  color: var(--ft-text-hov);
}

.cc-separator {
  color: var(--ft-border);
}

/* Responsive Breakpoints */
@media (max-width: 1024px) {
  .cc-footer-grid {
    grid-template-columns: 1fr 1fr; /* 2 Columnas Tablet */
  }
}

@media (max-width: 640px) {
  .cc-footer-container {
    padding: 48px 24px;
  }
  .cc-footer-grid {
    grid-template-columns: 1fr; /* 1 Columna Mobile */
    gap: 40px;
  }
  .cc-brand-desc {
    max-width: 100%;
  }
  .cc-footer-bottom-container {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
}
</style>
