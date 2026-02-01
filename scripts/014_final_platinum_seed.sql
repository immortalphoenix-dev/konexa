-- FINAL PLATINUM PORTFOLIO: 10 PROJECTS
-- This script performs a total reset and inserts 10 projects with valid Unsplash URLs.

-- 1. TOTAL RESET
TRUNCATE public.projects;

-- 2. INSERT 10 PROFESSIONAL PROJECTS
INSERT INTO public.projects (title, slug, description, content, location, featured, status, stats, image_url, created_at, updated_at) VALUES
(
  'Kaduna Integrated Distribution Project', 
  'kaduna-integrated-distribution', 
  'Our flagship project in Nigeria focuses on transforming the distribution network through integrated grid management, smart metering, and decentralized renewable energy sources to ensure 24/7 reliability for industrial and residential consumers.', 
  '## Delivering Reliable Power
The Kaduna Integrated Distribution Project is a cornerstone of our efforts to modernize energy infrastructure in West Africa. By integrating advanced grid management with localized renewable generation, we have stabilized power for thousands.

### Technical Achievements
*   **Grid Management**: Real-time load balancing using automated AI systems.
*   **Renewable Mix**: Integration of decentralized solar parks into the primary distribution network.
*   **Infrastructure**: Replacement of over 15 high-voltage transformers.',
  'Kaduna, Nigeria', true, 'ongoing',
  '{"Connections": "50,000+", "LossReduction": "30%"}', 
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200',
  NOW() - INTERVAL '1 hour', NOW()
),
(
  'Abuja Commercial Mini-Grid', 
  'abuja-commercial-mini-grid', 
  'Implementation of a high-capacity solar mini-grid serving over 400 commercial enterprises in Abuja''s central market district. The project has eliminated the need for diesel generators for local vendors, reducing operational costs by 45%.', 
  '## Powering the Marketplace
By removing the reliance on expensive and noisy diesel generators, we are enabling small and medium enterprises to thrive in Abuja.

### Core Benefits
*   **100% Renewable**: Powered entirely by a centralized solar PV and battery storage hub.
*   **Economic Impact**: Local vendors report up to 45% reduction in their monthly energy costs.
*   **Environmental**: Zero noise and zero CO2 emissions at the point of use.',
  'Abuja, Nigeria', true, 'completed',
  '{"RenewableMix": "100%", "SMESavings": "$1.2M/yr"}', 
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200',
  NOW() - INTERVAL '2 hours', NOW()
),
(
  'Lagos Alpha Micro-Grid Cluster', 
  'lagos-alpha-cluster', 
  'A high-efficiency micro-grid network serving Lagos industrial corridors, reducing industrial diesel dependency.', 
  'Industrial-grade power reliability for the manufacturing sector.',
  'Lagos, Nigeria', false, 'completed',
  '{"DieselOffset": "80%"}', 
  'https://images.unsplash.com/photo-1558444479-72f96062f62b?q=80&w=1200',
  NOW() - INTERVAL '3 hours', NOW()
),
(
  'Coastal Fisheries Cold Chain Power', 
  'coastal-fisheries-power', 
  'Clean power for cold storage facilities along the Atlantic coastline to reduce post-catch losses for local fishermen.', 
  'Protecting the livelihoods of coastal communities through reliable refrigeration.',
  'Calabar, Nigeria', false, 'ongoing',
  '{"WasteReduced": "35%"}', 
  'https://images.unsplash.com/photo-1544333323-537245bb9930?q=80&w=1200',
  NOW() - INTERVAL '4 hours', NOW()
),
(
  'Integrated Hospital Power Plan', 
  'integrated-hospital-power', 
  'Critical energy security for regional healthcare centers using intelligent battery backup and solar priority routing.', 
  'Ensuring life-saving equipment never fails due to grid instability.',
  'Enugu, Nigeria', false, 'ongoing',
  '{"LivesProtected": "50k+"}', 
  'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200',
  NOW() - INTERVAL '5 hours', NOW()
),
(
  'Rural Electrification Phase III', 
  'rural-electrification-iii', 
  'Deployment of village-level solar hubs to bring first-time electricity to remote rural populations.', 
  'Bridging the energy gap in the most hard-to-reach areas.',
  'Ogun State, Nigeria', false, 'ongoing',
  '{"VillagesPowered": "8%"}', 
  'https://images.unsplash.com/photo-1542343633-ce7a468d6604?q=80&w=1200',
  NOW() - INTERVAL '6 hours', NOW()
),
(
  'Northern Sun Utility-Scale Solar Park', 
  'northern-sun-solar', 
  'A utility-scale solar facility providing bulk power to the northern industrial manufacturing hubs.', 
  'Large-scale renewable infrastructure for the manufacturing sector.',
  'Kano, Nigeria', false, 'ongoing',
  '{"Capacity": "50MW"}', 
  'https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?q=80&w=1200',
  NOW() - INTERVAL '7 hours', NOW()
),
(
  'Port Harcourt Smart Metering Rollout', 
  'ph-smart-metering', 
  'Advanced IoT-enabled smart meter deployment to improve utility billing transparency.', 
  'Digital transformation of the utility customer experience.',
  'Rivers State, Nigeria', false, 'completed',
  '{"Accuracy": "99.9%"}', 
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200',
  NOW() - INTERVAL '8 hours', NOW()
),
(
  'Benin City Industrial Hybrid', 
  'benin-industrial-hybrid', 
  'A resilient hybrid power system combining grid, solar, and battery storage for 24/7 reliability.', 
  'The perfect mix for heavy industrial operations.',
  'Edo, Nigeria', false, 'ongoing',
  '{"Uptime": "99.9%"}', 
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200',
  NOW() - INTERVAL '9 hours', NOW()
),
(
  'East African Agricultural Micro-Grid', 
  'east-africa-agri-grid', 
  'Specialized solar solutions for commercial agriculture and irrigation systems.', 
  'Powering the future of African agriculture.',
  'Kampala, Uganda', false, 'planned',
  '{"Efficiency": "+40%"}', 
  'https://images.unsplash.com/photo-1500382017468-9049fee74acd?q=80&w=1200',
  NOW() - INTERVAL '10 hours', NOW()
);
