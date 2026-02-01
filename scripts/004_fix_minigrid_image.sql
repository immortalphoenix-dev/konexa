-- Surgical Fix for Mini-Grids Article Image
-- Run this in your Supabase SQL Editor to fix the missing 3rd image

UPDATE public.articles
SET 
  image_url = 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop',
  gallery_images = '[
    "https://images.unsplash.com/photo-1466611653911-95282fc3656b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop"
  ]'::jsonb
WHERE slug = 'mini-grids-industry';
