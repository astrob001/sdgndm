import { useState } from 'react';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  ChevronRight,
  Download,
  ExternalLink,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  MoveRight,
  Phone,
  Ruler,
  ShieldCheck,
  X,
} from 'lucide-react';
import profileImage from '@/assets/images/FOTO3x4_Bintang_Atmajaya.jpg';
import { achievements, experience, profile, projects, skillGroups, type Project } from '@/data/portfolio';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className={`project-visual project-visual-${project.accent}`}>
      <div className="visual-grid" />
      <div className="visual-label">PROJECT STUDY / 0{projects.indexOf(project) + 1}</div>
      {project.accent === 'blue' ? (
        <div className="robot-diagram" aria-hidden="true"><span /><span /><span /><i /><i /><i /></div>
      ) : project.accent === 'slate' ? (
        <div className="pipe-diagram" aria-hidden="true"><span /><span /><span /><i /><i /></div>
      ) : (
        <div className="mesh-diagram" aria-hidden="true"><span /><span /><span /><span /><i /></div>
      )}
      <div className="visual-caption">Visual placeholder · replace with authorized project image</div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Bintang Atmajaya home">
          <span className="brand-mark">BA</span>
          <span><strong>Bintang</strong><small>Mechanical Engineering</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          <a className="nav-cv" href="/CV_Bintang_Atmajaya_Industrial_Mechanical_Engineering.pdf" download>Download CV <Download size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span /> Open to entry-level opportunities</div>
            <p className="hero-kicker">Applied Mechanical Engineering · ITS / 2026</p>
            <h1>{profile.name}<br /><em>{profile.role}</em></h1>
            <p className="hero-role">{profile.specialty}</p>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my projects <ArrowDown size={17} /></a>
              <a className="button button-ghost" href="/CV_Bintang_Atmajaya_Industrial_Mechanical_Engineering.pdf" download>Download CV <Download size={17} /></a>
            </div>
            <div className="hero-meta"><span><GraduationCap size={17} /> ITS Graduate</span><span><BriefcaseBusiness size={17} /> PLN NP Internship</span><span><Ruler size={17} /> CAD & Analysis</span></div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="hero-portrait"><img src={profileImage} alt="Portrait of Bintang Atmajaya" /><div className="portrait-tag"><span>01</span><span>Mechanical<br />Engineering</span></div></div>
            <div className="hero-note">DESIGN<br />BUILD<br />IMPROVE</div>
            <div className="hero-coordinate">07°15' S<br />112°45' E</div>
          </div>
          <div className="scroll-cue"><ArrowDown size={15} /> Scroll to explore</div>
        </section>

        <section className="about section-wrap section-light" id="about">
          <div className="about-intro"><SectionHeading eyebrow="01 / About" title="Curious by nature.\nRigorous by practice." body="A technical foundation shaped by hands-on exposure, structured problem solving, and a genuine interest in how mechanical systems work." /><div className="about-line" /></div>
          <div className="about-content"><p className="lead-copy">I am a fresh graduate in Applied Mechanical Engineering from Institut Teknologi Sepuluh Nopember (ITS), with an academic and practical interest in mechanical systems, power plant maintenance, and engineering design.</p><p>During my internship at PT PLN Nusantara Power UMRO Gresik, I gained exposure to maintenance, repair, and overhaul activities in a combined-cycle power plant environment, including Liquid Penetrant Testing during gas turbine combustion inspection.</p><p>Through academic and engineering projects, I have developed experience in CAD modeling, piping system design, and structural analysis. I am eager to continue learning, strengthen my technical capabilities, and contribute to a maintenance or engineering team.</p><div className="education-card"><div className="education-icon"><GraduationCap size={22} /></div><div><span className="eyebrow">Education</span><h3>Applied Bachelor&apos;s Degree (D4)</h3><p>Industrial Mechanical Engineering · Institut Teknologi Sepuluh Nopember</p><div className="education-meta"><span>2022 — 2026</span><span>GPA 3.24 / 4.00</span></div></div></div></div>
        </section>

        <section className="experience section-wrap" id="experience"><div className="experience-heading"><SectionHeading eyebrow="02 / Experience" title="Learning inside the plant." body="A first industrial chapter grounded in observation, safety, and disciplined maintenance workflows." /><div className="experience-index">01<span>/</span>01</div></div><div className="experience-card"><div className="experience-aside"><div className="industrial-placeholder"><div className="placeholder-lines" /><span>INDUSTRIAL<br />EXPOSURE</span><small>Image placeholder</small></div></div><div className="experience-main"><div className="experience-top"><div><span className="eyebrow">Internship · MRO Division</span><h3>{experience.company}</h3><p className="experience-role">{experience.role}</p></div><time>{experience.period}</time></div><p className="experience-description">{experience.description}</p><ul className="experience-points">{experience.points.map((point) => <li key={point}><ShieldCheck size={16} />{point}</li>)}</ul></div></div></section>

        <section className="projects section-wrap section-light" id="projects"><SectionHeading eyebrow="03 / Selected work" title="Engineering, drawn clearly." body="A selection of academic work and technical studies. Project visuals are intentionally marked as placeholders until authorized images are added." /><div className="projects-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><ProjectVisual project={project} /><div className="project-body"><div className="project-number">0{index + 1}</div><span className="project-label">{project.label}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tool-list">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div><button className="project-link" onClick={() => setSelectedProject(project)}>View details <ArrowUpRight size={17} /></button></div></article>)}</div></section>

        <section className="skills section-wrap" id="skills"><div className="skills-layout"><SectionHeading eyebrow="04 / Technical toolkit" title="Tools for the work ahead." body="A compact view of the tools, methods, and systems I have studied or worked with." /><div className="skills-list">{skillGroups.map((group, index) => <div className="skill-row" key={group.title}><span className="skill-index">0{index + 1}</span><div><h3>{group.title}</h3><div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div></div>)}</div></div></section>

        <section className="credentials section-wrap section-light"><div><SectionHeading eyebrow="05 / Education & achievements" title="A foundation that keeps moving." /></div><div className="credential-grid"><div className="credential-block"><GraduationCap size={21} /><span className="eyebrow">Education</span><h3>Institut Teknologi Sepuluh Nopember</h3><p>Applied Bachelor&apos;s Degree (D4) in Industrial Mechanical Engineering</p><strong>2022 — 2026 · GPA 3.24 / 4.00</strong></div><div className="credential-block"><Award size={21} /><span className="eyebrow">Achievements</span>{achievements.map((achievement) => <div className="achievement" key={achievement.title}><h3>{achievement.title}</h3><p>{achievement.detail}</p></div>)}</div></div></section>

        <section className="contact section-wrap" id="contact"><div className="contact-copy"><span className="eyebrow">06 / Contact</span><h2>Let&apos;s build something<br /><em>meaningful.</em></h2><p>I am open to entry-level opportunities in mechanical maintenance, power plant engineering, maintenance and overhaul, and mechanical design. I welcome opportunities to learn, contribute, and grow within an engineering team.</p></div><div className="contact-actions"><a href={`mailto:${profile.email}`} className="contact-link"><span className="contact-icon"><Mail size={19} /></span><span><small>Email</small>{profile.email}</span><ArrowUpRight size={18} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link"><span className="contact-icon"><Linkedin size={19} /></span><span><small>LinkedIn</small>linkedin.com/in/bintang-atmajaya</span><ExternalLink size={17} /></a><a href={`tel:${profile.phone}`} className="contact-link"><span className="contact-icon"><Phone size={19} /></span><span><small>Phone</small>{profile.phone}</span><ArrowUpRight size={18} /></a></div></section>
      </main>

      <footer className="site-footer"><span>© 2026 Bintang Atmajaya</span><span>Mechanical Engineering Portfolio <MoveRight size={15} /> Indonesia</span><a href="#home"><ArrowUp size={16} /> Back to top</a></footer>

      {selectedProject && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}><div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details"><X size={20} /></button><span className="eyebrow">{selectedProject.label}</span><h2 id="project-title">{selectedProject.title}</h2><p>{selectedProject.description}</p><h3>Focus areas</h3><ul>{selectedProject.focus.map((item) => <li key={item}><ChevronRight size={16} />{item}</li>)}</ul><div className="modal-note">Project media placeholder — add your authorized CAD renders, drawings, or analysis screenshots here.</div></div></div>}
    </div>
  );
}

export default App;
