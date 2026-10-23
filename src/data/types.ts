export interface NavItem { label: string; href: string }

export interface Education {
  degree: string; institution: string; location: string;
  period: string; gpa: string;
}

export interface Profile {
  name: string; initials: string; title: string; roles: readonly string[];
  email: string; phone: string; github: string; location: string; linkedin: string; youtube: string; facebook: string; twitter: string; instagram: string; tiktok: string;
  summary: string; valueProp: string; resumeUrl: string;
  education: Education; certifications: readonly string[];
  seo: { title: string; description: string; ogTitle: string; keywords: readonly string[] };
}

export interface ExpertiseCard { title: string; body: string }

export interface Experience {
  id: string; role: string; company: string; location: string;
  period: string; current?: boolean; highlights: readonly string[];
}

export interface Metric { label: string; value: string; description: string }

export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
}

export type ArchLayer = "client" | "api" | "data" | "ai" | "service" | "infra";

export interface ArchNode {
  id: string; label: string; layer: ArchLayer;
  description: string; tech: readonly string[]; linksTo?: readonly string[];
}

export interface Project {
  id: string; title: string; tagline: string; overview: string;
  challenge: string; solution: string; stack: readonly string[];
  highlights: readonly string[]; metrics: readonly Metric[]; status: String; statusNote?: string;  
  demoUrl: string; githubUrl?: string; architecture: readonly ArchNode[];
  thumbnail: ProjectMedia; media: readonly ProjectMedia[];
}

export interface SkillGroup {
  id: string; label: string; items: readonly string[];
}
export interface SkillRelation { skill: string; related: readonly string[] }
