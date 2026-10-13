import React from 'react';

// Notification months follow official conference schedules; see NEWS_SOURCES.md.
// CCS, VLDB, EDBT tutorial, and CoT acceptance months were confirmed by Lawrence.
const news = [
  ['Oct 2026', <>I started work at <strong>JP Morgan Chase</strong>.</>],
  ['Sep 2026', <>Our paper <a href="#tricycle-2025">Tricycle: Private Transformer Inference with Tricyclic Encodings</a> was accepted to <strong>CCS 2026</strong>!</>],
  ['Sep 2026', <>Gave a tutorial on <a href="#private-llm-tutorial-vldb-2026">Private LLM Inference with Homomorphic Encryption</a> at <strong>VLDB 2026</strong>.</>],
  ['Jul 2026', <>Presented <a href="#hyperion-2026">Hyperion: Private Token Sampling with Homomorphic Encryption</a> at <strong>ACL 2026</strong>.</>],
  ['Jun 2026', <>Our tutorial <a href="#private-llm-tutorial-vldb-2026">Private LLM Inference with Homomorphic Encryption</a> was accepted to <strong>VLDB 2026</strong>.</>],
  ['May 2026', <>I successfully defended my Ph.D.! Thank you to everyone for your support.</>],
  ['Apr 2026', <>Our paper <a href="#hyperion-2026">Hyperion: Private Token Sampling with Homomorphic Encryption</a> was accepted to <strong>ACL 2026</strong>!</>],
  ['Mar 2026', <>Gave a tutorial on <a href="#private-llm-tutorial-edbt-2026">Private LLM Inference with Homomorphic Encryption</a> at <strong>EDBT 2026</strong>.</>],
  ['Jan 2026', <>Our tutorial <a href="#private-llm-tutorial-edbt-2026">Private LLM Inference with Homomorphic Encryption</a> was accepted to <strong>EDBT 2026</strong>.</>],
  ['Oct 2025', <>Our paper <a href="#llm-sql-2025">LLM-SQL-Solver: Can LLMs Determine SQL Equivalence?</a> was accepted to <strong>IEEE BigData 2025</strong>.</>],
  ['Aug 2025', <>Shared <a href="#heir-2025">HEIR: A Universal Compiler for Homomorphic Encryption</a> as a preprint.</>],
  ['May 2025', <>Presented research on private LLM inference at <strong>SoCal DB Day 2025</strong>.</>],
  ['Summer 2024', <>Completed my software engineering internship at <strong>Google</strong>, having developed the first machine learning model to homomorphic encryption pipeline in the HEIR compiler.</>],
  ['Jul 2024', <>Presented <a href="#quicker-2024">QUICKeR: Quicker Updates Involving Continuous Key Rotation</a> at <strong>PETS 2024</strong>.</>],
  ['Aug 2023', <>Our paper <a href="#spatializing-vr-2023">Spatializing Music in Virtual Reality</a> was accepted to <strong>SUI 2023</strong>.</>],
  ['Aug 2023', <>Our paper <a href="#quicker-2024">QUICKeR: Quicker Updates Involving Continuous Key Rotation</a> was accepted to <strong>PoPETS 2024</strong>!</>],
  ['Summer 2022', <>Completed my second software engineering internship at <strong>Oracle</strong>.</>],
  ['Summer 2021', <>Completed my first software engineering internship at <strong>Oracle</strong>.</>],
  ['Aug 2021', <>Our work <a href="#spatial-ar-2021">A Spatial Music Listening Experience in Augmented Reality</a> was accepted to <strong>UIST 2021</strong>.</>],
  ['Jan 2021', <>Our paper <a href="#cot-2021">CoT: Decentralized Elastic Caches for Cloud Applications</a> was accepted to <strong>EDBT 2021</strong>.</>],
];
const entries = items => items.map(([date, text], index) => <li key={`${date}-${index}`}><span className="news-date">{date}</span><span>{text}</span></li>);
export default function News() {
  return <section id="news" className="section"><h2>News</h2>
    <ul className="news-list">{entries(news.slice(0, 5))}</ul>
    <details className="older-news"><summary>Earlier news <span aria-hidden="true">↓</span></summary><ul className="news-list">{entries(news.slice(5))}</ul></details>
  </section>;
}
