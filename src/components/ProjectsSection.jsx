export default function ProjectsSection() {
  return (
    <section className="min-h-screen bg-black text-white px-24 py-40">
      <h2 className="text-4xl font-bold mb-16">
        Selected Projects
      </h2>

      <div className="space-y-12 max-w-3xl">
        <div className="border-b border-white/10 pb-6">
          <h3 className="text-2xl font-semibold">NetflixGPT</h3>
          <p className="text-gray-400 mt-2">
            AI-powered movie recommendation app using React
            and OpenAI API.
          </p>
        </div>

        <div className="border-b border-white/10 pb-6">
          <h3 className="text-2xl font-semibold">DevNet</h3>
          <p className="text-gray-400 mt-2">
            Developer networking platform with authentication
            and real-time features.
          </p>
        </div>
      </div>
    </section>
  );
}
