import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-20 lg:px-8">
      <div className="max-w-3xl rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-12 text-center shadow-glow">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Signal lost</p>
        <h1 className="mt-6 text-5xl font-black text-slate-100">404</h1>
        <p className="mt-4 text-lg leading-8 text-slate-400">The page you are looking for cannot be found. Try navigating back to the symposium home page.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-electric px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
          Return to Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
