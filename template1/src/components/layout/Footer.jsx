function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/95 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr_1fr_0.9fr]">
          <div className="space-y-3">
            <img src="/assets/college-logo.png" alt="Anna University Logo" className="h-12 w-auto" />
            <p className="text-sm font-semibold text-slate-100">SPARKONIX '26</p>
            <p className="text-xs text-slate-400">ECE Department Symposium</p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">College</p>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="font-semibold text-slate-100">அண்ணா பல்கலைக்கழகம், சென்னை</p>
              <p className="text-xs">Anna University, Chennai</p>
              <p className="font-semibold text-slate-100 mt-2">பல்கலைக்கழக பொறியியல் கல்லூரி, திண்டிவனம்</p>
              <p className="text-xs">University College of Engineering, Tindivanam</p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Contact</p>
            <div className="space-y-2 text-sm text-slate-400">
              <p>Phone: +91 44 2743 2200</p>
              <p>Email: sparkonix@uce.edu.in</p>
              <p>Venue: ECE Block, UCE Campus</p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Built with</p>
            <div className="space-y-2 text-xs text-slate-500">
              <p>React + Vite</p>
              <p>Tailwind CSS</p>
              <p>Framer Motion</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          <p>&copy; 2026 SPARKONIX | ECE Department, Anna University</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
