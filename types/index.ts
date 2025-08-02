export interface Particle {
  id: string
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  isBlasting: boolean
}

export interface FragmentParticle {
  id: string
  x: number
  y: number
  color: string
  size: number
  dx: number
  dy: number
  duration: number
}

export interface TechStackItem {
  name: string
  icon: string
}

export interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  demo: string
}

export interface ExperienceItem {
  company: string
  position: string
  date: string
  description: string
}
