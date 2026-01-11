export default function SkillsSection() {
  const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
  ];

  return (
    <section className="min-h-screen bg-black text-white px-24 py-40">
      <h2 className="text-4xl font-bold mb-14">Skills</h2>

      <div className="grid grid-cols-3 gap-8 max-w-3xl">
        {skills.map((skill) => (
          <div
            key={skill}
            className="border border-white/10 rounded-xl p-6
                       hover:border-red-400 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
