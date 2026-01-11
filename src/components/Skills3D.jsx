"use client";

export default function Skills() {
  return (
    <section className="bg-black text-white py-20 text-center">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {["React", "Next.js", "Node", "MongoDB", "Tailwind"].map((s) => (
          <span
            key={s}
            className="px-6 py-3 border border-red-400 rounded-full"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
