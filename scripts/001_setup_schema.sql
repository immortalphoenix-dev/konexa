-- Konexa Database Schema
-- Run this in your Supabase SQL editor to set up the database

-- Team Members Table
CREATE TABLE IF NOT EXISTS public.team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  title TEXT,
  description TEXT,
  image_url TEXT,
  category TEXT NOT NULL DEFAULT 'management', -- 'executive' or 'management'
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add unique constraint to team_members.name if it doesn't exist (for idempotency)
DO $$ BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM information_schema.table_constraints
        WHERE table_name = 'team_members'
          AND constraint_name = 'team_members_name_key'
    ) THEN
        ALTER TABLE public.team_members ADD CONSTRAINT team_members_name_key UNIQUE (name);
    END IF;
EXCEPTION
    WHEN duplicate_object THEN NULL;
END $$;

-- Projects Table
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  content TEXT,
  location TEXT,
  image_url TEXT,
  stats JSONB DEFAULT '{}',
  featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Articles Table
CREATE TABLE IF NOT EXISTS public.articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  image_url TEXT,
  category TEXT,
  author TEXT,
  published_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  location TEXT,
  service_interest TEXT,
  message TEXT,
  status TEXT DEFAULT 'new', -- 'new', 'read', 'responded'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  subscribed BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Services Table
CREATE TABLE IF NOT EXISTS public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  subtitle TEXT,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  features JSONB DEFAULT '[]',
  stats JSONB DEFAULT '[]',
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Ensure columns exist if table was created in an older version of the script
ALTER TABLE public.services ADD COLUMN IF NOT EXISTS subtitle TEXT;
ALTER TABLE public.services ADD COLUMN IF NOT EXISTS stats JSONB DEFAULT '[]';

-- Enable Row Level Security
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

-- Note: Dropping policies if they exist to allow re-running the script
DROP POLICY IF EXISTS "Allow public read access to team_members" ON public.team_members;
DROP POLICY IF EXISTS "Allow public read access to projects" ON public.projects;
DROP POLICY IF EXISTS "Allow public read access to articles" ON public.articles;
DROP POLICY IF EXISTS "Allow public read access to services" ON public.services;
DROP POLICY IF EXISTS "Allow public insert to contacts" ON public.contacts;
DROP POLICY IF EXISTS "Allow public insert to newsletter" ON public.newsletter_subscribers;


-- RLS Policies for public read access
CREATE POLICY "Allow public read access to team_members" ON public.team_members FOR SELECT USING (true);
CREATE POLICY "Allow public read access to projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Allow public read access to articles" ON public.articles FOR SELECT USING (true);
CREATE POLICY "Allow public read access to services" ON public.services FOR SELECT USING (true);

-- RLS Policies for contact submissions (anyone can insert)
CREATE POLICY "Allow public insert to contacts" ON public.contacts FOR INSERT WITH CHECK (true);

-- RLS Policies for newsletter (anyone can insert)
CREATE POLICY "Allow public insert to newsletter" ON public.newsletter_subscribers FOR INSERT WITH CHECK (true);

-- Update team members with professional placeholder image URLs
-- Insert sample team members (using ON CONFLICT to update everything including images)
INSERT INTO public.team_members (name, role, title, description, category, order_index, image_url) VALUES
('Norman Villarina', 'EXECUTIVE CHAIRMAN', 'Executive Chairman', 'Over 20 years of experience in energy investment and infrastructure development globally.', 'executive', 1, 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop'),
('Pradeep Pursnani', 'CHIEF EXECUTIVE OFFICER', 'CEO', 'Dedicated to scaling impact and commercial viability in emerging energy markets.', 'executive', 2, 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop'),
('Prof. Ignacio J. Pérez-Arriaga', 'BOARD DIRECTOR & ADVISOR', 'Board Director & Advisor', 'World-renowned expert in power system regulation and electrification planning.', 'executive', 3, 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop'),
('Sarah Johnson', 'CHIEF OPERATING OFFICER', 'COO', 'Leading operational excellence across all Konexa projects.', 'management', 1, 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'),
('Michael Chen', 'FINANCE DIRECTOR', 'Finance Director', 'Expert in project finance and sustainable investment strategies.', 'management', 2, 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'),
('David Okafor', 'REGIONAL DIRECTOR', 'Regional Director', 'Deep expertise in African energy markets and local partnerships.', 'management', 3, 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=400&auto=format&fit=crop'),
('Elena Rodriguez', 'HEAD OF SUSTAINABILITY', 'Head of Sustainability', 'Driving ESG initiatives and climate action strategies.', 'management', 4, 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop')
ON CONFLICT (name) DO UPDATE SET
role = EXCLUDED.role,
title = EXCLUDED.title,
description = EXCLUDED.description,
category = EXCLUDED.category,
order_index = EXCLUDED.order_index,
image_url = EXCLUDED.image_url;

-- Insert sample services
INSERT INTO public.services (title, subtitle, slug, description, icon, features, stats, order_index) VALUES
('Intelligent Network Planning', 'Data-Driven Grid Design', 'network-planning', 'We use advanced data analytics and geospatial mapping to design resilient distribution networks tailored to local demand profiles. By forecasting load growth and identifying stress points, we ensure capital investment goes exactly where it''s needed most.', 'BarChart3', '["Geospatial Demand Mapping", "Load Flow Analysis", "Resiliency Planning", "Capital Efficiency Optimization"]', '[{"label": "Planning Accuracy", "value": "98%"}, {"label": "CapEx Efficiency", "value": "+25%"}]', 1),
('Technical Loss Reduction', 'Optimizing Electron Flow', 'technical-loss-reduction', 'We minimize energy waste during transmission and distribution through state-of-the-art infrastructure upgrades. This involves replacing inefficient transformers, reconductoring lines, and balancing phases to ensure more power reaches the end consumer.', 'Zap', '["Transformer Upgrades", "Reactive Power Compensation", "Phase Balancing", "Line Loss Minimization"]', '[{"label": "Loss Reduction", "value": "30%"}, {"label": "Grid Stability", "value": "High"}]', 2),
('Commercial Loss Reduction', 'Revenue Assurance & Transparency', 'commercial-loss-reduction', 'Implementing 100% smart metering and digital billing systems to ensure accurate revenue collection. We eliminate estimated billing, reduce theft, and provide customers with absolute transparency over their usage.', 'ShieldCheck', '["100% Smart Metering (AMI)", "Anti-Theft Detection", "Automated Billing", "Digital Payments"]', '[{"label": "Collection Efficiency", "value": "95%+"}, {"label": "Billing Accuracy", "value": "100%"}]', 3),
('Energy Access for All', 'Reaching the Last Mile', 'energy-access', 'We are committed to universal access. We extend the grid and develop off-grid solutions (mini-grids) to reach underserved rural and peri-urban communities that have been historically bypassed by traditional utilities.', 'Leaf', '["Grid Extension", "Solar Mini-Grids", "Rural Electrification", "Affordable Connections"]', '[{"label": "New Connections", "value": "10k/yr"}, {"label": "Communities Served", "value": "50+"}]', 4),
('Customer Centricity', 'Putting People First', 'customer-centricity', 'We treat electricity as a service, not just a commodity. Our 24/7 support centers, flexible payment options, and community engagement programs ensure that our customers are heard, respected, and empowered.', 'Users', '["24/7 Call Center", "Mobile App Support", "Community Townhalls", "Flexible Payment Plans"]', '[{"label": "Customer Satisfaction", "value": "4.5/5"}, {"label": "Response Time", "value": "<1hr"}]', 5),
('Complementary Generation', 'Distributed Renewable Power', 'generation', 'We don''t just distribute power; we generate it where it''s needed. By integrating distributed renewable sources like solar PV and small hydro directly into the distribution network, we bypass transmission bottlenecks and ensure reliability.', 'Leaf', '["Embedded Solar PV", "Battery Energy Storage (BESS)", "Small Hydro", "Diesel Displacement"]', '[{"label": "Renewable Mix", "value": "40%"}, {"label": "CO2 Avoided", "value": "High"}]', 6),
('Proprietary Technology', 'The Konexa Digital Platform', 'technology', 'Our operations are powered by a custom-built digital stack. From IoT sensors on transformers to our customer billing app, we have real-time visibility and control over every electron and every kobo in the system.', 'Cpu', '["IoT Grid Monitoring", "Digital Twin Technology", "SCADA Integration", "AI-Driven Maintenance"]', '[{"label": "Uptime", "value": "99.9%"}, {"label": "Data Points", "value": "Millions"}]', 7),
('C & I Customers', 'Powering Economic Growth', 'c-and-i', 'We deliver premium, high-uptime power solutions for Commercial and Industrial clients. Reliable power means factories can run 24/7 without expensive diesel generators, unlocking economic potential and job creation.', 'Zap', '["Premium Power Lines", "Voltage Stabilization", "Dedicated Account Managers", "Tariff Optimization"]', '[{"label": "Generator Savings", "value": "40%"}, {"label": "Production Uptime", "value": "24/7"}]', 8),
('Government Support', 'Partnering for National Goals', 'government-support', 'We align closely with national electrification goals and regulatory frameworks. We work as a partner to governments, helping them meet their SDG targets and modernizing their power sectors without adding public debt.', 'ShieldCheck', '["Regulatory Compliance", "PPP Models", "Capacity Building", "Policy Alignment"]', '[{"label": "GDP Impact", "value": "Positive"}, {"label": "Govt Partnerships", "value": "Multiple"}]', 9)
ON CONFLICT (slug) DO UPDATE SET
title = EXCLUDED.title,
subtitle = EXCLUDED.subtitle,
description = EXCLUDED.description,
icon = EXCLUDED.icon,
features = EXCLUDED.features,
stats = EXCLUDED.stats,
order_index = EXCLUDED.order_index;

-- Insert sample project
INSERT INTO public.projects (title, slug, description, location, featured, stats, image_url) VALUES
('Kaduna Integrated Distribution Project', 'kaduna-idp', 'Our flagship project in Nigeria focuses on transforming the distribution network through integrated grid management, smart metering, and decentralized renewable energy sources to ensure 24/7 reliability for industrial and residential consumers.', 'Kaduna, Nigeria', true, '{"connections": "50,000+", "lossReduction": "30%"}', '/kaduna-substation.png'),
('Abuja Commercial Mini-Grid', 'abuja-mini-grid', 'Implementation of a high-capacity solar mini-grid serving over 400 commercial enterprises in Abuja''s central market district. The project has eliminated the need for diesel generators for local vendors, reducing operational costs by 45%.', 'Abuja, Nigeria', false, '{"renewableMix": "100%", "savings": "$1.2M/yr"}', '/abuja-worker.png')
ON CONFLICT (slug) DO UPDATE SET
title = EXCLUDED.title,
description = EXCLUDED.description,
location = EXCLUDED.location,
featured = EXCLUDED.featured,
stats = EXCLUDED.stats,
image_url = EXCLUDED.image_url;

-- Insert sample articles
INSERT INTO public.articles (title, slug, excerpt, category, author, published_at, image_url) VALUES
('Konexa Secures $18M Funding to Accelerate Renewable Energy Distribution', 'series-a-funding', 'This landmark funding round will enable the expansion of our integrated distribution model to three new states, bringing reliable power to over 50,000 new customers.', 'Company News', 'Konexa Team', '2024-10-24', '/images/news/featured.jpg'),
('Partnering with Kaduna Electric for Grid Modernization', 'kaduna-partnership', 'Strategic partnership aimed at revitalizing the distribution infrastructure using smart grid technology.', 'Partnerships', 'Konexa Team', '2024-09-15', '/images/news/news-1.jpg'),
('The Role of Mini-Grids in Africa''s Industrial Future', 'mini-grids-industry', 'Exploring how decentralized power generation can drive industrial growth in off-grid areas.', 'Industry Insights', 'Pradeep Pursnani', '2024-08-02', '/images/news/news-2.jpg'),
('Impact Report 2023: 40k Tons of CO2 Eliminated', 'impact-report-2023', 'A deep dive into our sustainability metrics and the environmental impact of our renewable integration.', 'Sustainability', 'Elena Rodriguez', '2024-07-10', '/images/news/news-3.jpg'),
('Konexa appointed to Presidential Advisory Committee', 'presidential-committee', 'CEO Pradeep Pursnani selected to advise on national electrification strategies.', 'Leadership', 'Konexa Team', '2024-06-28', '/images/news/news-4.jpg')
ON CONFLICT (slug) DO UPDATE SET
title = EXCLUDED.title,
excerpt = EXCLUDED.excerpt,
category = EXCLUDED.category,
author = EXCLUDED.author,
published_at = EXCLUDED.published_at,
image_url = EXCLUDED.image_url;
