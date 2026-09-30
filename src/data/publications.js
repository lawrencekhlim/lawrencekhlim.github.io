const publications = [
    {
      id: "tricycle-2025",
      title: "Tricycle: Private Transformer Inference with Tricyclic Encodings",
      authors: "Lawrence Lim, Vikas Kalagi, Julia Novick, Jiaming Liu, Divyakant Agrawal, Amr El Abbadi",
      venue: "Computer and Communications Security (CCS)",
      year: "2026",
      abstract: "The growing deployment of large language models (LLMs) in privacy-sensitive settings demands inference mechanisms that preserve data confidentiality. Homomorphic encryption (HE) offers a principled solution by enabling computation directly on encrypted data; however, existing solutions struggle to scale to full LLMs. We present Tricycle, a system for efficient private transformer inference. At its core, Tricycle introduces tricyclic encodings, a novel packing scheme that enables batch matrix multiplications with optimal multiplicative depth while naturally supporting multi-head attention. We demonstrate that Tricycle's matrix multiplications are particularly amenable for integration with other optimizations including Baby-Step Giant-Step optimizations, optimized block matrix multiplications, lazy relinearization, and complexification, which significantly improve performance. We further introduce statistical max estimation, a lightweight method for stabilizing softmax under HE. We implement Tricycle end-to-end on a GPU-accelerated CKKS pipeline and evaluate it on BERT models. For BERT-Base with 128 tokens, Tricycle achieves 100.5 seconds latency on a single GPU, yielding 6x and 3.4x speedups over prior state-of-the-art systems, Thor and Powerformer, respectively. These results demonstrate that careful design of packing, algorithms, and optimizations can significantly reduce the cost of private LLM inference, bringing practical deployment closer to reality.",
      link: "https://ia.cr/2025/1200"
    },
    {
      id: "hyperion-2026",
      title: "Hyperion: Private Token Sampling with Homomorphic Encryption",
      authors: "Lawrence Lim, Jiaming Liu, Vikas Kalagi, Divyakant Agrawal, Amr El Abbadi",
      venue: "Association for Computational Linguistics (ACL)",
      year: "2026",
      abstract: "A promising direction for enabling private queries to large language models (LLMs) is with homomorphic encryption (HE). An open problem is performing token sampling under HE. In this paper, we introduce Hyperion, an efficient HE algorithm for inverse transform sampling, enabling private token sampling with 1 comparison depth, O(1) amortized comparisons, and O(log n) rotations. We implement our approach and demonstrate that it samples tokens in 0.14 seconds for 32k tokens (4.4 microseconds per token) on GPU, achieving a 100x latency improvement over prior work.",
      link: "https://doi.org/10.18653/v1/2026.acl-long.644"
    },
    {
      id: "private-llm-tutorial-vldb-2026",
      title: "Private LLM Inference with Homomorphic Encryption",
      authors: "Lawrence Lim, Divyakant Agrawal, Amr El Abbadi",
      venue: "Very Large Databases (VLDB)",
      year: "2026",
      abstract: "This tutorial introduces the emerging research area of private large language model (LLM) inference using Fully Homomorphic Encryption (FHE). It covers the basics of homomorphic encryption, key architectural details of transformer-based LLMs, and existing techniques for enabling end-to-end encrypted LLM inference. Finally, the tutorial concludes with open research questions and future directions in this rapidly evolving field.",
      link: "https://dl.acm.org/doi/10.14778/3827998.3828152"
    },
    {
      id: "private-llm-tutorial-edbt-2026",
      title: "Private LLM Inference with Homomorphic Encryption",
      authors: "Lawrence Lim, Divyakant Agrawal, Amr El Abbadi",
      venue: "Extending Database Technology (EDBT)",
      year: "2026",
      abstract: "This tutorial introduces the emerging research area of private large language model (LLM) inference using Fully Homomorphic Encryption (FHE). It covers the basics of homomorphic encryption, key architectural details of transformer-based LLMs, and existing techniques for enabling end-to-end encrypted LLM inference. Finally, the tutorial concludes with open research questions and future directions in this rapidly evolving field.",
      link: "https://openproceedings.org/2026/conf/edbt/paper-T1.pdf"
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
      venue: "Proceedings on Privacy Enhancing Technologies (PETS)",
      year: "2024",
      abstract: "Since the advent of cloud computing, storing large quantities of sensitive data on remote services have demanded secure encryption practices to maintain data privacy. Merely encrypting data at-rest leaves ciphertexts vulnerable to inevitable key leakage from mismanaged keys, side-channel attacks, and security bugs. To combat this, we propose QUICKeR, a system to facilitate continuous key rotation and ciphertext updates. Unfortunately, continuous ciphertext updates from key rotation interferes with routine access operations by introducing race conditions and performance bottlenecks that preclude prior works from practical use. QUICKeR addresses these concerns through protocols that eliminate race conditions and even achieve the stronger linearizability correctness criterion. In addition, QUICKeR proposes three approaches to implement frequent ciphertext updates. We show how these different update schemes perform under different database bottlenecks. Finally, we demonstrate that QUICKeR is practical through end-to-end experiments showing that routine access operations are not significantly impacted by ciphertext update operations.",
      link: "https://doi.org/10.56553/popets-2024-0005"
    },
    {
      id: "spatializing-vr-2023",
      title: "Spatializing Music in Virtual Reality",
      authors: "Steven Jiang, Lawrence Lim, Misha Sra",
      venue: "Spatial User Interaction (SUI)",
      year: "2023",
      abstract: "Spatial music offers an immersive auditory experience by orchestrating sounds, rhythms, and beats to not only envelop the listener but also dynamically move around, behind, and above them. Despite its promise, existing tools for spatial music remain inefficient, with prior research citing the lack of tailored input devices for spatializing in higher dimensions. To address these challenges, we propose a virtual reality (VR) application designed for intuitive music spatialization in 3D space. Users spatialize music by placing and dragging sound sources in VR to animate their movement. Since animating movement can be imprecise, our application incorporates auto-correction features that adjust the movement of sound objects, ensuring a smoother end result.",
      link: "https://doi.org/10.1145/3607822.3618011"
    },
    {
      id: "spatial-ar-2021",
      title: "A Spatial Music Listening Experience in Augmented Reality",
      authors: "Lawrence Lim, Wei-Yee Goh, Mara Downing, Misha Sra",
      venue: "User Interface Software and Technology (UIST)",
      year: "2021",
      abstract: "Live music provides a more immersive and social experience that recorded music cannot replicate. In a live music setting, listeners perceive sounds differently based on their position with respect to the musicians and can enjoy the experience with others. To make recorded music a dynamic listening experience, we propose and implement an app that adds a spatial dimension to music using augmented reality to allow users to listen to a song as if it were played live. The app lets users place virtual instruments around a physical space and plays the instrument track for each instrument. Users can move around in the space and change the importance of various sound localization aspects to customize their experience. Finally, users can record and livestream to share their listening experience with others.",
      link: "https://doi.org/10.1145/3474349.3480218"
    },
    {
      id: "cot-2021",
      title: "CoT: Decentralized Elastic Caches for Cloud Applications",
      authors: "Victor Zakhary, Lawrence Lim, Divyakant Agrawal, Amr El Abbadi",
      venue: "Extending Database Technology (EDBT)",
      year: "2021",
      abstract: "Distributed caches are widely deployed to serve social networks and web applications at billion-user scales. This paper presents Cache-on-Track (CoT), a decentralized, elastic, and predictive caching framework for cloud environments. CoT proposes a new cache replacement policy specifically tailored for small front-end caches that serve skewed workloads with small update percentage. Small front-end caches are mainly used to mitigate the load-imbalance across servers in the distributed caching layer. Front-end servers use a heavy hitter tracking algorithm to continuously track the top-k hot keys. CoT dynamically caches the top-C hot keys out of the tracked keys. CoT's main advantage over other replacement policies is its ability to dynamically adapt its tracker and cache sizes in response to workload distribution changes. Our experiments show that CoT's replacement policy consistently outperforms the hit-rates of LRU, LFU, and ARC for the same cache size on different skewed workloads. Also, CoT slightly outperforms the hit-rate of LRU-2 when both policies are configured with the same tracking (history) size. CoT achieves server size load-balance with 50% to 93.75% less front-end cache in comparison to other replacement policies. Finally, experiments show that CoT's resizing algorithm successfully auto-configures the tracker and cache sizes to achieve back-end load-balance in the presence of workload distribution changes.",
      link: "https://openproceedings.org/2021/conf/edbt/p105.pdf"
    }
  ];

export default publications;
