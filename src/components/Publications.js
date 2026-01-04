import React, { useState, useEffect } from 'react';
import './Publications.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Publications = () => {
  const [expandedPapers, setExpandedPapers] = useState(new Set());
  const animationRef = useScrollAnimation();
  
  const publications = [
    {
      id: "hyperion-2025",
      title: "Hyperion: Private Token Sampling with Homomorphic Encryption",
      authors: "Lawrence Lim, Jiaming Liu, Vikas Kalagi, Divyakant Agrawal, Amr El Abbadi",
      venue: "Cryptology ePrint Archive",
      year: "2025",
      abstract: "A promising direction for enabling private queries to large language models (LLMs) is with homomorphic encryption (HE). An open problem is performing token sampling under HE. In this paper, we introduce Hyperion, an efficient HE algorithm for inverse transform sampling, enabling private token sampling with 1 comparison depth, O(1) amortized comparisons, and O(log n) rotations. We implement our approach and demonstrate that it samples tokens in 0.14 seconds for 32k tokens (4.4 microseconds per token) on GPU, achieving a 100x latency improvement over prior work.",
      link: "https://ia.cr/2025/2318"
    },
    {
      id: "tricycle-2025",
      title: "Tricycle: Private Transformer Inference with Tricyclic Encodings",
      authors: "Lawrence Lim, Vikas Kalagi, Divyakant Agrawal, Amr El Abbadi",
      venue: "Cryptology ePrint Archive",
      year: "2025",
      abstract: "The growing adoption of Large Language Models in privacy-sensitive domains necessitates secure inference mechanisms that preserve data confidentiality. Homomorphic encryption offers a promising pathway by enabling computation on encrypted inputs, yet existing approaches struggle to scale efficiently to full transformer models due to limitations in packing schemes, which must efficiently support a wide range of operations, including matrix multiplications, row-wise nonlinear operations, and self-attention. In this work, we present Tricycle, a framework for private transformer inference built on our novel packing scheme, called tricyclic encodings, which are designed to efficiently support these core operations. Tricyclic encodings are a generalization of bicyclic encodings, enabling privacy-preserving batch matrix multiplications with optimal multiplicative depth in order to facilitate parallelized multi-head self-attention. We optimize our matrix multiplications by incorporating Baby-Step Giant-Step optimizations to reduce ciphertext rotations and presenting new ciphertext-plaintext matrix multiplication techniques that relax prior limitations. A further contribution of our work is a lightweight and effective approach for stabilizing the softmax function via statistical max estimation. Our end-to-end implementation on a BERT-Tiny model shows that Tricycle achieves a 1.5x to 3x speedup over previous approaches, marking a step toward practical and scalable private LLM inference without sacrificing model fidelity.",
      link: "https://ia.cr/2025/1200"
    },
    {
      id: "heir-2025",
      title: "HEIR: A Universal Compiler for Homomorphic Encryption",
      authors: "Asra Ali, Jaeho Choi, Bryant Gipson, Shruthi Gorantala, Jeremy Kun, Wouter Legiest, Lawrence Lim, Alexander Viand, Meron Zerihun Demissie, Hongren Zheng",
      venue: "arXiv preprint",
      year: "2025",
      abstract: "This work presents Homomorphic Encryption Intermediate Representation (HEIR), a unified approach to building homomorphic encryption (HE) compilers. HEIR aims to support all mainstream techniques in homomorphic encryption, integrate with all major software libraries and hardware accelerators, and advance the field by providing a platform for research and benchmarking. Built on the MLIR compiler framework, HEIR introduces HE-specific abstraction layers at which existing optimizations and new research ideas may be easily implemented. Although many HE optimization techniques have been proposed, it remains difficult to combine or compare them effectively. HEIR provides a means to effectively explore the space of HE optimizations. HEIR addresses the entire HE stack and includes support for various frontends, including Python. The contribution of this work includes: (1) We introduce HEIR as a framework for building HE compilers. (2) We validate HEIR's design by porting a large fraction of the HE literature to HEIR, and we argue that HEIR can tackle more complicated and diverse programs than prior literature. (3) We provide evidence that HEIR is emerging as the de facto HE compiler for academic research and industry development.",
      link: "https://arxiv.org/abs/2508.11095"
    },
    {
      id: "llm-sql-2025",
      title: "LLM-SQL-Solver: Can LLMs Determine SQL Equivalence?",
      authors: "Fuheng Zhao, Jiayue Chen, Lawrence Lim, Ishtiyaque Ahmad, Divyakant Agrawal, Amr El Abbadi",
      venue: "IEEE BigData",
      year: "2025",
      abstract: "Judging the equivalence between two SQL queries is a fundamental problem with many practical applications in data management and SQL generation (i.e., evaluating the quality of generated SQL queries in text-to-SQL task). While the research community has reasoned about SQL equivalence for decades, it poses considerable difficulties and no complete solutions exist. Recently, Large Language Models (LLMs) have shown strong reasoning capability in conversation, question answering and solving mathematics challenges. In this paper, we study if LLMs can be used to determine the equivalence between SQL queries under two notions of SQL equivalence (semantic equivalence and relaxed equivalence). To assist LLMs in generating high quality responses, we present two prompting techniques: Miniature & Mull and Explain & Compare. The former technique is used to evaluate the semantic equivalence in which it asks LLMs to execute a query on a simple database instance and then explore if a counterexample exists by modifying the database. The latter technique is used to evaluate the relaxed equivalence in which it asks LLMs to explain the queries and then compare if they contain significant logical differences. Our experiments demonstrate using our techniques, LLMs is a promising tool to help data engineers in writing semantically equivalent SQL queries, however challenges still persist, and is a better metric for evaluating SQL generation than the popular execution accuracy.",
      link: "https://doi.org/10.48550/arXiv.2312.10321"
    },
    {
      id: "compiling-best-bits-2025",
      title: "Compiling Just the Best Bits: Finding the Maximum Benefit Shared Subexpressions in a Query Workload",
      authors: "Lawrence Lim, Laleh Aghababaie Beni, Garret Swart",
      venue: "US Patent Application",
      year: "2025",
      abstract: "In a computer, each of many statement plan trees respectively represents a distinct database statement in a database workload. Each statement plan tree contains a distinct set of tree nodes. A first statement plan tree contains a first subtree and represents a first statement. A second statement plan tree contains a second subtree, and a third statement plan tree contains a third subtree. By agglomeration, a first cluster subplan is generated that represents the first subtree of the first statement plan tree and the second subtree of the second statement plan tree. By subsequent agglomeration, a second cluster subplan is generated that represents the third subtree of the third statement plan tree and the first cluster subplan. Execution of the first database statement uses the second cluster subplan for acceleration. Agglomeration may be decided based on novel net benefit estimation, novel inter-cluster distance, and a novel and tunable compilation cost.",
      link: "https://patents.google.com/patent/US20250086176A1/en?oq=US20250086176A1"
    },
    {
      id: "quicker-2024",
      title: "QUICKeR: Quicker Updates Involving Continuous Key Rotation",
      authors: "Lawrence Lim, Wei-Yee Goh, Divyakant Agrawal, Amr El Abbadi, Trinabh Gupta",
      venue: "Proceedings on Privacy Enhancing Technologies",
      year: "2024",
      abstract: "Since the advent of cloud computing, storing large quantities of sensitive data on remote services have demanded secure encryption practices to maintain data privacy. Merely encrypting data at-rest leaves ciphertexts vulnerable to inevitable key leakage from mismanaged keys, side-channel attacks, and security bugs. To combat this, we propose QUICKeR, a system to facilitate continuous key rotation and ciphertext updates. Unfortunately, continuous ciphertext updates from key rotation interferes with routine access operations by introducing race conditions and performance bottlenecks that preclude prior works from practical use. QUICKeR addresses these concerns through protocols that eliminate race conditions and even achieve the stronger linearizability correctness criterion. In addition, QUICKeR proposes three approaches to implement frequent ciphertext updates. We show how these different update schemes perform under different database bottlenecks. Finally, we demonstrate that QUICKeR is practical through end-to-end experiments showing that routine access operations are not significantly impacted by ciphertext update operations.",
      link: "https://doi.org/10.56553/popets-2024-0005"
    },
    {
      id: "spatializing-vr-2023",
      title: "Spatializing Music in Virtual Reality",
      authors: "Steven Jiang, Lawrence Lim, Misha Sra",
      venue: "Spatial User Interaction",
      year: "2023",
      abstract: "Spatial music offers an immersive auditory experience by orchestrating sounds, rhythms, and beats to not only envelop the listener but also dynamically move around, behind, and above them. Despite its promise, existing tools for spatial music remain inefficient, with prior research citing the lack of tailored input devices for spatializing in higher dimensions. To address these challenges, we propose a virtual reality (VR) application designed for intuitive music spatialization in 3D space. Users spatialize music by placing and dragging sound sources in VR to animate their movement. Since animating movement can be imprecise, our application incorporates auto-correction features that adjust the movement of sound objects, ensuring a smoother end result.",
      link: "https://doi.org/10.1145/3607822.3618011"
    },
    {
      id: "spatial-ar-2021",
      title: "A Spatial Music Listening Experience in Augmented Reality",
      authors: "Lawrence Lim, Wei-Yee Goh, Mara Downing, Misha Sra",
      venue: "User Interface Software and Technology",
      year: "2021",
      abstract: "Live music provides a more immersive and social experience that recorded music cannot replicate. In a live music setting, listeners perceive sounds differently based on their position with respect to the musicians and can enjoy the experience with others. To make recorded music a dynamic listening experience, we propose and implement an app that adds a spatial dimension to music using augmented reality to allow users to listen to a song as if it were played live. The app lets users place virtual instruments around a physical space and plays the instrument track for each instrument. Users can move around in the space and change the importance of various sound localization aspects to customize their experience. Finally, users can record and livestream to share their listening experience with others.",
      link: "https://doi.org/10.1145/3474349.3480218"
    },
    {
      id: "cot-2021",
      title: "CoT: Decentralized Elastic Caches for Cloud Applications",
      authors: "Victor Zakhary, Lawrence Lim, Divyakant Agrawal, Amr El Abbadi",
      venue: "Extending Database Technology",
      year: "2021",
      abstract: "Distributed caches are widely deployed to serve social networks and web applications at billion-user scales. This paper presents Cache-on-Track (CoT), a decentralized, elastic, and predictive caching framework for cloud environments. CoT proposes a new cache replacement policy specifically tailored for small front-end caches that serve skewed workloads with small update percentage. Small front-end caches are mainly used to mitigate the load-imbalance across servers in the distributed caching layer. Front-end servers use a heavy hitter tracking algorithm to continuously track the top-k hot keys. CoT dynamically caches the top-C hot keys out of the tracked keys. CoT's main advantage over other replacement policies is its ability to dynamically adapt its tracker and cache sizes in response to workload distribution changes. Our experiments show that CoT's replacement policy consistently outperforms the hit-rates of LRU, LFU, and ARC for the same cache size on different skewed workloads. Also, CoT slightly outperforms the hit-rate of LRU-2 when both policies are configured with the same tracking (history) size. CoT achieves server size load-balance with 50% to 93.75% less front-end cache in comparison to other replacement policies. Finally, experiments show that CoT's resizing algorithm successfully auto-configures the tracker and cache sizes to achieve back-end load-balance in the presence of workload distribution changes.",
      link: "https://openproceedings.org/2021/conf/edbt/p105.pdf"
    }
  ];

  // Handle hash changes for internal links
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
          // Find the publication index that matches the target ID
          const publicationIndex = publications.findIndex(pub => pub.id === targetId);
          if (publicationIndex !== -1) {
            // Automatically expand the abstract for linked publications
            setExpandedPapers(prev => {
              const newExpanded = new Set(prev);
              newExpanded.add(publicationIndex);
              return newExpanded;
            });
          }
          
          // Smooth scroll to the target with offset for header
          setTimeout(() => {
            targetElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            });
          }, 100);
        }
      }
    };

    handleHashChange(); // Check on mount
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); // Remove publications from dependency array to prevent unnecessary re-renders

  const toggleAbstract = (index) => {
    const newExpanded = new Set(expandedPapers);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedPapers(newExpanded);
  };

  const formatAuthors = (authors) => {
    return authors.replace(/Lawrence Lim/g, '<strong>Lawrence Lim</strong>');
  };

  return (
    <section id="publications" className="section" ref={animationRef}>
      <div className="container">
        <h2 className="section-title scroll-animate">Research Publications</h2>
        <div className="publications-grid">
          {publications.map((pub, index) => (
            <div 
              key={index} 
              id={pub.id}
              className="publication-item card scroll-animate"
              onClick={() => toggleAbstract(index)}
              style={{ cursor: 'pointer' }}
            >
              <div className="publication-title-container">
                <h3 className="publication-title">{pub.title}</h3>
                <span className="expand-indicator">
                  {expandedPapers.has(index) ? '▼' : '▶'}
                </span>
              </div>
              <p 
                className="publication-authors"
                dangerouslySetInnerHTML={{ __html: formatAuthors(pub.authors) }}
              ></p>
              <div className="publication-venue-container">
                <p className="publication-venue">{pub.venue}</p>
                <span className="publication-year">{pub.year}</span>
              </div>
              {(
                <p className={`publication-abstract${expandedPapers.has(index) ? '' : ' collapsed'}`}>{pub.abstract}</p>
              )}
              <div className="publication-footer">
                <a 
                  href={pub.link} 
                  className="publication-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Paper →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
