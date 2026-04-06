"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ── Embedded Assets ───────────────────────────────────────────────────────────
const PHOTO_SRC = "/images/profile.png";

const PROJECT_COVERS = {
  velox: "/images/velox_cover.png",
  concept: "/images/concept_cover.png",
  pay4me: "/images/pay4me.png",
  trippledee: "/images/trippledee.png",
  trading: "/images/trading.png",
  audit: "/images/audit_dashboard.png",
  warkpay: "/images/warkpay_full.png",
  a2b: "/images/a2b_cover.png",
};

// ── Utility ───────────────────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.72s ease ${delay}s, transform 0.72s ease ${delay}s`, ...style }}>
      {children}
    </div>
  );
}

// ── Projects Data ─────────────────────────────────────────────────────────────
const PROJECTS = [
{
    id: 1, coverKey: "velox", realCover: "/images/velox_cover.png",
    tag: "Fintech · Web3", name: "Velox Exchange",
    sub: "A next-gen crypto trading & exchange platform",
    behanceUrl: "https://www.behance.net/gallery/230214309/Velox-Exchange",
    problem: "Crypto traders struggled with existing exchange interfaces — cluttered, non-intuitive, and built for power users — leaving everyday investors confused and loss-prone.",
    role: "Lead Product Designer",
    metrics: ["Fintech · Web3", "Full UX/UI System", "Dark-first design"],
    color: "#6C63FF", accent: "#A78BFA",
    screens: [
      { label: "Velox Exchange Cover", img: "/images/velox_cover.png", desc: "Official Behance cover — Velox crypto trading platform with dark UI, phone mockups showing the $50,456 wallet dashboard and credit card exchange screen." },
      { label: "Full App Screen Showcase", img: "/images/velox_screens.png", desc: "Complete app flow — splash, login, OTP, $50,456 wallet dashboard, Bitcoin chart at $456 current price, user profile, and USD wallet with transaction history." },
      { label: "Case Study Deep Dive", img: "/images/velox_casestudy.png", desc: "Transaction history with smart filtering, real-time status tags, and a one-glance balance breakdown across all assets." },
    ],
    sections: {
      problem: "Crypto exchange platforms overwhelmingly cater to experienced traders — candle charts, order books, and dense data grids that intimidate newcomers. Velox needed to serve both audiences without compromising either experience.",
      research: "Interviewed 18 users across experience levels. Mapped drop-off points in the onboarding funnel. Found that 74% of new users abandoned the trade screen within 90 seconds due to information overload and fear of making costly mistakes.",
      strategy: "Designed a dual-mode system: a simplified Quick Trade view for newcomers and an Advanced view for power users, with a seamless toggle. Prioritised trust signals — balance visibility, transaction history, price confirmation alerts, and clear fee disclosure.",
      design: "Built a comprehensive token-based design system in Figma covering charts, trade modules, wallet cards, and notification states. Dark-first UI with an electric violet accent palette that signals precision and modernity without sacrificing warmth.",
      solution: "A sleek Web3 exchange interface with live rate feeds, one-click trade execution, portfolio overview, and a guided first-trade experience for new users — all unified in one cohesive, scalable design system.",
      results: "Client reported measurable reduction in user support queries post-launch. The design system became the foundation for their mobile app rollout in Q2. The project received strong Behance engagement and follow-on client referrals.",
      lessons: "Designing for financial products requires building trust at every single touchpoint. Clarity is not just visual — it is about making users feel safe and in control of their money, especially in a volatile asset class.",
    },
  },
{
    id: 2, coverKey: "concept", realCover: "/images/concept_cover.png",
    tag: "Corporate · Brand", name: "Concept Group",
    sub: "Digital presence redesign for a leading Nigerian conglomerate",
    behanceUrl: "https://www.behance.net/gallery/244356271/Concept-Group",
    problem: "One of Nigeria's foremost business conglomerates had a dated digital presence that no longer reflected the scale, ambition, or portfolio diversity of their multi-brand group.",
    role: "Lead Product Designer",
    metrics: ["Corporate UX", "Multi-brand system", "Design leadership"],
    color: "#8B5CF6", accent: "#C4B5FD",
    screens: [
      { label: "Concept Group Cover", img: "/images/concept_cover.png", desc: "A premium dark-and-gold flagship homepage communicating group scale, strategic breadth, and executive credibility — designed to perform in boardroom presentations and investor decks." },
      { label: "Case Study Slides", img: "/images/concept_cover2.png", desc: "Individual subsidiary microsites built on a shared design system with flexible theme modules — each brand has its own personality while remaining unmistakably Concept Group." },
    ],
    sections: {
      problem: "A conglomerate with over 15 subsidiary brands needed a unified digital identity that could hold each brand personality while maintaining a coherent, premium group-level presence. Their existing site was static, inconsistent, and uninspiring.",
      research: "Audited all 15 subsidiary websites. Conducted stakeholder interviews with heads of marketing across 5 business units. Mapped conflicting brand guidelines and identified a core tension: subsidiaries wanted distinction, the group needed coherence.",
      strategy: "Developed a core-plus-flex design system: a premium corporate layer with flexible theme modules for each subsidiary. Every brand expresses its identity while remaining recognisably part of the Concept Group family — unified without being uniform.",
      design: "Premium dark-and-gold aesthetic for the group flagship. Rich editorial photography, sophisticated motion design, and a Figma component library with token-based theme overrides for each subsidiary. Fully documented for an in-house team to maintain.",
      solution: "A multi-brand digital platform with a flagship corporate homepage, individual subsidiary microsites built from shared components, a unified careers portal, and a thought leadership hub spanning all business units.",
      results: "The design system became the foundation for a full-scale web development project with an external agency. Every stakeholder group praised it as the most coherent and premium digital representation the group had ever had.",
      lessons: "Designing for conglomerates requires political sensitivity as much as design skill. The real brief is always: make everyone feel their brand matters, while making the group feel like more than the sum of its parts.",
    },
  },
{
    id: 3, coverKey: "a2b", realCover: "/images/a2b_cover.png",
    tag: "Logistics · Mobility", name: "A2B",
    sub: "A logistics and mobility platform designed for faster booking, live ride tracking, and flexible everyday movement",
    behanceUrl: "",
    problem: "Urban commuters and logistics users needed a simpler way to book rides, track trips in real time, and move through pickup-to-drop-off journeys with less friction and more confidence.",
    role: "Product Designer",
    metrics: ["Mobility UX", "Booking flow redesign", "Logistics product design"],
    color: "#F97316", accent: "#FDBA74",
    screens: [
      { label: "A2B Cover", img: "/images/a2b_cover.png", desc: "Onboarding and promotional experience introducing live trip tracking, affordability messaging, and a more accessible first-time user journey." },
      { label: "Booking and Ride Flow", img: "/images/a2b_screen.png", desc: "End-to-end mobile flow covering pickup, destination entry, route confirmation, ride selection, driver assignment, trip tracking, and ride completion." },
    ],
    sections: {
      problem: "Users booking mobility and logistics services often face fragmented experiences: unclear booking steps, weak tracking visibility, and too many decisions before they feel confident enough to continue. A2B needed a smoother experience that could support transport, simple logistics use cases, and future social or event-driven booking moments within one product ecosystem.",
      research: "I reviewed comparable ride-hailing and booking products, mapped the booking journey from pickup to trip completion, and identified trust gaps around location input, ride confirmation, pricing clarity, and driver status updates. The strongest insight was that users needed reassurance at every step, not just a beautiful interface.",
      strategy: "The design strategy focused on reducing cognitive load and increasing confidence throughout the journey. I prioritized a clear information hierarchy, simplified task flows, lightweight map interactions, and stronger system feedback around ride status, pricing, and progress. The product was also structured to support expansion into event and social-led bookings without disrupting the core transport flow.",
      design: "I designed a clean mobile-first interface with a soft neutral base and strong orange accents to drive attention to high-priority actions. Key screens were optimized for quick scanning, one-handed interaction, and continuous progress visibility — from onboarding and destination entry to route review, ride selection, driver assignment, live tracking, and completion.",
      solution: "The final experience delivers an intuitive logistics and mobility app that makes booking straightforward, keeps users informed throughout the trip, and creates a scalable foundation for future features around social coordination, event movement, and easier group-based planning.",
      results: "The design created a clearer booking journey, improved ride-state visibility, and established a more trustworthy product foundation for growth. It also introduced a scalable interaction pattern that can support additional services without making the core experience feel heavy.",
      lessons: "Mobility products succeed when they remove uncertainty. Every confirmation state, map cue, status update, and pricing decision contributes to how safe, informed, and in-control the user feels throughout the journey."
    },
  },
{
    id: 4, coverKey: "audit", realCover: "/images/audit_dashboard.png",
    tag: "Dashboard · Enterprise", name: "Audit Management Dashboard",
    sub: "Streamlining compliance workflows for enterprise teams",
    behanceUrl: "https://www.behance.net/gallery/233156153/Audit-Management-Dashboard",
    problem: "Enterprise audit teams were managing compliance workflows across spreadsheets and email threads — no single source of truth, zero status visibility, high error risk on every cycle.",
    role: "Senior Product Designer",
    metrics: ["Enterprise UX", "Workflow redesign", "Data-dense UI"],
    color: "#0EA5E9", accent: "#38BDF8",
    screens: [
      { label: "Main Dashboard", img: "/images/audit_dashboard.png", desc: "A scannable, priority-sorted audit tracker with color-coded risk status, deadline indicators, and one-click drill-down — replacing 3 separate spreadsheets." },
      { label: "Audit Tracking View", img: "/images/audit_tracking.png", desc: "Full audit thread with document annotations, version history, reviewer comments, and a stage-by-stage progress tracker visible to all stakeholders." },
      { label: "Add New Audit Form", img: "/images/new_audit.png", desc: "Compliance health dashboard showing audit completion rates, overdue risk items, team workload, and SLA adherence — all in real time." },
    ],
    sections: {
      problem: "A compliance team managing dozens of concurrent audits had zero centralised visibility. Audit status lived in email chains, deadlines were regularly missed, and findings were scattered across 4 different tools with no audit trail.",
      research: "Conducted workflow shadowing with 6 compliance officers and 3 senior auditors over two weeks. Created a detailed journey map identifying 11 friction points — most critical being status tracking, document version control, and deadline management.",
      strategy: "Designed around three core jobs-to-be-done: What is overdue? What needs my review right now? Where exactly is this audit in the process? Every screen answers one of these questions at first glance without drilling down.",
      design: "Built a data-dense but scannable dashboard system using progressive disclosure. Colour-coded risk levels, collapsible audit threads, inline document annotation, and a priority-sorted task queue with role-based filtering.",
      solution: "A centralised audit management dashboard with a master audit list, drill-down detail pages, document version control, deadline tracking with automated reminders, and role-based access for auditors versus reviewers.",
      results: "Audit cycle time reduced significantly within the first month. The team reported immediate improvement in cross-department coordination. The interface was adopted company-wide without formal training — a strong signal of intuitive design.",
      lessons: "Enterprise tools succeed when they mirror how people actually think about their work — not how the underlying database is structured. Mental models matter far more than feature completeness.",
    },
  },
{
    id: 5, coverKey: "pay4me", realCover: "/images/pay4me.png",
    tag: "Fintech · Mobile App", name: "Pay4me",
    sub: "Peer-to-peer payment app — brand & full product UI",
    behanceUrl: "https://www.behance.net/gallery/221929183/Pay4me",
    problem: "A fintech startup needed a complete product identity — from brand to UI — that would position them as a trustworthy, modern alternative to incumbent payment apps in the Nigerian market.",
    role: "Product Designer",
    metrics: ["Full product UI", "Mobile-first", "Brand identity"],
    color: "#10B981", accent: "#34D399",
    screens: [
      { label: "Pay4me Onboarding Flow", img: "/images/pay4me.png", desc: "A mobile onboarding and wallet experience designed to build trust early with clear account states, visible balance context, and a clean path into first use." },
      { label: "Transactions and Daily Usage", img: "/images/pay4me.png", desc: "A streamlined payments interface with clear transaction status, fast access actions, and a calmer visual system that makes routine transfers feel reliable and easy." },
    ],
    sections: {
      problem: "Pay4me launched without a cohesive design identity. Their app felt generic and failed to communicate trust — critical in fintech, especially with first-time digital payment users in emerging markets where trust is the primary barrier to adoption.",
      research: "Benchmarked 8 fintech competitors. Ran card sorting sessions with 12 target users to understand their mental model of sending money. Identified that speed and immediate confirmation were the two strongest emotional needs in every transfer scenario.",
      strategy: "Led with trust cues: clear transaction summaries before confirmation, instant success states with receipt options, and a friendly but professional visual tone. Designed for low-bandwidth environments with a lean, optimised component set.",
      design: "Created a full design system with a green-dominant colour palette signalling trust and growth, a custom icon set, transaction card components, onboarding screens, empty states, and error handling flows — all documented for the development team.",
      solution: "A complete mobile app UI covering onboarding, send and receive flows, transaction history, savings goals, and a referral programme — all with micro-interactions designed for delight without sacrificing speed.",
      results: "Product launched with a polished, consistent visual identity that the founding team described as significantly elevating the perceived quality and trustworthiness of the product among early users.",
      lessons: "In fintech, delight is a trust signal. When the UI feels polished and intentional, users unconsciously trust the product more with their money. Design quality is not an aesthetic choice — it is a business decision.",
    },
  },
{
    id: 6, coverKey: "vacation", realCover: "/images/trippledee.png",
    tag: "Travel · Mobile App", name: "Trippledee",
    sub: "Social commerce concept connecting food vendors and customers",
    behanceUrl: "https://www.behance.net/gallery/233522415/Vacation-App",
    problem: "A food-commerce startup wanted to move beyond a standard ordering experience by helping vendors build stronger customer relationships without making the app feel crowded or difficult to use.",
    role: "Product Designer",
    metrics: ["Social commerce UX", "Mobile-first", "End-to-end concept"],
    color: "#F97316", accent: "#FB923C",
    screens: [
      { label: "Trippledee Home Feed", img: "/images/trippledee.png", desc: "A mobile-first social commerce home feed that helps users discover food vendors, browse engaging content, and move naturally from inspiration to purchase." },
    ],
    sections: {
      problem: "The business wanted a food-ordering experience that felt more relational than transactional. Traditional delivery apps made discovery feel flat and price-driven, leaving little room for vendor personality, loyalty, or repeat engagement.",
      research: "Reviewed leading food-ordering products and spoke with food vendors to understand where retention breaks down. The clearest theme was that vendors needed better ways to tell their story, highlight freshness, and build trust outside the checkout moment.",
      strategy: "I positioned the product as a hybrid between ordering and community. Vendors could share updates, recipes, short-form content, and featured meals, while customers still moved through a clear and lightweight ordering flow built for speed.",
      design: "I used a warm, expressive visual language with content-led cards, vendor storytelling modules, and clear product hierarchy so the experience felt lively without becoming noisy. The interface balanced discovery, trust, and conversion across the full journey.",
      solution: "Designed around the full food delivery app but include a social aspect where vendor can post reels about food vlog, new delacy and recipes which help them to connect with their user. This helps to increase the app user by 80% and increase revenue",
      results: "This helps to increase the app user by 80% and increase revenue",
      lessons: "Consumer apps live or die by emotional resonance. The first screen must make someone feel something — wonder, excitement, possibility. Functionality follows emotion in consumer product design.",
    },
  },
{
    id: 7, coverKey: "Ai", realCover: "/images/trading.png",
    tag: "AI · Data Visualization", name: "AI Guide Trade Intelligence Platform",
    sub: "AI-powered market visualization for faster, data-driven trading decisions",
    behanceUrl: "",
    problem: "Traders and analysts often struggle to interpret large volumes of market data across multiple tools, making it difficult to quickly identify trends and act on insights in fast-moving trading environments.",
    role: "Product Designer",
    metrics: ["Data visualization design","Dashboard UX",
    "Design system development",
    "Fintech product design"],
    color: "#EC4899", accent: "#F472B6",
    screens: [
      { label: "Product & Service Overview", img: "/images/product_and_services.png", desc: "A detailed product and service intelligence view that combines summary insights, chart-based analysis, AI-driven commentary, and map visualization into one decision-friendly workspace." },
      { label: "Export Potential", img: "/images/export_potential.png", desc: "An export potential interface that helps users compare category opportunity, assess unrealized value, and understand market demand through a clear visual ranking model." },
    ],
    sections: {
    problem:
      "Modern trading platforms often overwhelm users with dense numerical data and fragmented insights across multiple screens. Traders need to process large amounts of information quickly, but poorly structured interfaces can slow decision-making and increase cognitive load.",
    research:
      "Through product analysis and stakeholder discussions, I identified key usability challenges around data interpretation, visual clutter, and inefficient navigation patterns. Traders needed a faster way to interpret complex market signals without constantly switching between tools.",
    strategy:
      "The design strategy focused on transforming raw market data into intuitive visual insights. By prioritizing information hierarchy, simplifying data presentation, and introducing visual indicators, the platform could support faster pattern recognition and more confident decision-making.",
    design:
      "I designed a high-fidelity, dark-themed dashboard optimized for data-heavy environments. Interactive charts, predictive trend indicators, and market heatmaps were introduced to highlight meaningful insights while reducing visual noise. A scalable design system was also developed to maintain consistency across new features.",
    solution:
      "The final platform delivers a streamlined trading intelligence experience where users can monitor real-time trends, analyze predictive insights, and interpret complex datasets through intuitive dashboards and visual analytics.",
    results:
      "The redesigned interface improved clarity and usability of trading insights, enabling users to interpret market signals more efficiently. The scalable design system also accelerated feature development and ensured consistency across the evolving product.",
    lessons:
      "When designing for data-heavy environments, clarity is everything. The goal is not to show more information, but to surface the most meaningful insights in a way that supports quick and confident decision-making."
  },
  },
{
    id: 8, coverKey: "warkpay", realCover: "/images/warkpay_full.png",
    tag: "Fintech · SaaS · Landing Pages", name: "WarkPay & Apex Agency",
    sub: "Fintech platform & agency landing page design systems",
    behanceUrl: "https://www.behance.net/kennyken5",
    problem: "Two separate clients needed conversion-focused landing pages that could communicate trust, drive sign-ups, and work across desktop and mobile — without looking like generic templates.",
    role: "Product Designer",
    metrics: ["Dual-brand system", "Conversion-first UX", "Responsive design"],
    color: "#6C63FF", accent: "#A78BFA",
    screens: [
      { label: "WarkPay Landing Page", img: "/images/warkpay_full.png", desc: "Full WarkPay landing page — dark fintech hero 'Streamline Your Business Operation, Simplify Your Finance', features section with Swift Payment, Store Keeping and Inventory Management cards, customer reviews, and mobile responsive view." },
      { label: "Apex Agency Homepage", img: "/images/favour_agency.png", desc: "Full Apex Agency landing — 'Reach Your Financial goal with our Agency' hero with real team photo, services grid, weekly chart feature, Meet Clients section, testimonials wall, and partnership section." },
    ],
    sections: {
      problem: "WarkPay needed a dark, premium landing page to establish fintech credibility and convert B2B clients. Apex Agency needed a clean, warm page to drive free trial sign-ups for their SaaS product. Both had zero existing design systems.",
      research: "Audited 12 competitor landing pages across fintech and agency verticals. Ran heatmap analysis on client's existing pages. Identified critical above-the-fold problems: unclear value props, weak CTAs, and no social proof hierarchy.",
      strategy: "Applied the F-pattern reading model to structure content flow on both pages. Designed a clear CTA hierarchy: primary action above the fold, secondary in features section, tertiary in footer. Social proof positioned immediately below hero.",
      design: "WarkPay: dark navy base with electric purple accents, bold typography, and a clean nav with a single high-contrast CTA. Apex Agency: warm off-white with orange accents, editorial grid, and a testimonial wall that builds credibility at scale.",
      solution: "Two fully responsive landing pages with reusable component libraries, optimised for both conversion and brand expression. Each included a complete style guide for handoff to the development team.",
      results: "WarkPay reported above-average time-on-page and a significant improvement in demo booking rate after launch. Apex Agency's free trial sign-up rate improved measurably in the first month.",
      lessons: "Landing pages are persuasion design, not just visual design. Every element — spacing, typography size, button colour, social proof placement — is a conversion decision. Beauty without strategy is just decoration.",
    },
  }
];

const TESTIMONIALS = [
  { quote: "Kehinde brought structure to a fast-moving product environment. He translated broad business goals into a clean, scalable design direction and consistently delivered interfaces that made the product feel more credible and easier for customers to trust.", name: "Employer Feedback", title: "Product Lead · Fintech Team", initials: "PF", color: "#6C63FF" },
  { quote: "He was able to simplify a complex operational workflow into a dashboard the team could use immediately. Beyond the visuals, what stood out was his thinking around prioritisation, clarity, and how the experience would work in the real day-to-day environment.", name: "Employer Feedback", title: "Operations Manager · Logistics Team", initials: "OL", color: "#0EA5E9" },
  { quote: "Kehinde combines strong UI craft with thoughtful UX decision-making. He asks the right questions early, collaborates well, and designs with both users and business goals in mind. His work raised the overall quality of the product significantly.", name: "Employer Feedback", title: "Founder · SaaS Product", initials: "FS", color: "#F97316" },
  { quote: "From brand expression to product detail, he helped us present the business with more confidence. The final experience felt clearer, more premium, and much more aligned with the market we wanted to compete in.", name: "Employer Feedback", title: "Business Owner · Ecommerce / Brand", initials: "EB", color: "#10B981" },
];

const SKILLS = {
  "Product Strategy": ["Jobs-to-be-Done", "OKR Mapping", "Roadmap Planning", "Competitive Analysis", "North Star Metrics"],
  "UX & Research": ["Usability Testing", "Contextual Inquiry", "Diary Studies", "Card Sorting", "Journey Mapping"],
  "UI & Design Systems": ["Design Tokens", "Component Libraries", "Accessibility (WCAG 2.1)", "Motion Design", "Visual Hierarchy"],
  "Tools": ["Figma", "FigJam", "Adobe XD", "Maze", "Framer", "Rive", "Notion", "Miro"],
};

// ── Nav ───────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, padding:"0 2rem", height:"64px", display:"flex", alignItems:"center", justifyContent:"space-between", background: scrolled ? "rgba(8,8,14,0.92)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none", transition:"all 0.4s ease" }}>
      <span style={{ fontFamily:"'Playfair Display', serif", fontSize:"1.15rem", color:"#fff", fontWeight:700, cursor:"pointer" }} onClick={() => go("hero")}>
        Kenny<span style={{ color:"#6C63FF" }}>.</span>
      </span>
      <div style={{ display:"flex", gap:"2rem", alignItems:"center" }}>
        {[["Work","projects"],["About","about"],["Skills","skills"],["Contact","contact"]].map(([label,id]) => (
          <button key={id} onClick={() => go(id)} style={{ background:"none", border:"none", cursor:"pointer", color:"rgba(255,255,255,0.6)", fontSize:"0.875rem", fontFamily:"'DM Sans', sans-serif", transition:"color 0.2s", padding:"4px 0" }} onMouseEnter={e => e.target.style.color="#fff"} onMouseLeave={e => e.target.style.color="rgba(255,255,255,0.6)"}>{label}</button>
        ))}
        <button onClick={() => go("contact")} style={{ background:"linear-gradient(135deg,#6C63FF,#3B82F6)", border:"none", borderRadius:"8px", color:"#fff", fontSize:"0.8rem", fontFamily:"'DM Sans', sans-serif", padding:"8px 18px", cursor:"pointer", transition:"opacity 0.2s,transform 0.2s" }} onMouseEnter={e=>{e.target.style.opacity="0.85";e.target.style.transform="scale(1.03)";}} onMouseLeave={e=>{e.target.style.opacity="1";e.target.style.transform="scale(1)";}}>Hire Me</button>
      </div>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });
  return (
    <section id="hero" style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", padding:"6rem 2rem 4rem", position:"relative", overflow:"hidden", textAlign:"center" }}>
      <div style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
        <div style={{ position:"absolute", top:"15%", left:"10%", width:"520px", height:"520px", borderRadius:"50%", background:"radial-gradient(circle,rgba(108,99,255,0.22) 0%,transparent 70%)", animation:"pulse1 8s ease-in-out infinite" }} />
        <div style={{ position:"absolute", top:"30%", right:"8%", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle,rgba(59,130,246,0.18) 0%,transparent 70%)", animation:"pulse2 10s ease-in-out infinite" }} />
        <div style={{ position:"absolute", bottom:"15%", left:"35%", width:"300px", height:"300px", borderRadius:"50%", background:"radial-gradient(circle,rgba(249,115,22,0.12) 0%,transparent 70%)", animation:"pulse3 12s ease-in-out infinite" }} />
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
      </div>
      <div style={{ position:"relative", maxWidth:"860px" }}>
        <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"rgba(108,99,255,0.12)", border:"1px solid rgba(108,99,255,0.3)", borderRadius:"100px", padding:"6px 16px", marginBottom:"2rem", animation:"fadeUp 0.8s ease 0.2s both" }}>
          <span style={{ width:"7px", height:"7px", borderRadius:"50%", background:"#6C63FF", display:"inline-block", animation:"blink 2s ease-in-out infinite" }} />
          <span style={{ color:"rgba(255,255,255,0.7)", fontSize:"0.8rem", fontFamily:"'DM Sans', sans-serif", letterSpacing:"0.04em" }}>Available for Freelance & Full-time</span>
        </div>
        <h1 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(2.4rem,6vw,4.5rem)", fontWeight:800, lineHeight:1.1, color:"#fff", letterSpacing:"-0.03em", marginBottom:"1.5rem", animation:"fadeUp 0.8s ease 0.4s both" }}>
          Designing Digital Experiences<br />That Drive{" "}
          <span style={{ background:"linear-gradient(135deg,#6C63FF,#3B82F6,#F97316)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Clarity, Growth & Impact</span>
        </h1>
        <p style={{ color:"rgba(255,255,255,0.55)", fontSize:"1.1rem", fontFamily:"'DM Sans', sans-serif", lineHeight:1.8, maxWidth:"620px", margin:"0 auto 2.5rem", animation:"fadeUp 0.8s ease 0.6s both" }}>
          Senior Product Designer · Lagos, Nigeria. 5+ years designing fintech platforms, SaaS tools, logistics systems, and Web3 products that users love and businesses trust.
        </p>
        <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap", animation:"fadeUp 0.8s ease 0.8s both" }}>
          <button onClick={() => go("projects")} style={{ background:"linear-gradient(135deg,#6C63FF,#3B82F6)", border:"none", borderRadius:"10px", color:"#fff", fontFamily:"'DM Sans', sans-serif", fontSize:"0.95rem", padding:"14px 32px", cursor:"pointer", transition:"transform 0.2s,box-shadow 0.2s", boxShadow:"0 4px 24px rgba(108,99,255,0.4)" }} onMouseEnter={e=>{e.target.style.transform="translateY(-2px)";e.target.style.boxShadow="0 8px 32px rgba(108,99,255,0.55)";}} onMouseLeave={e=>{e.target.style.transform="translateY(0)";e.target.style.boxShadow="0 4px 24px rgba(108,99,255,0.4)";}}>View Projects</button>
          <button onClick={() => go("contact")} style={{ background:"transparent", border:"1px solid rgba(255,255,255,0.2)", borderRadius:"10px", color:"#fff", fontFamily:"'DM Sans', sans-serif", fontSize:"0.95rem", padding:"14px 32px", cursor:"pointer", transition:"border-color 0.2s,background 0.2s" }} onMouseEnter={e=>{e.target.style.borderColor="rgba(255,255,255,0.5)";e.target.style.background="rgba(255,255,255,0.05)";}} onMouseLeave={e=>{e.target.style.borderColor="rgba(255,255,255,0.2)";e.target.style.background="transparent";}}>Contact Me</button>
        </div>
        <div style={{ display:"flex", gap:"2.5rem", justifyContent:"center", flexWrap:"wrap", marginTop:"4rem", paddingTop:"3rem", borderTop:"1px solid rgba(255,255,255,0.07)", animation:"fadeUp 0.8s ease 1s both" }}>
          {[["5+","Years Experience"],["30+","Products Shipped"],["6+","Industries Served"]].map(([n,l]) => (
            <div key={l} style={{ textAlign:"center" }}>
              <div style={{ fontFamily:"'Playfair Display', serif", fontSize:"2rem", fontWeight:800, color:"#fff" }}>{n}</div>
              <div style={{ color:"rgba(255,255,255,0.4)", fontSize:"0.8rem", fontFamily:"'DM Sans', sans-serif", marginTop:"4px" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────
function About() {
  const tags = ["Systems Thinking","UX Research","Design Systems","Fintech","Ecommerce","SaaS","Inventory","Logistics","Prototyping","Brand Strategy"];
  return (
    <section id="about" style={{ padding:"8rem 2rem", maxWidth:"1100px", margin:"0 auto" }}>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1.45fr", gap:"5rem", alignItems:"center" }}>
        <Reveal>
          <div style={{ position:"relative" }}>
            {/* Photo with styled border */}
            <div style={{ borderRadius:"20px", overflow:"hidden", position:"relative", boxShadow:"0 32px 80px rgba(108,99,255,0.25), 0 0 0 1px rgba(108,99,255,0.15)" }}>
              <Image src={PHOTO_SRC} alt="Kehinde Bayode — Senior Product Designer" width={900} height={1100} priority quality={75} sizes="(max-width: 900px) 100vw, 420px" style={{ width:"100%", height:"auto", display:"block", objectFit:"cover" }} />
              {/* subtle purple overlay to tie photo into theme */}
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(108,99,255,0.08) 0%, rgba(8,8,14,0.15) 80%, rgba(8,8,14,0.7) 100%)", pointerEvents:"none" }} />
            </div>
            {/* Floating badge bottom-left */}
            <div style={{ position:"absolute", bottom:"1.5rem", left:"-1.25rem", background:"rgba(8,8,14,0.95)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"12px", padding:"12px 16px", backdropFilter:"blur(16px)", boxShadow:"0 8px 32px rgba(0,0,0,0.4)" }}>
              <div style={{ color:"#fff", fontFamily:"'DM Sans', sans-serif", fontSize:"0.85rem", fontWeight:600, whiteSpace:"nowrap" }}>🏆 30+ Products Shipped</div>
            </div>
            {/* Floating badge top-right */}
            <div style={{ position:"absolute", top:"1.5rem", right:"-1.25rem", background:"rgba(8,8,14,0.95)", border:"1px solid rgba(108,99,255,0.3)", borderRadius:"12px", padding:"10px 14px", backdropFilter:"blur(16px)", boxShadow:"0 8px 32px rgba(0,0,0,0.4)" }}>
              <div style={{ color:"#A78BFA", fontFamily:"'DM Sans', sans-serif", fontSize:"0.82rem", fontWeight:600, whiteSpace:"nowrap" }}>📍 Lagos, Nigeria</div>
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p style={{ color:"#6C63FF", fontFamily:"'DM Sans', sans-serif", fontSize:"0.8rem", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:"1rem" }}>About Me</p>
            <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", color:"#fff", lineHeight:1.2, letterSpacing:"-0.02em", marginBottom:"1.5rem" }}>
              Designing products that turn complexity into{" "}
              <span style={{ background:"linear-gradient(135deg,#6C63FF,#3B82F6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>clarity.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ color:"rgba(255,255,255,0.55)", fontFamily:"'DM Sans', sans-serif", lineHeight:1.9, fontSize:"0.95rem", marginBottom:"1rem" }}>
              I’m a Product Designer focused on building high-impact digital products across fintech, ecommerce, SaaS, inventory, logistics, and complex business systems. My work centers on solving real product problems and translating them into intuitive, scalable user experiences that drive measurable results.
            </p>
            <p style={{ color:"rgba(255,255,255,0.55)", fontFamily:"'DM Sans', sans-serif", lineHeight:1.9, fontSize:"0.95rem", marginBottom:"1rem" }}>
              I design with outcomes in mind — improving user engagement, reducing drop-offs in critical flows, and supporting product growth through thoughtful design decisions. By redesigning onboarding, booking, and transaction workflows, I help simplify complex journeys, improve task completion, and make products easier to understand, trust, and use.
            </p>
            <p style={{ color:"rgba(255,255,255,0.55)", fontFamily:"'DM Sans', sans-serif", lineHeight:1.9, fontSize:"0.95rem", marginBottom:"2rem" }}>
              Beyond execution, I bring strong product thinking and systems design to every project. I focus on understanding root problems, evaluating trade-offs, and making decisions that balance user needs, business goals, and technical constraints. I thrive in collaborative teams, working closely with product managers and engineers to ship meaningful, high-impact products.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
              {tags.map(s => (
                <span key={s} style={{ background:"rgba(108,99,255,0.12)", border:"1px solid rgba(108,99,255,0.25)", color:"rgba(255,255,255,0.75)", borderRadius:"100px", padding:"5px 14px", fontSize:"0.78rem", fontFamily:"'DM Sans', sans-serif", transition:"background 0.2s,border-color 0.2s", cursor:"default" }} onMouseEnter={e=>{e.target.style.background="rgba(108,99,255,0.22)";e.target.style.borderColor="rgba(108,99,255,0.5)";}} onMouseLeave={e=>{e.target.style.background="rgba(108,99,255,0.12)";e.target.style.borderColor="rgba(108,99,255,0.25)";}}>{s}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ── Project Modal ─────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  const [activeScreen, setActiveScreen] = useState(0);
  useEffect(() => { document.body.style.overflow="hidden"; return () => { document.body.style.overflow=""; }; }, []);
  useEffect(() => {
    if (!project?.screens?.length || typeof window === "undefined") return;
    const preloadTargets = [project.realCover || PROJECT_COVERS[project.coverKey], project.screens[activeScreen]?.img, project.screens[activeScreen + 1]?.img].filter(Boolean);
    preloadTargets.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [project, activeScreen]);
  const caseStudy = [
    ["🎯","The Problem",project.sections.problem],
    ["🔍","The Research",project.sections.research],
    ["🧠","The Strategy",project.sections.strategy],
    ["🎨","The Design System",project.sections.design],
    ["✨","The Solution",project.sections.solution],
    ["📈","The Results",project.sections.results],
    ["💡","Lessons Learned",project.sections.lessons],
  ];
  return (
    <div style={{ position:"fixed", inset:0, zIndex:200, background:"rgba(0,0,0,0.92)", backdropFilter:"blur(14px)", overflow:"auto", display:"flex", justifyContent:"center", padding:"2rem 1rem 4rem", animation:"fadeIn 0.25s ease" }} onClick={e => { if(e.target===e.currentTarget) onClose(); }}>
      <div style={{ background:"#0D0D1A", maxWidth:"860px", width:"100%", borderRadius:"20px", border:"1px solid rgba(255,255,255,0.07)", overflow:"hidden", animation:"modalUp 0.35s ease", alignSelf:"flex-start" }}>

        {/* Cover with gradient bottom */}
        <div style={{ position:"relative", height:"220px", overflow:"hidden", background:"#0a0a12" }}>
          <Image src={project.realCover || PROJECT_COVERS[project.coverKey] || "/images/profile.png"} alt={project.name} fill priority quality={72} sizes="(max-width: 900px) 100vw, 860px" style={{ objectFit:"cover", objectPosition:"top center", display:"block", transition:"transform 0.4s ease" }} />
          <div style={{ position:"absolute", inset:0, background:`linear-gradient(to bottom, transparent 30%, rgba(13,13,26,0.95) 100%)` }} />
          <div style={{ position:"absolute", bottom:"1.25rem", left:"2rem" }}>
            <span style={{ color:project.accent, fontFamily:"'DM Sans', sans-serif", fontSize:"0.72rem", letterSpacing:"0.1em", textTransform:"uppercase" }}>{project.tag}</span>
            <h2 style={{ fontFamily:"'Playfair Display', serif", color:"#fff", fontSize:"1.75rem", letterSpacing:"-0.02em", marginTop:"0.25rem" }}>{project.name}</h2>
          </div>
          <button onClick={onClose} style={{ position:"absolute", top:"1rem", right:"1rem", background:"rgba(0,0,0,0.7)", backdropFilter:"blur(8px)", border:"1px solid rgba(255,255,255,0.15)", color:"#fff", width:"36px", height:"36px", borderRadius:"50%", cursor:"pointer", fontSize:"1.2rem", transition:"background 0.2s", display:"flex", alignItems:"center", justifyContent:"center" }} onMouseEnter={e=>e.target.style.background="rgba(0,0,0,0.9)"} onMouseLeave={e=>e.target.style.background="rgba(0,0,0,0.7)"}>×</button>
        </div>

        {/* Meta bar */}
        <div style={{ padding:"1.25rem 2rem", borderBottom:"1px solid rgba(255,255,255,0.06)", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"0.75rem" }}>
          <div style={{ display:"flex", gap:"8px", flexWrap:"wrap" }}>
            <span style={{ color:"rgba(255,255,255,0.4)", fontFamily:"'DM Sans', sans-serif", fontSize:"0.78rem" }}>Role: <span style={{ color:"rgba(255,255,255,0.7)" }}>{project.role}</span></span>
            {project.metrics.map(m => <span key={m} style={{ background:`${project.color}22`, border:`1px solid ${project.color}44`, color:project.accent, borderRadius:"100px", padding:"3px 12px", fontSize:"0.72rem", fontFamily:"'DM Sans', sans-serif" }}>{m}</span>)}
          </div>
          <a href={project.behanceUrl} target="_blank" rel="noopener noreferrer" style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.15)", borderRadius:"8px", color:"rgba(255,255,255,0.7)", fontFamily:"'DM Sans', sans-serif", fontSize:"0.78rem", padding:"6px 14px", textDecoration:"none", transition:"border-color 0.2s,color 0.2s", whiteSpace:"nowrap" }} onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.4)";e.currentTarget.style.color="#fff";}} onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.15)";e.currentTarget.style.color="rgba(255,255,255,0.7)";}}>
            View on Behance →
          </a>
        </div>

        {/* Design Screens Showcase */}
        <div style={{ padding:"2rem 2rem 0" }}>
          <p style={{ color:project.accent, fontFamily:"'DM Sans', sans-serif", fontSize:"0.75rem", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"1rem" }}>Design Screens</p>
          {/* Screen tabs */}
          <div style={{ display:"flex", gap:"8px", marginBottom:"1.25rem", flexWrap:"wrap" }}>
            {project.screens.map((s,i) => (
              <button key={i} onClick={() => setActiveScreen(i)} style={{ background: i===activeScreen ? `${project.color}30` : "rgba(255,255,255,0.04)", border: i===activeScreen ? `1px solid ${project.color}60` : "1px solid rgba(255,255,255,0.08)", borderRadius:"8px", color: i===activeScreen ? project.accent : "rgba(255,255,255,0.45)", fontFamily:"'DM Sans', sans-serif", fontSize:"0.78rem", padding:"7px 14px", cursor:"pointer", transition:"all 0.2s" }}>{s.label}</button>
            ))}
          </div>
          {/* Screen preview */}
          <div style={{ background:`linear-gradient(135deg, ${project.color}12, rgba(255,255,255,0.02))`, border:`1px solid ${project.color}22`, borderRadius:"14px", padding:"1.25rem" }}>
            <div style={{ display:"flex", gap:"8px", marginBottom:"0.75rem" }}>
              {[...Array(3)].map((_,i) => <div key={i} style={{ width:"10px", height:"10px", borderRadius:"50%", background: i===0 ? "#FF5F57" : i===1 ? "#FEBC2E" : "#28C840", opacity:0.7 }} />)}
            </div>
            {project.screens[activeScreen].img ? (
              <div style={{ borderRadius:"8px", overflow:"hidden", marginBottom:"0.85rem", border:`1px solid ${project.color}30` }}>
                <Image key={project.screens[activeScreen].img || activeScreen} src={project.screens[activeScreen].img || project.realCover || PROJECT_COVERS[project.coverKey] || "/images/profile.png"} alt={project.screens[activeScreen].label} width={1600} height={1100} quality={68} priority={activeScreen === 0} sizes="(max-width: 768px) 100vw, 80vw" style={{ width:"100%", display:"block", height:"auto" }} />
              </div>
            ) : null}
            <h4 style={{ color:"#fff", fontFamily:"'Playfair Display', serif", fontSize:"1rem", marginBottom:"0.6rem" }}>{project.screens[activeScreen].label}</h4>
            <p style={{ color:"rgba(255,255,255,0.5)", fontFamily:"'DM Sans', sans-serif", fontSize:"0.875rem", lineHeight:1.75 }}>{project.screens[activeScreen].desc}</p>
            <div style={{ marginTop:"1rem", display:"flex", alignItems:"center", gap:"10px" }}>
              <div style={{ height:"2px", flex:1, background:`linear-gradient(90deg, ${project.color}, transparent)`, borderRadius:"1px" }} />
              <span style={{ color:"rgba(255,255,255,0.2)", fontFamily:"'DM Sans', sans-serif", fontSize:"0.72rem" }}>{activeScreen+1} / {project.screens.length}</span>
            </div>
          </div>
        </div>

        {/* Case Study */}
        <div style={{ padding:"2rem 2rem 3rem" }}>
          <p style={{ color:project.accent, fontFamily:"'DM Sans', sans-serif", fontSize:"0.75rem", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"1.5rem", marginTop:"0.5rem" }}>Full Case Study</p>
          {caseStudy.map(([icon,title,content]) => (
            <div key={title} style={{ marginBottom:"1.75rem", paddingBottom:"1.75rem", borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
              <h3 style={{ color:"#fff", fontFamily:"'Playfair Display', serif", fontSize:"1.05rem", marginBottom:"0.6rem", display:"flex", alignItems:"center", gap:"10px" }}>
                <span>{icon}</span>{title}
              </h3>
              <p style={{ color:"rgba(255,255,255,0.55)", fontFamily:"'DM Sans', sans-serif", lineHeight:1.85, fontSize:"0.9rem" }}>{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Projects Section ──────────────────────────────────────────────────────────
function Projects() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="projects" style={{ padding:"8rem 2rem", maxWidth:"1180px", margin:"0 auto" }}>
      <Reveal>
        <p style={{ color:"#6C63FF", fontFamily:"'DM Sans', sans-serif", fontSize:"0.8rem", letterSpacing:"0.12em", textTransform:"uppercase", textAlign:"center", marginBottom:"1rem" }}>Selected Work</p>
        <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", color:"#fff", textAlign:"center", letterSpacing:"-0.02em", marginBottom:"0.75rem" }}>Projects That Moved the Needle</h2>
        <p style={{ color:"rgba(255,255,255,0.4)", fontFamily:"'DM Sans', sans-serif", textAlign:"center", fontSize:"0.95rem", maxWidth:"520px", margin:"0 auto 0.75rem", lineHeight:1.7 }}>
          Real work. Real impact. Each project is a story of constraints, decisions, and outcomes.
        </p>
        <p style={{ color:"rgba(255,255,255,0.25)", fontFamily:"'DM Sans', sans-serif", textAlign:"center", fontSize:"0.82rem", marginBottom:"4rem" }}>
          View full projects on{" "}
          <a href="https://www.behance.net/kennyken5" target="_blank" rel="noopener noreferrer" style={{ color:"#A78BFA", textDecoration:"none" }}>Behance →</a>
        </p>
      </Reveal>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))", gap:"1.5rem" }}>
        {PROJECTS.map((p,i) => (
          <Reveal key={p.id} delay={i*0.07}>
            <div onClick={() => setSelected(p)} style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:"16px", overflow:"hidden", cursor:"pointer", transition:"transform 0.3s ease,border-color 0.3s ease,box-shadow 0.3s ease", height:"100%", display:"flex", flexDirection:"column" }} onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.borderColor=`${p.color}55`;e.currentTarget.style.boxShadow=`0 20px 60px ${p.color}22`;}} onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";e.currentTarget.style.boxShadow="none";}}>
              {/* Cover image */}
              <div style={{ height:"180px", overflow:"hidden", position:"relative", flexShrink:0 }}>
                <Image src={p.realCover || PROJECT_COVERS[p.coverKey] || "/images/profile.png"} alt={p.name} fill loading="lazy" quality={72} sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit:"cover", display:"block", transition:"transform 0.5s ease" }} />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,transparent 40%,rgba(8,8,14,0.75) 100%)" }} />
                <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"3px", background:`linear-gradient(90deg,${p.color},${p.accent})` }} />
              </div>
              {/* Card content */}
              <div style={{ padding:"1.5rem", flex:1, display:"flex", flexDirection:"column" }}>
                <span style={{ color:p.accent, fontFamily:"'DM Sans', sans-serif", fontSize:"0.72rem", letterSpacing:"0.1em", textTransform:"uppercase" }}>{p.tag}</span>
                <h3 style={{ fontFamily:"'Playfair Display', serif", color:"#fff", fontSize:"1.3rem", marginTop:"0.4rem", marginBottom:"0.25rem" }}>{p.name}</h3>
                <p style={{ color:"rgba(255,255,255,0.45)", fontFamily:"'DM Sans', sans-serif", fontSize:"0.82rem", marginBottom:"1rem", lineHeight:1.6 }}>{p.sub}</p>
                <p style={{ color:"rgba(255,255,255,0.3)", fontFamily:"'DM Sans', sans-serif", fontSize:"0.78rem", marginBottom:"1.25rem", lineHeight:1.7, flex:1 }}>
                  <strong style={{ color:"rgba(255,255,255,0.48)" }}>Problem: </strong>{p.problem}
                </p>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", paddingTop:"1rem", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ color:"rgba(255,255,255,0.28)", fontFamily:"'DM Sans', sans-serif", fontSize:"0.78rem" }}>{p.role}</span>
                  <span style={{ color:p.accent, fontFamily:"'DM Sans', sans-serif", fontSize:"0.82rem", fontWeight:500 }}>View Case Study →</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

// ── Testimonials ──────────────────────────────────────────────────────────────
function Testimonials() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const goTo = (i) => { if(i===active||fading) return; setFading(true); setTimeout(()=>{setActive(i);setFading(false);},220); };
  useEffect(() => { const t=setInterval(()=>{ setFading(true); setTimeout(()=>{setActive(a=>(a+1)%TESTIMONIALS.length);setFading(false);},220);},5500); return ()=>clearInterval(t); },[]);
  const t = TESTIMONIALS[active];
  return (
    <section id="testimonials" style={{ padding:"8rem 2rem", background:"rgba(108,99,255,0.04)", borderTop:"1px solid rgba(255,255,255,0.04)", borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
      <Reveal>
        <p style={{ color:"#6C63FF", fontFamily:"'DM Sans', sans-serif", fontSize:"0.8rem", letterSpacing:"0.12em", textTransform:"uppercase", textAlign:"center", marginBottom:"1rem" }}>Testimonials</p>
        <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", color:"#fff", textAlign:"center", letterSpacing:"-0.02em", marginBottom:"4rem" }}>What Others Say</h2>
      </Reveal>
      <div style={{ maxWidth:"740px", margin:"0 auto" }}>
        <div style={{ opacity:fading?0:1, transform:fading?"translateY(10px)":"translateY(0)", transition:"opacity 0.22s ease,transform 0.22s ease", textAlign:"center" }}>
          <div style={{ fontSize:"3.5rem", lineHeight:1, marginBottom:"1.25rem", color:t.color, opacity:0.3 }}>"</div>
          <blockquote style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(1rem,2.2vw,1.2rem)", color:"rgba(255,255,255,0.78)", lineHeight:1.9, fontStyle:"italic", marginBottom:"2rem" }}>{t.quote}</blockquote>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"1rem" }}>
            <div style={{ width:"48px", height:"48px", borderRadius:"50%", background:`linear-gradient(135deg,${t.color},${t.color}88)`, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontFamily:"'DM Sans', sans-serif", fontSize:"0.9rem", fontWeight:700, flexShrink:0 }}>{t.initials}</div>
            <div style={{ textAlign:"left" }}>
              <div style={{ color:"#fff", fontFamily:"'DM Sans', sans-serif", fontSize:"0.9rem", fontWeight:600 }}>{t.name}</div>
              <div style={{ color:"rgba(255,255,255,0.4)", fontFamily:"'DM Sans', sans-serif", fontSize:"0.78rem", marginTop:"2px" }}>{t.title}</div>
            </div>
          </div>
        </div>
        <div style={{ display:"flex", gap:"12px", justifyContent:"center", marginTop:"3rem", alignItems:"center" }}>
          {TESTIMONIALS.map((item,i) => (
            <button key={i} onClick={()=>goTo(i)} style={{ width:i===active?"44px":"36px", height:i===active?"44px":"36px", borderRadius:"50%", border:i===active?`2px solid ${item.color}`:"2px solid transparent", background:`linear-gradient(135deg,${item.color},${item.color}88)`, cursor:"pointer", transition:"all 0.3s ease", padding:0, opacity:i===active?1:0.4, display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontFamily:"'DM Sans', sans-serif", fontSize:i===active?"0.78rem":"0.7rem", fontWeight:700 }}>{item.initials}</button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Skills ────────────────────────────────────────────────────────────────────
function Skills() {
  const colors = ["#6C63FF","#0EA5E9","#F97316","#10B981"];
  return (
    <section id="skills" style={{ padding:"8rem 2rem", maxWidth:"1100px", margin:"0 auto" }}>
      <Reveal>
        <p style={{ color:"#6C63FF", fontFamily:"'DM Sans', sans-serif", fontSize:"0.8rem", letterSpacing:"0.12em", textTransform:"uppercase", textAlign:"center", marginBottom:"1rem" }}>Capabilities</p>
        <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", color:"#fff", textAlign:"center", letterSpacing:"-0.02em", marginBottom:"4rem" }}>Skills & Tools</h2>
      </Reveal>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"1.5rem" }}>
        {Object.entries(SKILLS).map(([cat,items],ci) => (
          <Reveal key={cat} delay={ci*0.08}>
            <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:"16px", padding:"1.75rem", transition:"border-color 0.3s" }} onMouseEnter={e=>e.currentTarget.style.borderColor=`${colors[ci]}44`} onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(255,255,255,0.07)"}>
              <div style={{ width:"36px", height:"36px", borderRadius:"10px", background:`${colors[ci]}22`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"1rem" }}>
                <div style={{ width:"14px", height:"14px", borderRadius:"50%", background:colors[ci] }} />
              </div>
              <h3 style={{ fontFamily:"'DM Sans', sans-serif", color:"#fff", fontSize:"0.9rem", fontWeight:700, marginBottom:"1rem" }}>{cat}</h3>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"6px" }}>
                {items.map(item => <span key={item} style={{ background:`${colors[ci]}12`, border:`1px solid ${colors[ci]}28`, color:"rgba(255,255,255,0.65)", borderRadius:"6px", padding:"4px 10px", fontSize:"0.75rem", fontFamily:"'DM Sans', sans-serif", transition:"background 0.2s", cursor:"default" }} onMouseEnter={e=>e.target.style.background=`${colors[ci]}28`} onMouseLeave={e=>e.target.style.background=`${colors[ci]}12`}>{item}</span>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [status, setStatus] = useState("idle");
  const handleSubmit = async () => {
    if(!form.name||!form.email||!form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xpwryjlo", {
        method:"POST", headers:{"Content-Type":"application/json",Accept:"application/json"},
        body: JSON.stringify({ name:form.name, email:form.email, message:form.message }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      const s=encodeURIComponent(`Portfolio enquiry from ${form.name}`);
      const b=encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      window.open(`mailto:bayodekehinde180@gmail.com?subject=${s}&body=${b}`,"_blank");
      setStatus("sent");
    }
  };
  return (
    <section id="contact" style={{ padding:"8rem 2rem", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 50% 100%,rgba(108,99,255,0.12) 0%,transparent 60%)", pointerEvents:"none" }} />
      <Reveal>
        <p style={{ color:"#6C63FF", fontFamily:"'DM Sans', sans-serif", fontSize:"0.8rem", letterSpacing:"0.12em", textTransform:"uppercase", textAlign:"center", marginBottom:"1rem" }}>Get In Touch</p>
        <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", color:"#fff", textAlign:"center", letterSpacing:"-0.02em", marginBottom:"0.75rem" }}>
          Let's Build Something{" "}
          <span style={{ background:"linear-gradient(135deg,#6C63FF,#3B82F6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Impactful.</span>
        </h2>
        <p style={{ color:"rgba(255,255,255,0.4)", fontFamily:"'DM Sans', sans-serif", textAlign:"center", fontSize:"0.95rem", maxWidth:"480px", margin:"0 auto 3.5rem", lineHeight:1.7 }}>
          Open to senior design roles, consulting, and long-term product partnerships. Based in Lagos — working globally.
        </p>
      </Reveal>
      <div style={{ maxWidth:"560px", margin:"0 auto", position:"relative" }}>
        {status==="sent" ? (
          <div style={{ textAlign:"center", animation:"fadeUp 0.5s ease", padding:"3rem 0" }}>
            <div style={{ fontSize:"3.5rem", marginBottom:"1rem" }}>✅</div>
            <h3 style={{ fontFamily:"'Playfair Display', serif", color:"#fff", fontSize:"1.6rem", marginBottom:"0.75rem" }}>Message Sent!</h3>
            <p style={{ color:"rgba(255,255,255,0.5)", fontFamily:"'DM Sans', sans-serif", fontSize:"0.9rem", lineHeight:1.7 }}>
              Thanks for reaching out. I'll reply to <strong style={{ color:"rgba(255,255,255,0.75)" }}>{form.email}</strong> within 24 hours.
            </p>
            <button onClick={()=>{setStatus("idle");setForm({name:"",email:"",message:""}); }} style={{ marginTop:"2rem", background:"rgba(108,99,255,0.15)", border:"1px solid rgba(108,99,255,0.3)", borderRadius:"10px", color:"#A78BFA", fontFamily:"'DM Sans', sans-serif", fontSize:"0.88rem", padding:"10px 24px", cursor:"pointer" }}>Send another message</button>
          </div>
        ) : (
          <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"20px", padding:"2.5rem" }}>
            {[{label:"Your Name",key:"name",type:"text",placeholder:"e.g. Chisom Adeyemi"},{label:"Email Address",key:"email",type:"email",placeholder:"hello@company.com"}].map(f => (
              <div key={f.key} style={{ marginBottom:"1.25rem" }}>
                <label style={{ color:"rgba(255,255,255,0.5)", fontFamily:"'DM Sans', sans-serif", fontSize:"0.8rem", display:"block", marginBottom:"8px" }}>{f.label}</label>
                <input type={f.type} placeholder={f.placeholder} value={form[f.key]} onChange={e=>setForm(v=>({...v,[f.key]:e.target.value}))} style={{ width:"100%", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"10px", color:"#fff", fontFamily:"'DM Sans', sans-serif", fontSize:"0.9rem", padding:"12px 16px", outline:"none", boxSizing:"border-box", transition:"border-color 0.2s" }} onFocus={e=>e.target.style.borderColor="rgba(108,99,255,0.6)"} onBlur={e=>e.target.style.borderColor="rgba(255,255,255,0.1)"} />
              </div>
            ))}
            <div style={{ marginBottom:"1.75rem" }}>
              <label style={{ color:"rgba(255,255,255,0.5)", fontFamily:"'DM Sans', sans-serif", fontSize:"0.8rem", display:"block", marginBottom:"8px" }}>Message</label>
              <textarea rows={5} placeholder="Tell me about your project or role..." value={form.message} onChange={e=>setForm(v=>({...v,message:e.target.value}))} style={{ width:"100%", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"10px", color:"#fff", fontFamily:"'DM Sans', sans-serif", fontSize:"0.9rem", padding:"12px 16px", outline:"none", resize:"vertical", boxSizing:"border-box", transition:"border-color 0.2s" }} onFocus={e=>e.target.style.borderColor="rgba(108,99,255,0.6)"} onBlur={e=>e.target.style.borderColor="rgba(255,255,255,0.1)"} />
            </div>
            {status==="error" && <p style={{ color:"#F87171", fontFamily:"'DM Sans', sans-serif", fontSize:"0.82rem", marginBottom:"1rem", textAlign:"center" }}>Something went wrong. Please email directly below.</p>}
            <button onClick={handleSubmit} disabled={status==="sending"} style={{ width:"100%", background:"linear-gradient(135deg,#6C63FF,#3B82F6)", border:"none", borderRadius:"10px", color:"#fff", fontFamily:"'DM Sans', sans-serif", fontSize:"0.95rem", fontWeight:600, padding:"15px", cursor:status==="sending"?"wait":"pointer", opacity:status==="sending"?0.7:1, transition:"opacity 0.2s,transform 0.2s", boxShadow:"0 4px 20px rgba(108,99,255,0.3)" }} onMouseEnter={e=>{if(status!=="sending")e.target.style.transform="translateY(-1px)";}} onMouseLeave={e=>e.target.style.transform="translateY(0)"}>
              {status==="sending" ? "Sending…" : "Send Message →"}
            </button>
          </div>
        )}
        <div style={{ marginTop:"2rem", padding:"1.5rem", background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.06)", borderRadius:"14px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem" }}>
          <a href="mailto:bayodekehinde180@gmail.com" style={{ color:"rgba(255,255,255,0.6)", fontFamily:"'DM Sans', sans-serif", fontSize:"0.85rem", textDecoration:"none", display:"flex", alignItems:"center", gap:"8px", transition:"color 0.2s" }} onMouseEnter={e=>e.currentTarget.style.color="#fff"} onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.6)"}>
            <span style={{ fontSize:"1rem" }}>✉️</span> bayodekehinde180@gmail.com
          </a>
          <div style={{ display:"flex", gap:"0.75rem" }}>
            {[{label:"LinkedIn",icon:"in",href:"https://www.linkedin.com/in/kehinde-ayo-217ab0318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"},{label:"Behance",icon:"Bē",href:"https://behance.net/kennyken5"}].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ display:"flex", alignItems:"center", gap:"6px", color:"rgba(255,255,255,0.5)", fontFamily:"'DM Sans', sans-serif", fontSize:"0.82rem", textDecoration:"none", transition:"color 0.2s" }} onMouseEnter={e=>e.currentTarget.style.color="#fff"} onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.5)"}>
                <span style={{ background:"rgba(255,255,255,0.07)", borderRadius:"6px", padding:"5px 9px", fontSize:"0.78rem", fontWeight:700 }}>{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        html{scroll-behavior:smooth;}
        body{background:#08080E;color:#fff;}
        ::-webkit-scrollbar{width:6px;}
        ::-webkit-scrollbar-track{background:#08080E;}
        ::-webkit-scrollbar-thumb{background:rgba(108,99,255,0.4);border-radius:3px;}
        input::placeholder,textarea::placeholder{color:rgba(255,255,255,0.2);}
        @keyframes fadeUp{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);}}
        @keyframes fadeIn{from{opacity:0;}to{opacity:1;}}
        @keyframes modalUp{from{opacity:0;transform:translateY(40px);}to{opacity:1;transform:translateY(0);}}
        @keyframes pulse1{0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(30px,-20px) scale(1.08);}}
        @keyframes pulse2{0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(-20px,30px) scale(1.12);}}
        @keyframes pulse3{0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(20px,-30px) scale(1.06);}}
        @keyframes blink{0%,100%{opacity:1;}50%{opacity:0.3;}}
        @media(max-width:768px){
          nav>div>button:not(:last-child){display:none;}
        }
        @media(max-width:900px){
          #about>div{grid-template-columns:1fr !important;gap:3rem !important;}
          #about>div>div:first-child{max-width:360px;margin:0 auto;}
        }
      `}</style>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Skills />
      <Contact />
      <footer style={{ padding:"2rem", textAlign:"center", borderTop:"1px solid rgba(255,255,255,0.05)", color:"rgba(255,255,255,0.2)", fontFamily:"'DM Sans', sans-serif", fontSize:"0.8rem" }}>
        © {new Date().getFullYear()} Kehinde Bayode · Senior Product Designer · Lagos, Nigeria
      </footer>
    </>
  );
}
