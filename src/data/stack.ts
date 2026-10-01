import {
  Bot,
  Boxes,
  Braces,
  Brain,
  Cloud,
  Layers,
  MonitorSmartphone,
  Server,
  type LucideIcon,
} from 'lucide-react';

export type StackGroup = {
  label: string;
  icon: LucideIcon;
  items: string[];
};

/**
 * One rule for this list: each card is a single competency, and every pill in
 * it belongs to that competency — no grab-bags. Items are limited to what the
 * work has actually used (original portfolio, the five projects, and the
 * Experience section), and kept short because a skills list is skimmed.
 */
export const STACK: StackGroup[] = [
  {
    label: 'Languages',
    icon: Braces,
    items: ['Python', 'TypeScript', 'SQL'],
  },
  {
    // Patterns first, then the frameworks and protocol that implement them.
    label: 'Agentic AI',
    icon: Bot,
    items: [
      'Agentic workflows',
      'Multi-agent systems',
      'Tool calling',
      'ReAct loops',
      'Human-in-the-loop',
      'Model routing',
      'MCP',
      'CrewAI',
      'LangChain',
    ],
  },
  {
    // Working with language models: which ones, and how they are driven.
    label: 'LLM Engineering',
    icon: Brain,
    items: [
      'Claude',
      'GPT',
      'Llama',
      'Ollama',
      'Prompt engineering',
      'Structured outputs',
      'Fine-tuning',
    ],
  },
  {
    label: 'RAG & Retrieval',
    icon: Layers,
    items: [
      'Embeddings',
      'Sentence Transformers',
      'ChromaDB',
      'FAISS',
      'Pinecone',
      'Reranking',
    ],
  },
  {
    // Trained models and the data tooling around them. Whisper lives here as a
    // pretrained speech model, alongside the Hugging Face ecosystem it ships in.
    label: 'ML & Data Science',
    icon: Boxes,
    items: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'Hugging Face',
      'Whisper',
      'Pandas',
      'NumPy',
      'Time-series forecasting',
    ],
  },
  {
    // Server-side building blocks, plus the third-party APIs they connect to.
    label: 'Backend & Integrations',
    icon: Server,
    items: [
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'Celery',
      'WebSockets & SSE',
      'Twilio',
      'WhatsApp API',
      'ElevenLabs',
    ],
  },
  {
    label: 'Cloud & MLOps',
    icon: Cloud,
    items: [
      'AWS SageMaker',
      'Bedrock',
      'Lambda',
      'Docker',
      'GitHub Actions',
      'Weights & Biases',
      'Observability',
    ],
  },
  {
    label: 'Frontend',
    icon: MonitorSmartphone,
    items: ['React', 'Tailwind CSS', 'React Flow'],
  },
];
