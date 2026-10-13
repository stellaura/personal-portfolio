import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Laura Stella Kalmar | Software Test Automation Portfolio" },
    { name: "description", content: "Explore Laura Stella Kalmar’s UI and API test automation projects, TypeScript and Java skills, professional experience, and qualifications." },
    { property: "og:title", content: "Laura Stella Kalmar | Software Test Automation Portfolio" },
    { property: "og:description", content: "Structured test automation and disciplined quality engineering. View projects, skills, experience, and contact Laura in Győr, Hungary." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function MobileNavigation() {
  const [open, setOpen] = useState(false);
  return <>
    <Button className="mobile-menu text-primary" variant="ghost" size="icon" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{["About", "Skills", "Projects", "Experience", "Education", "Contact"].map(label => <Button key={label} asChild variant="reference" size="reference"><a href={`#${label.toLowerCase()}`} onClick={() => setOpen(false)}>{label}</a></Button>)}</nav>}
  </>;
}

function Index() {
 return <div className="min-h-screen bg-background font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container"><header className="fixed top-0 left-0 right-0 z-50 bg-surface-container/60 backdrop-blur-xl header-shadow"><div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6"><div className="flex items-center gap-3.5"><div className="flex flex-col"><span className="text-base lg:text-lg font-headline font-bold text-on-surface">Laura Stella Kalmar</span><div className="flex items-center gap-2"><span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span><span className="text-[11px] font-label font-medium text-primary uppercase role-caption">Junior Software Test Automation Engineer</span></div></div></div><nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-surface-container-high/40 backdrop-blur-md"><Button asChild variant="reference" size="reference"><a className="px-3.5 py-1.5 uppercase transition-all text-primary font-semibold bg-surface-variant/50 rounded-lg" href="#about">About</a></Button><Button asChild variant="reference" size="reference"><a className="px-3.5 py-1.5 uppercase transition-all text-primary font-semibold bg-surface-variant/50 rounded-lg" href="#skills">Skills</a></Button><Button asChild variant="reference" size="reference"><a className="px-3.5 py-1.5 uppercase transition-all text-primary font-semibold bg-surface-variant/50 rounded-lg" href="#projects">Projects</a></Button><Button asChild variant="reference" size="reference"><a className="px-3.5 py-1.5 uppercase transition-all text-primary font-semibold bg-surface-variant/50 rounded-lg" href="#experience">Experience</a></Button><Button asChild variant="reference" size="reference"><a className="px-3.5 py-1.5 uppercase transition-all text-primary font-semibold bg-surface-variant/50 rounded-lg" href="#education">Education</a></Button><Button asChild variant="reference" size="reference"><a className="px-3.5 py-1.5 uppercase transition-all text-primary font-semibold bg-surface-variant/50 rounded-lg" href="#contact">Contact</a></Button></nav>
<MobileNavigation /><div className="flex items-center gap-4"><Button asChild variant="reference" size="reference"><a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-variant/70 hover:bg-primary-container text-xs font-label font-semibold text-primary hover:text-on-primary-container glass-shadow hover:icon-shadow transition-all duration-300 availability" href="#contact"><span className="w-2 h-2 rounded-full bg-primary"></span><span>Available for Opportunities</span></a></Button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="w-full pt-20 bg-background relative overflow-hidden"><div className="flex flex-col w-full relative">






<section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-7 flex flex-col gap-6">

<div className="flex flex-wrap items-center gap-3">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container/70 backdrop-blur-md glass-shadow">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="text-xs font-label text-primary uppercase font-semibold hero-badge">Junior Software Test Automation Engineer | TypeScript | Java</span>
</div>
</div>

<div className="flex flex-col gap-3">
<p className="text-xs uppercase text-tertiary font-label font-medium">Laura Stella Kalmar</p>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-semibold text-on-surface leading-[1.18]">
            Delivering reliable software through <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">structured test automation</span> and disciplined quality engineering.
          </h1>
</div>

<p className="text-base sm:text-lg text-on-surface-variant font-body leading-relaxed max-w-2xl">
          Junior Software Test Automation Engineer based in Győr, Hungary, specializing in TypeScript, JavaScript, and Java. Focused on crafting robust, maintainable UI &amp; API test frameworks with modern tooling and clean architectural patterns.
        </p>

<div className="flex flex-wrap items-center gap-3 pt-1">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container/60 backdrop-blur-sm text-xs font-label text-on-surface">
<span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
<span>Győr, Hungary</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container/60 backdrop-blur-sm text-xs font-label text-on-surface">
<span className="material-symbols-outlined text-[16px] text-tertiary">layers</span>
<span>UI &amp; API Test Automation</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container/60 backdrop-blur-sm text-xs font-label text-on-surface">
<span className="material-symbols-outlined text-[16px] text-primary">terminal</span>
<span>POM &amp; Clean Architecture</span>
</div>
</div>

<div className="flex flex-wrap items-center gap-4 pt-4">
<Button asChild variant="reference" size="reference"><a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary-container text-on-primary-container font-label text-sm font-semibold hover:brightness-110 cta-shadow hover:cta-hover-shadow transition-all" href="#projects">
<span>Explore Projects</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a></Button>
<Button asChild variant="reference" size="reference"><a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container/60 backdrop-blur-xl text-primary font-label text-sm font-medium hover:bg-surface-variant/70 glass-shadow transition-all" href="#contact">
<span>Get in Touch</span>
<span className="material-symbols-outlined text-[18px]">mail</span>
</a></Button>
</div>
</div>

<div className="lg:col-span-5 flex justify-center lg:justify-end">
<div className="w-full max-w-sm sm:max-w-md relative group">

<div className="relative rounded-2xl p-6 sm:p-8 bg-surface-container/70 backdrop-blur-2xl frame-shadow transition-all duration-500 hover:frame-hover-shadow">
<div className="aspect-[4/5] w-full rounded-xl bg-surface-container-low/80 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-tertiary/5 pointer-events-none"></div>

<div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-surface-variant/80 flex items-center justify-center icon-shadow group-hover:scale-105 transition-transform duration-300">
<span className="material-symbols-outlined text-primary text-5xl sm:text-6xl">photo_camera</span>
</div>

<div className="relative z-10 mt-6 flex flex-col items-center gap-1.5">
<span className="text-xs uppercase font-label text-primary font-semibold">Profile Photograph</span>
<span className="text-sm font-headline text-on-surface font-medium">Reserved Area</span>
<p className="text-xs text-on-surface-variant max-w-[210px] mt-1 leading-relaxed">
                  Designated portrait container for professional headshot integration.
                </p>
</div>

<div className="absolute top-4 left-4 text-[10px] font-mono text-outline">SYS_REC // 01</div>
<div className="absolute bottom-4 right-4 text-[10px] font-mono text-outline">2400 x 3000 PX</div>
</div>

<div className="mt-4 pt-3 flex items-center justify-between text-xs text-on-surface-variant">
<span className="flex items-center gap-1.5 text-primary">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Active Frame Container
              </span>
<span className="font-mono text-[11px] text-outline">QA_PROFILE.FMT</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full" id="about">
<div className="flex flex-col gap-8">

<div className="flex flex-col gap-2">
<span className="text-xs font-mono text-primary uppercase">01 // ABOUT</span>
<h2 className="text-2xl sm:text-3xl font-headline font-semibold text-on-surface">
          Quality Engineering &amp; Maintainable Automation
        </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-2xl p-7 bg-surface-container/60 backdrop-blur-xl glass-shadow hover:bg-surface-container/75 transition-all">
<div className="w-12 h-12 rounded-xl bg-surface-variant/60 flex items-center justify-center text-primary mb-5 glass-shadow">
<span className="material-symbols-outlined text-2xl">verified_user</span>
</div>
<h3 className="text-lg font-headline font-semibold text-on-surface mb-2">UI &amp; API Verification</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">
            Focused on manual and automated testing across both UI and API layers, verifying business requirements systematically with high regression confidence and precise defect detection.
          </p>
</div>

<div className="rounded-2xl p-7 bg-surface-container/60 backdrop-blur-xl glass-shadow hover:bg-surface-container/75 transition-all">
<div className="w-12 h-12 rounded-xl bg-surface-variant/60 flex items-center justify-center text-secondary mb-5 glass-shadow">
<span className="material-symbols-outlined text-2xl">architecture</span>
</div>
<h3 className="text-lg font-headline font-semibold text-on-surface mb-2">Maintainable Architecture</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">
            Test development using JavaScript/TypeScript and Java, with strict adherence to the Page Object Model (POM), layered test organization, clean code hygiene, and DRY principles.
          </p>
</div>

<div className="rounded-2xl p-7 bg-surface-container/60 backdrop-blur-xl glass-shadow hover:bg-surface-container/75 transition-all">
<div className="w-12 h-12 rounded-xl bg-surface-variant/60 flex items-center justify-center text-tertiary mb-5 glass-shadow">
<span className="material-symbols-outlined text-2xl">neurology</span>
</div>
<h3 className="text-lg font-headline font-semibold text-on-surface mb-2">AI-Assisted Engineering</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">
            Active interest and exploration of AI-assisted software engineering practices utilizing OpenCode and DeepSeek to enhance test generation, fixture scoping, and refactoring workflows.
          </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full" id="skills">
<div className="flex flex-col gap-8">

<div className="flex flex-col gap-2">
<span className="text-xs font-mono text-primary uppercase">02 // SKILLS &amp; COMPETENCIES</span>
<h2 className="text-2xl sm:text-3xl font-headline font-semibold text-on-surface">
          Categorized Technical Matrix
        </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-2xl p-6 bg-surface-container/60 backdrop-blur-xl glass-shadow flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary text-2xl">auto_mode</span>
<h3 className="text-base font-headline font-semibold text-on-surface">Test Automation</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-on-surface">Playwright</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-on-surface">Selenium WebDriver</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-on-surface">WebdriverIO</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-on-surface">Cypress</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-on-surface">Jest</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-on-surface">Cucumber</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-on-surface">JUnit 5</span>
</div>
</div>
</div>

<div className="rounded-2xl p-6 bg-surface-container/60 backdrop-blur-xl glass-shadow flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-secondary text-2xl">code</span>
<h3 className="text-base font-headline font-semibold text-on-surface">Programming</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg bg-secondary-container/30 text-xs font-mono text-secondary">JavaScript</span>
<span className="px-3 py-1.5 rounded-lg bg-secondary-container/30 text-xs font-mono text-secondary">TypeScript</span>
<span className="px-3 py-1.5 rounded-lg bg-secondary-container/30 text-xs font-mono text-secondary">Java</span>
</div>
</div>
</div>

<div className="rounded-2xl p-6 bg-surface-container/60 backdrop-blur-xl glass-shadow flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary text-2xl">api</span>
<h3 className="text-base font-headline font-semibold text-on-surface">API Testing</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-on-surface">REST APIs</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-on-surface">REST Assured</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-on-surface">Postman</span>
</div>
</div>
</div>

<div className="lg:col-span-2 rounded-2xl p-6 bg-surface-container/60 backdrop-blur-xl glass-shadow flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary text-2xl">account_tree</span>
<h3 className="text-base font-headline font-semibold text-on-surface">Tools &amp; Practices</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-on-surface">Git &amp; GitLab</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-on-surface">SQL</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-on-surface">Page Object Model (POM)</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-on-surface">Layered Architecture</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-on-surface">Reusable Automation Frameworks</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-on-surface">Clean Code</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-on-surface">DRY / KISS / YAGNI</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-on-surface">CI/CD Concepts</span>
</div>
</div>
</div>

<div className="rounded-2xl p-6 bg-surface-container/60 backdrop-blur-xl glass-shadow flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-tertiary text-2xl">psychology</span>
<h3 className="text-base font-headline font-semibold text-on-surface">AI-Assisted Development</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-tertiary">OpenCode</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-tertiary">DeepSeek</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-tertiary">Model Context Protocol (MCP)</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-on-surface">AI-Assisted Code Generation</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-variant/50 text-xs font-mono text-on-surface">Test Design &amp; Refactoring</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full" id="projects">
<div className="flex flex-col gap-8">

<div className="flex flex-col gap-2">
<span className="text-xs font-mono text-primary uppercase">03 // PROJECTS</span>
<h2 className="text-2xl sm:text-3xl font-headline font-semibold text-on-surface">
          Featured Work
        </h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="rounded-2xl p-8 bg-surface-container/60 backdrop-blur-xl glass-shadow hover:frame-shadow transition-all flex flex-col justify-between group">
<div className="flex flex-col gap-5">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
<span className="text-xs font-mono text-primary uppercase font-semibold">Automation Project</span>
</div>
<span className="text-xs font-mono text-outline">v1.0 // REPO</span>
</div>

<h3 className="text-xl sm:text-2xl font-headline font-semibold text-on-surface group-hover:text-primary transition-colors">
              TypeScript Test Automation Framework
            </h3>

<p className="text-sm text-on-surface-variant leading-relaxed">
              Test automation project built with TypeScript and modern test runner tooling. Implements structured Page Object Model patterns, clean locator strategies, and modular fixtures. (Details reserved for repository alignment).
            </p>

<div className="flex flex-wrap gap-2 pt-2">
<span className="px-2.5 py-1 rounded bg-surface-variant/70 text-xs font-mono text-primary">TypeScript</span>
<span className="px-2.5 py-1 rounded bg-surface-variant/70 text-xs font-mono text-on-surface">Test Automation</span>
<span className="px-2.5 py-1 rounded bg-surface-variant/70 text-xs font-mono text-on-surface">Page Object Model</span>
<span className="px-2.5 py-1 rounded bg-surface-variant/70 text-xs font-mono text-on-surface">GitLab</span>
</div>
</div>

<div className="mt-8 pt-5">
<Button asChild variant="reference" size="reference"><a className="inline-flex items-center gap-2 text-sm font-label font-semibold text-primary hover:text-secondary transition-colors" href="https://gitlab.com/stellaura" rel="noopener noreferrer" target="_blank">
<span>GitLab Repository</span>
<span className="material-symbols-outlined text-[18px]">open_in_new</span>
</a></Button>
</div>
</div>

<div className="rounded-2xl p-8 bg-surface-container/60 backdrop-blur-xl glass-shadow hover:frame-shadow transition-all flex flex-col justify-between group">
<div className="flex flex-col gap-5">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
<span className="text-xs font-mono text-tertiary uppercase font-semibold">Web &amp; UI Architecture</span>
</div>
<span className="px-2.5 py-1 rounded-full bg-surface-variant/50 text-[11px] font-label text-tertiary">In Active Refinement</span>
</div>

<h3 className="text-xl sm:text-2xl font-headline font-semibold text-on-surface group-hover:text-tertiary transition-colors">
              Personal QA Portfolio
            </h3>

<p className="text-sm text-on-surface-variant leading-relaxed">
              AI-assisted UI design and development project focused on visual consistency, accessibility, responsive layout, and iterative refinement, built adhering to Glacier Glassmorphism design specifications.
            </p>

<div className="flex flex-wrap gap-2 pt-2">
<span className="px-2.5 py-1 rounded bg-surface-variant/70 text-xs font-mono text-tertiary">UI Design</span>
<span className="px-2.5 py-1 rounded bg-surface-variant/70 text-xs font-mono text-on-surface">Responsive Architecture</span>
<span className="px-2.5 py-1 rounded bg-surface-variant/70 text-xs font-mono text-on-surface">AI-Assisted Development</span>
<span className="px-2.5 py-1 rounded bg-surface-variant/70 text-xs font-mono text-on-surface">Design System</span>
</div>
</div>

<div className="mt-8 pt-5 flex items-center justify-between">
<span className="text-xs text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-tertiary">sync</span>
              Continuous Iteration &amp; Code Hygiene
            </span>
<span className="font-mono text-xs text-outline">PORTFOLIO_DEV</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full" id="experience">
<div className="flex flex-col gap-8">

<div className="flex flex-col gap-2">
<span className="text-xs font-mono text-primary uppercase">04 // EXPERIENCE</span>
<h2 className="text-2xl sm:text-3xl font-headline font-semibold text-on-surface">
          Professional History
        </h2>
</div>

<div className="w-full">
<div className="rounded-2xl p-8 bg-surface-container/70 backdrop-blur-xl glass-shadow relative overflow-hidden">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
<h3 className="text-xl sm:text-2xl font-headline font-semibold text-on-surface">Software Test Engineer</h3>
</div>
<p className="text-base text-primary font-medium">EPAM Systems</p>
<p className="text-sm text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
                Software testing and automation engineering.
              </p>
</div>
<div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
<span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium">May 2026 – Present</span>
<span className="text-xs text-outline font-label">Active Engagement</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full" id="education">
<div className="flex flex-col gap-8">

<div className="flex flex-col gap-2">
<span className="text-xs font-mono text-primary uppercase">05 // EDUCATION &amp; TRAINING</span>
<h2 className="text-2xl sm:text-3xl font-headline font-semibold text-on-surface">
          Foundational Qualifications
        </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="rounded-2xl p-7 bg-surface-container/60 backdrop-blur-xl glass-shadow flex flex-col justify-between">
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="material-symbols-outlined text-primary text-2xl">school</span>
<span className="text-xs font-mono text-outline">Jan 2026 – Apr 2026</span>
</div>
<h3 className="text-lg font-headline font-semibold text-on-surface">JavaScript Test Automation</h3>
<p className="text-sm font-medium text-secondary">EPAM UpSkill</p>
<p className="text-sm text-on-surface-variant leading-relaxed mt-1">
              Focus: Modern JavaScript test automation techniques and tooling.
            </p>
</div>
</div>

<div className="rounded-2xl p-7 bg-surface-container/60 backdrop-blur-xl glass-shadow flex flex-col justify-between">
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="material-symbols-outlined text-secondary text-2xl">workspace_premium</span>
<span className="text-xs font-mono text-outline">Feb 2024 – Feb 2026</span>
</div>
<h3 className="text-lg font-headline font-semibold text-on-surface">QA/QC/Tester (Manual/Automation in Java)</h3>
<p className="text-sm font-medium text-secondary">RUANDER Oktatási Kft</p>
<p className="text-sm text-on-surface-variant leading-relaxed mt-1">
              Focus: Manual testing methodologies and Java test automation foundations.
            </p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 w-full" id="contact">
<div className="flex flex-col gap-10">

<div className="flex flex-col gap-2">
<span className="text-xs font-mono text-primary uppercase">06 // CONTACT</span>
<h2 className="text-2xl sm:text-4xl font-headline font-semibold text-on-surface">
          Open to Test Automation &amp; QA Inquiries
        </h2>
<p className="text-base text-on-surface-variant max-w-xl">
          Feel free to reach out for collaboration, technical discussions, or role opportunities.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<Button asChild variant="reference" size="reference"><a className="rounded-2xl p-7 bg-surface-container/70 backdrop-blur-xl glass-shadow hover:frame-shadow hover:bg-surface-container/90 transition-all flex flex-col justify-between group" href="mailto:laurakalmar8@gmail.com">
<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-variant/80 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-2xl">mail</span>
</div>
<div>
<span className="text-xs uppercase font-label text-on-surface-variant">Direct Inquiries</span>
<h3 className="text-base font-headline font-semibold text-on-surface mt-1 group-hover:text-primary transition-colors break-all">
                laurakalmar8@gmail.com
              </h3>
</div>
</div>
<div className="mt-6 flex items-center gap-1.5 text-xs font-label text-primary font-semibold">
<span>Send Email</span>
<span className="material-symbols-outlined text-[16px]">arrow_outward</span>
</div>
</a></Button>

<Button asChild variant="reference" size="reference"><a className="rounded-2xl p-7 bg-surface-container/70 backdrop-blur-xl glass-shadow hover:frame-shadow hover:bg-surface-container/90 transition-all flex flex-col justify-between group" href="https://www.linkedin.com/in/laura-stella-kalmar-46863339b/" rel="noopener noreferrer" target="_blank">
<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-variant/80 flex items-center justify-center text-secondary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-2xl">person_pin</span>
</div>
<div>
<span className="text-xs uppercase font-label text-on-surface-variant">Professional Network</span>
<h3 className="text-base font-headline font-semibold text-on-surface mt-1 group-hover:text-secondary transition-colors">
                LinkedIn Profile
              </h3>
</div>
</div>
<div className="mt-6 flex items-center gap-1.5 text-xs font-label text-secondary font-semibold">
<span>Connect on LinkedIn</span>
<span className="material-symbols-outlined text-[16px]">open_in_new</span>
</div>
</a></Button>

<Button asChild variant="reference" size="reference"><a className="rounded-2xl p-7 bg-surface-container/70 backdrop-blur-xl glass-shadow hover:frame-shadow hover:bg-surface-container/90 transition-all flex flex-col justify-between group" href="https://gitlab.com/stellaura" rel="noopener noreferrer" target="_blank">
<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-variant/80 flex items-center justify-center text-tertiary group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-2xl">code_blocks</span>
</div>
<div>
<span className="text-xs uppercase font-label text-on-surface-variant">Code Repositories</span>
<h3 className="text-base font-headline font-semibold text-on-surface mt-1 group-hover:text-tertiary transition-colors">
                GitLab @stellaura
              </h3>
</div>
</div>
<div className="mt-6 flex items-center gap-1.5 text-xs font-label text-tertiary font-semibold">
<span>Explore Repositories</span>
<span className="material-symbols-outlined text-[16px]">open_in_new</span>
</div>
</a></Button>
</div>

<div className="flex items-center justify-center mt-4">
<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-container/60 backdrop-blur-md shadow-sm text-xs font-label text-on-surface">
<span className="material-symbols-outlined text-[16px] text-primary">pin_drop</span>
<span>Győr, Győr-Moson-Sopron, Hungary</span>
</div>
</div>
</div>
</section>
</div></main><footer className="w-full bg-surface-container/60 backdrop-blur-xl mt-24"><div className="max-w-7xl mx-auto px-6 lg:px-12 py-10"><div className="flex flex-col md:flex-row items-center justify-between gap-6"><div className="flex flex-col items-center md:items-start gap-1"><p className="text-xs text-on-surface-variant">© 2026 Laura Stella Kalmar. All rights reserved.</p><p className="text-xs text-outline flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px] text-primary">location_on</span>Győr, Hungary</p></div><div className="flex items-center gap-6"><Button asChild variant="reference" size="reference"><a className="text-xs font-label uppercase text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5" href="https://www.linkedin.com/in/laura-stella-kalmar-46863339b/" rel="noopener noreferrer" target="_blank"><span className="material-symbols-outlined text-[16px]">link</span><span>LinkedIn</span></a></Button><Button asChild variant="reference" size="reference"><a className="text-xs font-label uppercase text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5" href="https://gitlab.com/stellaura" rel="noopener noreferrer" target="_blank"><span className="material-symbols-outlined text-[16px]">code</span><span>GitLab</span></a></Button><Button asChild variant="reference" size="reference"><a className="text-xs font-label uppercase text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5" href="mailto:laurakalmar8@gmail.com"><span className="material-symbols-outlined text-[16px]">mail</span><span>Email</span></a></Button></div></div></div></footer></div>;
}
