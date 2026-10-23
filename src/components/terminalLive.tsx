"use client";

import { Terminal } from "@/components/ui/terminal";
import { OrbSlot } from "@/components/SplineScrollOrb";
import { profile, skillGroups } from "@/data";

const skillOutput = (id: string) =>
  skillGroups.find((group) => group.id === id)?.items.map((item) => item.name).join(" · ") ?? "";

export default function TerminalLive() {
  return (
    <section id="terminal" className="w-full overflow-hidden pt-16 md:pt-24">
      <div className="mx-auto w-[92%] max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight  text-white md:text-5xl">
            Engineering Intelligent Systems &
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              {" "}Autonomous Workflows
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-neutral-400 md:text-lg">
            I replace high-overhead manual operational tasks with intelligent software pipelines. I specialize in linking robust enterprise backends,
             adaptive vector database knowledge structures, and autonomous AI agents into high-growth business products.
          </p>
        </div>

        {/* Content — same flex layout as original */}
        <div className="mt-16 flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">

          {/* Left: Spline slot (desktop only — no Spline on mobile for this section) */}
          <div className="flex w-full justify-center lg:w-1/2">
            {/* Desktop: shared orb portals here */}
            <OrbSlot
              id="terminal"
              className="hidden lg:block h-[350px] w-full max-w-[500px] md:h-[500px]"
            />
            {/* Mobile: intentionally empty per your requirement */}
          </div>

          {/* Right: Terminal */}
          <div className="flex w-full justify-center lg:w-1/2">
            <div className="w-full max-w-[650px]">
              <Terminal
                username="hamza@ai-core"
                typingSpeed={45}
                delayBetweenCommands={1000}
                enableSound={false}
                commands={["about --engineer", "skills --stack", "services --deployment"]}
                outputs={{
                  0: [
                    `${profile.name}: ${profile.title} & AI Integrator`,
                    "Building production web apps with React, Next.js, TypeScript and Node.js.",
                  ],
                  1: [
                    `frontend : ${skillOutput("frontend")}`,
                    `backend  : ${skillOutput("backend")}`,
                    `data     : ${skillOutput("data")}`,
                    `ai       : ${skillOutput("ai")}`,
                  ],
                  2: [
                    "web apps · eCommerce · real-time systems · AI features · Docker · Vercel",
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}