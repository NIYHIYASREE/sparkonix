function About() {
  return (
    <section className="px-6 pt-28 pb-20 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-10 shadow-glow">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">About Sparkonix</p>
              <h1 className="mt-4 text-4xl font-bold text-slate-100">A circuit-inspired celebration of ECE talent.</h1>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                SPARKONIX '26 brings together students from the ECE department for a weekend of innovation, competition, and hands-on learning. From technical quizzes to robotics races, the symposium blends core electronics energy with modern IoT and creative non-technical experiences.
              </p>
            </div>
            <img src="/assets/clg-entrance.png" alt="College Entrance" className="h-48 w-auto rounded-2xl shadow-glow" />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow">
            <h2 className="text-2xl font-semibold text-slate-100">About the College</h2>
            <div className="mt-4 space-y-3 text-slate-400">
              <p><span className="font-semibold text-slate-100">அண்ணா பல்கலைக்கழகம், சென்னை</span></p>
              <p>Anna University, TN</p>
              <p className="text-sm mt-4">A premier engineering institute focused on research-led learning and community-driven student success.</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow">
            <h2 className="text-2xl font-semibold text-slate-100">ECE Department</h2>
            <div className="mt-4 space-y-3 text-slate-400">
              <p><span className="font-semibold text-slate-100">பல்கலைக்கழக பொறியியல் கல்லூரி</span></p>
              <p>University College of Engineering</p>
              <p className="text-sm mt-4">Prepares students for careers in embedded systems, communication networks, and innovation through practical labs and competitive activities.</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow">
            <h2 className="text-2xl font-semibold text-slate-100">Our Mission</h2>
            <p className="mt-4 text-slate-400">Sparkonix aims to inspire students to build technically strong projects, collaborate across teams, and present ideas with confidence to peer reviewers and technical judges.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
