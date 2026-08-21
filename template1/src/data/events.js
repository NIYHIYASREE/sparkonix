const announcedDetails = {
  venue: 'To be announced',
  date: '14 August 2026',
  time: 'To be announced',
  prize: 'Certificates and prizes',
  rules: ['Detailed rules will be announced by the organizing committee.']
}

export const events = [
  {
    id: 'paper-presentation',
    name: 'Paper Presentation',
    tagline: 'Present ideas, research, and new possibilities in ECE.',
    category: 'Technical',
    description: 'A technical presentation forum for students to share original ideas and research in electronics and communication.',
    teamSize: 'Solo / Team',
    coordinators: ['Gautham', 'Bushra'],
    ...announcedDetails
  },
  {
    id: 'technical-quiz',
    name: 'Technical Quiz',
    tagline: 'Put your electronics and communication knowledge to the test.',
    category: 'Technical',
    description: 'A fast-paced quiz covering core electronics, communication systems, and current technology.',
    teamSize: 'Team event',
    coordinators: ['Ezhilarasan', 'Visaha'],
    ...announcedDetails
  },
  {
    id: 'project-presentation',
    name: 'Project Presentation',
    tagline: 'Turn a working idea into an impressive demonstration.',
    category: 'Technical',
    description: 'Showcase an innovative project and explain its problem, process, and real-world impact.',
    teamSize: 'Team event',
    coordinators: ['Poovarasan'],
    ...announcedDetails
  },
  {
    id: 'esports',
    name: 'ESPORTS',
    tagline: 'Compete, collaborate, and take the digital arena.',
    category: 'Non-Technical',
    description: 'A competitive gaming event bringing energy, strategy, and teamwork to the symposium floor.',
    teamSize: 'Team event',
    coordinators: ['Mageshwaren', 'Jenifa'],
    ...announcedDetails
  },
  {
    id: 'dance',
    name: 'Dance',
    tagline: 'Bring rhythm, expression, and your own signature style.',
    category: 'Non-Technical',
    description: 'A stage event celebrating performance, creativity, and the energy of student talent.',
    teamSize: 'Solo / Team',
    coordinators: ['Dharshan', 'Punitha'],
    ...announcedDetails
  },
  {
    id: 'treasure-hunt',
    name: 'Treasure Hunt',
    tagline: 'Follow the clues, solve the trail, and find the finish.',
    category: 'Non-Technical',
    description: 'A clue-based campus challenge built around teamwork, observation, and quick thinking.',
    teamSize: 'Team event',
    coordinators: ['Ashwin Raj', 'Janani'],
    ...announcedDetails
  },
  {
    id: 'cine-event',
    name: 'Cine Event',
    tagline: 'A screen-ready celebration of storytelling and creativity.',
    category: 'Non-Technical',
    description: 'A creative cinema-focused event for students who love visual storytelling and performance.',
    teamSize: 'To be announced',
    coordinators: [],
    ...announcedDetails
  }
]