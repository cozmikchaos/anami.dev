"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BrainCircuit, Cuboid, Mic, Orbit, Send, Sparkles } from "lucide-react";

const reveal = {
  initial: { opacity: 0, y: 28, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-70px" },
  transition: { duration: 0.7 },
};

const worlds = {
  "Human Heart": {
    color: "#ef3154",
    stations: [
      ["Arterial bloodstream", "Oxygen-rich blood moves away from the heart under strong, rhythmic pressure."],
      ["Heart chambers", "Four chambers work as two synchronized pumps, keeping blood moving in the correct direction."],
      ["Lung exchange", "Across a thin membrane, carbon dioxide leaves the blood while oxygen enters it."],
      ["Capillary network", "Tiny vessels deliver oxygen directly to living tissue, one cell at a time."],
    ],
  },
  "Black Holes": {
    color: "#8d68ff",
    stations: [
      ["Stellar birth", "A black hole can begin with a star many times more massive than our Sun."],
      ["Core collapse", "When its fuel runs out, the star’s core can collapse in less than a second."],
      ["Curved spacetime", "Gravity changes the paths that matter and light can take through spacetime."],
      ["Event horizon", "Beyond this boundary, every possible path points inward—even the paths followed by light."],
    ],
  },
  "Inside an Atom": {
    color: "#35dbe8",
    stations: [
      ["Scale of matter", "Everything around us is built from atoms, but most of each atom is empty space."],
      ["The nucleus", "Protons and neutrons pack almost all the atom’s mass into its tiny center."],
      ["Electron cloud", "Electrons occupy probability clouds rather than traveling in simple planetary orbits."],
      ["Energy levels", "Electrons absorb and release exact amounts of energy as they move between allowed states."],
    ],
  },
} as const;

type WorldName = keyof typeof worlds;

function LokaExperience() {
  const [world, setWorld] = useState<WorldName>("Human Heart");
  const [station, setStation] = useState(0);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("Move through the world or ask me something about what you see.");
  const current = worlds[world];
  const ask = (event: FormEvent) => {
    event.preventDefault();
    if (!question.trim()) return;
    const q = question.toLowerCase();
    let response = `That connects to ${current.stations[station][0].toLowerCase()}. ${current.stations[station][1]}`;
    if (q.includes("why")) response = `The important “why” here is cause and effect: ${current.stations[station][1]} Loka places you inside the process so that connection is easier to see.`;
    if (q.includes("what")) response = `You’re currently exploring ${current.stations[station][0]}. ${current.stations[station][1]}`;
    if (q.includes("how")) response = `Watch how this station connects to the next one. ${current.stations[station][1]}`;
    setAnswer(response);
    setQuestion("");
  };
  const chooseWorld = (name: WorldName) => { setWorld(name); setStation(0); setAnswer(`Welcome to ${name}. Choose a station or ask your guide a question.`); };

  return <section className="loka-preview">
    <div className="loka-preview-head"><div><span className="eyebrow">EXPERIENCE PREVIEW</span><h2>Enter a world<br />of knowledge.</h2></div><p>Choose a lesson, explore its concept stations, and ask Loka’s guide a question.</p></div>
    <div className="loka-sim" style={{ "--world-color": current.color } as React.CSSProperties}>
      <div className="loka-sim-top"><b>LOKA<span>◦</span></b><div>{(Object.keys(worlds) as WorldName[]).map(name => <button className={world === name ? "active" : ""} onClick={() => chooseWorld(name)} key={name}>{name}</button>)}</div><small>GUIDED EXPERIENCE</small></div>
      <div className="loka-sim-world">
        <div className="loka-world-art"><div className="world-grid"/><div className="world-core"><i/><i/><i/><strong>{world === "Human Heart" ? "♥" : world === "Black Holes" ? "◉" : "✦"}</strong></div><span>{current.stations[station][0]}</span></div>
        <aside className="loka-guide"><div className="loka-guide-title"><Sparkles/><span><small>YOUR AI GUIDE</small><b>Ask Loka</b></span></div><p>{answer}</p><form onSubmit={ask}><input aria-label="Ask Loka a question" value={question} onChange={e => setQuestion(e.target.value)} placeholder={`Ask about ${world.toLowerCase()}…`}/><button aria-label="Send question"><Send/></button></form></aside>
      </div>
      <div className="loka-stations">{current.stations.map(([title], index) => <button key={title} onClick={() => { setStation(index); setAnswer(current.stations[index][1]); }} className={station === index ? "active" : ""}><span>0{index + 1}</span><b>{title}</b></button>)}</div>
    </div>
  </section>;
}

export function LokaProject() {
  return <main className="loka-page">
    <nav className="loka-nav">
      <Link href="/projects"><ArrowLeft /> All projects</Link>
      <span>ANAMIKA HAREESH / LOKA</span>
    </nav>

    <section className="loka-hero">
      <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <span className="eyebrow">IMMERSIVE AI LEARNING / 2026</span>
        <h1>LOK<span>A</span></h1>
        <p>Where knowledge becomes reality.</p>
      </motion.div>
      <motion.img src="/loka-cover.png" alt="Loka immersive learning experience inside the human bloodstream" initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.15 }} />
    </section>

    <LokaExperience />

    <section className="loka-intro">
      <motion.div {...reveal}>
        <span className="eyebrow">THE IDEA</span>
        <h2>Every lesson<br />is a world.</h2>
      </motion.div>
      <motion.div {...reveal}>
        <p className="loka-lead">Loka is an AI-powered immersive learning platform that turns a topic into a world students can physically explore.</p>
        <p>Instead of memorizing a diagram, a learner can travel through the bloodstream, step toward a black hole, or generate a new lesson around a question. An AI guide explains the world, answers spoken questions, and connects curiosity to what happens next.</p>
        <div className="loka-tags"><span>Unity 6</span><span>OpenXR</span><span>Next.js</span><span>Three.js</span><span>WebXR</span><span>Agentic AI</span></div>
      </motion.div>
    </section>

    <section className="loka-experience">
      <motion.div {...reveal} className="loka-image-wrap"><img src="/loka-cover.png" alt="AI-generated Loka lesson world" /></motion.div>
      <motion.div {...reveal} className="loka-copy">
        <span className="eyebrow">FLAGSHIP EXPERIENCE</span>
        <h2>Journey through the human body.</h2>
        <p>The browser prototype places learners inside a moving bloodstream with interactive stations for the heart, lungs, capillaries, and immune system. A separate Unity vertical slice teaches black holes through movement, observation, voice, and a final mission.</p>
      </motion.div>
    </section>

    <section className="loka-features">
      <motion.div {...reveal}><span className="eyebrow">HOW IT WORKS</span><h2>Built for<br /><i>curiosity.</i></h2></motion.div>
      <div className="loka-feature-grid">
        {[
          [<Cuboid key="world" />, "Generated worlds", "A lesson engine organizes concepts into explorable stations and builds an environment around the topic."],
          [<BrainCircuit key="guide" />, "Adaptive AI guide", "The guide answers questions in context and can adapt explanations, examples, and world reactions."],
          [<Mic key="voice" />, "Natural voice", "Speech input, transcription, and spoken responses let learners ask questions without leaving the experience."],
          [<Orbit key="xr" />, "Web + XR", "The concept runs as an interactive Three.js browser experience and as a Unity 6 OpenXR prototype."],
        ].map(([icon, title, copy], index) => <motion.article key={String(title)} {...reveal} transition={{ duration: 0.65, delay: index * 0.07 }}>
          {icon}<span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p>
        </motion.article>)}
      </div>
    </section>

    <section className="loka-architecture">
      <motion.div {...reveal}><span className="eyebrow">SYSTEM DESIGN</span><h2>From a question<br />to an experience.</h2></motion.div>
      <motion.div {...reveal} className="loka-flow">
        <div><small>01</small><b>Student curiosity</b><span>Topic or spoken question</span></div><ArrowRight />
        <div><small>02</small><b>Lesson intelligence</b><span>Structure, guidance, narration</span></div><ArrowRight />
        <div><small>03</small><b>World reaction</b><span>Safe actions inside the simulation</span></div>
      </motion.div>
      <motion.p {...reveal}>The lesson state machine stays separate from lesson-specific content. AI output is routed through structured actions before it can change the simulation, while authored educational responses provide an offline fallback.</motion.p>
    </section>

    <section className="loka-next">
      <Sparkles />
      <span className="eyebrow">CURRENT PROTOTYPE</span>
      <h2>Learning you can<br /><i>step inside.</i></h2>
      <Link href="/projects">Explore all projects <ArrowRight /></Link>
    </section>
  </main>;
}
