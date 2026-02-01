-- COMPREHENSIVE NEWS CONTENT RE-SEED
-- This script purges all existing articles and re-populates with high-quality, fully-detailed content.
-- Run this in your Supabase SQL Editor.

-- 1. Ensure schema is ready
ALTER TABLE public.articles ADD COLUMN IF NOT EXISTS gallery_images JSONB DEFAULT '[]'::jsonb;

-- 2. Clear existing articles to start fresh
TRUNCATE TABLE public.articles RESTART IDENTITY;

-- 3. Insert Premium Articles
INSERT INTO public.articles (title, slug, excerpt, content, category, author, published_at, image_url, gallery_images) VALUES
(
  'Konexa Secures $18M Funding to Accelerate Renewable Energy Distribution', 
  'series-a-funding', 
  'This landmark funding round will enable the expansion of our integrated distribution model to three new states, bringing reliable power to over 50,000 new customers.', 
  '## Scaling Energy Access in Emerging Markets

The recent $18M funding round marks a pivotal moment for Konexa and the broader energy landscape in Africa. This capital injection is not just about growth; it''s about **validating a model** that combines commercial viability with profound social impact.

### Strategic Expansion Plans
We are focusing our expansion on three key areas:
1. **Infrastructure Modernization**: Upgrading existing distribution networks with smart grid technology.
2. **Renewable Integration**: Incorporating distributed solar and battery storage directly into the local grid.
3. **Smart Metering**: Ensuring transparency and reliability for every connection.

> "Our mission has always been to prove that reliable, clean energy can be delivered at scale in markets that others have overlooked." — *Pradeep Pursnani, CEO*

### Impact Metrics
With this funding, we aim to double our current connection base while reducing technical and commercial losses by an additional 15% across our operational hubs. This reflects our commitment to **sustainable development** and economic empowerment for the communities we serve.',
  'Company News', 
  'Konexa Team', 
  '2024-10-24', 
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
  '[
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop"
  ]'::jsonb
),
(
  'Partnering with Kaduna Electric for Grid Modernization', 
  'kaduna-partnership', 
  'Strategic partnership aimed at revitalizing the distribution infrastructure using smart grid technology.', 
  '## A New Era for Kaduna''s Energy Grid

The partnership between Konexa and Kaduna Electric represents a landmark Public-Private Partnership (PPP) model for sub-Saharan Africa. By working together, we are addressing the root causes of energy instability.

### Technical Milestones
- **Substation Upgrades**: Improving voltage stability and safety.
- **Phase Balancing**: Reducing technical losses across the low-voltage network.
- **24/7 Monitoring**: Implementing real-time IoT sensors for predictive maintenance.

This collaboration ensures that industrial hubs in Kaduna can now operate without the constant noise and pollution of diesel generators, unlocking significant economic potential for the region.',
  'Partnerships', 
  'Konexa Team', 
  '2024-09-15', 
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
  '[
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200&auto=format&fit=crop"
  ]'::jsonb
),
(
  'The Role of Mini-Grids in Africa''s Industrial Future', 
  'mini-grids-industry', 
  'Exploring how decentralized power generation can drive industrial growth in off-grid areas.', 
  '## Mini-Grids: The Catalyst for Industrialization

Historically, industrial growth in Africa has been stifled by the unreliability of the central grid. Our latest whitepaper explores how decentralized mini-grids are changing the narrative.

### Why Mini-Grids?
Because they are **fast, flexible, and resilient**. Unlike traditional grid extensions that can take years, a high-capacity mini-grid can be commissioned in months, providing immediate relief to commercial clusters.

We are seeing a 40% uptick in local manufacturing output in areas where Konexa has implemented integrated distribution solutions. This is the future of African industrialization.',
  'Industry Insights', 
  'Pradeep Pursnani', 
  '2024-08-02', 
  'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop',
  '[
    "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop"
  ]'::jsonb
),
(
  'Impact Report 2023: 40k Tons of CO2 Eliminated', 
  'impact-report-2023', 
  'A deep dive into our sustainability metrics and the environmental impact of our renewable integration.', 
  '## 2023 Sustainability Highlights

At Konexa, we measure success not just in megawatts, but in **tons of carbon avoided** and **lives improved**. Our 2023 Impact Report outlines our progress toward a net-zero future.

### Key Achievements
- **40,000 Tons of CO2 Displaced**: Equivalent to taking 8,500 cars off the road.
- **Renewable Energy Share**: 40% of our distribution mix now comes from clean sources.
- **Community Engagement**: Over 50 townhall meetings held to ensure local alignment.

We continue to push the boundaries of what a modern utility can achieve for the environment.',
  'Sustainability', 
  'Elena Rodriguez', 
  '2024-07-10', 
  'https://images.unsplash.com/photo-1466611653911-95282fc3656b?q=80&w=1200&auto=format&fit=crop',
  '[
    "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1200&auto=format&fit=crop"
  ]'::jsonb
),
(
  'Konexa Appointed to Presidential Advisory Committee', 
  'presidential-committee', 
  'CEO Pradeep Pursnani selected to advise on national electrification strategies to drive universal energy access.', 
  '## Advising on the Future of National Electrification

CEO Pradeep Pursnani''s appointment to the Presidential Advisory Committee is a testament to the innovative work the Konexa team is doing on the ground.

### Focus Areas for the Committee
1. **Regulatory Reform**: Streamlining the licensing process for private developers.
2. **Incentivizing Investment**: Creating a stable framework for international capital.
3. **Technical Standards**: Harmonizing grid codes for mini-grid integration.

This appointment allows Konexa to contribute its operational expertise to the national policy dialogue, ensuring that the lessons learned from our projects benefit the entire country.',
  'Leadership', 
  'Konexa Team', 
  '2024-06-28', 
  'https://images.unsplash.com/photo-1521791136064-7986c29596dd?q=80&w=1200&auto=format&fit=crop',
  '[]'::jsonb
),
(
  'Scaling Solar Micro-grids in East Africa', 
  'east-africa-solar', 
  'Our expansion into East Africa begins with a cluster of three micro-grids serving agricultural communities.', 
  '## Expanding the Footprint: East Africa

Following our success in Nigeria, Konexa is proud to announce our first cross-border expansion. East Africa presents a unique set of challenges and opportunities for decentralized energy.

### Why Agriculture?
Energy is the greatest bottleneck for East African farmers. By providing reliable power for irrigation and cold storage, we are directly increasing crop yields and reducing post-harvest losses.

Our goal is to commission 15 new micro-grids across the region by the end of 2025.',
  'Expansion', 
  'Marcus Chen', 
  '2024-05-12', 
  'https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?q=80&w=1200&auto=format&fit=crop',
  '[
    "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop"
  ]'::jsonb
),
(
  'The Future of Smart Metering: Beyond Billing', 
  'smart-metering-future', 
  'How advanced data analytics from smart meters are helping us stabilize the grid in real-time.', 
  '## Data: The Silent Fuel of Modern Grids

A smart meter is more than a billing tool; it is a high-frequency sensor that provides the data needed to manage a decentralized "grid of grids."

### Real-time Grid Balancing
By analyzing consumption patterns down to the micro-second, our platform can:
- **Prevent Overloads**: Auto-tripping non-essential loads during peak demand.
- **Direct Solar Flow**: Routing excess solar generation to industrial batteries.
- **Predictive Repair**: Identifying failing transformers before they go dark.

Transparency and data-driven management are the core pillars of the Konexa technical stack.',
  'Technology', 
  'Sarah Johnson', 
  '2024-04-05', 
  'https://images.unsplash.com/photo-1558444479-c8f0105282bb?q=80&w=1200&auto=format&fit=crop',
  '[]'::jsonb
),
(
  'Empowering Women in the Energy Transition', 
  'women-in-energy', 
  'Highlighting our commitment to gender parity and the leadership programs driving change within Konexa.', 
  '## Leadership Without Borders

At Konexa, we believe that the energy transition must be inclusive to be successful. 40% of our technical leadership roles are held by women, and we are aiming for 50% by 2026.

### The "EmpowerGen" Program
Our internal mentorship program, EmpowerGen, provides:
- **Technical Training**: Advanced certifications in grid engineering.
- **Leadership Coaching**: Direct access to executive mentorship.
- **Global Placement**: Opportunities to lead projects in different operational hubs.

Diversity is not just a metric; it is our competitive advantage.',
  'Culture', 
  'Konexa HR', 
  '2024-03-20', 
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop',
  '[]'::jsonb
);
