import { 
  Atom, Triangle, FileCode2, FileCode, Wind, Sparkles, Component, Box, 
  Server, Settings, Network, Radio, Share2, Blocks, 
  Leaf, Database, DatabaseBackup, Zap, TreePine, HardDrive, 
  BookOpenText, Brain, Search, Bot, Radar, 
  Key, LockOpen, UserCog, 
  GitBranch, Github, Container, Flame, Infinity, TestTubes, Globe, Send, Terminal 
} from "lucide-react";

import type { SkillRelation } from "./types";


import type { LucideIcon } from "lucide-react";

export type SkillItem = {
  name: string;
  icon: LucideIcon;
};

interface SkillGroup {
  id: string;
  label: string;
  items: SkillItem[]; // Change from string[] to SkillItem[]
}

export const skillGroups: readonly SkillGroup[] = [
  { 
    id: "frontend", 
    label: "Frontend", 
    items: [
      { name: "React.js", icon: Atom }, 
      { name: "Next.js", icon: Triangle }, 
      { name: "TypeScript", icon: FileCode2 }, 
      { name: "JavaScript (ES6+)", icon: FileCode }, 
      { name: "Tailwind CSS", icon: Wind }, 
      { name: "Framer Motion", icon: Sparkles }, 
      { name: "Shadcn UI", icon: Component }, 
      { name: "Redux Toolkit", icon: Box }
    ] 
  },
  { 
    id: "backend", 
    label: "Backend", 
    items: [
      { name: "Node.js", icon: Server }, 
      { name: "Express.js", icon: Settings }, 
      { name: "REST APIs", icon: Network }, 
      { name: "WebSockets", icon: Radio }, 
      { name: "GraphQL", icon: Share2 }, 
      { name: "API Integration", icon: Blocks }
    ] 
  },
  { 
    id: "data", 
    label: "Data", 
    items: [
      { name: "MongoDB", icon: Leaf }, 
      { name: "PostgreSQL", icon: Database }, 
      { name: "MySQL", icon: DatabaseBackup }, 
      { name: "Supabase", icon: Zap }, 
      { name: "Pinecone", icon: TreePine }, 
      { name: "Prisma", icon: Triangle }, 
      { name: "Redis", icon: HardDrive }
    ] 
  },
  { 
    id: "ai", 
    label: "AI & Vector", 
    items: [
      { name: "RAG", icon: BookOpenText }, 
      { name: "LLM Integration (OpenAI, Gemini, Groq)", icon: Brain }, 
      { name: "Semantic Search", icon: Search }, 
      { name: "AI Chatbots", icon: Bot }, 
      { name: "MongoDB Vector Search", icon: Radar }
    ] 
  },
  { 
    id: "auth", 
    label: "Auth & Security", 
    items: [
      { name: "JWT", icon: Key }, 
      { name: "OAuth 2.0", icon: LockOpen }, 
      { name: "Role-Based Access Control", icon: UserCog }
    ] 
  },
  { 
    id: "devops", 
    label: "DevOps & Cloud", 
    items: [
      { name: "Git", icon: GitBranch }, 
      { name: "GitHub", icon: Github }, 
      { name: "Docker", icon: Container }, 
      { name: "Firebase", icon: Flame }, 
      { name: "CI/CD", icon: Infinity }, 
      { name: "Vercel", icon: Triangle }, 
      { name: "Jest", icon: TestTubes }, 
      { name: "Cypress", icon: Globe }, 
      { name: "Postman", icon: Send }, 
      { name: "Linux", icon: Terminal }
    ] 
  },
];

export const skillRelations: readonly SkillRelation[] = [
  { skill: "RAG", related: ["Pinecone", "Gemini", "Groq", "OpenAI"] },
  { skill: "Semantic Search", related: ["MongoDB Vector Search", "Gemini"] },
  { skill: "Next.js", related: ["React.js", "TypeScript", "Vercel"] },
  { skill: "Node.js", related: ["Express.js", "WebSockets", "REST APIs"] },
  { skill: "Docker", related: ["CI/CD", "Linux"] },
];
