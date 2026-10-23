import React from "react";
import { profile } from "@/data";
import { FloatingDock } from "./ui/floatingDock";
import { Github, Mail, Linkedin, Twitter, Video } from "lucide-react";


export function SocialLinks() {
  const links: { title: string; icon: React.ReactNode; href: string }[] = [
    { title: "GitHub", icon: <Github className="h-5 w-5" />, href: profile.github },
    { title: "Email", icon: <Mail className="h-5 w-5" />, href: `mailto:${profile.email}` },
    { title: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: profile.linkedin },
    { title: "Twitter", icon: <Twitter className="h-5 w-5" />, href: profile.twitter },
    { title: "TikTok", icon: <Video className="h-5 w-5" />, href: profile.tiktok },
  ];

  return (
    <div className="flex items-center justify-center w-full mt-12 ">
      <FloatingDock items={links} />
    </div>
  );
}
