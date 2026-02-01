-- 1. FIX SPECIFIC PROJECT IMAGES WITH VERIFIED PREMIUM ASSETS
UPDATE projects
SET image_url = '/northern-sun-premium.png'
WHERE title = 'Northern Sun Utility-Scale Solar Park';

UPDATE projects
SET image_url = '/rural-elec-premium.png'
WHERE title = 'Rural Electrification Phase III';

UPDATE projects
SET image_url = '/coastal-fish-premium.png'
WHERE title = 'Coastal Fisheries Cold Chain Power';

UPDATE projects
SET image_url = '/hospital-power-premium.png'
WHERE title = 'Integrated Hospital Power Plan';

-- 2. ENFORCE STRICT 2-FEATURED-PROJECTS LIMIT
-- This ensures only the two most recently updated projects remain featured.
UPDATE projects
SET featured = false
WHERE id NOT IN (
  SELECT id
  FROM projects
  WHERE featured = true
  ORDER BY updated_at DESC, created_at DESC
  LIMIT 2
);
