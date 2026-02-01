-- SQL Fix for Missing Article Content & Images
-- Run this in your Supabase SQL Editor to populate the 'content' and 'image_url' fields

UPDATE public.articles
SET 
  image_url = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
  gallery_images = '[
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop"
  ]'::jsonb,
  content = '## Scaling Energy Access in Emerging Markets

The recent $18M funding round marks a pivotal moment for Konexa and the broader energy landscape in Africa. This capital injection is not just about growth; it''s about **validating a model** that combines commercial viability with profound social impact.

### Strategic Expansion Plans
We are focusing our expansion on three key areas:
1. **Infrastructure Modernization**: Upgrading existing distribution networks with smart grid technology.
2. **Renewable Integration**: Incorporating distributed solar and battery storage directly into the local grid.
3. **Smart Metering**: Ensuring transparency and reliability for every connection.

> "Our mission has always been to prove that reliable, clean energy can be delivered at scale in markets that others have overlooked." — *Pradeep Pursnani, CEO*

### Impact Metrics
With this funding, we aim to double our current connection base while reducing technical and commercial losses by an additional 15% across our operational hubs. This reflects our commitment to **sustainable development** and economic empowerment for the communities we serve.'
WHERE slug = 'series-a-funding';

UPDATE public.articles
SET 
  image_url = 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
  gallery_images = '[
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200&auto=format&fit=crop"
  ]'::jsonb,
  content = '## A New Era for Kaduna''s Energy Grid

The partnership between Konexa and Kaduna Electric represents a landmark Public-Private Partnership (PPP) model for sub-Saharan Africa. By working together, we are addressing the root causes of energy instability.

### Technical Milestones
- **Substation Upgrades**: Improving voltage stability and safety.
- **Phase Balancing**: Reducing technical losses across the low-voltage network.
- **24/7 Monitoring**: Implementing real-time IoT sensors for predictive maintenance.

This collaboration ensures that industrial hubs in Kaduna can now operate without the constant noise and pollution of diesel generators, unlocking significant economic potential for the region.'
WHERE slug = 'kaduna-partnership';

UPDATE public.articles
SET 
  image_url = 'https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?q=80&w=1200&auto=format&fit=crop',
  gallery_images = '[
    "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop"
  ]'::jsonb,
  content = '## Mini-Grids: The Catalyst for Industrialization

Historically, industrial growth in Africa has been stifled by the unreliability of the central grid. Our latest whitepaper explores how decentralized mini-grids are changing the narrative.

### Why Mini-Grids?
Because they are **fast, flexible, and resilient**. Unlike traditional grid extensions that can take years, a high-capacity mini-grid can be commissioned in months, providing immediate relief to commercial clusters.

We are seeing a 40% uptick in local manufacturing output in areas where Konexa has implemented integrated distribution solutions. This is the future of African industrialization.'
WHERE slug = 'mini-grids-industry';

UPDATE public.articles
SET 
  image_url = 'https://images.unsplash.com/photo-1466611653911-95282fc3656b?q=80&w=1200&auto=format&fit=crop',
  gallery_images = '[
    "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1200&auto=format&fit=crop"
  ]'::jsonb,
  content = '## 2023 Sustainability Highlights

At Konexa, we measure success not just in megawatts, but in **tons of carbon avoided** and **lives improved**. Our 2023 Impact Report outlines our progress toward a net-zero future.

### Key Achievements
- **40,000 Tons of CO2 Displaced**: Equivalent to taking 8,500 cars off the road.
- **Renewable Energy Share**: 40% of our distribution mix now comes from clean sources.
- **Community Engagement**: Over 50 townhall meetings held to ensure local alignment.

We continue to push the boundaries of what a modern utility can achieve for the environment.'
WHERE slug = 'impact-report-2023';

UPDATE public.articles
SET 
  image_url = 'https://images.unsplash.com/photo-1521791136064-7986c29596dd?q=80&w=1200&auto=format&fit=crop',
  gallery_images = '[]'::jsonb,
  content = '## Advising on the Future of National Electrification

CEO Pradeep Pursnani''s appointment to the Presidential Advisory Committee is a testament to the innovative work the Konexa team is doing on the ground.

### Focus Areas for the Committee
1. **Regulatory Reform**: Streamlining the licensing process for private developers.
2. **Incentivizing Investment**: Creating a stable framework for international capital.
3. **Technical Standards**: Harmonizing grid codes for mini-grid integration.

This appointment allows Konexa to contribute its operational expertise to the national policy dialogue, ensuring that the lessons learned from our projects benefit the entire country.'
WHERE slug = 'presidential-committee';
