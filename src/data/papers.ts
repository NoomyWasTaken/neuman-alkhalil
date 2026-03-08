export interface Paper {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  date: string;
  abstract: string;
  pdfUrl?: string;
  arxivUrl?: string;
  tags: string[];
}

export const papers: Paper[] = [
  {
    id: "1",
    title: "Efficient Dense Retrieval with Learned Sparse Representations",
    authors: ["Your Name", "Jane Smith", "Bob Johnson"],
    venue: "ACL 2024",
    date: "2024",
    abstract: "We propose a hybrid retrieval method that combines learned sparse representations with dense embeddings for efficient and effective document retrieval. Our approach achieves state-of-the-art results on multiple benchmarks while maintaining sub-millisecond query latency through a novel index structure that leverages the sparsity of learned representations.",
    arxivUrl: "https://arxiv.org",
    pdfUrl: "https://example.com/paper.pdf",
    tags: ["Information Retrieval", "NLP", "Efficiency"],
  },
  {
    id: "2",
    title: "Scaling Multi-Modal Content Understanding with Contrastive Learning",
    authors: ["Your Name", "Alice Chen"],
    venue: "NeurIPS 2023",
    date: "2023",
    abstract: "We present a contrastive learning framework for multi-modal content understanding that scales to billions of image-text pairs. Our method introduces a novel hard negative mining strategy that significantly improves representation quality for downstream tasks including content moderation, search, and recommendation.",
    arxivUrl: "https://arxiv.org",
    tags: ["Multi-Modal", "Contrastive Learning", "Scale"],
  },
  {
    id: "3",
    title: "Practical Approaches to LLM-Based Code Review Automation",
    authors: ["Your Name", "David Park", "Sarah Lee"],
    venue: "ICSE 2023",
    date: "2023",
    abstract: "We study the application of large language models to automated code review in industrial settings. Through extensive experiments on proprietary codebases, we identify key challenges including hallucination, context window limitations, and developer trust. We propose practical mitigation strategies that led to successful deployment across multiple engineering teams.",
    arxivUrl: "https://arxiv.org",
    pdfUrl: "https://example.com/paper.pdf",
    tags: ["LLM", "Software Engineering", "Code Review"],
  },
];
