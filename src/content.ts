export const hero = {
  name: 'N Sai Vighnesh',
  title: 'Full Stack Developer & AI Engineer',
  location: 'Ravulapalem, Andhra Pradesh, India',
  email: 'nsv2190@gmail.com',
  phone: '+91 9059854218',
  summary:
    'Aspiring Full Stack Developer and AI Engineer with a strong foundation in web technologies and artificial intelligence. Proficient in creating responsive applications and integrating intelligent features, such as the Gemini API. Eager to apply strong analytical and problem-solving skills to build innovative solutions.',
  highlights: [
    { label: 'Projects delivered', value: '3' },
    { label: 'Industry certifications', value: '4' },
    { label: 'Internship experience', value: '3 programs' },
  ],
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nekkanti-sai-vighnesh-2a86b0372' },
    { label: 'GitHub', url: 'https://github.com/saivighnesh2190' },
  ],
  resumeFileName: 'N-Sai-Vighnesh-Resume-2025.pdf',
}

export const about = {
  statement:
    'Currently pursuing B.Tech CSE at K L University, I translate what I learn in class into prototypes, tools, and mentorship that help people adopt technology with confidence.',
  story: [
    'I grew up reverse-engineering websites and scripting little automations for friends. That tinkering spirit still guides me—only now the experiments involve 3D visuals, context-aware agents, and production-ready APIs.',
    'Internships across AI, community innovation, and web engineering taught me to connect the dots between user research, system design, and deployment. Whether it is a travel companion or an education bot, the goal is to create tools that earn trust day after day.',
  ],
  focusAreas: [
    'Designing AI-assisted web products that feel intuitive and trustworthy',
    'Developing resilient backends with Spring Boot, Python, and relational databases',
    'Automating workflows using Gemini API, Voiceflow, Make, and n8n to accelerate user value',
  ],
  quickFacts: [
    { label: 'Education', value: 'B.Tech CSE, K L University (2027)' },
    { label: 'Internships', value: '3 programs across AI, web, and social innovation' },
    { label: 'Stack', value: 'React.js · Vite · Spring Boot · Django' },
    { label: 'AI Toolkit', value: 'Gemini API · Voiceflow · Make · Relevance AI · N8N · Genkit' },
  ],
  interests: ['Competitive Programming', 'Exploring new technologies', 'Open-source contributions'],
  values: [
    'Human-centered product thinking',
    'Rapid experimentation and learning',
    'Mentoring peers and sharing knowledge',
  ],
}

export const contact = {
  address: hero.location,
  email: hero.email,
  phone: hero.phone,
  linkedin: hero.socials.find((item) => item.label === 'LinkedIn')?.url,
  github: hero.socials.find((item) => item.label === 'GitHub')?.url,
}

export const projects = [
  {
    title: 'Travel Planner Website',
    period: '2024',
    description:
      'Built a responsive travel planner with React and Vite, supported by a Spring Boot and MySQL backend. Integrated a Gemini-powered chatbot that delivers precise, context-aware information about destinations and travel logistics.',
    stack: ['React', 'Vite', 'Spring Boot', 'MySQL', 'Gemini API'],
  },
  {
    title: 'No-Code Cleaning Agent',
    period: '2024',
    description:
      'Developed a no-code conversational agent that streamlines home cleaning bookings. Collects property details, generates pricing dynamically, and automates confirmations using Voiceflow, Make, and Relevance AI.',
    stack: ['Voiceflow', 'Make', 'Relevance AI', 'Automation'],
  },
  {
    title: 'Agricultural Sales Website',
    period: '2023',
    description:
      'Created a farmer-focused marketplace using Python and Django. Implemented product catalogs, pricing insights, and inventory tools to help streamline procurement and sales workflows.',
    stack: ['Django', 'Python', 'PostgreSQL'],
  },
]

export const certifications = [
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified DevOps Professional',
    issuer: 'Oracle',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=635DD10F83AB9C67D5B6AF301E477BF32AE5B89C07809C71753495BFD968EC70',
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=4CAAC260134E339096A818E019596AF69A9F76E78BE7E8F422800FB6869F1EC5',
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=32712AFC91674345FB776506C63913544DD85D0D82B12D987BD22D1866568F81',
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=99478E5D8EE9363BA525D39E8FCC1C96113C14B2738143828FDD9D5D35BD991F',
  },
  {
    name: 'Oracle Java Foundations',
    issuer: 'Oracle',
    link: undefined,
  },
  {
    name: 'Aviatrix Multicloud Network Associate',
    issuer: 'Aviatrix',
    link: undefined,
  },
]

export const internships = [
  {
    title: 'Virtual Internship — Web Development & AI',
    organization: 'EduSkills Foundation',
    period: 'May 2025',
    description:
      'Completed a virtual internship focused on modern web development practices and the application of generative AI technologies.',
  },
  {
    title: 'Social Internship',
    organization: 'Swecha Andhra Pradesh',
    period: 'Jun 2024',
    description:
      'Supported the “Transformation of Digital Ecosystem of the Villages” initiative, expanding Open Street Map data and leading digital literacy sessions for government school students.',
  },
  {
    title: 'Project Expo Participant',
    organization: 'KL-CIIE, Koneru Lakshmaiah Education Foundation',
    period: 'Dec 2023',
    description:
      'Selected for the Mock Shark Tank at the 3rd Project Expo with an E-Waste Management concept that demonstrated innovation and design thinking.',
  },
]

export const skills = [
  {
    category: 'Front-End',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Vite'],
  },
  {
    category: 'Back-End',
    items: ['Java', 'Spring Boot', 'Python', 'Django'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL'],
  },
  {
    category: 'AI Tools',
    items: ['Gemini API', 'Voiceflow', 'Make', 'Relevance AI', 'N8N', 'Genkit'],
  },
  {
    category: 'Languages',
    items: ['Java', 'Python', 'C', 'C++'],
  },
  {
    category: 'DevOps & Tools',
    items: ['VS Code', 'Git', 'GitHub', 'Eclipse', 'PyCharm', 'Docker', 'Jenkins', 'Tomcat'],
  },
]

export const education = [
  {
    institution: 'K L University, Guntur',
    program: 'B.Tech, Computer Science & Engineering',
    period: '2023 — 2027',
    score: 'CGPA: 9.0 / 10.0',
  },
  {
    institution: 'Sasi Junior College, Velivennu',
    program: 'Intermediate (MPC)',
    period: '2021 — 2023',
    score: 'Percentage: 94.1%',
  },
  {
    institution: 'Sasi High School, Velivennu',
    program: 'Secondary School Certificate',
    period: '2020 — 2021',
    score: 'Percentage: 98.1%',
  },
]

export const interests = [
  'Competitive Programming',
  'Exploring new technologies',
  'Open-source contributions',
]
