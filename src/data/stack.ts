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
 * SOURCE OF TRUTH — every item here must be one of:
 *   1. in the CORE COMPETENCIES or TECHNICAL SKILLS section of
 *      `resume/resume.tex` (unmarked items below), or
 *   2. actually used in one of the five projects in `projects.ts`, per that
 *      project's own documentation (marked with a comment naming the project), or
 *   3. explicitly confirmed by Aniket (CrewAI, fine-tuning).
 *
 * Deliberately excluded — Aniket does not use these: Pinecone, Bedrock,
 * AWS Lambda, Llama. Do not re-add them from the legacy site or by inference.
 */
export const STACK: StackGroup[] = [
  {
    label: 'Languages',
    icon: Braces,
    items: ['Python', 'TypeScript', 'SQL', 'C++'],
  },
  {
    label: 'Agentic AI',
    icon: Bot,
    items: [
      'Multi-agent orchestration',
      'ReAct tool calling',
      'Model routing', // TaskForce — ModelRouter with per-agent fallback
      'Human-in-the-loop', // Lumio — confidence-gated human handoff
      'MCP',
      'LangChain',
      'CrewAI',
    ],
  },
  {
    label: 'LLM Engineering',
    icon: Brain,
    items: [
      'Claude',
      'GPT',
      'Ollama',
      'Together AI',
      'Prompt engineering', // Lumio — AI prompt generator + YAML prompt templates
      'Structured outputs', // TaskForce — JSON output mode with extract + repair
      'Fine-tuning',
    ],
  },
  {
    label: 'RAG & Retrieval',
    icon: Layers,
    items: [
      'Embeddings', // Lumio, Sonari — local sentence-transformer embeddings
      'Sentence Transformers',
      'ChromaDB',
      'FAISS',
    ],
  },
  {
    label: 'ML & Data Science',
    icon: Boxes,
    items: [
      'PyTorch',
      'TensorFlow',
      'Transformers',
      'Scikit-learn',
      'NLP',
      'Pandas',
      'NumPy',
    ],
  },
  {
    label: 'Backend & Integrations',
    icon: Server,
    items: [
      'FastAPI',
      'SQLAlchemy',
      'PostgreSQL',
      'Supabase',
      'Redis',
      'Celery',
      'WebSockets',
      'SSE streaming', // Lumio — streaming chat over Server-Sent Events
      'Twilio',
      'WhatsApp API', // Lumio — WhatsApp Cloud API channel
      'Whisper',
      'ElevenLabs',
    ],
  },
  {
    label: 'Cloud & MLOps',
    icon: Cloud,
    items: [
      'Docker',
      'AWS (EC2, S3, SageMaker)',
      'GitHub Actions', // Lumio — CI (ruff, pytest, tsc, vite build)
      'CI/CD',
      'Git/GitHub',
      'Weights & Biases',
    ],
  },
  {
    label: 'Frontend',
    icon: MonitorSmartphone,
    items: [
      'React',
      'Tailwind CSS',
      'React Flow', // TaskForce — drag-and-drop agent graph editor
    ],
  },
];
