import React from 'react';
import publications from '../data/publications';

const selectedIds = ['tricycle-2025', 'hyperion-2026', 'private-llm-tutorial-vldb-2026', 'heir-2025', 'quicker-2024'];

export default function Publications({ showAll = false }) {
  const papers = showAll ? publications : selectedIds.map(id => publications.find(p => p.id === id));
  return <section id={showAll ? 'publications' : 'selected-publications'} className={`section${showAll ? ' publications-page' : ''}`}>
    <div className="section-heading">
      {showAll ? <h1>Publications</h1> : <h2>Selected publications</h2>}
      <a className="text-button" href={showAll ? '#about' : '#publications'}>{showAll ? 'Back to home' : 'View all publications'} <span aria-hidden="true">→</span></a>
    </div>
    <div id="publication-list" className="publication-list">
      {papers.map(pub => <article className="publication" id={pub.id} key={pub.id}>
        <h3><a href={pub.link}>{pub.title}</a></h3>
        <p className="authors">{pub.authors.split('Lawrence Lim').map((part, i) => <React.Fragment key={i}>{i > 0 && <strong>Lawrence Lim</strong>}{part}</React.Fragment>)}</p>
        <p className="venue">{pub.venue} · {pub.year}</p>
        <div className="paper-actions"><a href={pub.link}>Paper <span aria-hidden="true">↗</span></a><details><summary>Abstract</summary><p>{pub.abstract}</p></details></div>
      </article>)}
    </div>
  </section>;
}
