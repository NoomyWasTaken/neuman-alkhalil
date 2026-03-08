export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  approach: string;
  stack: string[];
  architecture: string;
  outcomes: string[];
  featured: boolean;
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "neural-search-engine",
    title: "Neural Search Engine",
    tagline: "Semantic search over 10M+ documents using transformer embeddings",
    description: "A production-grade semantic search system that uses dense vector retrieval to find relevant documents across a large corpus. Supports hybrid search combining BM25 with neural re-ranking.",
    problem: "Traditional keyword-based search fails to capture semantic intent, leading to poor recall on complex queries across large document corpora.",
    approach: "Implemented a two-stage retrieval pipeline: fast approximate nearest neighbor search with FAISS for candidate generation, followed by a cross-encoder re-ranker for precision. Used sentence-transformers for embedding generation with fine-tuning on domain data.",
    stack: ["Python", "PyTorch", "FAISS", "FastAPI", "React", "PostgreSQL", "Docker"],
    architecture: "Microservice architecture with separate indexing, embedding, and serving services. FAISS index sharded across multiple nodes for horizontal scaling. Redis caching layer for frequent queries.",
    outcomes: [
      "Achieved 92% recall@10 on internal benchmark",
      "Serves 1000+ queries/second with p99 latency under 200ms",
      "Reduced support ticket resolution time by 35%",
    ],
    featured: true,
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    tags: ["NLP", "Search", "PyTorch", "Production"],
  },
  {
    slug: "autonomous-code-reviewer",
    title: "Autonomous Code Reviewer",
    tagline: "LLM-powered code review agent with CI/CD integration",
    description: "An AI agent that automatically reviews pull requests, identifies bugs, suggests improvements, and enforces coding standards. Integrates directly into GitHub Actions workflows.",
    problem: "Code review bottlenecks slow down development velocity. Human reviewers miss subtle bugs and inconsistencies, especially in large PRs.",
    approach: "Fine-tuned a code-specialized LLM on internal code review data. Built a retrieval-augmented generation pipeline that pulls relevant coding standards and past review comments for context-aware suggestions.",
    stack: ["Python", "LangChain", "OpenAI API", "GitHub Actions", "TypeScript", "Node.js"],
    architecture: "Event-driven architecture triggered by GitHub webhooks. Diff parsing and chunking service feeds into RAG pipeline. Results posted as inline PR comments with confidence scores.",
    outcomes: [
      "Caught 60% of bugs that would have reached production",
      "Reduced average PR review time from 4 hours to 45 minutes",
      "Adopted by 12 engineering teams across the organization",
    ],
    featured: true,
    githubUrl: "https://github.com",
    tags: ["LLM", "DevTools", "Agents", "RAG"],
  },
  {
    slug: "predictive-maintenance-platform",
    title: "Predictive Maintenance Platform",
    tagline: "IoT sensor data analysis for industrial equipment failure prediction",
    description: "A real-time monitoring and prediction system that analyzes sensor data from industrial equipment to predict failures before they occur, enabling proactive maintenance scheduling.",
    problem: "Unplanned equipment downtime costs manufacturing facilities millions in lost production. Existing rule-based monitoring systems generate too many false alarms.",
    approach: "Developed an ensemble of time-series models (LSTM + Isolation Forest) trained on historical failure data. Implemented streaming data processing with Apache Kafka for real-time anomaly detection.",
    stack: ["Python", "TensorFlow", "Apache Kafka", "InfluxDB", "Grafana", "AWS"],
    architecture: "Streaming architecture with Kafka for data ingestion, InfluxDB for time-series storage, and a model serving layer with TensorFlow Serving. Grafana dashboards for visualization and alerting.",
    outcomes: [
      "Predicted 85% of equipment failures 48+ hours in advance",
      "Reduced unplanned downtime by 60%",
      "Saved an estimated $2.5M annually in maintenance costs",
    ],
    featured: true,
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    tags: ["Time Series", "IoT", "TensorFlow", "Streaming"],
  },
  {
    slug: "multi-modal-content-moderation",
    title: "Multi-Modal Content Moderation",
    tagline: "AI system for detecting harmful content across text, images, and video",
    description: "A comprehensive content moderation pipeline that analyzes text, images, and video frames to detect harmful, inappropriate, or policy-violating content at scale.",
    problem: "User-generated content platforms struggle to moderate content at scale. Single-modality systems miss context that spans across text and images.",
    approach: "Built a multi-modal fusion model combining CLIP embeddings with text classifiers. Implemented a hierarchical classification system with escalation paths for edge cases requiring human review.",
    stack: ["Python", "PyTorch", "CLIP", "FastAPI", "Celery", "Redis", "PostgreSQL"],
    architecture: "Async processing pipeline with Celery workers. Content is analyzed in parallel across modalities, then fused for final classification. Human-in-the-loop review queue for low-confidence predictions.",
    outcomes: [
      "Achieved 96% precision with 91% recall on harmful content detection",
      "Processes 500K+ content items per hour",
      "Reduced human review workload by 70%",
    ],
    featured: false,
    githubUrl: "https://github.com",
    tags: ["Computer Vision", "NLP", "Content Safety", "Multi-Modal"],
  },
];
