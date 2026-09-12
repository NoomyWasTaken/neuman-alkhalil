export interface ResearchItem {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  date: string;
  abstract: string;
  projectSlug?: string;
  pdfUrl?: string;
  paperUrl?: string;
  tags: string[];
}

export const research: ResearchItem[] = [
  {
    id: "speech-emotion",
    title: "Real-Time Speech Emotion Recognition",
    authors: ["Neuman Alkhalil"],
    venue: "Georgetown University",
    date: "2024",
    abstract:
      "A real-time speech analysis pipeline combining Whisper transcription, WavLM-based vocal emotion recognition, and text sentiment analysis, with asynchronous audio processing built on WebRTC, Silero VAD, and RxPY. Evaluated across the RAVDESS and IEMOCAP datasets.",
    projectSlug: "real-time-speech-emotion-recognition",
    tags: ["Speech AI", "NLP", "Deep Learning"],
  },
  {
    id: "gan-restoration",
    title: "GAN-Based Image Restoration and Colorization",
    authors: ["Neuman Alkhalil", "Yixuan", "Chriss Jordan"],
    venue: "Georgetown University",
    date: "2024",
    abstract:
      "A GAN-based image restoration system with modified generator and discriminator architectures that reconstructs degraded images across multiple noise types, extended to support image colorization, with restoration performance evaluated per degradation condition.",
    projectSlug: "gan-based-image-restoration",
    tags: ["Computer Vision", "GANs", "Deep Learning"],
  },
  {
    id: "multilingual-ged",
    title: "Multilingual Grammatical Error Detection",
    authors: ["Neuman Alkhalil"],
    venue: "Georgetown University",
    date: "2023",
    abstract:
      "An empirical study evaluating monolingual and multilingual grammatical error detection models across five languages, analyzing how cross-lingual training affects detection performance per language.",
    projectSlug: "multilingual-grammatical-error-detection",
    tags: ["NLP", "Multilingual", "Research"],
  },
  {
    id: "ir-search",
    title: "Document Retrieval with Pseudo-Relevance Feedback",
    authors: ["Neuman Alkhalil"],
    venue: "Georgetown University",
    date: "2023",
    abstract:
      "An information retrieval system using text preprocessing and tokenization to retrieve and rank relevant documents, improved with pseudo-relevance feedback and query reduction to refine results and reduce irrelevant matches.",
    projectSlug: "search-engine-information-retrieval",
    tags: ["Information Retrieval", "NLP"],
  },
];
