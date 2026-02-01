export interface TeamMember {
  id: string
  name: string
  role: string
  title: string | null
  description: string | null
  image_url: string | null
  category: 'executive' | 'management'
  order_index: number
  created_at: string
  updated_at: string
}

export interface Project {
  id: string
  title: string
  slug: string
  description: string | null
  content: string | null
  location: string | null
  image_url: string | null
  stats: Record<string, unknown>
  featured: boolean
  status: string
  created_at: string
  updated_at: string
}

export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string | null
  gallery_images: string[] | null
  image_url: string | null
  category: string | null
  author: string | null
  published_at: string
  created_at: string
  updated_at: string
}

export interface Contact {
  id: string
  full_name: string
  email: string
  subject: string | null
  location: string | null
  service_interest: string | null
  message: string | null
  status: 'new' | 'read' | 'responded'
  created_at: string
}

export interface NewsletterSubscriber {
  id: string
  email: string
  subscribed: boolean
  created_at: string
}

export interface Service {
  id: string
  title: string
  slug: string
  description: string | null
  icon: string | null
  features: string[]
  order_index: number
  created_at: string
  updated_at: string
}
