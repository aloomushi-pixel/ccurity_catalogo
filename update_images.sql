-- Este script asignará las imágenes a tus conceptos existentes usando la URL base de tu catálogo B2B.

UPDATE "MasterConcept" 
SET "imageUrl" = 'https://catalogo.ccurity.com.mx/images/services/tech_cctv.png'
WHERE type = 'SERVICE' AND (LOWER(title) LIKE '%cctv%' OR LOWER(title) LIKE '%video%' OR LOWER(title) LIKE '%camara%' OR LOWER(title) LIKE '%cámara%');

UPDATE "MasterConcept" 
SET "imageUrl" = 'https://catalogo.ccurity.com.mx/images/services/tech_access_control.png'
WHERE type = 'SERVICE' AND (LOWER(title) LIKE '%acceso%' OR LOWER(title) LIKE '%porton%' OR LOWER(title) LIKE '%portón%');

UPDATE "MasterConcept" 
SET "imageUrl" = 'https://catalogo.ccurity.com.mx/images/services/tech_network_nodes.png'
WHERE type = 'SERVICE' AND (LOWER(title) LIKE '%red%' OR LOWER(title) LIKE '%nodo%' OR LOWER(title) LIKE '%vlan%');

UPDATE "MasterConcept" 
SET "imageUrl" = 'https://catalogo.ccurity.com.mx/images/services/tech_electric_fence.png'
WHERE type = 'SERVICE' AND LOWER(title) LIKE '%cerca%';

UPDATE "MasterConcept" 
SET "imageUrl" = 'https://catalogo.ccurity.com.mx/images/services/tech_conduit.png'
WHERE type = 'SERVICE' AND (LOWER(title) LIKE '%tuberia%' OR LOWER(title) LIKE '%tubería%' OR LOWER(title) LIKE '%canalizacion%' OR LOWER(title) LIKE '%charola%');

UPDATE "MasterConcept" 
SET "imageUrl" = 'https://catalogo.ccurity.com.mx/images/services/tech_trenching.png'
WHERE type = 'SERVICE' AND (LOWER(title) LIKE '%ranurado%' OR LOWER(title) LIKE '%registro%' OR LOWER(title) LIKE '%cimentación%' OR LOWER(title) LIKE '%soporte%');

UPDATE "MasterConcept" 
SET "imageUrl" = 'https://catalogo.ccurity.com.mx/images/services/tech_gps_tracking.png'
WHERE type = 'SERVICE' AND (LOWER(title) LIKE '%rastreo%' OR LOWER(title) LIKE '%gps%');

-- Fallback para los que no entraron en las categorías anteriores
UPDATE "MasterConcept" 
SET "imageUrl" = 'https://catalogo.ccurity.com.mx/images/services/tech_infrastructure.png'
WHERE type = 'SERVICE' AND ("imageUrl" IS NULL OR "imageUrl" = '');
