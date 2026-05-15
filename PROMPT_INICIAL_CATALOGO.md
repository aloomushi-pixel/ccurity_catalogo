# Contexto y Configuración Inicial: Catálogo B2B CCURITY (catalogo.ccurity.com.mx)

Eres el agente desarrollador de la nueva tienda / catálogo público B2B de CCurity. Este proyecto es una aplicación "Hermana" de la plataforma administrativa principal. 
Nuestra arquitectura es de **"Zero-API Ecommerce Pattern"**, lo que significa que el frontend (Next.js App Router) se conectará directamente a nuestra base de datos central en Supabase utilizando `supabase-js` para consultar el inventario y conceptos (Tabla: `MasterConcept`), permitiendo un rendimiento ultrarrápido sin necesidad de APIs intermedias en el servidor administrativo.

A continuación, tienes las credenciales maestras y el Flujo Autónomo que debes seguir estrictamente para desplegar esta aplicación en nuestra infraestructura de producción.

---

## 1. Single Source of Truth: Credentials & Services
> [!IMPORTANT]
> The agent MUST always reference these credentials when executing. Do NOT prompt the user for them. Work EXCLUSIVELY on this catalog project.

### 1.1 Supabase Configuration (Project: `pghqeoijbtzipzziezmn`)
- **API URL**: `https://pghqeoijbtzipzziezmn.supabase.co`
- **Publishable Key**: `REDACTED`
- **API Secret**: `REDACTED`
- **Anon Public JWT**: `REDACTED`
- **Service Role JWT**: `REDACTED`

### 1.2 Coolify Deployment Service
- **MCP API Root Token**: `REDACTED`
- **Primary Domain**: `catalogo.ccurity.com.mx` (Se configurará un nuevo servicio en Coolify para este dominio).

### 1.3 Notifications Service (Resend)
- **API KEY**: `REDACTED`

### 1.4 Stripe Production Configuration (Para Pagos en Línea)
- **Publishable Key**: `REDACTED`
- **Secret Key (Restricted)**: `REDACTED`
- **Webhook Signing Secret**: `REDACTED`

---

## 2. Instrucción de Construcción

Tu primera tarea es:
1. Conectar este proyecto Next.js con Supabase instalando `@supabase/supabase-js`.
2. Crear un `.env.local` con las variables de Supabase.
3. Generar la página principal (`src/app/page.tsx`) que consulte la tabla `MasterConcept` usando la Anon Key pública para mostrar la galería o catálogo de productos disponibles.
4. Una vez validada la visualización localmente, te instruiré para hacer el setup del repositorio de Git y conectarlo a un nuevo servicio en Coolify para `catalogo.ccurity.com.mx`.

---

## 3. The Autonomous Lifecycle Engine (Standard Procedure)
When instructed to deploy, execute the following engine AUTONOMOUSLY:

### Step 1: Source Verification
Autonomously run `git add .`, `git commit -m "Auto-Deploy: <Subject>"`, and `git push`. (If a conflict arises, resolve it natively).

### Step 2: Coolify Deployment
Trigger the deployment to the Catalog Service via the exact `coolify-mcp` commands.
*(Ignore localhost for production testing).*

### Step 3: Coolify Logs Auditing
**CRITICAL**: The agent MUST use `mcp_coolify-mcp_deployment` to monitor the deployment. You are **STRICTLY FORBIDDEN** from exiting the turn or announcing completion until the deployment status explicitly reads `"status": "finished"`. 

### Step 4: Server Resilience Loop
If step 3 fails, enter the CI/CD correction loop. Modify the codebase -> return to Step 1. Output terminal fixes automatically.

### Step 5: QA Interactivo
**CRITICAL:** Only execute after Step 3 explicitly returns `"status": "finished"`.
Use Playwright OR `browser_subagent` to execute End-to-End tests strictly against **`https://catalogo.ccurity.com.mx`**. Test for visual metrics and that the product catalog loaded properly from Supabase.
