export const events = [
  {
    id: 'technoverse',
    name: 'TechnoVerse',
    tagline: 'Present the next wave of electronics research.',
    category: 'Tech',
    image: '/assets/events/technoverse.jpg',
    description: 'A paper presentation event focused on emerging innovation in electronics and communication systems.',
    rules: ['3–5 minute presentation', 'Original research or innovative prototype', 'Q&A with judges after the presentation'],
    teamSize: 'Solo / Team of 2',
    prize: '₹5,000 + Certificates',
    venue: 'Seminar Hall, ECE Block',
    date: '2026-09-11',
    time: '11:00 AM',
    coordinators: {
      faculty: [{ name: 'Dr. Meera Srinivasan', phone: '+91 98765 43210', email: 'meera@uce.edu.in' }],
      students: [{ name: 'Anjali R.', phone: '+91 91234 56789' }]
    }
  },
  {
    id: 'circuitx',
    name: 'CircuitX',
    tagline: 'Design, debug, and deliver a working circuit on the fly.',
    category: 'Core-ECE',
    image: '/assets/events/circuitx.jpg',
    description: 'An on-the-spot circuit design challenge that tests speed, accuracy, and analog intuition.',
    rules: ['Teams of 2', 'Problem statement released at the start', 'Only standard lab components allowed'],
    teamSize: '2 members',
    prize: '₹4,000 + Certificates',
    venue: 'Circuit Lab, ECE Department',
    date: '2026-09-11',
    time: '1:00 PM',
    coordinators: {
      faculty: [{ name: 'Prof. Rajesh Kumar', phone: '+91 99876 54321', email: 'rajesh@uce.edu.in' }],
      students: [{ name: 'Vikram S.', phone: '+91 92345 67890' }]
    }
  },
  {
    id: 'innovexpo',
    name: 'InnovEXPO',
    tagline: 'Showcase working ECE hardware and software prototypes.',
    category: 'Tech',
    image: '/assets/events/innovexpo.jpg',
    description: 'A project exhibition for student teams to demonstrate innovation in electronics, automation, and embedded systems.',
    rules: ['Teams of 2–4', 'Prototype must be functional', 'Judged on innovation, feasibility, and presentation'],
    teamSize: '2-4 members',
    prize: '₹6,000 + Certificates',
    venue: 'Exhibition Hall, Main Building',
    date: '2026-09-12',
    time: '10:00 AM',
    coordinators: {
      faculty: [{ name: 'Dr. Priya Natarajan', phone: '+91 90123 45678', email: 'priya@uce.edu.in' }],
      students: [{ name: 'Harini T.', phone: '+91 93456 78901' }]
    }
  },
  {
    id: 'codestorm',
    name: 'CodeStorm',
    tagline: 'Take on Embedded C and problem-solving challenges under pressure.',
    category: 'Tech',
    image: '/assets/events/codestorm.jpg',
    description: 'A coding contest with embedded systems puzzles and algorithmic rounds designed for electronics students.',
    rules: ['Solo participants', 'Two-round format', 'No external help allowed'],
    teamSize: 'Solo',
    prize: '₹4,500 + Certificates',
    venue: 'Computer Lab 2',
    date: '2026-09-12',
    time: '2:00 PM',
    coordinators: {
      faculty: [{ name: 'Prof. Sandeep Rao', phone: '+91 98760 12345', email: 'sandeep@uce.edu.in' }],
      students: [{ name: 'Nikhil K.', phone: '+91 94567 89012' }]
    }
  },
  {
    id: 'iotronix',
    name: 'IoTronix',
    tagline: 'Build the Internet of Things before the clock runs out.',
    category: 'IoT',
    image: '/assets/events/iotronix.jpg',
    description: 'A fast-paced IoT hackathon where teams create a working automated prototype for a real-world problem.',
    rules: ['Teams of 2-3', 'Bring your own sensor kits', 'Focus on innovation and demo quality'],
    teamSize: '2-3 members',
    prize: '₹5,000 + Certificates',
    venue: 'IoT Lab, ECE Block',
    date: '2026-09-12',
    time: '10:00 AM',
    coordinators: {
      faculty: [{ name: 'Dr. Lakshmi Venkatesan', phone: '+91 98765 12345', email: 'lakshmi@uce.edu.in' }],
      students: [{ name: 'Saravanan P.', phone: '+91 90123 78901' }]
    }
  },
  {
    id: 'roborush',
    name: 'RoboRush',
    tagline: 'Race your robot through the course with speed and precision.',
    category: 'IoT/Robotics',
    image: '/assets/events/roborush.jpg',
    description: 'A robotics competition focused on line following, obstacle navigation, and speed in a dynamic challenge arena.',
    rules: ['Teams of 3', 'Robots must be autonomous', 'Penalties for missed gates'],
    teamSize: '3 members',
    prize: '₹6,500 + Certificates',
    venue: 'Robotics Arena, ECE Courtyard',
    date: '2026-09-13',
    time: '11:00 AM',
    coordinators: {
      faculty: [{ name: 'Prof. Ramesh Iyer', phone: '+91 99870 12345', email: 'ramesh@uce.edu.in' }],
      students: [{ name: 'Gayatri M.', phone: '+91 91234 98765' }]
    }
  },
  {
    id: 'signalsync',
    name: 'SignalSync',
    tagline: 'Answer rapid-fire questions on electronics and communication systems.',
    category: 'Core-ECE',
    image: '/assets/events/signalsync.jpg',
    description: 'A technical quiz that tests speed, accuracy, and subject knowledge in signals, systems, and ECE fundamentals.',
    rules: ['Teams of 2', 'Multiple-choice and buzzer rounds', 'No internet allowed'],
    teamSize: '2 members',
    prize: '₹3,500 + Certificates',
    venue: 'Auditorium, ECE Block',
    date: '2026-09-13',
    time: '1:30 PM',
    coordinators: {
      faculty: [{ name: 'Dr. Nisha Kannan', phone: '+91 90987 65432', email: 'nisha@uce.edu.in' }],
      students: [{ name: 'Praveen R.', phone: '+91 92345 10987' }]
    }
  },
  {
    id: 'pixelpulse',
    name: 'PixelPulse',
    tagline: 'Battle in the esports arena with precision and pace.',
    category: 'Non-Tech',
    image: '/assets/events/pixelpulse.jpg',
    description: 'A gaming tournament designed for fun and friendly competition among students.',
    rules: ['Solo or duo entries', 'Best-of-three matches', 'Prize pool for winners and runners-up'],
    teamSize: 'Solo / Team of 2',
    prize: '₹3,000 + Certificates',
    venue: 'Media Lab, Tech Block',
    date: '2026-09-13',
    time: '3:00 PM',
    coordinators: {
      faculty: [{ name: 'Prof. Vandana R.', phone: '+91 98123 45670', email: 'vandana@uce.edu.in' }],
      students: [{ name: 'Karthik M.', phone: '+91 93456 01234' }]
    }
  },
  {
    id: 'framefusion',
    name: 'FrameFusion',
    tagline: 'Capture tech-inspired moments and create viral visuals.',
    category: 'Non-Tech',
    image: '/assets/events/framefusion.jpg',
    description: 'A photography and meme contest that celebrates creativity with a tech-themed twist.',
    rules: ['Single submission per participant', 'Original photography or meme content only', 'Judged on creativity and relevance'],
    teamSize: 'Solo',
    prize: '₹2,500 + Certificates',
    venue: 'Outdoor Plaza',
    date: '2026-09-13',
    time: '4:00 PM',
    coordinators: {
      faculty: [{ name: 'Dr. Sonia R.', phone: '+91 98701 23456', email: 'sonia@uce.edu.in' }],
      students: [{ name: 'Madhav S.', phone: '+91 91234 67890' }]
    }
  },
  {
    id: 'bytehunt',
    name: 'ByteHunt',
    tagline: 'Solve tech riddles and find the treasure across campus.',
    category: 'Non-Tech',
    image: '/assets/events/bytehunt.jpg',
    description: 'A campus-wide treasure hunt built around technology riddles and logic puzzles.',
    rules: ['Teams of 3-4', 'Follow the clue trail to the final prize', 'No outside hints allowed'],
    teamSize: '3-4 members',
    prize: '₹3,500 + Certificates',
    venue: 'Campus Grounds',
    date: '2026-09-14',
    time: '9:30 AM',
    coordinators: {
      faculty: [{ name: 'Prof. Anitha R.', phone: '+91 98765 43211', email: 'anitha@uce.edu.in' }],
      students: [{ name: 'Suresh P.', phone: '+91 92345 67890' }]
    }
  }
]
