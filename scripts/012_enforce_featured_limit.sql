-- ENFORCE STRICT 2-FEATURED-PROJECTS LIMIT
-- This script un-features all but the two most recently updated/created featured projects.

UPDATE projects
SET featured = false
WHERE id NOT IN (
  SELECT id
  FROM projects
  WHERE featured = true
  ORDER BY updated_at DESC, created_at DESC
  LIMIT 2
);
