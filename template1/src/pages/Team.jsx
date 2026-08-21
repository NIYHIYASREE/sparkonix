function Team() {
  const committees = [
    { name: 'Student Co-ordinator', members: ['Priyaranjan', 'Nandhini'] },
    { name: 'Paper Presentation', members: ['Dhinesh', 'Nithya Sree'] },
    { name: 'Technical Quiz', members: ['Gautham', 'Bushra'] },
    { name: 'Project Presentation', members: ['Ezhilarasan', 'Visaha'] },
    { name: 'ESPORTS', members: ['Poovarasan', 'Abinaya'] },
    { name: 'Dance', members: ['Mageshwareen', 'Jenifa'] },
    { name: 'Treasure Hunt', members: ['Dharshan', 'Punitha'] },
    { name: 'Cine Event', members: ['Ashwin Raj', 'Janani'] },
    { name: 'Registration and Reception Committee', members: ['Bala Sundaram', 'Seetha'] },
    { name: 'Decoration Committee', members: ['Nandha Kumar', 'Anusuya'] },
    { name: 'Hospitality Committee', members: ['Arjun', 'Krithika'] },
    { name: 'Food Committee', members: ['Parama Sivam', 'Vedha Sree'] },
    { name: 'Comparing, Certificate and Prize Distribution Committee', members: ['Ajay', 'Amith', 'Jenifa'] },
    { name: 'Editing and Social Media Committee', members: ['Sriram', 'Afreen'] },
    { name: 'Website Committee', members: ['Karthick Raja', 'Nithya Sree'] },
    { name: 'Designing Committee', members: ['Pradeep', 'Visaha'] },
    { name: 'Sponsor Committee', members: ['Priyaranjan', 'Santra Veenus'] }
  ]

  return (
    <section className="px-6 pt-28 pb-20 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Organizing Committee</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-100">NEXTRON'26 Student Committees</h1>
          <p className="mt-4 max-w-3xl text-slate-400">ECE Department Symposium, 14.08.2026. Meet the student coordinators for every confirmed committee.</p>
        </div>

        <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow">
          <h2 className="text-2xl font-semibold text-slate-100">Committee List</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {committees.map((committee, index) => (
              <div key={committee.name} className="rounded-3xl bg-slate-900/80 p-5">
                <div className="flex items-start gap-4">
                  <span className="text-sm font-semibold text-cyan-300">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="font-semibold text-slate-100">{committee.name}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {committee.members.map((member) => (
                        <span key={member} className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-sm text-slate-300">{member}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
