"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Bell, CalendarDays, CheckSquare, ChevronDown, Clock3, Lightbulb, ListTodo, LogOut, Sparkles } from "lucide-react";

type FeedItem={title:string;type:"TASK"|"EVENT";suggestion:string;detail:string};
const feed:FeedItem[]=[
  {title:"Go Stargazing",type:"TASK",suggestion:"Stargazing Preparation Tips",detail:"Choose a dark place away from city lights. Bring a blanket, arrive early, and use SkySafari or Star Walk to identify stars and constellations."},
  {title:"Friend’s Birthday",type:"TASK",suggestion:"Birthday Message for Friend",detail:"Write a personal birthday note and plan a small outing around their favorite meal. Add a reminder before the celebration."},
  {title:"Study for Calculus",type:"TASK",suggestion:"Helpful Calculus Study Resources",detail:"Start with a focused review of derivatives, then practice with Khan Academy and 3Blue1Brown before attempting the problem set."},
];

function StaticDemo(){
  const [view,setView]=useState("Daily Feed");
  const [loaded,setLoaded]=useState(false);
  const [done,setDone]=useState<number[]>([]);
  const toggle=(i:number)=>setDone(d=>d.includes(i)?d.filter(x=>x!==i):[...d,i]);
  return <div className="real-demo">
    <div className="real-demo-nav">
      <div className="real-wordmark">vivrAI</div>
      <label><Bell/><select value={view} onChange={e=>setView(e.target.value)}><option>Daily Feed</option><option>Tasks</option><option>Calendar</option><option>Smart Schedule</option></select><ChevronDown/></label>
      <button><LogOut/> Logout</button>
    </div>
    <div className="real-demo-body">
      {view==="Daily Feed"&&<><h3>Daily Feed</h3><p>Your personalized schedule with smart suggestions</p><button className="load-feed" onClick={()=>setLoaded(true)}>{loaded?"Feed loaded":"Load Home Feed"}</button><div className="real-feed">{feed.map((item,i)=><motion.article key={item.title} initial={false} animate={{opacity:loaded?1:.55,y:loaded?0:5}}><div className="real-item-title"><b>{item.title}</b><span>{item.type}</span><button onClick={()=>toggle(i)}>{done.includes(i)?"Completed":"Mark done"}</button></div><div className="real-suggestion"><strong><Lightbulb/> {item.suggestion}</strong><p>{item.detail}</p></div></motion.article>)}</div></>}
      {view==="Tasks"&&<><h3>All Tasks</h3><p>Commitments organized in one place</p><div className="real-simple-list">{feed.map((item,i)=><button key={item.title} onClick={()=>toggle(i)} className={done.includes(i)?"done":""}><CheckSquare/><span>{item.title}<small>{done.includes(i)?"Completed":"Due today"}</small></span></button>)}</div></>}
      {view==="Calendar"&&<><h3>Google Calendar</h3><p>A static view of today’s connected commitments</p><div className="real-calendar">{[["9:00 AM","Product Realization"],["1:30 PM","Calculus"],["4:00 PM","Study block"],["7:00 PM","Stargazing"]].map(x=><div key={x[0]}><time>{x[0]}</time><span>{x[1]}</span></div>)}</div></>}
      {view==="Smart Schedule"&&<><h3>vivrAI Smart Schedule</h3><p>Tasks fitted around events, energy, and available time</p><div className="real-schedule">{[["3:30","Reset + snack"],["4:00","Calculus focus block"],["5:15","Birthday planning"],["7:00","Stargazing"]].map((x,i)=><div key={x[0]}><Clock3/><time>{x[0]}</time><span>{x[1]}</span><small>{i===0?"BREAK":i===3?"EVENT":"FOCUS"}</small></div>)}</div></>}
    </div>
    <div className="demo-disclaimer"><Sparkles/> Static portfolio demo · sample data only · no API or account connection</div>
  </div>
}

export function VivrProject(){return <main className="vivr-page">
  <nav className="vivr-nav"><Link href="/projects"><ArrowLeft/> Back to projects</Link><Link href="/" className="brand">anami<span>.dev</span></Link><span>vivrAI / PRODUCT REALIZATION</span></nav>
  <section className="vivr-hero"><span className="eyebrow">AGENTIC AI · STUDENT PRODUCTIVITY</span><h1>vivrAI</h1><p>An AI-powered scheduling assistant that leverages intelligent automation to organize schedules, analyze commitments, and generate personalized recommendations to help users manage their time more efficiently.</p><div className="vivr-tech"><span>Python</span><span>OpenAI Agents SDK</span><span>Gradio</span><span>Google Workspace</span></div></section>
  <section className="vivr-media"><div><span className="eyebrow">THE REAL PRODUCT</span><h2>Built in a Product<br/>Realization course.</h2><p>vivrAI grew from a product idea into a working multi-agent prototype, connecting student commitments with useful, contextual guidance.</p></div><img src="/vivrai-feed.png" alt="vivrAI daily feed showing schedule items and personalized smart suggestions"/><video controls preload="metadata" poster="/vivrai-feed.png"><source src="/vivrai-demo.mp4" type="video/mp4"/>Your browser does not support the demo video.</video></section>
  <section className="demo-stage"><div className="demo-stage-head"><div><span className="eyebrow">STATIC INTERACTIVE DEMO</span><h2>The demo interface.</h2></div><p>Modeled directly on vivrAI's navigation and Daily Feed. Everything below uses fixed sample data.</p></div><StaticDemo/></section>
  <section className="vivr-case"><div><span className="eyebrow">THE PROBLEM</span><h2>Student life is fragmented.</h2><p>Tasks live in one place, events in another, and planning everything becomes another task. vivrAI brings those commitments together and turns them into an actionable plan.</p></div><div><span className="eyebrow">THE AGENTIC SYSTEM</span><h2>Many agents. One clear day.</h2><p>Instead of one prompt doing everything, specialized agents interpret intent, prioritize tasks, estimate duration, find schedule gaps, generate recommendations, and coordinate calendar actions. Their outputs are combined into one useful student experience.</p></div></section>
  <section className="vivr-features"><span className="eyebrow">WHAT vivrAI CAN DO</span><div>{[["01","Plan","Build a realistic schedule around tasks and existing events."],["02","Analyze","Understand commitments, priorities, duration, and open time."],["03","Recommend","Generate personalized suggestions around each user’s day."],["04","Coordinate","Connect tasks, calendars, email, and travel context."]].map(f=><article key={f[0]}><span>{f[0]}</span><h3>{f[1]}</h3><p>{f[2]}</p></article>)}</div></section>
  <section className="vivr-next"><span className="eyebrow">BUILT BY ANAMIKA HAREESH</span><h2>One real project.<br/><i>More on the way.</i></h2><Link href="/contact" className="primary-btn">Talk about vivrAI <ArrowRight/></Link></section>
</main>}
