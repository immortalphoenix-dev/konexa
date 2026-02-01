-- FINAL ROBUST NEWS RESET & PREMIUM RE-SEED
-- This script uses verified Unsplash IDs to ensure high availability of images.

-- 1. Ensure schema 
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS gallery_images JSONB DEFAULT '[]'::jsonb;

-- 2. Clean slate
DELETE FROM public.articles;

-- 3. Insert 8 Premium articles with VERIFIED image IDs
INSERT INTO public.articles (title, slug, excerpt, content, category, author, published_at, image_url, gallery_images) VALUES
(
  'Konexa Secures $18M Funding to Accelerate Renewable Energy Distribution', 
  'series-a-funding', 
  'This landmark funding round will enable the expansion of our integrated distribution model to three new states, bringing reliable power to over 50,000 new customers.', 
  '## Scaling Energy Access in Emerging Markets
The recent $18M funding round marks a pivotal moment for Konexa...',
  'Company News', 'Konexa Team', '2024-10-24', 
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop', -- WORKING
  '[]'::jsonb
),
(
  'Partnering with Kaduna Electric for Grid Modernization', 
  'kaduna-partnership', 
  'Strategic partnership aimed at revitalizing the distribution infrastructure using smart grid technology.', 
  '## A New Era for Kaduna''s Energy Grid...',
  'Partnerships', 'Konexa Team', '2024-09-15', 
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop', -- WORKING
  '[]'::jsonb
),
(
  'The Role of Mini-Grids in Africa''s Industrial Future', 
  'mini-grids-industry', 
  'Exploring how decentralized power generation can drive industrial growth in off-grid areas.', 
  '## Mini-Grids: The Catalyst for Industrialization...',
  'Industry Insights', 'Pradeep Pursnani', '2024-08-02', 
  'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop', -- WORKING
  '[]'::jsonb
),
(
  'Impact Report 2023: 40k Tons of CO2 Eliminated', 
  'impact-report-2023', 
  'A deep dive into our sustainability metrics and the environmental impact of our renewable integration.', 
  '## 2023 Sustainability Highlights...',
  'Sustainability', 'Elena Rodriguez', '2024-07-10', 
  'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1200&auto=format&fit=crop', -- NEW VERIFIED
  '[]'::jsonb
),
(
  'Konexa Appointed to Presidential Advisory Committee', 
  'presidential-committee', 
  'CEO Pradeep Pursnani selected to advise on national electrification strategies.', 
  '## Advising on the Future...',
  'Leadership', 'Konexa Team', '2024-06-28', 
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop', -- NEW VERIFIED
  '[]'::jsonb
),
(
  'Scaling Solar Micro-grids in East Africa', 
  'east-africa-solar', 
  'Our expansion into East Africa begins with a cluster of three micro-grids serving agricultural communities.', 
  '## Expanding the Footprint...',
  'Expansion', 'Marcus Chen', '2024-05-12', 
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop', -- NEW VERIFIED
  '[]'::jsonb
),
(
  'The Future of Smart Metering: Beyond Billing', 
  'smart-metering-future', 
  'How advanced data analytics from smart meters are helping us stabilize the grid in real-time.', 
  '## Data: The Silent Fuel...',
  'Technology', 'Sarah Johnson', '2024-04-05', 
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop', -- NEW VERIFIED
  '[]'::jsonb
),
(
  'Empowering Women in the Energy Transition', 
  'women-in-energy', 
  'Highlighting our commitment to gender parity and the leadership programs driving change.', 
  '## Leadership Without Borders...',
  'Culture', 'Konexa HR', '2024-03-20', 
  'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200&auto=format&fit=crop', -- NEW VERIFIED
  '[]'::jsonb
);
