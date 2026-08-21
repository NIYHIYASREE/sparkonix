function Team() {
  const leadership = [
    { role: 'Chief Patron', name: 'Dr. K. Narayan', title: 'Vice Chancellor' },
    { role: 'HOD', name: 'Dr. S. Muthukumar', title: 'HOD, ECE' }
  ]
  const committees = [
    { name: 'Priyaranjan', role: 'Student Coordinator' },
    { name: 'Nandhini', role: 'Student Coordinator' },
    { name: 'Dhinesh', role: 'Technical Events Committee' },
    { name: 'Nithya Sree', role: 'Technical Events Committee' },
    { name: 'Gautham', role: 'Paper Presentation' },
    { name: 'Bushra', role: 'Paper Presentation' },
    { name: 'Ezhilarasan', role: 'Technical Quiz' },
    { name: 'Visaha', role: 'Technical Quiz' },
    { name: 'Poovarasan', role: 'Project Presentation' },
    { name: 'Abinaya', role: 'Non-Technical Events Committee' },
    { name: 'Mageshwaren', role: 'Non-Technical Events Committee' },
    { name: 'Jenifa', role: 'Non-Technical Events Committee' },
    { name: 'Dharshan', role: 'ESPORTS' },
    { name: 'Punitha', role: 'Dance' },
    { name: 'Ashwin Raj', role: 'Treasure Hunt' },
    { name: 'Janani', role: 'Treasure Hunt' },
    { name: 'Bala Sundaram', role: 'Registration and Reception Committee' },
    { name: 'Seetha', role: 'Registration and Reception Committee' },
    { name: 'Nandha Kumar', role: 'Registration and Reception Committee' },
    { name: 'Anusuya', role: 'Decoration Committee' },
    { name: 'Arjun', role: 'Decoration Committee' },
    { name: 'Krithika', role: 'Decoration Committee' },
    { name: 'Parama Sivam', role: 'Hospitality Committee' },
    { name: 'Vedha Sree', role: 'Hospitality Committee' },
    { name: 'Ajay', role: 'Food Committee' },
    { name: 'Amith', role: 'Food Committee' },
    { name: 'Sriram', role: 'Comparing, Certificate and Prize Distribution' },
    { name: 'Afreen', role: 'Editing and Social Media Committee' },
    { name: 'Karthick Raja', role: 'Website Committee' },
    { name: 'Pradeep', role: 'Designing Committee' }
  ]

  return (
    <section className="px-6 pt-28 pb-20 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Organizing Committee</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-100">Meet the team behind NEXTRON'26.</h1>
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

        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow">
          <h2 className="text-2xl font-semibold text-slate-100">Student Committees</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {committees.map((member) => (
              <div key={`${member.role}-${member.name}`} className="rounded-3xl bg-slate-900/80 p-5">
                <p className="font-semibold text-slate-100">{member.name}</p>
                <p className="mt-1 text-sm text-slate-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
