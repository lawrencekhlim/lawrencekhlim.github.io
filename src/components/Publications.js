import React, { useState } from 'react';
import './Publications.css';

const Publications = () => {
  const [expandedPapers, setExpandedPapers] = useState(new Set());
  const publications = [
    {
      title: "Tricycle: Private Transformer Inference with Tricyclic Encodings",
      authors: "Lawrence Lim, Vikas Kalagi, Divyakant Agrawal, Amr El Abbadi",
      venue: "Cryptology ePrint Archive",
      year: "2025",
      abstract: "The growing adoption of Large Language Models in privacy-sensitive domains necessitates secure inference mechanisms that preserve data confidentiality. Homomorphic encryption offers a promising pathway by enabling computation on encrypted inputs, yet existing approaches struggle to scale efficiently to full transformer models due to limitations in packing schemes, which must efficiently support a wide range of operations, including matrix multiplications, row-wise nonlinear operations, and self-attention. In this work, we present Tricycle, a framework for private transformer inference built on our novel packing scheme, called tricyclic encodings, which are designed to efficiently support these core operations. Tricyclic encodings are a generalization of bicyclic encodings, enabling privacy-preserving batch matrix multiplications with optimal multiplicative depth in order to facilitate parallelized multi-head self-attention. We optimize our matrix multiplications by incorporating Baby-Step Giant-Step optimizations to reduce ciphertext rotations and presenting new ciphertext-plaintext matrix multiplication techniques that relax prior limitations. A further contribution of our work is a lightweight and effective approach for stabilizing the softmax function via statistical max estimation. Our end-to-end implementation on a BERT-Tiny model shows that Tricycle achieves a 1.5x to 3x speedup over previous approaches, marking a step toward practical and scalable private LLM inference without sacrificing model fidelity.",
      link: "https://ia.cr/2025/1200"
    },
    {
      title: "QUICKeR: Quicker Updates Involving Continuous Key Rotation",
      authors: "Lawrence Lim, Wei-Yee Goh, Divyakant Agrawal, Amr El Abbadi, Trinabh Gupta",
      venue: "Proceedings on Privacy Enhancing Technologies",
      year: "2024",
      abstract: "Since the advent of cloud computing, storing large quantities of sensitive data on remote services have demanded secure encryption practices to maintain data privacy. Merely encrypting data at-rest leaves ciphertexts vulnerable to inevitable key leakage from mismanaged keys, side-channel attacks, and security bugs. To combat this, we propose QUICKeR, a system to facilitate continuous key rotation and ciphertext updates. Unfortunately, continuous ciphertext updates from key rotation interferes with routine access operations by introducing race conditions and performance bottlenecks that preclude prior works from practical use. QUICKeR addresses these concerns through protocols that eliminate race conditions and even achieve the stronger linearizability correctness criterion. In addition, QUICKeR proposes three approaches to implement frequent ciphertext updates. We show how these different update schemes perform under different database bottlenecks. Finally, we demonstrate that QUICKeR is practical through end-to-end experiments showing that routine access operations are not significantly impacted by ciphertext update operations.",
      link: "https://doi.org/10.56553/popets-2024-0005"
    },
    {
      title: "Spatializing Music in Virtual Reality",
      authors: "Steven Jiang, Lawrence Lim, Misha Sra",
      venue: "Spatial User Interaction",
      year: "2023",
      abstract: "Spatial music offers an immersive auditory experience by orchestrating sounds, rhythms, and beats to not only envelop the listener but also dynamically move around, behind, and above them. Despite its promise, existing tools for spatial music remain inefficient, with prior research citing the lack of tailored input devices for spatializing in higher dimensions. To address these challenges, we propose a virtual reality (VR) application designed for intuitive music spatialization in 3D space. Users spatialize music by placing and dragging sound sources in VR to animate their movement. Since animating movement can be imprecise, our application incorporates auto-correction features that adjust the movement of sound objects, ensuring a smoother end result.",
      link: "https://doi.org/10.1145/3607822.3618011"
    },
    {
      title: "A Spatial Music Listening Experience in Augmented Reality",
      authors: "Lawrence Lim, Wei-Yee Goh, Mara Downing, Misha Sra",
      venue: "User Interface Software and Technology",
      year: "2021",
      abstract: "Live music provides a more immersive and social experience that recorded music cannot replicate. In a live music setting, listeners perceive sounds differently based on their position with respect to the musicians and can enjoy the experience with others. To make recorded music a dynamic listening experience, we propose and implement an app that adds a spatial dimension to music using augmented reality to allow users to listen to a song as if it were played live. The app lets users place virtual instruments around a physical space and plays the instrument track for each instrument. Users can move around in the space and change the importance of various sound localization aspects to customize their experience. Finally, users can record and livestream to share their listening experience with others.",
      link: "https://doi.org/10.1145/3474349.3480218"
    },
    {
      title: "CoT: Decentralized Elastic Caches for Cloud Applications",
      authors: "Victor Zakhary, Lawrence Lim, Divyakant Agrawal, Amr El Abbadi",
      venue: "Extending Database Technology",
      year: "2021",
      abstract: "Distributed caches are widely deployed to serve social networks and web applications at billion-user scales. This paper presents Cache-on-Track (CoT), a decentralized, elastic, and predictive caching framework for cloud environments. CoT proposes a new cache replacement policy specifically tailored for small front-end caches that serve skewed workloads with small update percentage. Small front-end caches are mainly used to mitigate the load-imbalance across servers in the distributed caching layer. Front-end servers use a heavy hitter tracking algorithm to continuously track the top-k hot keys. CoT dynamically caches the top-C hot keys out of the tracked keys. CoT's main advantage over other replacement policies is its ability to dynamically adapt its tracker and cache sizes in response to workload distribution changes. Our experiments show that CoT's replacement policy consistently outperforms the hit-rates of LRU, LFU, and ARC for the same cache size on different skewed workloads. Also, CoT slightly outperforms the hit-rate of LRU-2 when both policies are configured with the same tracking (history) size. CoT achieves server size load-balance with 50% to 93.75% less front-end cache in comparison to other replacement policies. Finally, experiments show that CoT's resizing algorithm successfully auto-configures the tracker and cache sizes to achieve back-end load-balance in the presence of workload distribution changes.",
      link: "https://openproceedings.org/2021/conf/edbt/p105.pdf"
    }
  ];

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
    <section id="publications" className="section">
      <div className="container">
        <h2 className="section-title">Research Publications</h2>
        <div className="publications-grid">
          {publications.map((pub, index) => (
            <div 
              key={index} 
              className="publication-item card"
              onClick={() => toggleAbstract(index)}
              style={{ cursor: 'pointer' }}
            >
              <div className="publication-header">
                <span className="publication-year">{pub.year}</span>
                <span className="expand-indicator">
                  {expandedPapers.has(index) ? '▼' : '▶'}
                </span>
              </div>
              <h3 className="publication-title">{pub.title}</h3>
              <p 
                className="publication-authors"
                dangerouslySetInnerHTML={{ __html: formatAuthors(pub.authors) }}
              ></p>
              <p className="publication-venue">{pub.venue}</p>
              {expandedPapers.has(index) && (
                <p className="publication-abstract">{pub.abstract}</p>
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
