export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  approach: string;
  stack: string[];
  architecture?: string;
  outcomes: string[];
  featured: boolean;
  period?: string;
  affiliation?: string;
  contributors?: string[];
  githubUrl?: string;
  demoUrl?: string;
  paperUrl?: string;
  imageUrl?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "lpx-gg",
    title: "LPX.GG — League of Legends Analytics Platform",
    tagline: "Live full-stack analytics for player profiles, matches, builds, and performance data",
    description:
      "A live analytics platform for League of Legends players, covering profiles, match history, builds, and performance data, built on the Riot Games API with caching and PUUID-based player identity.",
    problem:
      "Player performance data is spread across raw API endpoints that are rate-limited and hard to query directly, making fast, search-friendly player pages difficult to serve at scale.",
    approach:
      "Integrated the Riot Games API with a caching layer and PUUID-based identity so player data stays consistent across name changes, then designed a scalable, SEO-focused architecture around server-rendered pages.",
    stack: [
      "Astro",
      "React",
      "TypeScript",
      "Cloudflare Workers",
      "Hono",
      "PostgreSQL",
      "Drizzle ORM",
      "Riot Games API",
    ],
    architecture:
      "Server-rendered pages on Cloudflare Workers with Hono handling API routes, PostgreSQL and Drizzle ORM for data persistence, and a caching layer in front of the Riot Games API.",
    outcomes: [
      "Built and launched publicly with live match, build, and performance data",
      "SEO-focused server-rendered architecture designed for scale",
    ],
    featured: true,
    period: "Jul 2026 – Present",
    tags: ["Full-Stack", "TypeScript", "Edge", "SEO"],
  },
  {
    slug: "real-time-speech-emotion-recognition",
    title: "Real-Time Speech Emotion Recognition",
    tagline: "Live speech pipeline combining transcription, vocal emotion, and text sentiment",
    description:
      "A real-time speech analysis pipeline that transcribes audio, recognizes vocal emotion, and analyzes text sentiment in parallel, with asynchronous audio processing throughout.",
    problem:
      "Emotion in speech is carried both by what is said and how it is said, and doing both in real time requires low-latency audio handling rather than batch processing.",
    approach:
      "Combined Whisper transcription with WavLM-based vocal emotion recognition and text sentiment analysis, using WebRTC, Silero VAD, and RxPY for asynchronous streaming audio, then evaluated across datasets.",
    stack: ["Python", "PyTorch", "Whisper", "WavLM", "WebRTC", "Silero VAD", "RxPY"],
    architecture:
      "Streaming audio captured through WebRTC, segmented by Silero voice activity detection, and pushed through reactive RxPY pipelines that fan out to transcription, vocal emotion, and sentiment models.",
    outcomes: [
      "Cross-dataset evaluation on RAVDESS and IEMOCAP",
      "End-to-end real-time operation on streaming audio",
    ],
    featured: true,
    period: "Jan 2024 – May 2024",
    affiliation: "Georgetown University",
    tags: ["Speech AI", "NLP", "PyTorch", "Real-Time"],
  },
  {
    slug: "gan-based-image-restoration",
    title: "GAN-Based Image Restoration",
    tagline: "Reconstructing degraded images across multiple noise types, plus colorization",
    description:
      "A GAN-based image restoration system with modified generator and discriminator architectures that reconstructs degraded images across several noise types and also supports image colorization.",
    problem:
      "Restoration models often target a single degradation type, so quality drops sharply when the noise seen at inference differs from training.",
    approach:
      "Modified the generator and discriminator architectures around a U-Net backbone, trained across multiple noise types, and extended the same pipeline to image colorization before evaluating performance per degradation condition.",
    stack: ["Python", "PyTorch", "GANs", "U-Net", "CNN"],
    architecture:
      "U-Net style generator with a convolutional discriminator, trained adversarially across degradation types with a shared pipeline reused for colorization.",
    outcomes: [
      "Restoration evaluated across multiple degradation conditions",
      "Pipeline extended to support image colorization",
    ],
    featured: true,
    period: "Jan 2024 – May 2024",
    affiliation: "Georgetown University",
    contributors: ["Yixuan", "Chriss Jordan"],
    tags: ["Computer Vision", "GANs", "PyTorch", "Deep Learning"],
  },
  {
    slug: "search-engine-information-retrieval",
    title: "Search Engine — Information Retrieval",
    tagline: "Document retrieval and ranking with relevance feedback",
    description:
      "An information retrieval system that preprocesses and tokenizes text to efficiently retrieve and rank relevant documents for a query.",
    problem:
      "Naive keyword matching returns noisy result sets, and short queries rarely contain enough signal to rank the right documents first.",
    approach:
      "Built a text preprocessing and tokenization pipeline for indexing and ranking, then improved retrieval quality with pseudo-relevance feedback and query reduction to refine results and cut irrelevant matches.",
    stack: ["Python", "Information Retrieval", "NLP"],
    outcomes: [
      "Improved ranking quality through pseudo-relevance feedback",
      "Reduced irrelevant results using query reduction",
    ],
    featured: false,
    period: "Aug 2023 – Dec 2023",
    affiliation: "Georgetown University",
    tags: ["Information Retrieval", "NLP", "Search"],
  },
  {
    slug: "multilingual-grammatical-error-detection",
    title: "Multilingual Grammatical Error Detection",
    tagline: "Comparing monolingual and multilingual GED models across five languages",
    description:
      "An empirical NLP research project evaluating monolingual and multilingual grammatical error detection models across five languages.",
    problem:
      "It is not obvious whether a single multilingual model detects grammatical errors as well as dedicated per-language models, especially for lower-resource languages.",
    approach:
      "Trained and evaluated both monolingual and multilingual grammatical error detection models on five languages and analyzed cross-lingual transfer in the results.",
    stack: ["Python", "PyTorch", "Transformers", "NLP"],
    outcomes: [
      "Cross-lingual performance analysis across five languages",
      "Comparison of monolingual versus multilingual model behaviour",
    ],
    featured: false,
    period: "Jan 2023 – May 2023",
    affiliation: "Georgetown University",
    tags: ["NLP", "Research", "Multilingual", "LLM"],
  },
  {
    slug: "yelp-review-analysis",
    title: "Yelp Review Analysis — Sentiment Analysis",
    tagline: "Patterns in customer feedback using SVM and VADER",
    description:
      "An analysis of Yelp review data using SVM and VADER sentiment analysis to identify patterns in customer feedback and business performance.",
    problem:
      "Large volumes of free-text reviews hide patterns that raw star ratings do not surface.",
    approach:
      "Built a preprocessing and visualization pipeline with Pandas and Matplotlib for cleaning, tokenization, analysis, and interpretation, then compared a trained SVM classifier against rule-based VADER sentiment scoring.",
    stack: ["Python", "scikit-learn", "VADER", "Pandas", "Matplotlib"],
    outcomes: [
      "Identified sentiment patterns linked to business performance",
      "Compared supervised and lexicon-based sentiment approaches",
    ],
    featured: false,
    period: "Jan 2023 – May 2023",
    affiliation: "Georgetown University",
    tags: ["NLP", "Sentiment Analysis", "Data Science"],
  },
  {
    slug: "english-language-learning-chatbot",
    title: "English Language Learning Chatbot",
    tagline: "Adaptive conversational AI that matches learner proficiency",
    description:
      "An adaptive conversational AI system for English-language learners built on fine-tuned DialoGPT models targeted at different proficiency levels.",
    problem:
      "A single conversational model either overwhelms beginners or bores advanced learners, so the same system cannot serve both well.",
    approach:
      "Fine-tuned separate DialoGPT models per proficiency level and implemented automatic proficiency-based model switching, then evaluated conversational performance across beginner and advanced settings.",
    stack: ["Python", "PyTorch", "DialoGPT", "NLP"],
    outcomes: [
      "Automatic proficiency-based model switching during conversation",
      "Evaluated across beginner and advanced settings",
    ],
    featured: false,
    period: "Aug 2022 – Dec 2022",
    affiliation: "Georgetown University",
    tags: ["Conversational AI", "NLP", "PyTorch"],
  },
  {
    slug: "idi-ba-carpooling",
    title: "Idi.ba — Carpooling Web Application",
    tagline: "Carpooling platform built during COVID-19",
    description:
      "A carpooling web application built as a collaborative university project during COVID-19, with map-based ride matching and secure authentication.",
    problem:
      "Reduced public transport availability during the pandemic left people without reliable ways to coordinate shared local travel.",
    approach:
      "Built a responsive Angular frontend with Mapbox GL for routes and locations, backed by a Spring Boot API with Spring Security handling authentication.",
    stack: ["Angular", "TypeScript", "Spring Boot", "Java", "Spring Security", "Mapbox GL"],
    outcomes: [
      "Delivered a working responsive carpooling application",
      "Implemented secure authentication and map-based ride matching",
    ],
    featured: false,
    period: "Mar 2021 – Jul 2021",
    affiliation: "University of Buckingham",
    contributors: ["Denim", "Muhamed", "+1"],
    tags: ["Full-Stack", "Angular", "Spring Boot"],
  },
];
