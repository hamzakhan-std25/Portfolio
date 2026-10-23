"use client";
import React from "react";
import { Mail, MapPin, Code2, Server, Database, Boxes, Palette } from "lucide-react";
import { profile } from "@/data";


export function Footer() {
  return (
    <footer className="w-full mt-9   pt-16 pb-10 px-4">
      <div className="mx-auto w-[90%] max-w-6xl flex flex-col md:flex-row justify-between gap-12">
        {/* LEFT SECTION */}
        <div className="flex flex-col max-w-md">
          <h1 className="text-3xl font-black text-white">{profile.name}</h1>

          <p className="mt-4 text-neutral-400 leading-relaxed">
            I build fast, production-ready web apps with React, Next.js and Node.js, and I add the AI layer, from semantic search to RAG support bots, that makes them smarter.
          </p>

          <div className="mt-6 text-sm text-neutral-500">
            Full-Stack Developer · AI Integrator
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* CONTACT */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Contact</h2>

            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-purple-500" />
                <a href={`mailto:${profile.email}`} className="text-white hover:text-purple-300 transition-colors">
                  {profile.email}
                </a>
              </li>

              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-500" />
                <span className="text-white">{profile.location}</span>
              </li>
            </ul>
          </div>

          {/* SKILLS */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">
              Tech Stack
            </h2>

            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-purple-500" />
                React / Next.js
              </li>

              <li className="flex items-center gap-2">
                <Server className="h-4 w-4 text-purple-500" />
                Node.js / Express
              </li>

              <li className="flex items-center gap-2">
                <Database className="h-4 w-4 text-purple-500" />
                MongoDB / Mongoose
              </li>

              <li className="flex items-center gap-2">
                <Boxes className="h-4 w-4 text-purple-500" />
                Redux Toolkit
              </li>

              <li className="flex items-center gap-2">
                <Palette className="h-4 w-4 text-purple-500" />
                Tailwind CSS
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-14 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 gap-3">
        <p>© {new Date().getFullYear()} {profile.initials}. All rights reserved.</p>

        <p className="text-neutral-600">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
