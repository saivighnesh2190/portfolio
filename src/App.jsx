import React from 'react';
import emailjs from '@emailjs/browser';

const portraitUrl = `${import.meta.env.BASE_URL}MyImage.jpg`;
const fullStackResumeUrl = `${import.meta.env.BASE_URL}vighnesh_fullstack.pdf`;
const aiResumeUrl = `${import.meta.env.BASE_URL}vighnesh_ai.pdf`;
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
const CONTACT_EMAIL = 'nsv2190@gmail.com';

const introHighlights = [
  '9.3 CGPA Computer Science student at KL University',
  'Full-Stack development with React, Spring Boot, and modern DevOps',
  'AI/LLM engineering with Linux-native diagnostics and CLI automation',
  'Hackathon builder with Guidewire and Meta OpenEnv project experience',
  'Oracle-certified in DevOps, Generative AI, and AI Foundations',
];

const currentFocus = ['Linux AI Tools', 'Full-Stack AI Apps', 'CLI Automation', 'Hackathon Builds'];

const ventures = [
  {
    name: 'TermBrain',
    desc: 'Linux-native AI diagnostic CLI that streams logs, compresses errors, caches answers, and suggests safe fixes.',
    status: 'Active',
    tags: ['Python', 'Typer', 'Rich', 'g4f', 'SQLite', 'systemd'],
    metric: 'Read-only AI diagnostics',
    color: 'from-cobalt to-sky-400',
    repo: 'https://github.com/saivighnesh2190/termbrain',
    demo: null,
  },
  {
    name: 'GAN-Based Synthetic Image Generator',
    desc: 'Built GAN/DCGAN pipelines in PyTorch to generate diseased leaf images for dataset augmentation.',
    status: 'Active',
    tags: ['Python', 'PyTorch', 'DCGAN', 'Gradio'],
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
    metric: 'AI coding assistant',
    color: 'from-violet to-fuchsia-400',
    repo: 'https://github.com/saivighnesh2190/clip-flow-ai',
    demo: 'https://clipflowai.vercel.app',
  },
  {
    name: 'Travel Planner Website',
    desc: 'Full-stack planner with conversational trip recommendations and generated schedules.',
    status: 'Beta',
    tags: ['React', 'Vite', 'Spring Boot', 'MySQL', 'Gemini API'],
    metric: 'Gemini itinerary builder',
    color: 'from-orange to-amber-400',
    repo: 'https://github.com/saivighnesh2190/travel-planner',
    demo: null,
  },
];

const projects = [
  {
    title: 'GigShield (Guidewire DevTrails)',
    description: 'AI parametric insurance platform with ML fraud detection and automated claim triggers.',
    status: 'Scaling',
    tags: ['React', 'Spring Boot', 'FastAPI', 'Supabase', 'Scikit-learn'],
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
    title: 'GitHub',
    status: 'Active',
    description: 'Open-source repositories and full-stack / AI project implementations.',
    traffic: 'Public',
    revenue: 'saivighnesh2190',
    link: 'https://github.com/saivighnesh2190',
    accent: 'from-slate-700 to-slate-950',
  },
  {
    title: 'LeetCode',
    status: 'Growing',
    description: 'Coding practice profile with 100+ solved challenges.',
    traffic: '100+',
    revenue: 'leetcode.com/u/nsaivighnesh2190',
    link: 'https://leetcode.com/u/nsaivighnesh2190/',
    accent: 'from-amber-500 to-orange-500',
  },
  {
    title: 'CodeForces',
    status: 'Active',
    description: 'Competitive programming profile and contest participation.',
    traffic: 'Active',
    revenue: '2300030455cse',
    link: 'https://codeforces.com/profile/2300030455cse',
    accent: 'from-sky-500 to-cobalt',
  },
  {
    title: 'HackerRank',
    status: 'Active',
    description: 'Coding profile and software engineering certification track record.',
    traffic: 'Public',
    revenue: 'h2300030455',
    link: 'https://www.hackerrank.com/profile/h2300030455',
    accent: 'from-emerald-500 to-mint',
  },
  {
    title: 'CodeChef',
    status: 'Active',
    description: 'Competitive programming profile and contest participation.',
    traffic: 'Active',
    revenue: 'n_sai_vighnesh',
    link: 'https://www.codechef.com/users/n_sai_vighnesh',
    accent: 'from-violet to-fuchsia-500',
  },
  {
    title: 'SmartInterviews',
    status: 'Active',
    description: 'SmartInterviews coding profile and practice dashboard.',
    traffic: 'Public',
    revenue: 'nsv2300030455',
    link: 'https://smartinterviews.in/profile/nsv2300030455',
    accent: 'from-cyan-500 to-teal-500',
  },
];

const keyFeatures = [
  'SQLite-backed diagnostic history and cache',
  'Linux log collection from native system tools',
  'Python CLI with Typer + Rich UX',
  'g4f cloud LLM inference without manual API keys',
  'Read-only fix suggestions for safer debugging',
  'Systemd timer scheduling for daily health scans',
];

const termbrainCommands = [
  ['Diagnose', 'termbrain diagnose journal', 'journal, pacman, gpu, boot, network'],
  ['Suggest Fix', 'termbrain suggest-fix service sshd', 'git, pacman, disk, service'],
  ['Explain', 'termbrain explain "tar -czvf backup.tar.gz /home/user"', 'command and script breakdowns'],
  ['Health', 'termbrain doctor', 'CPU, memory, disk, failed services'],
  ['Security', 'termbrain security network', 'ports, sshd logs, sudo attempts'],
  ['History', 'termbrain history search "wifi" --semantic', 'SQLite audit and semantic search'],
  ['Schedule', 'termbrain schedule setup', 'user-scope systemd timer'],
  ['Monitor', 'termbrain monitor cpu', 'local live Rich dashboard'],
];

const projectDetailsMap = {
  TermBrain: {
    period: '01/2026 - Present',
    team: '3-Person Team',
    description:
      'Linux-native AI diagnostic CLI that hooks into journalctl, pacman, systemctl, ss, and other system tools to parse logs, compress noisy error output, and return human-readable diagnoses with safe fix suggestions.',
    quickStats: [
      ['Diagnostic Scope', 'Linux Tools', 'Native'],
      ['AI Engine', 'g4f', 'Cloud'],
      ['Storage', 'SQLite', 'Local'],
      ['Interface', 'CLI', 'Typer/Rich'],
    ],
    features: [
      'Read-only suggest mode for safer debugging',
      'journalctl, pacman, systemctl, ss, and log integrations',
      'Regex-based log trimming for LLM context windows',
      'Rich live markdown streaming and terminal dashboard',
      'SQLite history, caching, and semantic search flow',
      'Systemd timer setup for scheduled health scans',
    ],
  },
  'ClipFlow AI': {
    period: '02/2025',
    team: 'Full-Stack Build',
    description:
      'Developer productivity dashboard that organizes coding activity, streaks, and AI-assisted algorithm feedback in a deployable full-stack app.',
    quickStats: [
      ['Frontend', 'Next.js', 'SSR'],
      ['Data Layer', 'PostgreSQL', 'Persistent'],
      ['Deployment', 'Vercel', 'Live'],
      ['Assistant', 'AI/LLM', 'Integrated'],
    ],
    features: [
      'Coding activity timeline dashboard',
      'AI assistant for algorithm analysis',
      'Personalized practice recommendations',
      'Streak and consistency tracking',
      'Full-stack deployable architecture',
      'Public demo with GitHub source',
    ],
  },
  'Travel Planner Website': {
    period: '12/2025',
    team: 'Full-Stack Build',
    description:
      'Full-stack travel planner with conversational planning, generated schedules, and API-driven itinerary orchestration.',
    quickStats: [
      ['Frontend', 'React + Vite', 'Responsive'],
      ['Backend', 'Spring Boot', 'REST API'],
      ['Database', 'MySQL', 'Persistent'],
      ['AI Layer', 'Gemini API', 'Integrated'],
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
  'GAN-Based Synthetic Image Generator': {
    period: '01/2026',
    team: 'Research Project',
    description:
      'Implemented GAN and DCGAN models for synthetic diseased-leaf image generation to improve training-data diversity.',
    quickStats: [
      ['Model Family', 'GAN + DCGAN', 'Implemented'],
      ['Framework', 'PyTorch', 'Training'],
      ['Interface', 'Gradio', 'Interactive'],
      ['Deployment', 'HF Space', 'Live Demo'],
    ],
    features: [
      'Vanilla GAN and DCGAN pipelines',
      'Synthetic diseased-leaf generation',
      'CPU-optimized preprocessing',
      'Training stability comparisons',
      'Dataset augmentation experiments',
      'Public demo and repository',
    ],
  },
  'GigShield (Guidewire DevTrails)': {
    period: '2026',
    team: 'Hackathon Team',
    description:
      'AI parametric insurance platform for Indian gig workers with ML-powered fraud detection and automated claim triggers.',
    quickStats: [
      ['Hackathon', 'Guidewire DevTrails', '2026'],
      ['Domain', 'Gig Insurance', 'Applied'],
      ['Fraud Detection', 'Scikit-learn', 'Enabled'],
      ['Stack', 'React + Spring + FastAPI', 'Integrated'],
    ],
    features: [
      'ML-powered fraud detection',
      'Automated weather/AQI claim triggers',
      'Supabase-backed data workflows',
      'Risk-first insurance workflows',
      'Dashboard-driven claim review',
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
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    track: 'Cloud Foundations',
    year: '2025',
    url: 'https://www.credly.com/badges/40b71834-6cbc-4c10-bb7e-2b557e6ce8fe/public_url',
  },
  {
    title: 'SmartInterviews Smart Coder Certificate',
    issuer: 'SmartInterviews',
    track: 'Coding Practice',
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
          <span className="pill bg-mintTint text-mint">Open to internships and entry-level software roles</span>
          <h1 className="mt-5 text-5xl font-extrabold leading-[0.95] tracking-tight text-ink lg:text-7xl">
            N Sai
            <br />
            <span className="italic text-slate-600">Vighnesh.</span>
          </h1>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-body">Professional Summary</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-body">
            Motivated Computer Science student (9.3 CGPA) specializing in Full-Stack Development (React, Spring Boot),
            AI/LLM integrations, Linux-native CLI automation, and Cloud DevOps (Docker, Kubernetes).
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-body sm:grid-cols-2">
            {introHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-cobalt" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {currentFocus.map((item) => (
              <span key={item} className="rounded-full border border-cobalt/20 bg-skyTint px-3 py-1.5 text-xs font-semibold text-cobalt">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={fullStackResumeUrl}
              download
              className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-soft"
            >
              Full-Stack Resume
            </a>
            <a
              href={aiResumeUrl}
              download
              className="rounded-full bg-cobalt px-6 py-3 text-sm font-semibold text-white shadow-soft"
            >
              AI Resume
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
          <p className="mt-2 text-sm text-body">Resume projects and current engineering work across full-stack and AI systems.</p>
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
          <div className="mt-4 grid gap-4 text-xs sm:grid-cols-2">
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
                {['Spring Boot', 'FastAPI', 'REST APIs', 'MySQL', 'PostgreSQL', 'Supabase'].map((item) => (
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
                {['g4f', 'Gemini API', 'Prompt Engineering', 'SQLite Caching', 'PyTorch', 'Scikit-learn', 'Gradio', 'NumPy', 'Pandas'].map((item) => (
                  <SmallTag key={item}>{item}</SmallTag>
                ))}
              </div>
            </div>
          </div>
        </article>

        <article className="relative overflow-hidden rounded-4xl bg-navy p-5 text-white shadow-lift">
          <div className="absolute -right-6 -top-8 h-36 w-36 rounded-full border border-white/10" />
          <h3 className="text-2xl font-bold">How I Can Help</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              ['Full-Stack Development', 'React + Spring Boot based product engineering.'],
              ['AI Integrations', 'LLM-powered diagnostics and GenAI features in real products.'],
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
          <h2 className="text-4xl font-bold text-ink">Public Profiles</h2>
          <p className="mt-2 text-sm text-body">Public proof of work, coding activity, and engineering credentials.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {websites.map((site) => (
          <a
            key={site.title}
            href={site.link}
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl border border-borderSoft bg-white p-4 shadow-soft transition hover:-translate-y-1 hover:border-cobalt/30 hover:shadow-lift"
          >
            <div className="flex items-center justify-between">
              <div className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${site.accent} text-xs font-extrabold text-white shadow-soft`}>
                {site.title.slice(0, 2).toUpperCase()}
              </div>
              <span className={pillClass(site.status)}>{site.status}</span>
            </div>
            <p className="mt-4 text-xl font-bold text-ink">{site.title}</p>
            <p className="mt-1 min-h-[36px] text-xs leading-relaxed text-body">{site.description}</p>
            <div className="mt-4 grid grid-cols-[0.75fr,1.25fr] gap-2 rounded-2xl border border-borderSoft bg-slate-50 p-3 text-xs text-body">
              <div className="border-r border-borderSoft pr-2">
                <p className="text-base font-extrabold text-ink">{site.traffic}</p>
                <p>Proof</p>
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-extrabold text-mint">{site.revenue}</p>
                <p>Handle</p>
              </div>
            </div>
            <p className="mt-3 text-xs font-semibold text-cobalt opacity-0 transition group-hover:opacity-100">Open profile</p>
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
          <h2 className="text-3xl font-bold text-ink">Experience & Training</h2>
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

function TermbrainPreview() {
  const journalLines = [
    '/var/lib/systemd/coredump/core.antigravity...',
    '/var/lib/systemd/coredump/core.plasmashell...',
    '/var/lib/systemd/coredump/core.wpscloudsvr...',
    'Sending 1474 lines to AI...',
  ];

  const diagnosisBullets = [
    'KDE Plasma components show repeated crash traces',
    'AI summary groups likely configuration and version issues',
    'Suggested commands are presented for manual review',
  ];

  return (
    <div className="mt-5 grid gap-4 lg:grid-cols-[1.15fr,0.85fr]">
      <article className="overflow-hidden rounded-3xl border border-slate-700 bg-[#171924] shadow-lift">
        <div className="border-b border-slate-700 px-4 py-2 font-mono text-xs text-lime-300">
          {')'} termbrain diagnose journal
        </div>
        <div className="grid gap-3 p-4 font-mono text-[11px] leading-relaxed text-slate-300">
          <div className="rounded-2xl border border-slate-500/70 p-3">
            <p className="mb-2 text-center text-slate-300">journal</p>
            {journalLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="rounded-2xl border border-lime-500/70 p-3">
            <p className="mb-2 text-center text-lime-300">TermBrain Suggestion (Cloud Model)</p>
            <p className="text-violet-300">Summary</p>
            <p className="mt-2">
              The system appears to be experiencing repeated component crashes. TermBrain extracts the relevant log lines
              and returns a human-readable explanation with suggested commands.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              {diagnosisBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <article className="overflow-hidden rounded-3xl border border-slate-700 bg-[#171924] shadow-lift">
        <div className="border-b border-slate-700 px-4 py-2 font-mono text-xs text-lime-300">
          {')'} termbrain doctor
        </div>
        <div className="p-4 font-mono text-[11px] leading-relaxed text-slate-300">
          <p className="text-center italic text-slate-300">System Health Snapshot</p>
          <div className="mt-3 grid grid-cols-[1.1fr,1fr,0.7fr] gap-2">
            {['Metric', 'Value', 'Status'].map((item) => (
              <p key={item} className="font-bold text-sky-300">{item}</p>
            ))}
            {[
              ['CPU Load', '0.61, 1.16, 1.27', 'ok'],
              ['Memory Usage', '6.6G / 15.4G', 'ok'],
              ['Disk Usage', '746G / 2.2T', 'ok'],
              ['Temperatures', 'Available', 'critical'],
            ].map(([metric, value, status]) => (
              <React.Fragment key={metric}>
                <p className={status === 'critical' ? 'text-rose-300' : 'text-lime-300'}>{metric}</p>
                <p>{value}</p>
                <p className={status === 'critical' ? 'text-rose-300' : 'text-lime-300'}>{status}</p>
              </React.Fragment>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-sky-400/70 p-3">
            System looks perfectly healthy. No LLM call needed.
          </div>
          <div className="mt-5 border-t border-slate-700 pt-3 text-lime-300">
            {')'} termbrain diagnose gpu
          </div>
          <div className="mt-2 rounded-2xl border border-slate-500/70 p-3 text-slate-300">
            <p>--- lspci ---</p>
            <p>00:02.0 VGA compatible controller: Intel UHD Graphics</p>
            <p>Kernel driver in use: i915</p>
            <p className="mt-2 text-center">Sending 42 lines to AI...</p>
          </div>
        </div>
      </article>
    </div>
  );
}

function ProjectDetail({ onDetails }) {
  return (
    <Frame className="py-6 lg:py-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <span className="pill bg-orangeTint text-orange">Current Flagship Project</span>
          <h2 className="mt-2 text-5xl font-extrabold text-ink">TermBrain</h2>
          <p className="text-sm text-body">Linux-Native AI Diagnostic CLI</p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-extrabold text-ink">01/2026 - Present</p>
          <p className="text-xs text-body">3-person Agile Team</p>
        </div>
      </div>

      <TermbrainPreview />

      <div className="mt-5 grid gap-4 lg:grid-cols-[1.45fr,0.8fr]">
        <article className="card p-5">
          <h3 className="text-3xl font-bold text-ink">Project Overview</h3>
          <p className="mt-3 text-sm leading-relaxed text-body">
            TermBrain is a Linux-native AI diagnostic CLI that collects logs from tools like journalctl, pacman,
            systemctl, and ss, compresses noisy error output, and returns safe, human-readable fix suggestions.
          </p>

          <h3 className="mt-6 text-3xl font-bold text-ink">Technical Stack</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {['Python', 'Typer', 'Rich', 'g4f', 'SQLite', 'systemd', 'Bash', 'Linux'].map((item) => (
              <SmallTag key={item}>{item}</SmallTag>
            ))}
          </div>

          <ul className="mt-4 grid gap-2 text-sm text-body sm:grid-cols-2">
            {[
              'Read-only suggest mode for safer debugging',
              'Native Linux log and service diagnostics',
              'SQLite-backed history and smart caching',
              'Systemd scheduling for daily health scans',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-mint" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-3xl font-bold text-ink">Working Command Suite</h3>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {termbrainCommands.map(([group, command, scope]) => (
              <div key={command} className="rounded-2xl border border-borderSoft bg-slate-50 p-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-body">{group}</p>
                <p className="mt-1 font-mono text-xs font-semibold text-ink">{command}</p>
                <p className="mt-1 text-xs text-body">{scope}</p>
              </div>
            ))}
          </div>
        </article>

        <div className="space-y-4">
          <article className="card p-4">
            <h4 className="text-xl font-bold text-ink">Project Details</h4>
            <dl className="mt-3 space-y-2 text-sm text-body">
              <div className="flex justify-between"><dt>Status</dt><dd className="font-semibold text-ink">Active</dd></div>
              <div className="flex justify-between"><dt>Category</dt><dd className="font-semibold text-ink">AI + Linux CLI</dd></div>
              <div className="flex justify-between"><dt>Team Size</dt><dd className="font-semibold text-ink">3</dd></div>
              <div className="flex justify-between"><dt>AI Engine</dt><dd className="font-semibold text-ink">g4f</dd></div>
              <div className="flex justify-between"><dt>Storage</dt><dd className="font-semibold text-ink">SQLite</dd></div>
              <div className="flex justify-between"><dt>Scheduler</dt><dd className="font-semibold text-ink">systemd</dd></div>
            </dl>
          </article>

          <article className="card p-4">
            <h4 className="text-xl font-bold text-ink">Technical Challenges</h4>
            <ul className="mt-3 space-y-2 text-sm text-body">
              <li>Compressed large logs with regex filters for error, fail, and critical lines.</li>
              <li>Used batched Rich rendering to reduce terminal flicker while streaming markdown.</li>
              <li>Combined local thresholding and SQLite caching to avoid unnecessary LLM calls.</li>
              <li>Built role-based prompts for Linux networking, package, service, and security tasks.</li>
            </ul>
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
    const formData = new FormData(formRef.current);
    const fromName = String(formData.get('from_name') || '').trim();
    const fromEmail = String(formData.get('from_email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      const subject = encodeURIComponent(`Portfolio message from ${fromName || 'visitor'}`);
      const body = encodeURIComponent(
        `Name: ${fromName}\nEmail: ${fromEmail}\n\nMessage:\n${message}`
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setFormStatus({
        type: 'success',
        message: 'Opening your email app with this message addressed to me.',
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
        <h2 className="mt-2 text-4xl font-extrabold text-ink">Let's build something real together.</h2>
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
            <a href="https://t.me/saivig2190" target="_blank" rel="noreferrer" className="rounded-2xl border border-borderSoft bg-slate-50 p-4">
              <p className="text-xs text-body">Telegram</p>
              <p className="mt-1 text-sm font-semibold text-ink">@saivig2190</p>
            </a>
            <a href="https://discord.com/users/vighnesh_sai_2301" target="_blank" rel="noreferrer" className="rounded-2xl border border-borderSoft bg-slate-50 p-4">
              <p className="text-xs text-body">Discord</p>
              <p className="mt-1 text-sm font-semibold text-ink">vighnesh_sai_2301</p>
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
            <input type="hidden" name="to_email" value={CONTACT_EMAIL} />

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
  const tags = project.tags || ['React', 'FastAPI'];
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
