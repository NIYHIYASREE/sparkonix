function Contact() {
  return (
    <section className="px-6 pt-28 pb-20 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Contact</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-100">Get in touch with the Sparkonix team</h1>
          <p className="mt-4 max-w-3xl text-slate-400">Have questions about registration, venue, or accommodation? Use the form below or reach out directly to our coordinators.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-200">
                Name
                <input className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-electric/70" />
              </label>
              <label className="space-y-2 text-sm text-slate-200">
                Email
                <input className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-electric/70" />
              </label>
            </div>
            <label className="mt-5 space-y-2 text-sm text-slate-200">
              Message
              <textarea rows="6" className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none focus:border-electric/70" />
            </label>
            <button type="submit" className="mt-5 rounded-full bg-electric px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              Send message
            </button>
          </form>

          <aside className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow">
            <div className="space-y-5">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">College</p>
                <div className="mt-3 space-y-2 text-slate-100">
                  <p className="font-semibold">அண்ணா பல்கலைக்கழகம், சென்னை</p>
                  <p className="text-xs text-slate-400">Anna University, TN</p>
                  <p className="font-semibold mt-3">பல்கலைக்கழக பொறியியல் கல்லூரி, திண்டிவனம்</p>
                  <p className="text-xs text-slate-400">University College of Engineering, Tindivanam</p>
                </div>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Phone</p>
                <p className="mt-2 text-slate-100">+91 44 2743 2200</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Email</p>
                <p className="mt-2 text-slate-100">sparkonix@uce.edu.in</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Contact
