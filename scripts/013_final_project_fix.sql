-- 1. START FRESH (Clear all projects to remove any unwanted entries)
TRUNCATE projects;

-- 2. INSERT THE 2 FEATURED PROJECTS (Exactly as seen in your screenshot)
INSERT INTO projects (title, slug, description, content, location, featured, status, stats, image_url, created_at, updated_at) VALUES
(
  'Kaduna Integrated Distribution Project',
  'kaduna-distribution-project',
  'Our flagship project in Nigeria focuses on transforming the distribution network through integrated grid management, smart metering, and decentralized renewable energy sources to ensure 24/7 reliability for industrial and residential consumers.',
  '## Project Overview
This flagship initiative in Kaduna represents the future of utility management in Africa. By combining grid modernization with renewable energy integration, we are delivering unprecedented reliability to industrial clusters.

### Key Impact
- **24/7 Power**: Near-zero downtime for critical industrial partners.
- **Smart Infrastructure**: Full deployment of AMI metering and remote monitoring.
- **Renewable Integration**: Localized solar generation buffering the primary grid.',
  'Kaduna, Nigeria', true, 'ongoing',
  '{"Connections": "50,000+", "LossReduction": "30%"}',
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200',
  NOW() - INTERVAL '1 day', NOW()
),
(
  'Abuja Commercial Mini-Grid',
  'abuja-commercial-mini-grid',
  'Implementation of a high-capacity solar mini-grid serving over 400 commercial enterprises in Abuja''s central market district. The project has eliminated the need for diesel generators for local vendors, reducing operational costs by 45%.',
  '## Market Transformation
Serving the heart of Abuja''s commercial district, this mini-grid provides a cleaner, cheaper, and more reliable alternative to individual diesel generators.

### Commercial Benefits
- **Cost Reduction**: 45% lower energy costs for local traders.
- **Environmental Impact**: Significant reduction in noise and air pollution.
- **Scalability**: Designed to expand as the market district grows.',
  'Abuja, Nigeria', true, 'completed',
  '{"RenewableMix": "100%", "SMESavings": "$1.2M/yr"}',
  'https://images.unsplash.com/photo-1592832122594-c0c6bad718b1?q=80&w=1200',
  NOW() - INTERVAL '2 days', NOW()
);

-- 3. INSERT THE 4 PROJECTS WITH FIXED IMAGES
INSERT INTO projects (title, slug, description, content, location, featured, status, stats, image_url, created_at, updated_at) VALUES
(
  'Lagos Alpha Micro-Grid Cluster',
  'lagos-alpha-cluster',
  'A network of highly-efficient micro-grids serving mid-tier industrial parks, reducing diesel dependency by 80%.',
  'Localized generation for Lagos industries.',
  'Lagos, Nigeria', false, 'completed',
  '{"DieselOffset": "80%"}',
  'https://images.unsplash.com/photo-1558444479-c8f0105282bb?q=80&w=1200',
  NOW(), NOW()
),
(
  'Coastal Fisheries Cold Chain Power',
  'coastal-fisheries-power',
  'Stabilizing the power supply for cold storage facilities along the coastline to reduce post-catch losses.',
  'Supporting coastal livelihoods with reliable refrigeration.',
  'Calabar, Nigeria', false, 'planned',
  '{"WasteReduced": "35%"}',
  'https://images.unsplash.com/photo-1558444479-72f96062f62b?q=80&w=1200',
  NOW(), NOW()
),
(
  'Integrated Hospital Power Plan',
  'integrated-hospital-power',
  'Ensuring critical medical infrastructure never loses power through intelligent battery backups and solar priority routing.',
  'Life-critical power security for regional hospitals.',
  'Enugu, Nigeria', false, 'ongoing',
  '{"LivesProtected": "50k+"}',
  'https://images.unsplash.com/photo-1538108176634-8b2c47179ee1?q=80&w=1200',
  NOW(), NOW()
),
(
  'Rural Electrification Phase III',
  'rural-electrification-iii',
  'Extending the reach of clean power to remote villages that were previously completely off-grid.',
  'Reaching the last mile with solar-hub technology.',
  'Ogun State, Nigeria', false, 'ongoing',
  '{"VillagesPowered": "8"}',
  'https://images.unsplash.com/photo-1521791136064-7986c29596dd?q=80&w=1200',
  NOW(), NOW()
);
