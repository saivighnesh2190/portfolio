import React from 'react';
import emailjs from '@emailjs/browser';

const portraitUrl = `${import.meta.env.BASE_URL}MyImage.jpg`;
const projectBannerUrl =
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1300&q=80';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact-form' },
];

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const introHighlights = [
  '9.3 CGPA Computer Science student at KL University',
  'Full-Stack development with React, Spring Boot, and modern DevOps',
  'AI/LLM engineering with RAG, Ollama, and production workflows',
  'Hackathon builder with Guidewire and Meta OpenEnv project experience',
  'Oracle-certified in DevOps, Generative AI, and AI Foundations',
];

const ventures = [
  {
    name: 'TermBrain',
    desc: 'AI observability platform for Linux and Kubernetes log diagnostics with offline LLM workflows.',
    status: 'Active',
    tags: ['Python', 'Typer', 'Ollama', 'React', 'Kubernetes', 'Docker'],
    metric: '40% faster troubleshooting',
    color: 'from-cobalt to-sky-400',
    repo: 'https://github.com/saivighnesh2190/termbrain',
    demo: null,
  },
  {
    name: 'GAN-Based Synthetic Image Generator',
    desc: 'Built GAN/DCGAN pipelines in PyTorch to generate diseased leaf images for dataset augmentation.',
    status: 'Active',
    tags: ['Python', 'PyTorch', 'DCGAN'],
    metric: 'Live Hugging Face demo',
    color: 'from-emerald-500 to-teal-500',
    repo: 'https://github.com/saivighnesh2190/GAN---Synthetic-Image-Generator-For-Diseaesed-Leaves',
    demo: 'https://huggingface.co/spaces/vighnesh2190/generate-leaves-images',
  },
  {
    name: 'ClipFlow AI',
    desc: 'AI-powered developer productivity platform with coding analytics and personalized algorithm guidance.',
    status: 'Scaling',
    tags: ['React', 'Next.js', 'PostgreSQL', 'AI/LLM'],
    metric: '30% faster DSA review',
    color: 'from-violet to-fuchsia-400',
    repo: 'https://github.com/saivighnesh2190/clip-flow-ai',
    demo: 'https://clipflowai.vercel.app',
  },
  {
    name: 'Travel Planner Website',
    desc: 'Full-stack planner with conversational trip recommendations and generated schedules.',
    status: 'Beta',
    tags: ['React', 'Vite', 'Spring Boot', 'MySQL', 'Gemini API'],
    metric: '60% faster itinerary generation',
    color: 'from-orange to-amber-400',
    repo: 'https://github.com/saivighnesh2190/travel-planner',
    demo: null,
  },
  {
    name: 'No-Code Cleaning Agent',
    desc: 'No-code booking assistant that captures property details, generates pricing, and automates confirmations.',
    status: 'Active',
    tags: ['Voiceflow', 'Make', 'Relevance AI'],
    metric: 'Automated booking responses',
    color: 'from-cyan-500 to-blue-500',
    repo: 'https://creator.voiceflow.com/share/6866283c3dd3b7e09dd1f9c9/development',
    demo: 'https://creator.voiceflow.com/share/6866283c3dd3b7e09dd1f9c9/development',
  },
];

const projects = [
  {
    title: 'GigShield (Guidewire DevTrails)',
    description: 'AI parametric insurance fraud-defense platform with multi-signal spoofing detection.',
    status: 'Scaling',
    tags: ['React', 'Node.js', 'MongoDB', 'Scikit-learn'],
    meta: 'Hackathon 2026 project',
    year: '2026',
    icon: 'from-indigo-500 to-violet-500',
    repo: 'https://github.com/saivighnesh2190/gigshield',
    demo: null,
  },
  {
    title: 'Meta OpenEnv RL Agent',
    description: 'Built robust reinforcement learning agent environments for continuous control scenarios.',
    status: 'Beta',
    tags: ['Python', 'OpenEnv', 'RL'],
    meta: 'Meta x Scaler Hackathon',
    year: '2026',
    icon: 'from-pink-500 to-fuchsia-500',
    repo: 'https://github.com/saivighnesh2190/Meta-PyTorch-OpenEnv-Hackathon',
    demo: null,
  },
  {
    title: 'Design Thinking & Innovation (KL-CIIE)',
    description: 'Selected for Mock Shark Tank at Project Expo for an E-Waste Management concept.',
    status: 'Active',
    tags: ['Innovation', 'Design Thinking', 'Product Pitch'],
    meta: 'KL-CIIE Recognition',
    year: '2023',
    icon: 'from-orange-500 to-amber-500',
    repo: 'https://www.linkedin.com/in/nekkanti-sai-vighnesh-2a86b0372',
    demo: null,
  },
];

const websites = [
  {
    title: 'Portfolio',
    status: 'Active',
    description: 'My personal portfolio with projects, writing, and engineering work.',
    traffic: 'Live',
    revenue: 'saivighnesh2190.github.io',
    link: 'https://saivighnesh2190.github.io/portfolio/',
  },
  {
    title: 'GitHub',
    status: 'Active',
    description: 'Open-source repositories and full-stack / AI project implementations.',
    traffic: 'Public',
    revenue: 'saivighnesh2190',
    link: 'https://github.com/saivighnesh2190',
  },
  {
    title: 'LeetCode',
    status: 'Growing',
    description: 'Problem-solving profile with 100+ solved coding challenges.',
    traffic: '100+',
    revenue: 'leetcode.com/u/nsaivighnesh2190',
    link: 'https://leetcode.com/u/nsaivighnesh2190/',
  },
  {
    title: 'CodeForces',
    status: 'Active',
    description: 'Competitive programming profile and contest participation.',
    traffic: 'Active',
    revenue: '2300030455cse',
    link: 'https://codeforces.com/profile/2300030455cse',
  },
  {
    title: 'HackerRank',
    status: 'Active',
    description: 'Coding profile and problem-solving track record.',
    traffic: 'Public',
    revenue: 'h2300030455',
    link: 'https://www.hackerrank.com/profile/h2300030455',
  },
];

const socials = [
  ['LinkedIn', 'nekkanti-sai-vighnesh-2a86b0372', 'Networking and updates', 'https://www.linkedin.com/in/nekkanti-sai-vighnesh-2a86b0372'],
  ['GitHub', 'saivighnesh2190', 'Code repositories', 'https://github.com/saivighnesh2190'],
  ['LeetCode', 'nsaivighnesh2190', '100+ solved', 'https://leetcode.com/u/nsaivighnesh2190/'],
  ['CodeChef', 'n_sai_vighnesh', 'Competitive coding', 'https://www.codechef.com/users/n_sai_vighnesh'],
  ['CodeForces', '2300030455cse', 'Contest profile', 'https://codeforces.com/profile/2300030455cse'],
  ['HackerRank', 'h2300030455', 'Coding profile', 'https://www.hackerrank.com/profile/h2300030455'],
  ['Email', 'nsv2190@gmail.com', 'Open to opportunities', 'mailto:nsv2190@gmail.com'],
];

const keyFeatures = [
  'Offline RAG memory for secure diagnostics',
  'Automated Linux and Kubernetes log analysis',
  'Python CLI with Typer + Rich UX',
  'Ollama local LLM integration',
  'Dockerized deployment + Jenkins CI/CD',
  'Collaborative issue triage workflows',
];

const projectDetailsMap = {
  TermBrain: {
    period: '01/2026 - Present',
    team: '3-Person Team',
    description:
      'AI observability platform to diagnose Linux and Kubernetes cluster issues using local LLM intelligence with offline-first workflows.',
    quickStats: [
      ['Troubleshooting Time', '-40%', 'Improved'],
      ['Weekly Downtime Saved', '2h', 'Saved'],
      ['Primary Environment', 'K8s', 'Production'],
      ['Mode', 'Offline', 'Secure'],
    ],
    features: [
      'Offline RAG memory for secure diagnostics',
      'Automated Linux and Kubernetes log analysis',
      'Python CLI with Typer + Rich UX',
      'Ollama local LLM integration',
      'Dockerized deployment + Jenkins CI/CD',
      'Collaborative issue triage workflows',
    ],
  },
  'ClipFlow AI': {
    period: '02/2025',
    team: 'Product Build',
    description:
      'AI-powered developer productivity platform that syncs coding activity into a dashboard and provides personalized algorithm recommendations.',
    quickStats: [
      ['DSA Review Time', '-30%', 'Improved'],
      ['Assistant', 'AI', 'Enabled'],
      ['Architecture', 'Next.js + React', 'Stable'],
      ['Data Layer', 'PostgreSQL', 'Connected'],
    ],
    features: [
      'Coding activity timeline dashboard',
      'AI assistant for algorithm analysis',
      'Personalized recommendation engine',
      'Review-speed and consistency tracking',
      'Full-stack deployable architecture',
      'Public demo with GitHub source',
    ],
  },
  'Travel Planner Website': {
    period: '12/2024',
    team: 'Full-Stack Build',
    description:
      'Full-stack travel planner with conversational planning, generated schedules, and API-driven itinerary orchestration.',
    quickStats: [
      ['Itinerary Generation', '+60%', 'Faster'],
      ['Frontend', 'React + Vite', 'Responsive'],
      ['Backend', 'Spring Boot', 'REST API'],
      ['Assistant', 'Gemini API', 'Integrated'],
    ],
    features: [
      'Responsive trip-planning interface',
      'Gemini chatbot for planning',
      'Structured itinerary generation',
      'REST API integration layer',
      'MySQL-backed persistence',
      'End-to-end full-stack workflow',
    ],
  },
  'No-Code Cleaning Agent': {
    period: '2024',
    team: 'Automation Build',
    description:
      'No-code booking assistant workflow that captures cleaning requests, generates price estimates, and automates customer confirmations.',
    quickStats: [
      ['Mode', 'No-Code', 'Operational'],
      ['Workflow', 'Lead to Booking', 'Automated'],
      ['Stack', 'Voiceflow + Make', 'Integrated'],
      ['Assistant', 'Relevance AI', 'Connected'],
    ],
    features: [
      'Property detail capture workflow',
      'Automated pricing generation',
      'Booking confirmation automation',
      'Voiceflow conversational interface',
      'Make scenario orchestration',
      'No-code deployment path',
    ],
  },
  'GAN-Based Synthetic Image Generator': {
    period: '07/2025',
    team: 'Research Project',
    description:
      'Implemented GAN and DCGAN models for synthetic diseased-leaf image generation to improve training-data diversity.',
    quickStats: [
      ['Model Family', 'GAN + DCGAN', 'Implemented'],
      ['Framework', 'PyTorch', 'Production'],
      ['Deployment', 'HF Space', 'Live'],
      ['Use Case', 'Data Augmentation', 'Validated'],
    ],
    features: [
      'Vanilla GAN and DCGAN pipelines',
      'Synthetic diseased-leaf generation',
      'CPU-optimized preprocessing',
      'Stability and quality comparisons',
      'Dataset augmentation workflow',
      'Public demo and repository',
    ],
  },
  'GigShield (Guidewire DevTrails)': {
    period: '2026',
    team: 'Hackathon Team',
    description:
      'AI parametric insurance platform for gig-worker fraud defense with confidence scoring from multi-signal geospatial fusion.',
    quickStats: [
      ['Hackathon', 'Guidewire DevTrails', '2026'],
      ['Signals', 'GPS + IMU + IP', 'Fused'],
      ['Fraud Scoring', 'Confidence Model', 'Enabled'],
      ['Stack', 'React + Node + ML', 'Integrated'],
    ],
    features: [
      'Fraud Confidence Score pipeline',
      'Spoofing detection heuristics',
      'Signal-fusion anomaly checks',
      'Risk-first insurance workflows',
      'Live dashboard for decisions',
      'Hackathon-grade rapid delivery',
    ],
  },
  'Meta OpenEnv RL Agent': {
    period: '03/2026',
    team: 'Hackathon Build',
    description:
      'Built reinforcement-learning agent environments on Meta OpenEnv for robust continuous-control experimentation.',
    quickStats: [
      ['Track', 'Meta x Scaler', 'Hackathon'],
      ['Domain', 'Reinforcement Learning', 'Applied'],
      ['Environment', 'Continuous Control', 'Built'],
      ['Output', 'Public Repo', 'Available'],
    ],
    features: [
      'OpenEnv-based RL environments',
      'Continuous-control task setup',
      'Agent behavior experimentation',
      'Evaluation-ready configurations',
      'Reproducible project structure',
      'Public implementation on GitHub',
    ],
  },
};

const certifications = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified DevOps Professional',
    issuer: 'Oracle',
    track: 'Cloud & DevOps',
    year: '2025',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=635DD10F83AB9C67D5B6AF301E477BF32AE5B89C07809C71753495BFD968EC70',
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    track: 'Generative AI',
    year: '2025',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=4CAAC260134E339096A818E019596AF69A9F76E78BE7E8F422800FB6869F1EC5',
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    track: 'AI Foundations',
    year: '2025',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=32712AFC91674345FB776506C63913544DD85D0D82B12D987BD22D1866568F81',
  },
  {
    title: 'HackerRank Software Engineer Role Certification',
    issuer: 'HackerRank',
    track: 'Software Engineering',
    year: '2025',
    url: 'https://www.hackerrank.com/certificates/iframe/e432215c018b',
  },
  {
    title: 'SmartInterviews Smart Coder Certificate',
    issuer: 'SmartInterviews',
    track: 'DSA & Problem Solving',
    year: '2025',
    url: 'https://smartinterviews.in/certificate/2479d331',
  },
];

function pillClass(status) {
  if (status === 'Active') return 'pill bg-mintTint text-mint';
  if (status === 'Scaling') return 'pill bg-skyTint text-cobalt';
  if (status === 'Beta') return 'pill bg-violetTint text-violet';
  if (status === 'Growing') return 'pill bg-skyTint text-cobalt';
  if (status === 'Maintenance') return 'pill bg-orangeTint text-orange';
  return 'pill bg-slate-100 text-body';
}

function Frame({ children, className = '', id }) {
  return (
    <section id={id} className={`frame section-shell scroll-mt-24 ${className}`}>
      {children}
    </section>
  );
}

function SmallTag({ children }) {
  return <span className="rounded-full border border-borderSoft bg-white px-2.5 py-1 text-[11px] font-semibold text-body">{children}</span>;
}

function TopNav({ onNavigate }) {
  return (
    <header className="sticky top-0 z-50 px-2 pt-2 backdrop-blur-lg">
      <div className="section-shell flex items-center justify-between rounded-3xl border border-borderSoft bg-white/80 px-4 py-3 shadow-soft">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-ink text-[10px] font-bold text-white">NV</div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-ink">N Sai Vighnesh</p>
            <p className="text-xs text-body">Full Stack Developer | AI Engineer</p>
          </div>
        </div>

        <nav className="hidden items-center gap-1 rounded-full border border-borderSoft bg-white px-2 py-1 shadow-soft md:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(item.id);
              }}
              className={`rounded-full px-4 py-1.5 text-[11px] font-semibold transition ${
                item.label === 'Contact' ? 'bg-navy text-white' : 'text-body hover:text-ink'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => onNavigate('contact-form')}
          className="rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white"
        >
          Contact
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <Frame id="home" className="mt-3 py-4 lg:py-6">
      <div className="grid gap-4 lg:grid-cols-[1.85fr,0.85fr]">
        <article className="card soft-grid p-6 lg:p-8">
          <span className="pill bg-mintTint text-mint">Open for internships and full-time roles</span>
          <h1 className="mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-ink lg:text-7xl">
            N Sai
            <br />
            <span className="italic text-slate-600">Vighnesh.</span>
          </h1>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-body">Professional Summary</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-body">
            Motivated Computer Science student (9.3 CGPA) specializing in Full-Stack Development (React, Spring Boot),
            AI/LLM integrations (RAG, Ollama), and Cloud DevOps (Docker, Kubernetes).
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-body sm:grid-cols-2">
            {introHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-cobalt" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://saivighnesh2190.github.io/portfolio/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-soft"
            >
              Portfolio
            </a>
            <a
              href="https://github.com/saivighnesh2190"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-borderSoft bg-white px-6 py-3 text-sm font-semibold text-ink"
            >
              GitHub
            </a>
          </div>
        </article>

        <article className="card overflow-hidden">
          <img src={portraitUrl} alt="N Sai Vighnesh" className="h-[26rem] w-full object-cover" />
          <div className="border-t border-borderSoft bg-white p-3">
            <p className="text-sm font-semibold text-ink">N Sai Vighnesh</p>
            <p className="text-xs text-body">Ravulapalem, Andhra Pradesh, India</p>
          </div>
          <div className="grid grid-cols-3 gap-2 border-t border-borderSoft bg-slate-50 p-2 text-center">
            <div className="rounded-2xl border border-borderSoft bg-white py-3">
              <p className="text-xl font-bold text-ink">9.3</p>
              <p className="text-[10px] uppercase tracking-[0.14em] text-body">CGPA</p>
            </div>
            <div className="rounded-2xl border border-borderSoft bg-white py-3">
              <p className="text-xl font-bold text-ink">100+</p>
              <p className="text-[10px] uppercase tracking-[0.14em] text-body">LeetCode</p>
            </div>
            <div className="rounded-2xl border border-borderSoft bg-white py-3">
              <p className="text-xl font-bold text-ink">5+</p>
              <p className="text-[10px] uppercase tracking-[0.14em] text-body">Certs</p>
            </div>
          </div>
        </article>
      </div>
    </Frame>
  );
}

function Ventures({ onDetails }) {
  return (
    <Frame id="projects" className="py-6 lg:py-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-ink">Featured Projects</h2>
          <p className="mt-2 text-sm text-body">Projects directly mapped from my resume and current engineering work.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-right">
          <div>
            <p className="text-4xl font-extrabold text-ink">4+</p>
            <p className="text-[10px] uppercase tracking-[0.14em] text-body">Major AI + Full-Stack Projects</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-ink">2026</p>
            <p className="text-[10px] uppercase tracking-[0.14em] text-body">Current Build Focus</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {ventures.map((venture) => (
          <article key={venture.name} className="card flex h-full flex-col p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-h-[106px]">
                <p className="text-2xl font-bold leading-tight text-ink">{venture.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-body">{venture.desc}</p>
              </div>
              <span className={pillClass(venture.status)}>{venture.status}</span>
            </div>

            <div className="mt-3 min-h-[28px] flex flex-wrap gap-1.5">
              {venture.tags.map((tag) => (
                <SmallTag key={tag}>{tag}</SmallTag>
              ))}
            </div>

            <div className="mt-auto pt-4">
              <div className={`h-1.5 rounded-full bg-gradient-to-r ${venture.color}`} />

              <div className="mt-3 flex items-center justify-between text-xs text-body">
                <span>Impact</span>
                <span className="font-bold text-ink">{venture.metric}</span>
              </div>

              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => onDetails(venture)}
                  className="flex-1 rounded-full bg-navy px-3 py-2 text-center text-xs font-semibold text-white"
                >
                  Details
                </button>
                {venture.demo ? (
                  <a
                    href={venture.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-full border border-borderSoft px-3 py-2 text-center text-xs font-semibold text-ink"
                  >
                    Demo
                  </a>
                ) : (
                  <a
                    href={venture.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-full border border-borderSoft px-3 py-2 text-center text-xs font-semibold text-ink"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div id="skills" className="mt-5 grid scroll-mt-24 gap-4 lg:grid-cols-2">
        <article className="card p-5">
          <h3 className="text-2xl font-bold text-ink">Technical Skills</h3>
          <div className="mt-4 grid gap-4 text-xs sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-body">Languages</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {['Java', 'Python', 'C', 'C++', 'JavaScript'].map((item) => (
                  <SmallTag key={item}>{item}</SmallTag>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-body">Frontend</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Vite'].map((item) => (
                  <SmallTag key={item}>{item}</SmallTag>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-body">Backend</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {['Spring Boot', 'Django', 'REST APIs', 'MySQL', 'PostgreSQL', 'Supabase'].map((item) => (
                  <SmallTag key={item}>{item}</SmallTag>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-body">Cloud, DevOps</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {['Docker', 'Jenkins', 'Kubernetes', 'Tomcat', 'Git', 'GitHub', 'VS Code'].map((item) => (
                  <SmallTag key={item}>{item}</SmallTag>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-body">AI Tools & Libraries</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {['Ollama', 'Gemini API', 'Genkit', 'PyTorch', 'Scikit-learn', 'Voiceflow', 'N8N', 'Relevance AI', 'Make'].map((item) => (
                  <SmallTag key={item}>{item}</SmallTag>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-body">DSA & Problem Solving</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {['Arrays', 'Strings', 'Linked List', 'Trees', 'Graphs', 'Dynamic Programming', 'Greedy', 'Recursion', 'Binary Search'].map((item) => (
                  <SmallTag key={item}>{item}</SmallTag>
                ))}
              </div>
              <p className="mt-2 text-[11px] font-semibold text-cobalt">Validated by SmartInterviews Smart Coder Certificate</p>
            </div>
          </div>
        </article>

        <article className="relative overflow-hidden rounded-4xl bg-navy p-5 text-white shadow-lift">
          <div className="absolute -right-6 -top-8 h-36 w-36 rounded-full border border-white/10" />
          <h3 className="text-2xl font-bold">How I Can Help</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              ['Full-Stack Development', 'React + Spring Boot based product engineering.'],
              ['AI Integrations', 'RAG, Ollama, and GenAI features in real products.'],
              ['DevOps Automation', 'Docker/Jenkins/Kubernetes for deployment and reliability.'],
              ['Hackathon Execution', 'Fast prototyping and rapid technical decision making.'],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-1 text-xs text-slate-300">{desc}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </Frame>
  );
}

function ProjectRows({ onDetails, projectItems }) {
  return (
    <Frame className="py-6 lg:py-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold text-ink">Achievements</h2>
          <p className="mt-2 text-sm text-body">Highlights, hackathons, and recognitions from my resume.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {projectItems.map((project) => (
          <article key={project.title} className="card flex h-full flex-col p-4">
            <div className="flex items-center justify-between">
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${project.icon || 'from-cobalt to-sky-400'}`} />
              <span className={pillClass(project.status)}>{project.status}</span>
            </div>

            <div className="mt-4 min-h-[64px]">
              <p className="text-xl font-bold leading-tight text-ink">{project.title}</p>
            </div>

            <div className="mt-2 min-h-[52px]">
              <p className="text-xs leading-relaxed text-body">{project.description}</p>
            </div>

            <div className="mt-3 min-h-[28px] flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <SmallTag key={tag}>{tag}</SmallTag>
              ))}
            </div>

            <div className="mt-auto pt-3">
              <div className="flex items-center justify-between text-xs text-body">
                <span>{project.meta}</span>
                <span>{project.year}</span>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <button
                  onClick={() => onDetails(project)}
                  className="rounded-full bg-navy px-3 py-2 text-center text-xs font-semibold text-white"
                >
                  Details
                </button>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-borderSoft px-3 py-2 text-center text-xs font-semibold text-ink"
                  >
                    Demo
                  </a>
                ) : (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-borderSoft px-3 py-2 text-center text-xs font-semibold text-ink"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold text-ink">Profiles and Platforms</h2>
          <p className="mt-2 text-sm text-body">Public profiles and coding platforms from my resume.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {websites.map((site, index) => (
          <a key={site.title} href={site.link} target="_blank" rel="noreferrer" className="card p-4 transition hover:translate-y-[-2px]">
            <div className="flex items-center justify-between">
              <div className={`h-9 w-9 rounded-xl bg-gradient-to-br ${index % 2 ? 'from-rose-500 to-pink-500' : 'from-orange-500 to-red-500'}`} />
              <span className={pillClass(site.status)}>{site.status}</span>
            </div>
            <p className="mt-3 text-xl font-bold text-ink">{site.title}</p>
            <p className="mt-1 text-xs text-body">{site.description}</p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-body">
              <div>
                <p className="text-base font-extrabold text-ink">{site.traffic}</p>
                <p>Status</p>
              </div>
              <div>
                <p className="text-sm font-extrabold text-mint break-all">{site.revenue}</p>
                <p>Handle</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Frame>
  );
}

function CareerAndSocial() {
  return (
    <Frame id="experience" className="py-6 lg:py-8">
      <div className="grid gap-4 lg:grid-cols-[1.45fr,0.9fr]">
        <article className="card p-5">
          <h2 className="text-3xl font-bold text-ink">Work Experience</h2>
          <div className="mt-4 space-y-5">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold text-ink">ServiceNow Developer Intern (VIP 2026)</p>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-body">03/2026 - Present</span>
              </div>
              <p className="mt-1 text-sm font-semibold text-cobalt">SmartBridge x ServiceNow x AICTE</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-body">
                <li>Building workflow automation applications on the Now Platform.</li>
                <li>Completed SNU hands-on ITSM and low-code development modules.</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold text-ink">Virtual Internship - Web Development</p>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-body">05/2025 - 06/2025</span>
              </div>
              <p className="mt-1 text-sm font-semibold text-cobalt">EduSkills Foundation</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-body">
                <li>Built responsive UI components using HTML5, CSS3, JavaScript, and React.</li>
                <li>Improved front-end rendering and page load performance by 30%.</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold text-ink">Social Internship</p>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-body">06/2024</span>
              </div>
              <p className="mt-1 text-sm font-semibold text-cobalt">Swecha Andhra Pradesh</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-body">
                <li>Mentored 50+ government school students in digital literacy.</li>
                <li>Curated over 1,000 spatial data points using OSM and Mapillary.</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="card p-5">
          <h2 className="text-3xl font-bold text-ink">Education</h2>
          <div className="mt-4 space-y-3">
            <div className="rounded-2xl border border-borderSoft bg-slate-50 p-4">
              <p className="text-lg font-bold text-ink">B.Tech, CSE - KL University, Guntur</p>
              <p className="text-sm text-body">08/2023 - 05/2027</p>
              <p className="mt-2 text-xs text-body">CGPA: 9.3 / 10</p>
            </div>
            <div className="rounded-2xl border border-borderSoft bg-slate-50 p-4">
              <p className="text-lg font-bold text-ink">Intermediate (MPC), Sasi Junior College</p>
              <p className="text-sm text-body">06/2021 - 04/2023</p>
              <p className="mt-2 text-xs text-body">Percentage: 94.1%</p>
            </div>
            <div className="rounded-2xl border border-borderSoft bg-slate-50 p-4">
              <p className="text-lg font-bold text-ink">Interests</p>
              <p className="text-sm text-body">Competitive Programming, Agentic AI Systems, Open Source</p>
            </div>
          </div>
        </article>
      </div>

      <div className="mt-4">
        <article className="card p-5">
          <h3 className="text-3xl font-bold text-ink">Certifications</h3>
          <p className="mt-2 text-sm text-body">Verified credentials with issuer and specialization details.</p>
          <div className="mt-4 grid gap-3 text-sm text-body md:grid-cols-2">
            {certifications.map((cert) => (
              <div key={cert.title} className="rounded-xl border border-borderSoft bg-slate-50 px-3 py-3">
                <p className="font-semibold text-ink">{cert.title}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-white px-2 py-1 font-semibold text-body">Issuer: {cert.issuer}</span>
                  <span className="rounded-full bg-white px-2 py-1 font-semibold text-body">Track: {cert.track}</span>
                  <span className="rounded-full bg-white px-2 py-1 font-semibold text-body">Year: {cert.year}</span>
                </div>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block whitespace-nowrap rounded-full border border-borderSoft bg-white px-3 py-1 text-xs font-semibold text-ink"
                >
                  View Credential
                </a>
              </div>
            ))}
          </div>
        </article>
      </div>
    </Frame>
  );
}

function ProjectDetail({ onDetails }) {
  return (
    <Frame className="py-6 lg:py-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <span className="pill bg-orangeTint text-orange">Current Flagship Project</span>
          <h2 className="mt-2 text-5xl font-extrabold text-ink">TermBrain</h2>
          <p className="text-sm text-body">AI Observability Platform for Linux and Kubernetes</p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-extrabold text-ink">01/2026 - Present</p>
          <p className="text-xs text-body">3-person Agile Team</p>
        </div>
      </div>

      <img src={projectBannerUrl} alt="Team collaboration" className="mt-5 h-64 w-full rounded-3xl border border-borderSoft object-cover" />

      <div className="mt-5 grid gap-4 lg:grid-cols-[1.45fr,0.8fr]">
        <article className="card p-5">
          <h3 className="text-3xl font-bold text-ink">Project Overview</h3>
          <p className="mt-3 text-sm leading-relaxed text-body">
            TermBrain is an AI observability platform built to diagnose Linux and Kubernetes cluster issues with secure,
            local-first intelligence. It combines structured log workflows, offline RAG memory, and automated troubleshooting
            pathways for engineering teams.
          </p>

          <h3 className="mt-6 text-3xl font-bold text-ink">Technical Stack</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {['Python', 'Typer', 'Rich', 'Ollama', 'ChromaDB', 'LangChain', 'React', 'Kubernetes', 'Docker', 'Jenkins'].map((item) => (
              <SmallTag key={item}>{item}</SmallTag>
            ))}
          </div>

          <ul className="mt-4 grid gap-2 text-sm text-body sm:grid-cols-2">
            {[
              'Reduced manual troubleshooting by 40%',
              'Automated Linux and Kubernetes diagnostics',
              'Prevented ~2 hours of weekly downtime',
              'Offline and secure local log analysis',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-mint" />
                {item}
              </li>
            ))}
          </ul>
        </article>

        <div className="space-y-4">
          <article className="card p-4">
            <h4 className="text-xl font-bold text-ink">Project Details</h4>
            <dl className="mt-3 space-y-2 text-sm text-body">
              <div className="flex justify-between"><dt>Status</dt><dd className="font-semibold text-ink">Active</dd></div>
              <div className="flex justify-between"><dt>Category</dt><dd className="font-semibold text-ink">AI + DevOps</dd></div>
              <div className="flex justify-between"><dt>Team Size</dt><dd className="font-semibold text-ink">3</dd></div>
              <div className="flex justify-between"><dt>Deployment</dt><dd className="font-semibold text-ink">Docker + Jenkins</dd></div>
            </dl>
          </article>

          <article className="card p-4">
            <h4 className="text-xl font-bold text-ink">Links</h4>
            <div className="mt-3 space-y-2">
              <a
                href="https://github.com/saivighnesh2190/termbrain"
                target="_blank"
                rel="noreferrer"
                className="block w-full rounded-full bg-navy px-4 py-2 text-center text-sm font-semibold text-white"
              >
                GitHub
              </a>
              <button onClick={() => onDetails(ventures[0])} className="w-full rounded-full bg-cobalt px-4 py-2 text-sm font-semibold text-white">
                Details
              </button>
            </div>
          </article>
        </div>
      </div>
    </Frame>
  );
}

function ContactSection() {
  const formRef = React.useRef(null);
  const [formStatus, setFormStatus] = React.useState({ type: '', message: '' });
  const [isSending, setIsSending] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setFormStatus({
        type: 'error',
        message: 'Email service is not configured yet. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.',
      });
      return;
    }

    try {
      setIsSending(true);
      setFormStatus({ type: '', message: '' });
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      formRef.current?.reset();
      setFormStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon.' });
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Failed to send message. Please try again or use email directly.' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Frame id="contact-form" className="py-6 lg:py-8">
      <article className="card p-6 lg:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-body">Contact Me</p>
        <h2 className="mt-2 text-4xl font-extrabold text-ink">Let us build something real together.</h2>
        <p className="mt-3 text-sm text-body">
          Share your name, email, and message below. I am actively looking for internships and full-time software roles in
          Full-Stack, AI Engineering, and DevOps.
        </p>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1fr,1.2fr]">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <a href="mailto:nsv2190@gmail.com" className="rounded-2xl border border-borderSoft bg-slate-50 p-4">
              <p className="text-xs text-body">Email</p>
              <p className="mt-1 text-sm font-semibold text-ink break-all">nsv2190@gmail.com</p>
            </a>
            <a href="tel:+919059854218" className="rounded-2xl border border-borderSoft bg-slate-50 p-4">
              <p className="text-xs text-body">Phone</p>
              <p className="mt-1 text-sm font-semibold text-ink">+91 9059854218</p>
            </a>
            <a href="https://www.linkedin.com/in/nekkanti-sai-vighnesh-2a86b0372" target="_blank" rel="noreferrer" className="rounded-2xl border border-borderSoft bg-slate-50 p-4">
              <p className="text-xs text-body">LinkedIn</p>
              <p className="mt-1 text-sm font-semibold text-ink break-all">nekkanti-sai-vighnesh-2a86b0372</p>
            </a>
            <a href="https://github.com/saivighnesh2190" target="_blank" rel="noreferrer" className="rounded-2xl border border-borderSoft bg-slate-50 p-4">
              <p className="text-xs text-body">GitHub</p>
              <p className="mt-1 text-sm font-semibold text-ink">saivighnesh2190</p>
            </a>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="grid gap-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="rounded-2xl border border-borderSoft bg-slate-50 p-4">
                <p className="text-xs text-body">Your Name</p>
                <input
                  name="from_name"
                  required
                  placeholder="Enter your name"
                  className="mt-1 w-full bg-transparent text-sm font-semibold text-ink outline-none placeholder:text-slate-400"
                />
              </label>
              <label className="rounded-2xl border border-borderSoft bg-slate-50 p-4">
                <p className="text-xs text-body">Your Email</p>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="Enter your email"
                  className="mt-1 w-full bg-transparent text-sm font-semibold text-ink outline-none placeholder:text-slate-400"
                />
              </label>
            </div>

            <label className="rounded-2xl border border-borderSoft bg-slate-50 p-4">
              <p className="text-xs text-body">Message</p>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Write your message"
                className="mt-2 w-full resize-y bg-transparent text-sm text-ink outline-none placeholder:text-slate-400"
              />
            </label>

            <input type="hidden" name="to_name" value="N Sai Vighnesh" />

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={isSending}
                className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
              {formStatus.message && (
                <p className={`text-sm ${formStatus.type === 'success' ? 'text-mint' : 'text-orange'}`}>
                  {formStatus.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </article>
    </Frame>
  );
}

function DemoModal({ project, onClose }) {
  if (!project) return null;

  const title = project.name || project.title || 'Project';
  const subtitle = project.desc || project.description || 'Project details';
  const repoLink = project.repo || 'https://github.com/saivighnesh2190/termbrain';
  const demoLink = project.demo;
  const tags = project.tags || ['React', 'Node.js'];
  const detail = projectDetailsMap[title] || {
    period: 'Current',
    team: 'Project Build',
    description: subtitle,
    quickStats: [
      ['Status', project.status || 'Active', 'Current'],
      ['Tech Tags', `${tags.length}`, 'Included'],
      ['Source', 'GitHub', 'Available'],
      ['Demo', demoLink ? 'Yes' : 'No', 'Checked'],
    ],
    features: keyFeatures,
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6" onClick={onClose}>
      <div className="absolute inset-0 bg-navy/70 backdrop-blur-sm" />
      <div
        className="relative z-10 mx-auto max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-4xl border border-white/20 bg-white p-6 shadow-lift lg:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-borderSoft text-body"
          aria-label="Close demo modal"
        >
          x
        </button>

        <div className="grid gap-6 lg:grid-cols-[1fr,1.4fr]">
          <div>
            <img src={projectBannerUrl} alt={`${title} demo`} className="h-48 w-full rounded-3xl object-cover" />

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-body">Quick Stats</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {detail.quickStats.map(([label, value, delta]) => (
                <div key={label} className="rounded-2xl border border-borderSoft bg-slate-50 p-2.5">
                  <p className="text-[11px] text-body">{label}</p>
                  <p className="text-lg font-bold text-ink">{value}</p>
                  <p className="text-xs font-semibold text-mint">{delta}</p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-body">Tech Stack</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((item) => (
                <SmallTag key={item}>{item}</SmallTag>
              ))}
            </div>
          </div>

          <div>
            <span className="pill bg-orangeTint text-orange">Project Details</span>
            <div className="mt-3 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-5xl font-extrabold text-ink">{title}</h2>
                <p className="text-sm text-body">{subtitle}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-body">{detail.period}</p>
                <p className="text-3xl font-extrabold text-ink">{detail.team}</p>
              </div>
            </div>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-body">Description</p>
            <p className="mt-1 text-sm leading-relaxed text-body">
              {detail.description}
            </p>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-body">Key Features</p>
            <ul className="mt-2 grid gap-2 text-sm text-body sm:grid-cols-2">
              {detail.features.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-mint" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={repoLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white"
              >
                GitHub
              </a>
              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-cobalt px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [selectedProject, setSelectedProject] = React.useState(null);

  const navigateToSection = (sectionId) => {
    const sectionEl = document.getElementById(sectionId);
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeDemoModal = () => {
    setSelectedProject(null);
  };

  React.useEffect(() => {
    if (!selectedProject) return undefined;

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-page pb-6">
      <TopNav onNavigate={navigateToSection} />
      <main className="space-y-3 pt-1">
        <Hero />
        <Ventures onDetails={openProjectDetails} />
        <ProjectRows onDetails={openProjectDetails} projectItems={projects} />
        <CareerAndSocial />
        <ProjectDetail onDetails={openProjectDetails} />
        <ContactSection />
      </main>
      <DemoModal project={selectedProject} onClose={closeDemoModal} />
    </div>
  );
}
