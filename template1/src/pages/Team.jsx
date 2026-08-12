function Team() {
  const leadership = [
    { role: 'Chief Patron', name: 'Dr. K. Narayan', title: 'Vice Chancellor' },
    { role: 'HOD', name: 'Dr. S. Muthukumar', title: 'HOD, ECE' }
  ]
  const faculty = [
    { name: 'Prof. Anjali R.', role: 'Faculty Coordinator' },
    { name: 'Prof. Santhosh K.', role: 'Faculty Coordinator' }
  ]
  const students = [
    { name: 'Priya N.', role: 'Student Chair' },
    { name: 'Ravi V.', role: 'Event Lead' },
    { name: 'Maya C.', role: 'Logistics' }
  ]

  return (
    <section className="px-6 pt-28 pb-20 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Organizing Committee</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-100">Meet the team behind Sparkonix.</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {leadership.map((member) => (
            <div key={member.name} className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow">
              <p className="text-sm uppercase tracking-[0.26em] text-slate-500">{member.role}</p>
              <p className="mt-5 text-xl font-semibold text-slate-100">{member.name}</p>
              <p className="mt-3 text-slate-400">{member.title}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-5 rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow">
            <h2 className="text-2xl font-semibold text-slate-100">Faculty Coordinators</h2>
            <div className="space-y-4">
              {faculty.map((member) => (
                <div key={member.name} className="rounded-3xl bg-slate-900/80 p-5">
                  <p className="font-semibold text-slate-100">{member.name}</p>
                  <p className="text-sm text-slate-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5 rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow">
            <h2 className="text-2xl font-semibold text-slate-100">Student Committee</h2>
            <div className="space-y-4">
              {students.map((member) => (
                <div key={member.name} className="rounded-3xl bg-slate-900/80 p-5">
                  <p className="font-semibold text-slate-100">{member.name}</p>
                  <p className="text-sm text-slate-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
