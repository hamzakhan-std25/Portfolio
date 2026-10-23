import { expertise, profile } from "@/data";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#050505] px-6 py-24 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">About Me</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">Full-stack craft with an AI layer.</h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-400">{profile.summary}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {expertise.map((card) => (
              <article key={card.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
        <aside className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-xl font-bold text-white">Education</h3>
          <p className="mt-4 text-cyan-300">{profile.education.degree}</p>
          <p className="mt-1 text-neutral-300">{profile.education.institution}</p>
          <p className="mt-1 text-sm text-neutral-500">{profile.education.location} · {profile.education.period}</p>
          <p className="mt-3 text-sm text-neutral-400">GPA {profile.education.gpa}</p>
          <h3 className="mt-10 text-xl font-bold text-white">Certifications</h3>
          <ul className="mt-4 space-y-3 text-sm text-neutral-400">
            {profile.certifications.map((certification) => <li key={certification}>{certification}</li>)}
          </ul>
        </aside>
      </div>
    </section>
  );
}