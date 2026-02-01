-- PREMIUM PROJECTS PORTFOLIO: 15 HIGH-FIDELITY ENTRIES
-- This script provides a diverse, realistic portfolio for testing pagination and layout.

-- 1. Ensure schema includes standard fields
-- (Assuming projects table exists with title, slug, description, location, featured, stats, image_url)

-- 2. Clear old placeholders
DELETE FROM public.projects;

-- 3. Insert 15 Premium Projects
INSERT INTO public.projects (title, slug, description, content, location, featured, status, stats, image_url) VALUES
(
  'Kaduna Integrated Grid Modernization', 
  'kaduna-grid-modernization', 
  'Our flagship project focused on transforming the distribution network through integrated grid management, smart metering, and decentralized renewable energy sources.', 
  '## Project Vision
To create a blueprint for the energy company of the future by integrating renewable generation with modernized distribution infrastructure.

### Technical Implementation
- **Smart Metering**: 100% AMI deployment.
- **Substation Upgrades**: 15 main transformers replaced.
- **Renewable Mix**: 20MW solar PV integrated into the local grid.

The project has already resulted in 24/7 power availability for his key industrial clusters in Kaduna.',
  'Kaduna, Nigeria', true, 'ongoing',
  '{"Connections": "50,000+", "LossReduction": "30%", "Uptime": "99.8%"}', 
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200'
),
(
  'Northern Sun Utility-Scale Solar Park', 
  'northern-sun-solar', 
  'A massive 50MW solar installation providing clean power directly to industrial manufacturing clusters in Northern Nigeria.', 
  '## Powering the North
The Northern Sun project is one of the largest private utility-scale solar installations in the region, designed to buffer the energy costs of large-scale manufacturing.

### Core Objectives
1. Reduce carbon footprint of heavy industry.
2. Stabilize energy costs for textile and agro-processing hubs.
3. Create a replicable model for merchant power generation.',
  'Kano, Nigeria', true, 'ongoing',
  '{"Capacity": "50MW", "CarbonSaved": "25k Tons", "CommercialUsers": "120"}', 
  'https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?q=80&w=1200'
),
(
  'Lagos Alpha Micro-Grid Cluster', 
  'lagos-alpha-cluster', 
  'A network of highly-efficient micro-grids serving mid-tier industrial parks, reducing diesel dependency by 80%.', 
  '## Targeted Efficiency
Traditional grid infrastructure in Lagos is often overloaded. Alpha Cluster bypasses these bottlenecks with localized generation and storage.

### Key Benefits
- **Zero Downtime**: Redundant battery storage ensures seamless transition.
- **Predictable Billing**: Flat-rate energy for SMEs.
- **Cleaner Air**: Removing hundreds of localized diesel generators from the industrial park.',
  'Lagos, Nigeria', true, 'completed',
  '{"DieselOffset": "80%", "OperationalSites": "12", "SMEImpacted": "450"}', 
  'https://images.unsplash.com/photo-1558444479-c8f0105282bb?q=80&w=1200'
),
(
  'East African Agricultural Micro-Grid Initiative', 
  'east-africa-agri-grid', 
  'Specialized solar micro-grids providing reliable power for irrigation and cold storage, revolutionizing local farming yields.', 
  '## Empowering the Smallholder
By bringing power to the point of production, we are helping farmers shift from subsistence to commercial agriculture.

### Infrastructure Features
- **Solar Irrigation**: Scalable pump systems.
- **Cold Storage Hubs**: Community-managed refrigeration.
- **Processing Centers**: Power for milling and grating machines.',
  'Kampala, Uganda', false, 'ongoing',
  '{"FarmersReached": "5,000", "YieldIncrease": "40%", "WaterPumped": "2M Liters"}', 
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200'
),
(
  'Port Harcourt Smart Metering Rollout', 
  'ph-smart-metering', 
  'Wide-scale deployment of advanced IoT-enabled smart meters to ensure billing transparency and grid stability.', 
  '## Transparency First
Smart meters are the bedrock of a modern utility. They eliminate the friction of estimated billing and provide the data needed for real-time grid balancing.',
  'Rivers State, Nigeria', false, 'completed',
  '{"MetersDeployed": "25,000", "RevenueRecovery": "+45%", "DataPoints/Day": "1.2M"}', 
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200'
),
(
  'Benin City Industrial Hybrid Project', 
  'benin-industrial-hybrid', 
  'A sophisticated hybrid system combining local utility grid with on-site solar and battery storage for 24/7 reliability.', 
  '## Hybrid Innovation
The Benin project proves that existing grids can be "augmented" to reach 99%+ reliability by positioning renewable energy and storage at the industrial load center.',
  'Edo, Nigeria', false, 'ongoing',
  '{"Reliability": "24/7", "SolarShare": "45%", "BatteryStorage": "2.5MWh"}', 
  'https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200'
),
(
  'Sustainable Schools Solar Program', 
  'sustainable-schools-solar', 
  'Equipping educational institutions with reliable renewable energy to support digital learning and evening study.', 
  '## Powering Education
Lack of lighting is a major barrier to evening education. Our school solar kits provide silent, clean power that keeps the classrooms running.',
  'Abuja, Nigeria', false, 'completed',
  '{"SchoolsDigitalized": "15", "StudentsImpacted": "12,000", "AnnualSavings": "$180k"}', 
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200'
),
(
  'Rural Electrification Phase III', 
  'rural-electrification-iii', 
  'Extending the reach of clean power to remote villages that were previously completely off-grid.', 
  '## Reaching the Last Mile
Phase III focuses on terrain that was traditionally considered "unreachable" by the national grid. We are using a hub-and-spoke mini-grid model.',
  'Ogun State, Nigeria', false, 'ongoing',
  '{"VillagesPowered": "8", "NewConnections": "1,200", "LocalJobsCreated": "45"}', 
  'https://images.unsplash.com/photo-1521791136064-7986c29596dd?q=80&w=1200'
),
(
  'Mining Sector Clean Energy Bridge', 
  'mining-clean-bridge', 
  'Decarbonizing extractive operations by integrating high-capacity solar arrays into heavy industrial grids.', 
  '## Green Extraction
Mining is energy-intensive. By bridging the gap with utility-scale solar, we help mines meet their ESG targets while reducing cost-per-ounce.',
  'Jos, Nigeria', false, 'planned',
  '{"PeakCapacity": "15MW", "CO2Reduction": "12k Tons", "GridStability": "+25%"}', 
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200'
),
(
  'Konexa Innovation Lab & Test Grid', 
  'konexa-test-grid', 
  'A dedicated facility for testing next-generation inverter technology and grid balancing software.', 
  '## R&D Excellence
Our innovation lab is where we stress-test the hardware and software that will power Africa''s smart grids of the future.',
  'Ibadan, Nigeria', false, 'ongoing',
  '{"PatentsPending": "3", "TechValidated": "12", "R&DInvestment": "$1.5M"}', 
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200'
),
(
  'Coastal Fisheries Cold Chain Power', 
  'coastal-fisheries-power', 
  'Stabilizing the power supply for cold storage facilities along the coastline to reduce post-catch losses.', 
  '## Reducing Food Waste
Reliable power means fish can be kept fresh longer, increasing the market value of the catch and supporting coastal livelihoods.',
  'Calabar, Nigeria', false, 'planned',
  '{"WasteReduced": "35%", "FishermenImpacted": "800", "EnergyUptime": "98%"}', 
  'https://images.unsplash.com/photo-1558444479-72f96062f62b?q=80&w=1200'
),
(
  'Urban Resilience Grid Retrofit', 
  'urban-resilience-retrofit', 
  'Upgrading aging urban infrastructure with modern automated switching and protection systems.', 
  '## Modernizing the City
By retrofitting existing cables and transformers with digital sensors, we turn a "dumb" grid into a smart, self-healing network.',
  'Abuja, Nigeria', false, 'ongoing',
  '{"ResponseTime": "-90%", "FaultDetection": "Auto", "InfrastructureAge": "30+ yrs"}', 
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200'
),
(
  'Konexa Training Center Electrification', 
  'konexa-training-center', 
  'Powering the next generation of energy engineers with a state-of-the-art off-grid technical campus.', 
  '## Building Capacity
The training center is powered 100% by renewables, serving as a living laboratory for our students and technicians.',
  'Lagos, Nigeria', false, 'completed',
  '{"EngineersTrained": "500/year", "SelfSufficiency": "100%", "TrainingHours": "40k/yr"}', 
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200'
),
(
  'Integrated Hospital Power Plan', 
  'integrated-hospital-power', 
  'Ensuring critical medical infrastructure never loses power through intelligent battery backups and solar priority routing.', 
  '## Powering Healthcare
In a hospital, a blackout is more than an inconvenience; it is a life-critical event. Our system ensures surgery and intensive care never go dark.',
  'Enugu, Nigeria', false, 'ongoing',
  '{"LivesProtected": "50k+", "ZeroBlackoutPolicy": "Active", "EmergencySupply": "72hrs"}', 
  'https://images.unsplash.com/photo-1538108176634-8b2c47179ee1?q=80&w=1200'
),
(
  'Smart City Lighting Network', 
  'smart-city-lighting', 
  'Implementing an autonomous, solar-powered lighting system across major industrial corridors for safety and efficiency.', 
  '## Safety Through Light
Our autonomous solar streetlights use motion sensors to conserve energy while ensuring that roads are lit exactly when needed.',
  'Phnom Penh, Cambodia (Pilot)', false, 'planned',
  '{"LightsInstalled": "1,500", "EnergyCost": "$0", "SafetyRating": "+60%"}', 
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
);
