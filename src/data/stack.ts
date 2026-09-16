import {
  Bot,
  Boxes,
  Braces,
  Brain,
  Cloud,
  Database,
  Layers,
  MonitorSmartphone,
  type LucideIcon,
} from 'lucide-react';

export type StackGroup = {
  label: string;
  icon: LucideIcon;
  items: string[];
};

/**
 * Kept deliberately short. A skills list is skimmed, not read — every extra
 * pill dilutes the ones that actually carry signal, so this lists what the
 * work is built on and leaves out library-level detail and techniques that
 * are implied by the category they sit under.
 */
export const STACK: StackGroup[] = [
  {
    label: 'Languages',
    icon: Braces,
    items: ['Python', 'TypeScript', 'SQL'],
  },
  {
    label: 'Agentic AI',
    icon: Bot,
    items: [
      'Agentic workflows',
      'Multi-agent systems',
      'MCP',
      'Tool calling',
      'ReAct loops',
      'CrewAI',
      'Human-in-the-loop',
      'Model routing',
    ],
  },
  {
    label: 'LLMs',
    icon: Brain,
    items: [
      'Claude',
      'GPT',
      'Llama',
      'Ollama',
      'LangChain',
      'Structured outputs',
      'Fine-tuning',
    ],
  },
  {
    label: 'RAG & Retrieval',
    icon: Layers,
    items: [
      'ChromaDB',
      'FAISS',
      'Pinecone',
      'Sentence Transformers',
      'Embeddings',
      'Reranking',
    ],
  },
  {
    label: 'ML & Deep Learning',
    icon: Boxes,
    items: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'Hugging Face',
      'Transformers',
      'Pandas',
      'NumPy',
    ],
  },
  {
    label: 'Backend & Data',
    icon: Database,
    items: [
      'FastAPI',
      'Pydantic',
      'Celery',
      'Redis',
      'PostgreSQL',
      'WebSockets',
      'SSE streaming',
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
